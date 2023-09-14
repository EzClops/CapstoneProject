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
import PlaceOrder from './components/PlaceOrder'

function App() {
  const [apparel, setApparel] = useState("")
  const [items, setItems] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [item, setItem] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [product, setProduct] = useState([]);
  const [cartPage, setCartPage] = useState(false);
  const [checkoutPage, setCheckoutPage] = useState(false);
  const[submitAddress, setSubmitAddress] = useState(false);
  const[submitPayment, setSubmitPayment] = useState(false);
  const [error, setError] = useState(null)
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar homePage={homePage} setHomePage={setHomePage} token={token} cartPage={cartPage} setCartPage={setCartPage} checkoutPage={checkoutPage} setCheckoutPage={setCheckoutPage} submitAddress={submitAddress} submitPayment={submitPayment} setError={setError}/>}>
          <Route path='/' element={<Home items={items} setItems={setItems} homePage={homePage} token={token}/>}/>

          {/* Product Route */}
          <Route path="/men's clothing" element={<Mens_Apparel setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path="/women's clothing" element={<Womans_Apparel setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path='/jewelery' element={<Jewelery setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path='/electronics' element={<Electronics setApparel={setApparel} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage} setItem={setItem}/>}/>
          <Route path='/itempage' element={<ItemPage item={item} setItem={setItem} items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>}/>
          {/* End of Product Route */}

          {/* Login/Logout/Register Route */}
          <Route path='/login' element={<Login token={token} setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword} error={error} setError={setError}/>}/>
          <Route path='/logout' element={<LogOut setToken={setToken} setHomePage={setHomePage} setItem={setItem} setItems={setItems} setApparel={setApparel} setUsername={setUsername} setSubmitAddress={setSubmitAddress} setSubmitPayment={setSubmitPayment}/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* End of Login/Logout/Register Route */}

          {/* Cart Route */}
          <Route path='/cart' element={<Cart product={product} setProduct={setProduct} error={error}/>}/>
          <Route path='checkout' element={<Checkout item={item} setItem={setItem} product={product} setCartPage={setCartPage} setCheckoutPage={setCheckoutPage} submitAddress={submitAddress} setSubmitAddress={setSubmitAddress} submitPayment={submitPayment} setSubmitPayment={setSubmitPayment} error={error} setError={setError}/>}></Route>
          <Route path='placeorder' element={<PlaceOrder/>}/>
          {/* End of Cart Route */}
        </Route>
      </Routes>
      
    </>
  )
}

export default App
