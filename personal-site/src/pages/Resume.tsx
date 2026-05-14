import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import publicResumeMarkdown from '../../content/resume/resume-2page.md?raw'

type ResumePageProps = {
  variant?: 'public' | 'full'
}

export function ResumePage({ variant = 'public' }: ResumePageProps) {
  const isFullResume = variant === 'full'
  const [fullResumeMarkdown, setFullResumeMarkdown] = useState('')
  const [fullResumeError, setFullResumeError] = useState('')
  const resumeMarkdown = isFullResume ? fullResumeMarkdown : publicResumeMarkdown
  const pdfHref = isFullResume ? '/api/full-resume.pdf' : '/api/resume.pdf'

  useEffect(() => {
    if (!isFullResume) {
      return
    }

    const robotsMeta = document.createElement('meta')
    robotsMeta.name = 'robots'
    robotsMeta.content = 'noindex,nofollow'
    document.head.appendChild(robotsMeta)

    return () => {
      robotsMeta.remove()
    }
  }, [isFullResume])

  useEffect(() => {
    if (!isFullResume) {
      return
    }

    let isMounted = true

    fetch('/api/full-resume.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load the full resume.')
        }

        return response.text()
      })
      .then((markdown) => {
        if (isMounted) {
          setFullResumeMarkdown(markdown)
        }
      })
      .catch(() => {
        if (isMounted) {
          setFullResumeError('Unable to load the full resume.')
        }
      })

    return () => {
      isMounted = false
    }
  }, [isFullResume])

  return (
    <section className="page">
      <div className="resume-header">
        <h2>{isFullResume ? 'Full Resume' : 'Resume'}</h2>
        <a
          href={pdfHref}
          className="button button-primary"
          download
        >
          Download PDF
        </a>
      </div>

      <article className="card resume-content">
        {fullResumeError ? (
          <p>{fullResumeError}</p>
        ) : isFullResume && !resumeMarkdown ? (
          <p>Loading full resume...</p>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {resumeMarkdown}
          </ReactMarkdown>
        )}
      </article>
    </section>
  )
}
