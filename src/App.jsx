import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddtoCart from './components/AddtoCart'
import Navbar from './components/Navbar'
import Products from './components/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/AddtoCart' element={<AddtoCart/>}/>
      </Routes>
    </div>
  )
}

export default App

