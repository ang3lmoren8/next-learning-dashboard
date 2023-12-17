import { Metadata } from 'next'
import CartCounter from "@/components/CartCounter/CartCounter";

export const metadata: Metadata = {
  title: 'Counter page',
  description: 'Easy counter',
}

const DashboardCounterPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h4>Cart products</h4>
      <CartCounter />
    </div>
  )
}

export default DashboardCounterPage
