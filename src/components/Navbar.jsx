import React from 'react'
import {FiShoppingCart} from "react-icons/fi"
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../context/StateContext'

const Navbar = () => {
    const {search, setSearch,state:{cart}} = StateContextCustom()
  return (
    <div className='flex justify-around shadow rounded p-10 items-center'>
      <Link to={'/'}>
      <h2>Shop</h2>
      </Link>
      <div className='flex gap-5'>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} className=' outline-none border-b-2 border-b-gray-500 bg-transparent' />
        <Link to={'/AddtoCart'}>
        <div className='relative'>
            <FiShoppingCart className=' text-3xl'/>
            <span className='absolute bottom-4 left-5 text-2xl flex items-center text-white h-6 w-6 bg-cyan-300 p-1 rounded-[100%]'>{cart.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
