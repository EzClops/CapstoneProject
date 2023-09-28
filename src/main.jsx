import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import LoginDog from './LoginDog.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        {/* <Route path='/login' element={<Login/>}/> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
