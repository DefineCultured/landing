import { Icons } from '../components/icons'

export const siteConfig = {
  title: 'Define Cultured',
  description: 'Define Cultured is a media company that creates content for the gaming community. Our brands include Define Cultured and ParagonFGC.',
  businessName: 'Define Cultured, LLC.',
  links: {
    website: 'https://definecultured.com',
    twitter: 'https://twitter.com/definecultured',
    facebook: 'https://www.facebook.com/DefineCultured',
    instagram: 'https://www.instagram.com/definecultured',
    twitch: 'https://www.twitch.tv/definecultured',
  },
  socials: [
    {
      icon: Icons.twitter,
      link: 'https://twitter.com/definecultured'
    },
    {
      icon: Icons.facebook,
      link: 'https://www.facebook.com/DefineCultured'
    },
    {
      icon: Icons.instagram,
      link: 'https://www.instagram.com/definecultured'
    },
    {
      icon: Icons.twitch,
      link: 'https://www.twitch.tv/definecultured'
    }
  ]
}

export type SiteConfig = typeof siteConfig