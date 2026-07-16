import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { mainNav, type NavItem } from '../data/navigation'
import { useMenu } from '../context/MenuContext'

export function MenuOverlay() {
  const { isOpen, closeMenu } = useMenu()
  const [activeItem, setActiveItem] = useState<NavItem | null>(null)

  useEffect(() => {
    if (isOpen) {
      setActiveItem((current) => current ?? mainNav.find((item) => item.hasSubmenu) ?? null)
    } else {
      setActiveItem(null)
    }
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="menu-overlay__sidebar">
        <div className="menu-overlay__header">
          <button
            type="button"
            className="menu-overlay__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <Link to="/" className="menu-overlay__logo" onClick={closeMenu}>
            McKinsey & Company
          </Link>
          <div className="menu-overlay__header-spacer" />
        </div>

        <nav className="menu-overlay__nav">
          {mainNav.map((item) =>
            item.hasSubmenu ? (
              <button
                key={item.label}
                type="button"
                className={`menu-overlay__item${activeItem?.label === item.label ? ' menu-overlay__item--active' : ''}`}
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => setActiveItem(item)}
              >
                <span>{item.label}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className="menu-overlay__item"
                onClick={closeMenu}
              >
                <span>{item.label}</span>
              </Link>
            ),
          )}
        </nav>

        <div className="menu-overlay__footer">
          <button type="button" className="menu-overlay__signin">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            Sign In
          </button>
        </div>
      </div>

      <div className={`menu-overlay__panel${activeItem ? ' menu-overlay__panel--open' : ''}`}>
        {activeItem && (
          <>
            <div className="menu-overlay__panel-header">
              <button
                type="button"
                className="menu-overlay__panel-back"
                onClick={() => setActiveItem(null)}
                aria-label="Back to menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <Link to={activeItem.path} className="menu-overlay__panel-title" onClick={closeMenu}>
                {activeItem.label}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <button
                type="button"
                className="menu-overlay__panel-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="menu-overlay__panel-body">
              {activeItem.groups && activeItem.groups.length > 1 ? (
                <div className="menu-overlay__panel-columns">
                  {activeItem.groups.map((group) => (
                    <div key={group.title ?? 'default'} className="menu-overlay__panel-column">
                      {group.title && <h3 className="menu-overlay__panel-group-title">{group.title}</h3>}
                      {group.items.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="menu-overlay__panel-link"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {activeItem.groups?.[0]?.title && (
                    <h3 className="menu-overlay__panel-group-title">{activeItem.groups[0].title}</h3>
                  )}
                  <div className="menu-overlay__panel-flow">
                    {activeItem.groups?.[0]?.items.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="menu-overlay__panel-link"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
