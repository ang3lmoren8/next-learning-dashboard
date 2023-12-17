import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased selection:bg-indigo-600 selection:text-white'>
      <div className='flex'>
        <Sidebar />
        <div className='p-2 w-full'>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
