import { Link, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'
import { ArticleCard } from '../components/ArticleCard'
import { getInsightBySlug, getRelatedInsights } from '../data/insights'

export function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getInsightBySlug(slug ?? '')

  if (!article) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1>Article not found</h1>
        <Link to="/insights" className="btn btn--primary" style={{ marginTop: 24 }}>
          Back to Insights
        </Link>
      </div>
    )
  }

  const related = getRelatedInsights(article.slug, 3)

  return (
    <>
      <div className="container">
        <div className="article-header">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Our Insights', path: '/insights' },
              { label: article.title },
            ]}
          />
          <p className="article-header__category">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-header__meta">
            By {article.author} · {article.date} · {article.readTime}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="article-featured-image">
          <img src={article.image} alt="" />
        </div>
      </div>

      <div className="container article-body">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {related.length > 0 && (
        <section className="section section--gray">
          <div className="container">
            <div className="section__header">
              <h2>Related insights</h2>
            </div>
            <div className="card-grid">
              {related.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
