import { socials as defaultSocials } from '../data/portfolio'

export function SocialLinks({ items = defaultSocials, showLabels = false, className = '' }) {
  return (
    <ul className={`social-links${className ? ` ${className}` : ''}`} aria-label="Social links">
      {items.map((social) => {
        const Icon = social.icon

        return (
          <li key={social.label}>
            <a
              className="social-link"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <Icon size={18} aria-hidden="true" />
              {showLabels ? <span>{social.label}</span> : null}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
