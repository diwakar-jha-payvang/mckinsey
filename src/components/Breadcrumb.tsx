import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  variant?: 'default' | 'light'
}

export function Breadcrumb({ items, variant = 'default' }: BreadcrumbProps) {
  return (
    <nav className={`breadcrumb${variant === 'light' ? ' breadcrumb--light' : ''}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <span className="breadcrumb__sep"> / </span>}
          {item.path ? (
            <Link to={item.path}>{item.label}</Link>
          ) : (
            <span className="breadcrumb__current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
