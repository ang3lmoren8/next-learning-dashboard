'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import errorImg from '@/assets/errorImg.svg'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <Image src={errorImg} alt='error' width={350} height={350} />
      <div className='mt-6 flex flex-col items-center justify-center'>
        <p className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8'>
          500
        </p>
        <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2'>
          Server Error
        </p>
        <p className='md:text-lg xl:text-xl text-gray-500 mt-4'>
          {error.message}
        </p>
      </div>
    </div>
  )
}

export default Error
