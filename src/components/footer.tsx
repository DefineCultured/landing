'use client'

import { siteConfig } from '../config/site'

export function Footer() {
  return (
    <footer className='flex text-center flex-col items-center justify-center w-full mt-8 text-xs text-gray-400 border-t border-solid py-4'>
      <div className='flex flex-row mb-2 space-x-3'>
        {siteConfig.socials.map((social, index) => (
          <a key={index} href={social.link} target='_blank' rel='noopener noreferrer' className='flex items-center'>
            <social.icon className='w-4' />
          </a>
        ))}
      </div>
      © {new Date().getFullYear()} {siteConfig.businessName}. All Rights Reserved.
    </footer>
  )
}

