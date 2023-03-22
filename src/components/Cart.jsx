import React, { useState } from 'react'
import {BsArrowDownCircle, BsArrowUpCircle} from 'react-icons/bs'

const Cart = ({item, increaseTotal}) => {
  const [quantity, setQuantity] =useState(1)
  const increaseQTY = () => {
    setQuantity(quantity+1)
    increaseTotal(item.price)
  }
  const decreaseQTY = () => {
    if (quantity > 1) {
    setQuantity(quantity-1)
  }}
  const oneItemPrice = item.price * quantity
  return (
    <div className='flex justify-around mb-5'>
      <div className='flex gap-7 items-center'>
        <img src={item.image}  className='max-w-[100px] h-[100px]' alt="" />
        <div>
        <p className='text-gray-500 font-semibold'>{item.title.substring(0,25)}...</p>
        <p>${oneItemPrice.toFixed(2)}</p>
        <p className=' cursor-pointer text-red-500'>Remove</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p onClick={increaseQTY} className=' cursor-pointer'><BsArrowUpCircle className='text-2xl'/></p>
        <p className=' text-2xl'>{quantity}</p>
        <p onClick={decreaseQTY} className=' cursor-pointer'><BsArrowDownCircle className='text-2xl'/></p>
      </div>
    </div>
  )
}

export default Cart
