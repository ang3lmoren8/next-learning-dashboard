'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Props {
  path: string
  icon: ReactNode
  title: string
  subtitle: string
}

const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
  const userPath = usePathname()

  const isActive = userPath === path

  return (
    <Link
      href={path}
      className={`w-full px-4 rounded-2xl inline-flex space-x-2 items-center py-3 ${
        isActive ? 'bg-indigo-800 text-white' : 'hover:bg-indigo-100'
      } transition ease-linear duration-150`}
    >
      <div>{icon}</div>
      <div className='flex flex-col'>
        <span className='text-lg font-bold leading-5'>{title}</span>
        <span className='text-sm opacity-50 hidden md:block'>{subtitle}</span>
      </div>
    </Link>
  )
}

export default SidebarMenuItem
