'use client'
import { useAppDispatch, useAppSelector } from '@/store/appStore.types'
import { selectCounter } from '@/store/counter/counterSelectors'
import {
  decrement,
  increment,
  initCounter,
} from '@/store/counter/counterSlice'
import { useEffect } from 'react'
import { getCounterDefaultValue } from '@/appApi/counterApi'

const CartCounter = () => {
  const counter = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getCounterDefaultValue().then((res) => {
      dispatch(initCounter(res.counter))
    })
  }, [dispatch])

  const add = () => {
    dispatch(increment())
  }

  const subtract = () => {
    dispatch(decrement())
  }

  return (
    <>
      <span className='text-9xl'>{counter}</span>
      <div className='flex gap-2'>
        <button
          onClick={add}
          className='p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
        >
          +1
        </button>
        <button
          onClick={subtract}
          className='p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
        >
          -1
        </button>
      </div>
    </>
  )
}

export default CartCounter
