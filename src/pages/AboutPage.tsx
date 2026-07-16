import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'

const stats = [
  { number: '130+', label: 'Years of impact' },
  { number: '65+', label: 'Countries' },
  { number: '45,000+', label: 'Colleagues worldwide' },
  { number: '3,000+', label: 'Clients served annually' },
]

const values = [
  {
    title: 'Client impact',
    description: 'We exist to create lasting change for our clients and the world they operate in.',
  },
  {
    title: 'Diverse perspectives',
    description: 'We bring together people with different backgrounds, experiences, and viewpoints to solve complex problems.',
  },
  {
    title: 'Meritocracy',
    description: 'We reward excellence and provide opportunities for people to grow based on their contributions.',
  },
  {
    title: 'Partnership',
    description: 'We work as one firm, collaborating across borders and practices to deliver the best for our clients.',
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in everything we do.',
  },
  {
    title: 'Continuous learning',
    description: 'We invest in developing our people and staying at the forefront of knowledge.',
  },
]

const locations = [
  { city: 'New York', region: 'Americas' },
  { city: 'London', region: 'Europe' },
  { city: 'Singapore', region: 'Asia Pacific' },
  { city: 'Dubai', region: 'Middle East' },
  { city: 'São Paulo', region: 'Latin America' },
  { city: 'Mumbai', region: 'Asia Pacific' },
  { city: 'Tokyo', region: 'Asia Pacific' },
  { city: 'Paris', region: 'Europe' },
  { city: 'Sydney', region: 'Asia Pacific' },
]

export function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About Us' }]} />
          <h1>About McKinsey</h1>
          <p>
            We are a global management consulting firm committed to helping organizations create change that matters.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="featured-split">
            <div className="featured-split__content">
              <h2>Our purpose</h2>
              <p>
                McKinsey helps organizations across the private, public, and social sectors create change that matters. From the C-suite to the front line, we partner with our clients to transform their organizations and build capabilities for lasting success.
              </p>
              <p>
                Founded in 1926, we have grown to more than 45,000 colleagues in 65+ countries. Our work spans every major industry and function, and we are united by a shared commitment to client impact and excellence.
              </p>
            </div>
            <div className="featured-split__image">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <div className="about-stat__number">{stat.number}</div>
                <div className="about-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="people">
        <div className="container">
          <div className="section__header">
            <h2>Our values</h2>
            <p>The principles that guide how we work with clients, colleagues, and communities.</p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray" id="locations">
        <div className="container">
          <div className="section__header">
            <h2>Our locations</h2>
            <p>We serve clients from offices around the world.</p>
          </div>
          <div className="locations-grid">
            {locations.map((loc) => (
              <div key={loc.city} className="location-card">
                <h4>{loc.city}</h4>
                <p>{loc.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Join us in creating lasting impact</h2>
          <p>Explore career opportunities at McKinsey.</p>
          <Link to="/careers" className="btn btn--white">
            View careers
          </Link>
        </div>
      </section>
    </>
  )
}
