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
import Jewelery from './components/Jewelery'

function App() {
  const [apparel, setApparel] = useState("")
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(setItems)
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<Home items={items} setItems={setItems}/>}/>
          <Route path='/mens_apparel' element={<Mens_Apparel apparel={apparel} setApparel={setApparel} items={items} setItems={setItems}/>}/>
          <Route path='/womans_apparel' element={<Womans_Apparel apparel={apparel} setApparel={setApparel} items={items} setItems={setItems}/>}/>
          <Route path='/jewelery' element={<Jewelery apparel={apparel} setApparel={setApparel} items={items} setItems={setItems}/>}/>
          <Route path='/electronics' element={<Electronics apparel={apparel} setApparel={setApparel} items={items} setItems={setItems}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
