export interface NavLink {
  label: string
  path: string
  description?: string
}

export interface NavGroup {
  title?: string
  items: NavLink[]
}

export interface NavItem {
  label: string
  path: string
  hasSubmenu: boolean
  groups?: NavGroup[]
}

export const mainNav: NavItem[] = [
  {
    label: 'Industries',
    path: '/industries',
    hasSubmenu: true,
    groups: [
      {
        items: [
          { label: 'Aerospace & Defense', path: '/industries/aerospace-defense', description: 'Push boundaries in air and space' },
          { label: 'Agriculture', path: '/industries/agriculture', description: 'Sustainable and inclusive growth in food and agriculture' },
          { label: 'Automotive & Assembly', path: '/industries/automotive', description: 'Shape the future of mobility' },
          { label: 'Chemicals', path: '/industries/chemicals', description: 'Optimize operations and identify growth' },
          { label: 'Consumer Packaged Goods', path: '/industries/consumer-goods', description: 'Win with brands consumers love' },
          { label: 'Education', path: '/industries/education', description: 'Transform learning and institutions' },
          { label: 'Electric Power & Natural Gas', path: '/industries/electric-power', description: 'Navigate the energy transition' },
          { label: 'Energy & Materials', path: '/industries/energy', description: 'Power a sustainable future' },
          { label: 'Financial Services', path: '/industries/financial-services', description: 'Build resilient institutions' },
          { label: 'Healthcare', path: '/industries/healthcare', description: 'Improve outcomes and transform care' },
          { label: 'Industrials & Electronics', path: '/industries/industrials', description: 'Drive manufacturing excellence' },
          { label: 'Life Sciences', path: '/industries/life-sciences', description: 'Accelerate innovation in pharma and biotech' },
          { label: 'Metals & Mining', path: '/industries/metals-mining', description: 'Build resilient operations' },
          { label: 'Oil & Gas', path: '/industries/oil-gas', description: 'Navigate volatility and transition' },
          { label: 'Packaging & Paper', path: '/industries/packaging', description: 'Sustainable packaging solutions' },
          { label: 'Private Capital', path: '/industries/private-capital', description: 'Create value across the portfolio' },
          { label: 'Public Sector', path: '/industries/public-sector', description: 'Deliver impact for citizens' },
          { label: 'Retail', path: '/industries/retail', description: 'Reimagine the customer experience' },
          { label: 'Semiconductors', path: '/industries/semiconductors', description: 'Lead in the chip economy' },
          { label: 'Social Sector', path: '/industries/social-sector', description: 'Scale social impact' },
          { label: 'Technology, Media & Telecom', path: '/industries/technology', description: 'Lead in digital disruption' },
          { label: 'Travel', path: '/industries/travel', description: 'Rebuild and reimagine travel' },
        ],
      },
    ],
  },
  {
    label: 'Capabilities',
    path: '/capabilities',
    hasSubmenu: true,
    groups: [
      {
        title: 'Capabilities',
        items: [
          { label: 'Artificial Intelligence', path: '/capabilities/tech-ai', description: 'Scale AI for enterprise impact' },
          { label: 'Business Building', path: '/capabilities/business-building', description: 'Launch and scale new businesses' },
          { label: 'Geopolitics', path: '/capabilities/geopolitics', description: 'Navigate a complex global landscape' },
          { label: 'Growth, Marketing & Sales', path: '/capabilities/marketing-sales', description: 'Accelerate revenue growth' },
          { label: 'Implementation', path: '/capabilities/implementation', description: 'Turn strategy into results' },
          { label: 'M&A', path: '/capabilities/ma', description: 'Create value through deals' },
          { label: 'Operations', path: '/capabilities/operations', description: 'Build operational excellence' },
          { label: 'People & Organizational Performance', path: '/capabilities/people', description: 'Unlock human potential' },
          { label: 'Risk & Resilience', path: '/capabilities/risk', description: 'Build enterprise resilience' },
          { label: 'Strategy & Corporate Finance', path: '/capabilities/strategy', description: 'Set direction and create value' },
          { label: 'Sustainability', path: '/capabilities/sustainability', description: 'Embed sustainability into strategy' },
          { label: 'Transformation', path: '/capabilities/transformation', description: 'Drive enterprise-wide change' },
        ],
      },
    ],
  },
  {
    label: 'Tech & AI',
    path: '/capabilities/tech-ai',
    hasSubmenu: false,
  },
  {
    label: 'Our Insights',
    path: '/insights',
    hasSubmenu: true,
    groups: [
      {
        title: 'Featured',
        items: [
          {
            label: 'Ask McKinsey',
            path: '/insights',
            description:
              'Get answers to the questions that matter to you—based on McKinsey insights. This pilot of our new gen AI chatbot covers digital, AI, technology, media, and telecoms. Other topics coming soon.',
          },
          {
            label: 'McKinsey Quarterly',
            path: '/insights',
            description:
              'Our flagship business publication has been defining and informing the senior-management agenda since 1964.',
          },
          {
            label: 'McKinsey Global Institute',
            path: '/insights',
            description:
              'Our mission is to help leaders in multiple sectors develop a deeper understanding of the global economy.',
          },
        ],
      },
      {
        title: 'Go Deeper',
        items: [
          { label: 'Author Talks', path: '/insights' },
          { label: 'Case Studies', path: '/insights' },
          { label: 'Global Surveys', path: '/insights' },
          { label: 'McKinsey Explainers', path: '/insights' },
          { label: 'McKinsey Health Institute', path: '/insights' },
          { label: 'McKinsey Institute for Economic Mobility', path: '/insights' },
          { label: 'McKinsey Live', path: '/insights' },
          { label: 'McKinsey on Lives & Legacies', path: '/insights' },
          { label: 'McKinsey Podcast', path: '/insights' },
          { label: 'McKinsey Themes', path: '/insights' },
          { label: 'Our article alerts', path: '/insights' },
          { label: 'Our newsletters', path: '/insights' },
          { label: 'Week in Charts', path: '/insights' },
        ],
      },
    ],
  },
  {
    label: 'Careers',
    path: '/careers',
    hasSubmenu: true,
    groups: [
      {
        items: [
          { label: 'Explore Careers', path: '/careers', description: 'Find your path at McKinsey' },
          { label: 'Consulting', path: '/careers', description: 'Client-facing roles' },
          { label: 'Technology', path: '/careers', description: 'Build solutions at scale' },
          { label: 'Business Operations', path: '/careers', description: 'Enable our firm' },
          { label: 'Analytics & AI', path: '/careers', description: 'Data science and AI roles' },
          { label: 'Experienced Professionals', path: '/careers', description: 'Join with experience' },
          { label: 'Students & Interns', path: '/careers', description: 'Start your career journey' },
        ],
      },
    ],
  },
  {
    label: 'About Us',
    path: '/about',
    hasSubmenu: true,
    groups: [
      {
        items: [
          { label: 'Our Firm', path: '/about', description: 'Who we are and what we believe' },
          { label: 'Our People', path: '/about#people', description: 'Leaders and experts' },
          { label: 'Our History', path: '/about', description: 'Nearly a century of impact' },
          { label: 'Locations', path: '/about#locations', description: 'Offices around the world' },
          { label: 'Alumni', path: '/about', description: 'Our global alumni network' },
          { label: 'Contact Us', path: '/contact', description: 'Get in touch' },
        ],
      },
    ],
  },
  {
    label: 'KuberPay Blog',
    path: '/blog',
    hasSubmenu: false,
  },
]

export function getNavChildren(item: NavItem): NavLink[] {
  if (!item.groups) return []
  return item.groups.flatMap((g) => g.items)
}

export const footerLinks = {
  explore: [
    { label: 'Industries', path: '/industries' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Our Insights', path: '/insights' },
    { label: 'Tech & AI', path: '/capabilities/tech-ai' },
    { label: 'KuberPay Blog', path: '/blog' },
  ],
  about: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Locations', path: '/about#locations' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Cookie Preferences', path: '/cookie-preferences' },
    { label: 'Terms of Use', path: '/terms-of-use' },
  ],
}
