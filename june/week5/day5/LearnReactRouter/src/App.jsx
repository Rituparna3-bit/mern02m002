import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './compnents/Home'
import About from './compnents/About'
import Service from './compnents/Service'
import Contact from './compnents/Contact'
import Navbar from './compnents/Navbar'
import Login from './compnents/Login'
import Register from './Register'
import FetchID from './FetchID'

function App() {
 

  return (
    <>
    <strong>Welcome to React Router world</strong>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
       <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/byId/:id' element={<FetchID/>}></Route>

    </Routes>
     
    </>
  )
}

export default App
