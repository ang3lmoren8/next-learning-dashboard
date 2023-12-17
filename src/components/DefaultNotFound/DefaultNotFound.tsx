import Image from 'next/image'
import notFoundImg from '@/assets/notFoundImg.svg'
import Link from 'next/link'

const DefaultNotFound = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <Image src={notFoundImg} alt='error' width={350} height={350} />
      <div className='mt-6 flex flex-col items-center justify-center'>
        <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2'>
          {title}
        </p>
        <p className='md:text-lg xl:text-xl text-gray-500 mt-4'>{subtitle}</p>
        <Link
          href='/dashboard/main'
          className='mt-6 p-2 min-w-[180px] text-center bg-indigo-600 hover:bg-indigo-900 transition-all rounded-2xl text-white font-bold'
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

DefaultNotFound.defaultProps = {
  title: 'Not found',
  subtitle: 'Sorry, we could find what you were looking for.',
}

export default DefaultNotFound
