export type Project = {
  name: string
  summary: string
  challenge: string
  approach: string
  aiWorkflow: string
  githubUrl: string
}

export const featuredProjects: Project[] = [
  {
    name: 'AI Agentic Project One',
    summary:
      'A practical software project demonstrating requirement analysis, architecture, and iterative delivery with AI agents.',
    challenge:
      'Translate open-ended requirements into clear implementation milestones while maintaining code quality.',
    approach:
      'Used a layered architecture, explicit acceptance criteria, and regular refactoring checkpoints.',
    aiWorkflow:
      'Applied AI assistants for brainstorming, scaffolding, and focused code generation with human review gates.',
    githubUrl: 'https://github.com/your-username/project-one',
  },
  {
    name: 'AI Agentic Project Two',
    summary:
      'A production-style application emphasizing robust design decisions and modern engineering workflows.',
    challenge:
      'Balance delivery speed with maintainability and reliable feature behavior.',
    approach:
      'Defined domain boundaries, documented design intent, and validated behavior through targeted testing.',
    aiWorkflow:
      'Used agentic tooling to accelerate implementation while preserving architecture and code readability.',
    githubUrl: 'https://github.com/your-username/project-two',
  },
]
