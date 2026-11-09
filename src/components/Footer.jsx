import { ChevronUp, Heart } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { SocialLinks } from './SocialLinks'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const year = CURRENT_YEAR

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-identity">
            <a className="brand footer-brand" href="#home" aria-label="Nazeer Ahmed — home">
              <span className="brand-mark" aria-hidden="true">
                NA
              </span>
              <span className="brand-copy">
                <strong>Nazeer Ahmed</strong>
                <span>Computer Science Student</span>
              </span>
            </a>
            <p>
              Learning in public, building with care, and staying curious about the future of
              software.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <span className="footer-heading">Navigate</span>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-connect">
            <span className="footer-heading">Connect</span>
            <SocialLinks showLabels />
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Nazeer Ahmed. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed &amp; Built by Nazeer Ahmed
            <Heart size={13} aria-hidden="true" />
          </p>
          <a className="back-to-top" href="#home" aria-label="Back to top" title="Back to top">
            <ChevronUp size={18} aria-hidden="true" />
          </a>
        </div>

        <p className="footer-tech">Built with React, Vite, and Lucide React.</p>
      </div>
    </footer>
  )
}
