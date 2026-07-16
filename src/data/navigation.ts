export interface NavItem {
  label: string
  path: string
  children?: { label: string; path: string; description?: string }[]
}

export const mainNav: NavItem[] = [
  {
    label: 'Industries',
    path: '/industries',
    children: [
      { label: 'Aerospace & Defense', path: '/industries/aerospace-defense', description: 'Navigate complexity and accelerate performance' },
      { label: 'Automotive & Assembly', path: '/industries/automotive', description: 'Shape the future of mobility' },
      { label: 'Financial Services', path: '/industries/financial-services', description: 'Build resilient, customer-centric institutions' },
      { label: 'Healthcare', path: '/industries/healthcare', description: 'Improve outcomes and transform care delivery' },
      { label: 'Technology, Media & Telecom', path: '/industries/technology', description: 'Lead in the age of digital disruption' },
      { label: 'Energy & Materials', path: '/industries/energy', description: 'Power the transition to a sustainable future' },
    ],
  },
  {
    label: 'Capabilities',
    path: '/capabilities',
    children: [
      { label: 'Strategy & Corporate Finance', path: '/capabilities/strategy', description: 'Set direction and create value' },
      { label: 'Operations', path: '/capabilities/operations', description: 'Build operational excellence at scale' },
      { label: 'Marketing & Sales', path: '/capabilities/marketing-sales', description: 'Grow revenue and deepen customer relationships' },
      { label: 'Sustainability', path: '/capabilities/sustainability', description: 'Embed sustainability into core strategy' },
      { label: 'People & Organizational Performance', path: '/capabilities/people', description: 'Unlock human potential' },
      { label: 'Implementation', path: '/capabilities/implementation', description: 'Turn strategy into lasting results' },
    ],
  },
  {
    label: 'Tech & AI',
    path: '/capabilities/tech-ai',
    children: [
      { label: 'Artificial Intelligence', path: '/capabilities/tech-ai', description: 'Scale AI for enterprise impact' },
      { label: 'QuantumBlack', path: '/capabilities/tech-ai', description: 'AI by McKinsey' },
      { label: 'Digital & Analytics', path: '/capabilities/tech-ai', description: 'Build digital capabilities' },
    ],
  },
  {
    label: 'Our Insights',
    path: '/insights',
    children: [
      { label: 'Featured Insights', path: '/insights', description: 'Our latest thinking' },
      { label: 'McKinsey Global Institute', path: '/insights', description: 'Research on the global economy' },
      { label: 'McKinsey Quarterly', path: '/insights', description: 'Business journal' },
    ],
  },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'Our Firm', path: '/about', description: 'Who we are and what we believe' },
      { label: 'Our People', path: '/about#people', description: 'Leaders and experts' },
      { label: 'Locations', path: '/about#locations', description: 'Offices around the world' },
      { label: 'Contact Us', path: '/contact', description: 'Get in touch' },
    ],
  },
  {
    label: 'Careers',
    path: '/careers',
    children: [
      { label: 'Explore Careers', path: '/careers', description: 'Find your path at McKinsey' },
      { label: 'Consulting', path: '/careers', description: 'Client-facing roles' },
      { label: 'Technology', path: '/careers', description: 'Build solutions at scale' },
      { label: 'Business Operations', path: '/careers', description: 'Enable our firm' },
    ],
  },
]

export const footerLinks = {
  explore: [
    { label: 'Industries', path: '/industries' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Our Insights', path: '/insights' },
    { label: 'Tech & AI', path: '/capabilities/tech-ai' },
  ],
  about: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Locations', path: '/about#locations' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/contact' },
    { label: 'Cookie Preferences', path: '/contact' },
    { label: 'Terms of Use', path: '/contact' },
    { label: 'Accessibility', path: '/contact' },
  ],
}
