import { Logo } from './logo';

export function Header() {
  return (
    <header className="w-full body-font text-white bg-background border-b">
      <div className="container flex flex-col items-start justify-between px-2 py-4 mx-auto md:flex-row">
        <Logo size='small' />
      </div>
    </header>
  )
}