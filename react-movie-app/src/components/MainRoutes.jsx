import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Signup from '../pages/Signup/Signup'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Login/login'
import PerviewPage from './PerviewPage'

function MainRoutes() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:id' element={<PerviewPage/>}/>

        </Routes>
      
    </div>
  )
}

export default MainRoutes
