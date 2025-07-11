import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    let navigate=useNavigate()
    function handleClick(){
        navigate('/about')
    }
  return (
    <div>
      <h1>this is my home page</h1>
      <button onClick={handleClick}>go to about page</button>

    </div>
  )
}

export default Home
