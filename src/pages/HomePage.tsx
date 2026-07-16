import { Link } from 'react-router-dom'
import { ArticleCard } from '../components/ArticleCard'
import { insights, getFeaturedInsights } from '../data/insights'
import { industries } from '../data/industries'
import { capabilities } from '../data/capabilities'

export function HomePage() {
  const featured = getFeaturedInsights()
  const latestInsights = insights.slice(0, 3)

  return (
    <>
      <section className="hero hero--large">
        <div className="container">
          <div className="hero__content">
            <p className="hero__eyebrow">McKinsey & Company</p>
            <h1>Game-changing work. People-powered growth.</h1>
            <p>
              At McKinsey, we help you think bigger, build stronger, and expand opportunity for all.
            </p>
            <div className="hero__actions">
              <Link to="/insights" className="btn btn--primary">
                Explore our insights
              </Link>
              <Link to="/about" className="btn btn--outline">
                About our firm
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>How we help clients</h2>
            <p>
              We partner with leaders in every industry and geography to solve their most important challenges and capture their greatest opportunities.
            </p>
          </div>
          <div className="help-grid">
            {capabilities.slice(0, 4).map((cap) => (
              <Link key={cap.slug} to={`/capabilities/${cap.slug}`} className="help-card">
                <h3>{cap.name}</h3>
                <p>{cap.tagline}</p>
                <span className="help-card__link">Learn more →</span>
              </Link>
            ))}
          </div>
          <Link to="/capabilities" className="section__link">
            View all capabilities
          </Link>
        </div>
      </section>

      {featured[0] && (
        <section className="section section--gray">
          <div className="container">
            <div className="featured-split">
              <div className="featured-split__image">
                <img src={featured[0].image} alt="" />
              </div>
              <div className="featured-split__content">
                <p className="hero__eyebrow">{featured[0].category}</p>
                <h2>{featured[0].title}</h2>
                <p>{featured[0].excerpt}</p>
                <Link to={`/insights/${featured[0].slug}`} className="btn btn--primary">
                  Read the article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Our latest thinking</h2>
            <p>Insights on the issues that matter most in business and management.</p>
          </div>
          <div className="card-grid">
            {latestInsights.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <Link to="/insights" className="section__link">
            View all insights
          </Link>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2>Industries we serve</h2>
            <p>Deep expertise across sectors to help you navigate complexity and drive performance.</p>
          </div>
          <div className="tile-grid">
            {industries.slice(0, 6).map((industry) => (
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
          <Link to="/industries" className="section__link">
            View all industries
          </Link>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Join a firm where you can change the world</h2>
          <p>
            Work with exceptional people on the challenges that matter. Build skills, relationships, and a career with lasting impact.
          </p>
          <Link to="/careers" className="btn btn--white">
            Explore careers
          </Link>
        </div>
      </section>
    </>
  )
}
