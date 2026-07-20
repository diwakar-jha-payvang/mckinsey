import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { getLegalPageBySlug } from '../data/legalPages'

export function LegalPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const page = getLegalPageBySlug(slug)

  if (!page) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1>Page not found</h1>
        <Link to="/" className="btn btn--primary" style={{ marginTop: 24 }}>
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container container--narrow">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: page.title }]} />
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </div>

      <div className="container container--narrow article-body">
        {page.sections.map((section) => (
          <section key={section.title} className="legal-page__section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </>
  )
}
