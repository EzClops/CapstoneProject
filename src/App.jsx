/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AppContext from './components/GetFunctions/AppContext'
import NavBar from './components/Navigation/NavBar'
import Home from './components/Navigation/Home'
import Login from './components/LoginRegister/Login'
import Register from './components/LoginRegister/Register'
import LogOut from './components/LoginRegister/LogOut'
import Cart from './components/Carts/Cart'
import Checkout from './components/Carts/Checkout'
import PlaceOrder from './components/Carts/PlaceOrder'
import Mens_Apparel from './components/Products/Mens_Apparel'
import Womans_Apparel from './components/Products/Womans_Apparel'
import Electronics from './components/Products/Electronics'
import Jewelery from './components/Products/Jewelery'
import ItemPage from './components/Products/ItemPage'
import { getAllProducts } from './API/apiCalls'

// import TextField from "@mui/material/TextField";

function App() {
  const [apparel, setApparel] = useState("")
  const [items, setItems] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [item, setItem] = useState(null);
  const [quantity_User_Cart, set_Quantity_User_Cart] = useState(0)
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartPage, setCartPage] = useState(false);
  const [checkoutPage, setCheckoutPage] = useState(false);
  const[submitAddress, setSubmitAddress] = useState(false);
  const[submitPayment, setSubmitPayment] = useState(false);
  const [error, setError] = useState(null)
  const [getProducts, setGetProducts] = useState(null);
  const [total, setTotal] = useState(0);
  
  const userCartId = 1;

  const value = {
    apparel,
    setApparel,
    items,
    setItems,
    homePage,
    setHomePage,
    item,
    setItem,
    quantity_User_Cart,
    set_Quantity_User_Cart,
    token,
    setToken,
    username, 
    setUsername, 
    password, 
    setPassword, 
    loading, 
    setLoading, 
    cartPage, 
    setCartPage, 
    checkoutPage, 
    setCheckoutPage, 
    submitAddress, 
    setSubmitAddress, 
    submitPayment, 
    setSubmitPayment, 
    error, setError, 
    getProducts, 
    setGetProducts, 
    userCartId, 
    total,
    setTotal
  }

  useEffect(() => {
    async function compareSearch_Title(){
      try{
          const allProducts = await getAllProducts();
          setGetProducts(allProducts)
          localStorage.setItem("allLocalProducts", JSON.stringify(allProducts))

      }catch(error){
          console.error(error.message)
      }
    }
    compareSearch_Title()
    setLoading(false)
  },[])

  return (
    <>
      {loading ? <p>Loading...</p> : 
      (<>
        <AppContext.Provider value={value}>
          <Routes>
            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>

              {/* Product Route */}
              <Route path="/men's clothing" element={<Mens_Apparel/>}/>
              <Route path="/women's clothing" element={<Womans_Apparel/>}/>
              <Route path='/jewelery' element={<Jewelery/>}/>
              <Route path='/electronics' element={<Electronics/>}/>
              <Route path='/itempage' element={<ItemPage/>}/>
              {/* End of Product Route */}

              {/* Login/Logout/Register Route */}
              <Route path='/login' element={<Login/>}/>
              <Route path='/logout' element={<LogOut/>}/>
              <Route path='/register' element={<Register/>}/>
              {/* End of Login/Logout/Register Route */}

              {/* Cart Route */}
              <Route path='/cart' element={<Cart/>}/>
              <Route path='checkout' element={<Checkout/>}/>
              <Route path='placeorder' element={<PlaceOrder/>}/>
              {/* End of Cart Route */}
            </Route>
          </Routes> 
          
        </AppContext.Provider>
      </>)}
    </>
  )
}

export default App