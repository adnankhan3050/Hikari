import { MarketingConfig } from 'types';

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Tech Stack',
      href: '/tech-stack'
    },
    {
      title: 'Pricing',
      href: '/pricing'
    },
    {
      title: 'Resources',
      items: [
        // Submenu items for Resources
        {
          title: 'Blog',
          href: '/blog'
        },
        {
          title: 'Case Study',
          href: '/case-study'
        },
        {
          title: 'Contact Us',
          href: '/contact-us'
        }
      ]
    }
  ]
};
