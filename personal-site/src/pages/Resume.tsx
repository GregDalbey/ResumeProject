import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import resumeMarkdown from '../../content/resume/resume-2page.md?raw'

export function ResumePage() {
  return (
    <section className="page">
      <div className="resume-header">
        <h2>Resume</h2>
        <a
          href="/api/resume.pdf"
          className="button button-primary"
          download
        >
          Generate and Download PDF
        </a>
      </div>

      <article className="card resume-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {resumeMarkdown}
        </ReactMarkdown>
      </article>
    </section>
  )
}
