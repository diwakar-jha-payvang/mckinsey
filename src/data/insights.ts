export interface Insight {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  author: string
  body: string[]
}

export const insights: Insight[] = [
  {
    id: '1',
    slug: 'ai-enterprise-transformation',
    title: 'The state of AI in 2026: How organizations are scaling enterprise transformation',
    excerpt: 'Leaders are moving from pilots to production, embedding AI across operations, customer experience, and decision-making.',
    category: 'Artificial Intelligence',
    date: 'March 12, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    featured: true,
    author: 'McKinsey Global Institute',
    body: [
      'Artificial intelligence has moved from experimentation to enterprise-scale deployment. Organizations that treat AI as a strategic capability—not a technology project—are seeing measurable gains in productivity, revenue, and customer satisfaction.',
      'Our latest research draws on surveys of more than 1,500 executives across industries and geographies. The findings reveal a widening gap between AI leaders and laggards, with top performers integrating AI into core workflows and governance structures.',
      'Key success factors include executive sponsorship, cross-functional teams, robust data foundations, and a focus on change management. Companies that invest in upskilling and cultural adoption are three times more likely to report positive ROI from AI initiatives.',
    ],
  },
  {
    id: '2',
    slug: 'sustainable-growth-strategy',
    title: 'Sustainable growth: Balancing profitability with purpose in a volatile world',
    excerpt: 'Companies that embed sustainability into strategy are outperforming peers on both financial and nonfinancial metrics.',
    category: 'Sustainability',
    date: 'March 8, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    featured: true,
    author: 'McKinsey Sustainability',
    body: [
      'Sustainability is no longer a separate agenda—it is central to how leading companies create value. Investors, customers, and employees increasingly expect organizations to demonstrate progress on environmental and social goals.',
      'Our analysis shows that companies with integrated sustainability strategies achieve higher total shareholder returns over the long term. The key is linking sustainability initiatives to concrete business outcomes and operational improvements.',
    ],
  },
  {
    id: '3',
    slug: 'future-of-work-2026',
    title: 'The future of work: Skills, flexibility, and the new talent equation',
    excerpt: 'Hybrid models, skills-based hiring, and AI augmentation are reshaping how organizations attract and retain talent.',
    category: 'People & Organizational Performance',
    date: 'February 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    author: 'McKinsey People & Org',
    body: [
      'The workplace continues to evolve rapidly. Organizations are rethinking office design, career paths, and the skills required for the next decade of growth.',
      'Skills-based hiring is gaining traction as companies look beyond traditional credentials. Meanwhile, AI tools are augmenting—not replacing—human capabilities in knowledge work.',
    ],
  },
  {
    id: '4',
    slug: 'healthcare-value-based-care',
    title: 'Value-based care: Accelerating the shift from volume to outcomes',
    excerpt: 'Health systems and payers are redesigning care models to improve outcomes while managing costs.',
    category: 'Healthcare',
    date: 'February 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    author: 'McKinsey Healthcare',
    body: [
      'The transition to value-based care requires new capabilities in data analytics, care coordination, and patient engagement. Leading health systems are partnering across the ecosystem to drive measurable improvements.',
    ],
  },
  {
    id: '5',
    slug: 'supply-chain-resilience',
    title: 'Building supply chain resilience in an era of disruption',
    excerpt: 'Geopolitical shifts and climate events are forcing companies to rethink global supply networks.',
    category: 'Operations',
    date: 'February 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    author: 'McKinsey Operations',
    body: [
      'Supply chain leaders are diversifying suppliers, investing in visibility tools, and building regional hubs to reduce risk. Resilience is now a board-level priority.',
    ],
  },
  {
    id: '6',
    slug: 'consumer-trends-2026',
    title: 'Consumer trends 2026: What shoppers want now',
    excerpt: 'Personalization, sustainability, and value consciousness are defining the next wave of consumer behavior.',
    category: 'Marketing & Sales',
    date: 'February 5, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    author: 'McKinsey Consumer',
    body: [
      'Consumers are more discerning than ever. Brands that deliver authentic value, transparent sustainability claims, and seamless omnichannel experiences are winning loyalty.',
    ],
  },
]

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug)
}

export function getFeaturedInsights(): Insight[] {
  return insights.filter((i) => i.featured)
}

/** Prefer same-category articles, then fill from the rest until `count` cards. */
export function getRelatedInsights(
  excludeSlug: string,
  count = 3,
  preferredSlugs: string[] = [],
): Insight[] {
  const preferred = preferredSlugs
    .map((s) => getInsightBySlug(s))
    .filter((i): i is Insight => Boolean(i) && i.slug !== excludeSlug)

  const current = getInsightBySlug(excludeSlug)
  const sameCategory = insights.filter(
    (i) =>
      i.slug !== excludeSlug &&
      current &&
      i.category === current.category &&
      !preferred.some((p) => p.slug === i.slug),
  )

  const rest = insights.filter(
    (i) =>
      i.slug !== excludeSlug &&
      !preferred.some((p) => p.slug === i.slug) &&
      !sameCategory.some((p) => p.slug === i.slug),
  )

  return [...preferred, ...sameCategory, ...rest].slice(0, count)
}
