import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { capabilities } from '../data/capabilities'

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
          <div className="card-grid card-grid--2">
            {capabilities.map((cap) => (
              <Link key={cap.slug} to={`/capabilities/${cap.slug}`} className="article-card">
                <div className="article-card__image">
                  <img src={cap.image} alt="" loading="lazy" />
                </div>
                <h3 className="article-card__title">{cap.name}</h3>
                <p className="article-card__excerpt">{cap.tagline}</p>
                <p className="article-card__excerpt">{cap.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
