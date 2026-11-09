import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const label = `Switch to ${isDark ? 'light' : 'dark'} theme`

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <Sun className="theme-toggle-icon theme-toggle-sun" size={13} />
        <Moon className="theme-toggle-icon theme-toggle-moon" size={13} />
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  )
}
