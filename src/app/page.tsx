'use client'

import { Logo } from '@/components/logo'
import { BrandCard } from '@/components/brand-card'

export default function Page(){
  return (
    <section className='flex flex-col'>
      <Logo size='2xlarge' />
      <section className='mt-12'>
        <h2 className='text-2xl font-neogram bg-gradient-to-r bg-clip-text from-gray-500 to-white inline-block text-transparent font-normal italic'>Our brands..</h2>
        <div className="mt-2 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <BrandCard
            name='ParagonFGC'
            shortName='Paragon'
            shortDescription='Supporting the FGC'
            content='Paragon is a community of fighting game players and content creators. We are dedicated to supporting the fighting game community by providing a platform for players to compete, and content creators to share their work.'
            logo='/images/paragon_logo_white.png'
            url='https://paragonfgc.com'
          />
        </div>
      </section>
    </section>
  )
}
