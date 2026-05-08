import { resolve } from 'node:path'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { mdToPdf } from 'md-to-pdf'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')
const rootDir = resolve(__dirname, '..')

const source = resolve(rootDir, 'content', 'resume', 'resume-2page.md')
const outputDir = resolve(rootDir, 'public', 'resume')
const output = resolve(outputDir, 'Gregory-Dalbey-Resume.pdf')
const stylesheet = resolve(rootDir, 'scripts', 'resume-pdf.css')

await mkdir(outputDir, { recursive: true })

const result = await mdToPdf(
  { path: source },
  {
    dest: output,
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
  throw new Error('Failed to generate resume PDF.')
}

console.log(`Generated PDF at ${result.filename}`)
