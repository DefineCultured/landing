import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

import Link from 'next/link'
import { Icons } from './icons'

type BrandCardProps = {
  name: string
  shortName?: string
  shortDescription: string
  content: string
  logo: string
  url: string
}

export function BrandCard({ name, shortName, shortDescription, content, logo, url }: BrandCardProps) {
  const visitUrl = `${url}?utm_source=definecultured&utm_medium=website&utm_campaign=brand_card_link`

  return (
    <Card className='relative w-full'>
      <div className="absolute right-1 top-1 overflow-hidden">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={200}
          priority={true}
          draggable={false}
          className='opacity-5 bg-blend-overlay rotate-12 select-none'
        />
      </div>
      <CardHeader>
        <CardTitle className='text-2xl'>{name}</CardTitle>
        <CardDescription className='text-slate-300 text-xs'>{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className='text-sm text-slate-300 text-pretty'>
        {content}
      </CardContent>
      <CardFooter className="flex space-x-2 justify-end">
        <Button asChild>
          <Link href={visitUrl} target='_blank'>
            Visit {shortName ?? 'Site'}
            <Icons.externalLink className='w-3 ml-1' />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
