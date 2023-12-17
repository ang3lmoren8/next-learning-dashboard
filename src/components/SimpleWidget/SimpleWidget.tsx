import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  title?: string | number
  subtitle?: string
  label?: string
  icon?: ReactNode
  href?: string
}

export const SimpleWidget = ({ title, subtitle, label, icon, href }: Props) => {
  return (
    <div className='bg-white shadow-xl p-3 min-w-[250px] rounded-2xl border-1 border-gray-50'>
      <div className='flex flex-col'>
        {label && (
          <div>
            <h3 className='font-bold text-gray-600 text-center'>{label}</h3>
          </div>
        )}
        <div className='my-3'>
          <div className='flex flex-row items-center justify-center'>
            {icon && <div id='icon'>{icon}</div>}
            <div id='temp' className='ml-2 text-center'>
              {title && <h4 className='text-4xl'>{title}</h4>}
              {subtitle && <p className='text-xs text-gray-500'>{subtitle}</p>}
            </div>
          </div>
        </div>

        {href && (
          <div className='w-full place-items-end text-right border-t-2 border-gray-100 mt-2 pt-2'>
            <Link href={href} className='text-indigo-600 text-sm font-medium'>
              See more
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}