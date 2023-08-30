import { useState } from 'react'
import Home from './components/Home'
import Menu from './components/Menu'
import Cart from './containers/Cart'
import {Routes,Route} from 'react-router-dom'
import Signup from './containers/Signup'
import Login from './containers/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
