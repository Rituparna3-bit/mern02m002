import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <Navbar/>
          
      

     <h1>welcome to react world</h1>
     <Home/>
     
    </div>
  )
}

export default App
