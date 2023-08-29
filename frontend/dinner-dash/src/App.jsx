import { useState } from 'react'
import Home from './components/Home'
import Menu from './components/Menu'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
    </Routes>
  )
}

export default App
