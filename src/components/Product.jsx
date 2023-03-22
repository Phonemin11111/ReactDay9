import React from 'react'
import { StateContextCustom } from '../context/StateContext';

const Product = (props) => {
    const {id, image, description, title, price} = props;
    const {dispatch} = StateContextCustom()
  return (
    <div>
      <div className=' w-[285px] shadow rounded flex flex-col p-7'>
        <img src={image} className='max-w-[150px] h-[150px]'/>
        <div>
            <h2 className='text-gray-500 text-2xl font-semibold'>{title.substring(0,25)}...</h2>
            <p>${price}</p>
            <button onClick={() => dispatch({type:"ADD_TO_CART", payload:props})} className='mr-2 px-6 py-2 bg-teal-500 rounded shadow text-white'>Add to cart</button>
            <button className='px-6 py-2 bg-teal-500 rounded shadow text-white'>Detail</button>
        </div>
      </div>
    </div>
  )
}

export default Product
