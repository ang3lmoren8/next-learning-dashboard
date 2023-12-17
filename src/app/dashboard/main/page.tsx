import { Metadata } from 'next'
import WidgetsGrid from "@/components/WidgetsGrid/WidgetsGrid";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'App dashboard',
}

const DashboardMainPage = () => {
  return (
    <div className='flex flex-col items-center justify-center  h-full'>
      <h1 className='text-3xl font-bold'>Main page</h1>
      <h2 className='text-lg text-gray-600'>General info</h2>

      <WidgetsGrid />
    </div>
  )
}

export default DashboardMainPage
