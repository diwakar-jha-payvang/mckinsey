import { useState } from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import { ArticleCard } from '../components/ArticleCard'
import { insights } from '../data/insights'

const categories = ['All', ...Array.from(new Set(insights.map((i) => i.category)))]

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? insights
      : insights.filter((i) => i.category === activeCategory)

  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Our Insights' }]} />
          <h1>Our Insights</h1>
          <p>
            Our latest thinking on the issues that matter most in business and management.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-tab${activeCategory === cat ? ' filter-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
