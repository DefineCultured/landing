import '../styles/globals.css'

import React from 'react'
import Script from 'next/script'
import { type Viewport, type Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const inter = Inter ({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const neoGram = localFont({
  src: [
    {
      path: '../../public/fonts/NeoGram-Black.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/NeoGram-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-neogram'
})

const appUrl = process.env.NODE_ENV === 'production' ? siteConfig.links.website : 'http://localhost:3000'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: siteConfig.title,
    template: '%s | Define Cultured',
  },
  description: siteConfig.description,
  twitter: {
    title: siteConfig.title,
    card: 'summary_large_image',
    creator: '@definecultured',
    site: '@definecultured',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    url: siteConfig.links.website,
    siteName: siteConfig.title,
    images: [
      {
        url: 'https://definecultured.com/images/summary_large_image.png',
        width: 1320,
        height: 660,
        alt: siteConfig.title
      }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={cn('flex flex-col items-center justify-center min-h-screen font-sans font-light', inter.variable, neoGram.variable)}>
        <Header />
        <main className='flex flex-col justify-center container flex-1 w-full pt-8'>
          <div className="absolute right-0 top-0 overflow-hidden z-[-1] sm:right-[20vw]">
            <Image
              alt="Gradient"
              src="/images/gradient.png"
              width={100}
              height={800}
              className="min-w-[800px] opacity-50 contrast-0"
              priority={true}
              aria-hidden
            />
          </div>
          {children}
        </main>
        <Footer />
        <Script
          defer
          data-domain='definecultured.com'
          src='https://analytics.definecultured.com/js/script.outbound-links.file-downloads.js'
        />
      </body>
    </html>
  )
}