import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainNav } from '../data/navigation'

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleMouseEnter = (label: string) => {
    setOpenMenu(label)
  }

  const handleMouseLeave = () => {
    setOpenMenu(null)
  }

  return (
    <header className="header" onMouseLeave={handleMouseLeave}>
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={() => setMobileOpen(false)}>
          <div className="header__logo-mark">
            <span>M</span>
          </div>
          McKinsey
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className={`header__nav-item${openMenu === item.label ? ' header__nav-item--open' : ''}`}
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
            >
              <Link to={item.path} className="header__nav-link">
                {item.label}
              </Link>
              {item.children && openMenu === item.label && (
                <div className="mega-menu">
                  <div className="mega-menu__inner">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="mega-menu__link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="mega-menu__link-title">{child.label}</div>
                        {child.description && (
                          <div className="mega-menu__link-desc">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__search" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button type="button" className="header__signin">
            Sign In
          </button>
          <button
            type="button"
            className="header__menu-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${mobileOpen ? ' mobile-nav--open' : ''}`} aria-label="Mobile navigation">
        {mainNav.map((item) => (
          <div key={item.label} className="mobile-nav__item">
            <Link
              to={item.path}
              className="mobile-nav__link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="mobile-nav__children">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.path}
                    className="mobile-nav__child-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to="/contact" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
          Contact Us
        </Link>
      </nav>
    </header>
  )
}
