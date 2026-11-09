import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, socials } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { SocialLinks } from './SocialLinks'
import { ThemeToggle } from './ThemeToggle'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact']

export function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('nav-open')

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('nav-open')
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Nazeer Ahmed — home">
          <span className="brand-mark" aria-hidden="true">
            NA
          </span>
          <span className="brand-copy">
            <strong>Nazeer Ahmed</strong>
            <span>Computer Science Student</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1)
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.href}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            className="btn btn-primary btn-small desktop-resume"
            href="/resume.html"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="icon-button menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu${isMenuOpen ? ' is-open' : ''}`}
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1)
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.href}
                className={`mobile-nav-link${isActive ? ' is-active' : ''}`}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            )
          })}
          <a
            className="btn btn-primary mobile-resume"
            href="/resume.html"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </nav>
        <div className="mobile-menu-footer">
          <span>Find me online</span>
          <SocialLinks items={socials.slice(0, 2)} />
        </div>
      </div>
    </header>
  )
}
