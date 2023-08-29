import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Cart from './components/Cart'
import Register from './components/Register'
import Home from './components/Home'
import Mens_Apparel from './components/Mens_Apparel'
import Womans_Apparel from './components/Womans_Apparel'
import Electronics from './components/Electronics'
import Accessories from './components/Accessories'

function App() {
  const [apparel, setApparel] = useState("")
  const [items, setItems] = useState([]);

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/mens_apparel' element={<Mens_Apparel apparel={apparel} setApparel={setApparel} items={items} setItems={setItems}/>}/>
          <Route path='/womans_apparel' element={<Womans_Apparel/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
