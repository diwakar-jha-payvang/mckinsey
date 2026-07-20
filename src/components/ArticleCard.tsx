import { Link } from 'react-router-dom'
import type { Insight } from '../data/insights'

interface ArticleCardProps {
  article: Insight
  variant?: 'default' | 'horizontal'
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  return (
    <Link to={`/insights/${article.slug}`} className="article-card">
      <div className="article-card__image">
        <img src={article.image} alt="" loading="lazy" />
      </div>
      <div className="article-card__body">
        <div className="article-card__category">{article.category}</div>
        <h3 className="article-card__title">{article.title}</h3>
        {variant === 'default' && (
          <p className="article-card__excerpt">{article.excerpt}</p>
        )}
        <div className="article-card__meta">
          {article.date} · {article.readTime}
        </div>
      </div>
    </Link>
  )
}
