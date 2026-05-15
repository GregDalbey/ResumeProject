import { Navigate, Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { ProjectsPage } from './pages/Projects'
import { ResumePage } from './pages/Resume'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container">
          <h1 className="site-title">Gregory Dalbey</h1>
          <p className="site-tagline">
            Senior Software Engineer focused on modernization, architecture, and
            pragmatic delivery.
          </p>
          <div className="header-actions">
            <a href="mailto:gregory.dalbey@proton.me" className="header-link">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/greg-dalbey-4b59702/"
              target="_blank"
              rel="noreferrer"
              className="header-link"
            >
              LinkedIn
            </a>
          </div>
          <Nav />
        </div>
      </header>

      <main className="container site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/FullResume" element={<ResumePage variant="full" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            Built with React + Vite. Designed for hiring managers who want quick
            clarity.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
