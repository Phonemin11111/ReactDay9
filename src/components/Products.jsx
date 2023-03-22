import React from 'react'
import { StateContextCustom } from '../context/StateContext'
import Product from './Product'

const Products = () => {
  const {state : {products}} = StateContextCustom()
  return (
    <div className='flex flex-wrap gap-10 mt-20 justify-center'>
      {products?.map(pd => {
        return (
          <Product key={pd.id} {...pd}/>
        )
      })}
    </div>
  )
}

export default Products
