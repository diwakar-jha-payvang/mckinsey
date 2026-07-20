import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { getIndustryBySlug } from '../data/industries'
import { mainNav } from '../data/navigation'
import { capabilities } from '../data/capabilities'

const industriesNav = mainNav.find((n) => n.label === 'Industries')
const allIndustries = industriesNav?.groups?.flatMap((g) => g.items) ?? []

function getIndustryFromNav(slug: string) {
  const item = allIndustries.find((i) => i.path === `/industries/${slug}`)
  if (!item) return undefined
  return {
    slug,
    name: item.label,
    tagline: item.description ?? '',
    description: `We help ${item.label.toLowerCase()} organizations navigate disruption, accelerate growth, and build lasting competitive advantage. Our teams combine deep sector knowledge with functional expertise to deliver measurable impact.`,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    highlights: ['Strategy & growth', 'Digital transformation', 'Operational excellence', 'Sustainability'],
    capabilities: ['Strategy', 'Operations', 'Technology', 'Sustainability'],
  }
}

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const industry = getIndustryBySlug(slug ?? '') ?? getIndustryFromNav(slug ?? '')

  if (!industry) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1>Industry not found</h1>
        <Link to="/industries" className="btn btn--primary" style={{ marginTop: 24 }}>
          Back to Industries
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="detail-hero">
        <img src={industry.image} alt="" />
        <div className="detail-hero__overlay">
          <div className="container">
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Industries', path: '/industries' },
                { label: industry.name },
              ]}
            />
            <h1>{industry.name}</h1>
            <p>{industry.tagline}</p>
          </div>
        </div>
      </div>

      <section className="detail-content">
        <div className="container detail-content__grid">
          <div className="detail-content__main">
            <p>{industry.description}</p>
            <p>
              Our teams combine deep industry knowledge with functional expertise to help clients navigate disruption, accelerate growth, and build lasting competitive advantage.
            </p>
          </div>
          <aside className="detail-sidebar">
            <h4>Key Focus Areas</h4>
            <ul>
              {industry.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Related Capabilities</h4>
            <ul>
              {industry.capabilities.map((cap) => {
                const capability = capabilities.find(
                  (c) => c.name.includes(cap) || c.slug.includes(cap.toLowerCase()),
                )
                return (
                  <li key={cap}>
                    {capability ? (
                      <Link to={`/capabilities/${capability.slug}`}>{cap}</Link>
                    ) : (
                      cap
                    )}
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to discuss your challenges?</h2>
          <p>Connect with our industry experts to explore how we can help.</p>
          <Link to="/contact" className="btn btn--white">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
