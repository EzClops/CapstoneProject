import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Cart from './components/Cart'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
