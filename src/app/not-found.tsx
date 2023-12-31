'use client'

import { Button } from '@/ui/button'
import Link from 'next/link'

export default function NotFound(){
  return (
    <section className='flex flex-col items-center justify-center space-y-4'>
      <h1 className='flex items-center justify-center'>404 - Page Not Found</h1>
      <Button asChild>
        <Link href='/'>
          Go back
        </Link>
      </Button>
    </section>
  )
}
