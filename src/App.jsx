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
import LogOut from './components/LogOut'
import Checkout from './components/Checkout'

function App() {
  const [apparel, setApparel] = useState("")
  const [items, setItems] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [item, setItem] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ pId, setPId] = useState(null)
  const [cartPage, setCartPage] = useState(false);
  // console.log(setItems)
  // sessionStorage.
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar homePage={homePage} setHomePage={setHomePage} token={token} setToken={setToken} usrname={username} cartPage={cartPage} setCartPage={setCartPage}/>}>
          <Route path='/' element={<Home items={items} setItems={setItems} homePage={homePage} token={token} setCartPage={setCartPage}/>}/>
          <Route path='/mens_apparel' element={<Mens_Apparel apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem} token={token} setToken={setToken}  setCartPage={setCartPage}/>}/>
          <Route path='/womans_apparel' element={<Womans_Apparel apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}  setCartPage={setCartPage}/>}/>
          <Route path='/jewelery' element={<Jewelery apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}  setCartPage={setCartPage}/>}/>
          <Route path='/electronics' element={<Electronics apparel={apparel} setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}  setCartPage={setCartPage}/>}/>
          <Route path='/login' element={<Login token={token} setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword} setCartPage={setCartPage}/>}/>
          <Route path='/logout' element={<LogOut setToken={setToken} setHomePage={setHomePage} setItem={setItem} setItems={setItems} setApparel={setApparel} setUsername={setUsername} setCartPage={setCartPage}/>}/>
          <Route path='/cart' element={<Cart item={item} setItem={setItem} setCartPage={setCartPage}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/itempage' element={<ItemPage item={item} setItem={setItem} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>}/>
          <Route path='checkout' element={<Checkout/>}></Route>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
