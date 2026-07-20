import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { ArticleCard } from '../components/ArticleCard'
import { insights } from '../data/insights'

const blogPosts = [
  {
    slug: 'inside-mckinsey-design',
    title: 'Inside McKinsey Design: How we help clients build human-centered products',
    excerpt: 'Our designers work alongside consultants and engineers to solve complex business problems through design.',
    date: 'March 10, 2026',
    category: 'Firm News',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    slug: 'women-in-leadership',
    title: 'Women in leadership: Stories from McKinsey partners around the world',
    excerpt: 'Partners share their journeys, challenges, and advice for the next generation of leaders.',
    date: 'February 22, 2026',
    category: 'People',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
  },
  {
    slug: 'sustainability-in-action',
    title: 'Sustainability in action: How our teams are reducing our environmental footprint',
    excerpt: 'From office operations to client work, learn how McKinsey is embedding sustainability across the firm.',
    date: 'February 8, 2026',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
  {
    slug: 'tech-talent-spotlight',
    title: 'Tech talent spotlight: Building the future of consulting with engineering excellence',
    excerpt: 'Meet the engineers, data scientists, and product builders powering McKinsey\'s technology capabilities.',
    date: 'January 30, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
]

export function BlogPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'KuberPay Blog' }]} />
          <h1>KuberPay Blog</h1>
          <p>
            Stories from inside our firm — our people, our culture, and the work we do to create lasting impact.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--2">
            {blogPosts.map((post) => (
              <Link key={post.slug} to="/blog" className="article-card">
                <div className="article-card__image">
                  <img src={post.image} alt="" loading="lazy" />
                </div>
                <div className="article-card__body">
                  <div className="article-card__category">{post.category}</div>
                  <h3 className="article-card__title">{post.title}</h3>
                  <p className="article-card__excerpt">{post.excerpt}</p>
                  <div className="article-card__meta">{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2>Related insights</h2>
            <p>Explore our latest research and thinking on business and management.</p>
          </div>
          <div className="card-grid">
            {insights.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
