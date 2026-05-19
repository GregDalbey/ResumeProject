// import { featuredProjects } from '../content/projects'

export function ProjectsPage() {
  return (
    <section className="page">
      <h2>Featured Projects</h2>
      <p className="lead">
        Coming soon. 
        
        <br />
        <br />
        I am currently focusing my personal projects on AI-agentic workflows, design and implementation using Cursor.  The process 
        is fascinating and educational.  There is a particular finnese to getting accurate results from the AI assisted process, 
        requiring a mix of technical and creative thinking, human intuition and review - human-in-the-loop methodology.

        <br />
        <br />

        Currently, I am working on a small commrece website, and an old-school text-based adventure game.
        <br />
        <br />
        Projects can be made available upon request.
      </p>

      {/*
      <p className="lead">
        Selected GitHub projects highlighting AI-agentic workflows, design
        thinking, and practical implementation.
      </p>

      <div className="project-list">
        {featuredProjects.map((project) => (
          <article key={project.name} className="card project-card">
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul>
              <li>
                <strong>Business challenge:</strong> {project.challenge}
              </li>
              <li>
                <strong>Approach:</strong> {project.approach}
              </li>
              <li>
                <strong>AI workflow:</strong> {project.aiWorkflow}
              </li>
            </ul>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
      */}
    </section>
  )
}
