import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { mainNav } from '../data/navigation'
import { capabilities } from '../data/capabilities'

const capabilitiesNav = mainNav.find((n) => n.label === 'Capabilities')
const navCapabilities = capabilitiesNav?.groups?.flatMap((g) => g.items) ?? []

export function CapabilitiesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Capabilities' }]} />
          <h1>How we help clients</h1>
          <p>
            We bring together the right capabilities to help organizations solve their toughest problems and build sustainable advantage.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="industries-list">
            {navCapabilities.map((cap) => (
              <Link key={cap.label} to={cap.path} className="industries-list__item">
                <h3>{cap.label}</h3>
                {cap.description && <p>{cap.description}</p>}
                <span className="industries-list__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2>Featured capabilities</h2>
          </div>
          <div className="card-grid card-grid--2">
            {capabilities.map((cap) => (
              <Link key={cap.slug} to={`/capabilities/${cap.slug}`} className="article-card">
                <div className="article-card__image">
                  <img src={cap.image} alt="" loading="lazy" />
                </div>
                <div className="article-card__body">
                  <h3 className="article-card__title">{cap.name}</h3>
                  <p className="article-card__excerpt">{cap.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
