export interface Capability {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  services: { title: string; description: string }[]
  relatedInsights: string[]
}

export const capabilities: Capability[] = [
  {
    slug: 'strategy',
    name: 'Strategy & Corporate Finance',
    tagline: 'Set direction and create value',
    description: 'We help leaders define winning strategies, allocate capital effectively, and create sustainable competitive advantage in dynamic markets.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    services: [
      { title: 'Corporate Strategy', description: 'Define where to play and how to win' },
      { title: 'M&A', description: 'Identify, evaluate, and integrate acquisitions' },
      { title: 'Portfolio Strategy', description: 'Optimize business mix and capital allocation' },
      { title: 'Growth Strategy', description: 'Identify and capture new growth opportunities' },
    ],
    relatedInsights: ['sustainable-growth-strategy', 'ai-enterprise-transformation'],
  },
  {
    slug: 'operations',
    name: 'Operations',
    tagline: 'Build operational excellence at scale',
    description: 'We help organizations improve productivity, quality, and resilience across manufacturing, supply chain, and service operations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
    services: [
      { title: 'Supply Chain', description: 'Build resilient, efficient supply networks' },
      { title: 'Manufacturing', description: 'Drive lean and digital manufacturing' },
      { title: 'Procurement', description: 'Transform sourcing and supplier management' },
      { title: 'Service Operations', description: 'Improve customer-facing operations' },
    ],
    relatedInsights: ['supply-chain-resilience'],
  },
  {
    slug: 'marketing-sales',
    name: 'Marketing & Sales',
    tagline: 'Grow revenue and deepen customer relationships',
    description: 'We help companies win in the market through customer-centric growth strategies, commercial excellence, and digital marketing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    services: [
      { title: 'Commercial Strategy', description: 'Design go-to-market models that win' },
      { title: 'Pricing', description: 'Capture value through pricing excellence' },
      { title: 'Digital Marketing', description: 'Build data-driven marketing capabilities' },
      { title: 'Sales Excellence', description: 'Equip sales teams to outperform' },
    ],
    relatedInsights: ['consumer-trends-2026'],
  },
  {
    slug: 'sustainability',
    name: 'Sustainability',
    tagline: 'Embed sustainability into core strategy',
    description: 'We help organizations navigate the transition to a low-carbon economy while creating business value and stakeholder trust.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
    services: [
      { title: 'Decarbonization', description: 'Develop and execute net-zero roadmaps' },
      { title: 'Circular Economy', description: 'Design sustainable product and supply models' },
      { title: 'ESG Strategy', description: 'Integrate ESG into corporate strategy' },
      { title: 'Green Growth', description: 'Capture opportunities in the green transition' },
    ],
    relatedInsights: ['sustainable-growth-strategy'],
  },
  {
    slug: 'people',
    name: 'People & Organizational Performance',
    tagline: 'Unlock human potential',
    description: 'We help leaders build high-performing cultures, develop talent, and design organizations for agility and impact.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    services: [
      { title: 'Organization Design', description: 'Structure for speed and accountability' },
      { title: 'Talent Strategy', description: 'Attract, develop, and retain top talent' },
      { title: 'Culture Transformation', description: 'Build cultures that drive performance' },
      { title: 'Leadership Development', description: 'Develop leaders at every level' },
    ],
    relatedInsights: ['future-of-work-2026'],
  },
  {
    slug: 'implementation',
    name: 'Implementation',
    tagline: 'Turn strategy into lasting results',
    description: 'We partner with clients to execute transformations, build capabilities, and sustain performance improvements over time.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    services: [
      { title: 'Transformation Office', description: 'Govern and accelerate large-scale change' },
      { title: 'Capability Building', description: 'Embed new ways of working' },
      { title: 'Performance Management', description: 'Track and sustain results' },
      { title: 'Change Management', description: 'Engage people through transformation' },
    ],
    relatedInsights: ['ai-enterprise-transformation'],
  },
  {
    slug: 'tech-ai',
    name: 'Tech & AI',
    tagline: 'Scale technology and AI for enterprise impact',
    description: 'We help organizations build digital and AI capabilities, modernize technology stacks, and create data-driven competitive advantage.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    services: [
      { title: 'Artificial Intelligence', description: 'Scale AI across the enterprise' },
      { title: 'QuantumBlack', description: 'AI by McKinsey' },
      { title: 'Digital Transformation', description: 'Modernize technology and ways of working' },
      { title: 'Data & Analytics', description: 'Turn data into actionable insights' },
    ],
    relatedInsights: ['ai-enterprise-transformation'],
  },
]

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug)
}
