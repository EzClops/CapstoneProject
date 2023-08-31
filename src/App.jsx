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
import ItemPage from './components/ItemPage'

function App() {
  const [apparel, setApparel] = useState("")
  const [items, setItems] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [item, setItem] = useState(null);
  // console.log(setItems)
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar homePage={homePage} setHomePage={setHomePage}/>}>
          <Route path='/' element={<Home items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>}/>
          <Route path='/mens_apparel' element={<Mens_Apparel apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path='/womans_apparel' element={<Womans_Apparel apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path='/jewelery' element={<Jewelery apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path='/electronics' element={<Electronics apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/itempage' element={<ItemPage item={item} setItem={setItem} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
