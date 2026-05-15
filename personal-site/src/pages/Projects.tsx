// import { featuredProjects } from '../content/projects'

export function ProjectsPage() {
  return (
    <section className="page">
      <h2>Featured Projects</h2>
      <p className="lead">
        Coming soon. I am collecting a few representative projects that show how
        I approach practical software design, modernization, and creative
        problem solving.
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
