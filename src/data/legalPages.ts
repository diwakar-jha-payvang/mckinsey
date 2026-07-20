export interface LegalSection {
  title: string
  paragraphs: string[]
}

export interface LegalPageContent {
  slug: string
  title: string
  intro: string
  sections: LegalSection[]
}

export const legalPages: LegalPageContent[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    intro: 'This policy describes how KuberPay collects, uses, and protects your personal information when you use our website and services.',
    sections: [
      {
        title: 'Information we collect',
        paragraphs: [
          'We may collect information you provide directly, such as your name, email address, company name, and any messages you send through our contact or subscription forms.',
          'We also collect limited technical information automatically, including browser type, device information, and pages visited, to help us improve our site experience.',
        ],
      },
      {
        title: 'How we use your information',
        paragraphs: [
          'We use the information we collect to respond to inquiries, deliver newsletters and insights you subscribe to, and improve our website and services.',
          'We do not sell your personal information to third parties.',
        ],
      },
      {
        title: 'Your choices',
        paragraphs: [
          'You may unsubscribe from marketing communications at any time using the link in our emails or by contacting us directly.',
          'If you have questions about this policy or wish to request access to your data, please contact us through our Contact Us page.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-preferences',
    title: 'Cookie Preferences',
    intro: 'This page explains how we use cookies and similar technologies on our website, and how you can manage your preferences.',
    sections: [
      {
        title: 'What are cookies?',
        paragraphs: [
          'Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how visitors use our pages.',
        ],
      },
      {
        title: 'Cookies we use',
        paragraphs: [
          'Essential cookies are required for the website to function properly, such as maintaining your session and enabling core navigation features.',
          'Analytics cookies help us understand how visitors interact with our site so we can improve content and usability. These cookies collect aggregated, anonymous data.',
        ],
      },
      {
        title: 'Managing your preferences',
        paragraphs: [
          'You can manage or disable cookies through your browser settings at any time. Please note that disabling essential cookies may affect how certain parts of the site work.',
          'By continuing to use our website, you consent to the use of cookies as described on this page.',
        ],
      },
    ],
  },
  {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    intro: 'These terms govern your access to and use of the KuberPay website and the content made available on it.',
    sections: [
      {
        title: 'Acceptance of terms',
        paragraphs: [
          'By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.',
        ],
      },
      {
        title: 'Use of content',
        paragraphs: [
          'The content on this website, including articles, insights, and materials, is provided for general informational purposes only. It does not constitute professional advice.',
          'You may not copy, reproduce, or distribute site content for commercial purposes without prior written permission.',
        ],
      },
      {
        title: 'Disclaimer',
        paragraphs: [
          'We strive to keep the information on this site accurate and up to date, but we make no warranties regarding completeness or suitability for any particular purpose.',
          'KuberPay shall not be liable for any damages arising from your use of this website or reliance on its content.',
        ],
      },
    ],
  },
]

export function getLegalPageBySlug(slug: string): LegalPageContent | undefined {
  return legalPages.find((page) => page.slug === slug)
}
