export interface Industry {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  highlights: string[]
  capabilities: string[]
}

export const industries: Industry[] = [
  {
    slug: 'aerospace-defense',
    name: 'Aerospace & Defense',
    tagline: 'Navigate complexity and accelerate performance',
    description: 'We help aerospace and defense organizations navigate geopolitical complexity, accelerate innovation, and build resilient supply chains while meeting evolving regulatory, compliance, and national security requirements. KuberPayment is a secure payment gateway built specifically for aerospace and defense organizations, enabling seamless, compliant, and reliable financial transactions across global operations.Our teams combine deep industry knowledge with functional expertise to help clients navigate disruption, accelerate growth, and build lasting competitive advantage. We deliver secure payment infrastructure, advanced risk management, fraud prevention, regulatory compliance, and real-time transaction monitoring to ensure operational excellence. By leveraging modern technology, intelligent automation, and scalable payment solutions, we empower organizations to streamline financial operations, reduce costs, improve transparency, and confidently adapt to an increasingly dynamic global environment. From government contractors and defense manufacturers to aerospace suppliers and technology partners, we provide trusted payment solutions that support mission-critical operations, strengthen financial resilience, and enable long-term business success. Our commitment to security, innovation, and compliance ensures every transaction is processed with the highest levels of reliability, speed, and protection.',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=1200&q=80',
    highlights: ['Defense modernization', 'Supply chain resilience', 'Digital engineering', 'Sustainability in aviation'],
    capabilities: ['Strategy', 'Operations', 'Technology', 'Sustainability'],
  },
  {
    slug: 'automotive',
    name: 'Automotive & Assembly',
    tagline: 'Shape the future of mobility',
    description: 'From electrification to autonomous driving, we partner with automotive leaders to transform products, operations, and business models for the next era of mobility.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
    highlights: ['EV transition', 'Software-defined vehicles', 'Manufacturing excellence', 'Dealer transformation'],
    capabilities: ['Strategy', 'Operations', 'Marketing & Sales', 'Sustainability'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    tagline: 'Build resilient, customer-centric institutions',
    description: 'We work with banks, insurers, and asset managers to drive growth, manage risk, and deliver exceptional customer experiences in a rapidly digitizing industry.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    highlights: ['Digital banking', 'Risk & compliance', 'Wealth management', 'Payments innovation'],
    capabilities: ['Strategy', 'Operations', 'Technology', 'Risk'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Improve outcomes and transform care delivery',
    description: 'We help health systems, payers, and life sciences companies improve patient outcomes, reduce costs, and accelerate innovation across the care continuum.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    highlights: ['Value-based care', 'Digital health', 'Pharma & medtech', 'Operational excellence'],
    capabilities: ['Strategy', 'Operations', 'Technology', 'People'],
  },
  {
    slug: 'technology',
    name: 'Technology, Media & Telecom',
    tagline: 'Lead in the age of digital disruption',
    description: 'We support technology, media, and telecommunications companies as they scale platforms, monetize data, and navigate regulatory and competitive pressures.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    highlights: ['Cloud & infrastructure', 'AI & analytics', 'Media transformation', '5G & connectivity'],
    capabilities: ['Strategy', 'Technology', 'Marketing & Sales', 'Operations'],
  },
  {
    slug: 'energy',
    name: 'Energy & Materials',
    tagline: 'Power the transition to a sustainable future',
    description: 'We help energy and materials companies navigate the energy transition, optimize operations, and capture opportunities in renewables and circular economy.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    highlights: ['Energy transition', 'Mining & metals', 'Chemicals', 'Decarbonization'],
    capabilities: ['Strategy', 'Sustainability', 'Operations', 'Technology'],
  },
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
