import { resolve } from 'node:path'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { mdToPdf } from 'md-to-pdf'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')
const rootDir = resolve(__dirname, '..')

const outputDir = resolve(rootDir, 'public', 'resume')
const stylesheet = resolve(rootDir, 'scripts', 'resume-pdf.css')

const resumes = [
  {
    source: resolve(rootDir, 'content', 'resume', 'resume-2page.md'),
    output: resolve(outputDir, 'Gregory-Dalbey-Resume.pdf'),
  },
  {
    source: resolve(rootDir, 'content', 'resume', 'resume-full.md'),
    output: resolve(outputDir, 'Gregory-Dalbey-Full-Resume.pdf'),
  },
]

await mkdir(outputDir, { recursive: true })

for (const resume of resumes) {
  const result = await mdToPdf(
    { path: resume.source },
    {
      dest: resume.output,
      stylesheet,
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
    throw new Error(`Failed to generate resume PDF from ${resume.source}.`)
  }

  console.log(`Generated PDF at ${result.filename}`)
}
