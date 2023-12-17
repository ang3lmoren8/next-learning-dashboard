'use client'
import { useState } from 'react'

const CartCounter = () => {
  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter((prev) => prev + 1)
  }

  const subtract = () => {
    setCounter((prev) => prev - 1)
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
