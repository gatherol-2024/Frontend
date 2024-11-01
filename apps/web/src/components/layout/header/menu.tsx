'use client'
import { Button } from '@lvc/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface HeaderMenuProps {
  children: ReactNode
  href: string
}
const HeaderMenu = ({ children, href }: HeaderMenuProps) => {
  const fistPathname = usePathname().split('/')[1] || '/'
  const isActive =
    fistPathname === href ? 'border-b-2 text-primary border-primary' : ''
  return (
    <Link href={href}>
      <Button
        size="lg"
        className={`${isActive} hover:text-primary duration-200`}>
        {children}
      </Button>
    </Link>
  )
}

export default HeaderMenu
