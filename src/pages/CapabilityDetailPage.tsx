import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { ArticleCard } from '../components/ArticleCard'
import { getCapabilityBySlug } from '../data/capabilities'
import { getInsightBySlug } from '../data/insights'

export function CapabilityDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const capability = getCapabilityBySlug(slug ?? '')

  if (!capability) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1>Capability not found</h1>
        <Link to="/capabilities" className="btn btn--primary" style={{ marginTop: 24 }}>
          Back to Capabilities
        </Link>
      </div>
    )
  }

  const relatedArticles = capability.relatedInsights
    .map((s) => getInsightBySlug(s))
    .filter(Boolean)

  return (
    <>
      <div className="detail-hero">
        <img src={capability.image} alt="" />
        <div className="detail-hero__overlay">
          <div className="container">
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Capabilities', path: '/capabilities' },
                { label: capability.name },
              ]}
            />
            <h1>{capability.name}</h1>
            <p>{capability.tagline}</p>
          </div>
        </div>
      </div>

      <section className="detail-content">
        <div className="container detail-content__grid">
          <div className="detail-content__main">
            <p>{capability.description}</p>
            <h2 style={{ marginTop: 48, marginBottom: 24 }}>What we do</h2>
            {capability.services.map((service) => (
              <div key={service.title} style={{ marginBottom: 32 }}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <aside className="detail-sidebar">
            <h4>Services</h4>
            <ul>
              {capability.services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="section section--gray">
          <div className="container">
            <div className="section__header">
              <h2>Related insights</h2>
            </div>
            <div className="card-grid">
              {relatedArticles.map((article) => (
                <ArticleCard key={article!.id} article={article!} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-banner">
        <div className="container">
          <h2>Let's discuss your priorities</h2>
          <p>Our experts are ready to help you tackle your most important challenges.</p>
          <Link to="/contact" className="btn btn--white">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
