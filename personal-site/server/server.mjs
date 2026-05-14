import express from 'express'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { mdToPdf } from 'md-to-pdf'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const appRoot = join(__dirname, '..')
const distDir = join(appRoot, 'dist')
const publicResumeMarkdownPath = join(appRoot, 'content', 'resume', 'resume-2page.md')
const fullResumeMarkdownPath = join(appRoot, 'content', 'resume', 'resume-full.md')
const resumeStylesheetPath = join(appRoot, 'scripts', 'resume-pdf.css')
const port = Number(process.env.PORT ?? 8080)

const app = express()

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

async function downloadResumePdf(res, sourcePath) {
  const tempDir = await mkdtemp(join(tmpdir(), 'resume-pdf-'))
  const tempPdfPath = join(tempDir, 'Gregory-Dalbey-Resume.pdf')

  try {
    const launchOptions = {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      ...(process.env.PUPPETEER_EXECUTABLE_PATH
        ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
        : {}),
    }

    const result = await mdToPdf(
      { path: sourcePath },
      {
        dest: tempPdfPath,
        stylesheet: resumeStylesheetPath,
        launch_options: launchOptions,
        pdf_options: {
          format: 'Letter',
          margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in',
          },
          printBackground: true,
        },
      },
    )

    if (!result?.filename) {
      throw new Error('PDF generation did not return an output file.')
    }

    res.download(
      tempPdfPath,
      'Gregory-Dalbey-Resume.pdf',
      async (downloadError) => {
        await rm(tempDir, { recursive: true, force: true })
        if (downloadError && !res.headersSent) {
          res.status(500).json({ error: 'Failed to stream generated PDF.' })
        }
      },
    )
  } catch (error) {
    await rm(tempDir, { recursive: true, force: true })
    console.error(error)
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to generate resume PDF.' })
    }
  }
}

app.get('/api/resume.pdf', async (_req, res) => {
  await downloadResumePdf(res, publicResumeMarkdownPath)
})

app.get('/api/full-resume.pdf', async (_req, res) => {
  res.set('X-Robots-Tag', 'noindex, nofollow')
  await downloadResumePdf(res, fullResumeMarkdownPath)
})

app.get('/api/full-resume.md', async (_req, res) => {
  const markdown = await readFile(fullResumeMarkdownPath, 'utf8')

  res
    .set('X-Robots-Tag', 'noindex, nofollow')
    .type('text/markdown')
    .send(markdown)
})

app.use(express.static(distDir))

app.get('*', (_req, res) => {
  res.sendFile(join(distDir, 'index.html'))
})

app.listen(port, () => {
  console.log(`Personal site running on http://localhost:${port}`)
})
