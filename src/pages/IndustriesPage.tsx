import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { industries } from '../data/industries'

export function IndustriesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Industries' }]} />
          <h1>Industries</h1>
          <p>
            We bring deep functional and industry expertise to help organizations solve their most complex challenges and capture new opportunities.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="tile-grid">
            {industries.map((industry) => (
              <Link key={industry.slug} to={`/industries/${industry.slug}`} className="tile-card">
                <div className="tile-card__image">
                  <img src={industry.image} alt="" loading="lazy" />
                </div>
                <div className="tile-card__overlay">
                  <h3 className="tile-card__title">{industry.name}</h3>
                  <p className="tile-card__tagline">{industry.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
