import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
]

export function Nav() {
  return (
    <nav aria-label="Main navigation" className="main-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
          end={link.to === '/'}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
