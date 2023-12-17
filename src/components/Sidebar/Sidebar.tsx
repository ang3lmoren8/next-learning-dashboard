import Image from 'next/image'
import {
  IoBookOutline,
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoHeartOutline,
  IoLogoReact,
} from 'react-icons/io5'
import SidebarMenuItem from '@/components/Sidebar/SidebarMenuItem/SidebarMenuItem'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={28} />,
    title: 'Dashboard',
    subtitle: 'Visualization',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculatorOutline size={28} />,
    title: 'Counter',
    subtitle: 'Client side counter',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoBookOutline size={28} />,
    title: 'Pokemons',
    subtitle: 'Static Pokemons list',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={28} />,
    title: 'Pokemons',
    subtitle: 'Global state',
  },
]

const Sidebar = () => {
  return (
    <div
      id='menu'
      className='bg-white min-h-screen z-10 w-96 left-0 overflow-y-scroll'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center gap-2 text-lg md:text-2xl font-bold text-gray-800'>
          <IoLogoReact />
          <span>
            Dash
            <span className='text-indigo-400'>Next</span>
          </span>
        </h1>
        <p className='text-slate-500 text-sm'>
          Using server & client components
        </p>
      </div>
      <div id='profile' className='px-6 pt-6 pb-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full w-8 h-8'
              src='https://avatars.githubusercontent.com/u/37447136?s=96&v=4'
              alt=''
              width={84}
              height={84}
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Angel Moreno</span>
        </a>
      </div>
      <div id='nav' className='w-full px-2'>
        {menuItems.map((menuItem) => (
          <SidebarMenuItem key={menuItem.path} {...menuItem} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
