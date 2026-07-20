import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { ArticleCard } from '../components/ArticleCard'
import { getCapabilityBySlug } from '../data/capabilities'
import { getRelatedInsights } from '../data/insights'
import { mainNav } from '../data/navigation'

const capabilitiesNav = mainNav.find((n) => n.label === 'Capabilities')
const navCapabilities = capabilitiesNav?.groups?.flatMap((g) => g.items) ?? []

function getCapabilityFromNav(slug: string) {
  const item = navCapabilities.find((i) => i.path === `/capabilities/${slug}`)
  if (!item) return undefined
  return {
    slug,
    name: item.label,
    tagline: item.description ?? '',
    description: `Our ${item.label} practice helps organizations tackle their most pressing challenges and capture new opportunities. We combine deep expertise with proven methodologies to deliver lasting impact.`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    services: [
      { title: 'Advisory', description: 'Strategic guidance tailored to your context' },
      { title: 'Implementation', description: 'Hands-on support to deliver results' },
      { title: 'Capability Building', description: 'Embed new skills and ways of working' },
    ],
    relatedInsights: [
      'ai-enterprise-transformation',
      'sustainable-growth-strategy',
      'future-of-work-2026',
    ],
  }
}

export function CapabilityDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const capability = getCapabilityBySlug(slug ?? '') ?? getCapabilityFromNav(slug ?? '')

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

  const relatedArticles = getRelatedInsights('', 3, capability.relatedInsights)

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
                <ArticleCard key={article.id} article={article} />
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
