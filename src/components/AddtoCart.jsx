import React, { useEffect, useState } from 'react'
import { StateContextCustom } from '../context/StateContext'
import Cart from './Cart'

const AddtoCart = () => {
    const {state:{cart}} = StateContextCustom()
    const [mainTotal, setMainTotal] = useState(0)
    useEffect(() => {
      setMainTotal(total)
    },[])

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price)
  }
  const total = {} = cart?.reduce((pv, cv) => pv + cv.price, 0)
  return (
    <div>
      <div className='flex flex-col mt-20'>
        {cart?.map(item => {
            return (
                <Cart key={item.id} item={item} increaseTotal = {increaseTotal}/>
            )
        })}
        </div>
        <hr className='w-[70%] mx-auto'/>
        <div className='flex justify-around'>
          <h2>Total</h2>
          <p>{mainTotal.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default AddtoCart
