'use client'

import { SimpleWidget } from '@/components/SimpleWidget/SimpleWidget'
import { IoCalculatorOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store/appStore.types'
import { selectCounter } from '@/store/counter/counterSelectors'

const WidgetsGrid = () => {
  const counter = useAppSelector(selectCounter)

  return (
    <div className='mt-8'>
      <SimpleWidget
        title={counter}
        label='Counter'
        subtitle='Connected to redux'
        icon={<IoCalculatorOutline size={50} />}
        href='/dashboard/counter'
      />
    </div>
  )
}

export default WidgetsGrid
