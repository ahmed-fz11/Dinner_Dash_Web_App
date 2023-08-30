import { useState } from 'react'
import Home from './components/Home'
import Menu from './components/Menu'
import Cart from './containers/Cart'
import {Routes,Route} from 'react-router-dom'
import Signup from './containers/Signup'
import Login from './containers/Login'
import UserOrders from './containers/UserOrders'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/orders" element={<UserOrders/>} />
    </Routes>
  )
}

export default App
