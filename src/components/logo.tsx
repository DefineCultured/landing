'use client'

import React from 'react';
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'normal' | 'large' | 'xlarge' | '2xlarge';
  href?: string;
  as?: string;
  [x: string]: any;
}

export function Logo({ size, href, as, className, ...rest }: LogoProps) {
  const classes = cn(className, 'flex flex-col uppercase select-none tracking-[0.025rem] font-neogram font-bold', {
    'text-[1.125rem] leading-[1.05rem]': size === 'small',
    'text-[1.5rem] leading-[1.35rem]': !size || size === 'normal',
    'text-[2.25rem] leading-[1.9rem]': size === 'large',
    'text-[3rem] leading-[2.5rem]': size === 'xlarge',
    'text-[5rem] leading-[4.2rem] max-[320px]:text-[2.75rem] max-[320px]:leading-[2.35rem] max-[380px]:text-[3.5rem] max-[380px]:leading-[3rem] max-[576px]:text-[4rem] max-[576px]:leading-[3.5rem]': size === '2xlarge'
  })

  const MyLogo = () => (
    <div {...rest} className={classes}>
      <span>Define</span>
      <span>Cultured</span>
    </div>
  )

  return (
    <>
      {href ? (
        <Link href={href} as={as}>
          <MyLogo />
        </Link>
      ) : (
        <MyLogo />
      )}
    </>
  )
}

export default Logo
