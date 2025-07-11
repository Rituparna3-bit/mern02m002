import React, { useEffect } from 'react'

function Home() {

    useEffect(()=>{
        async function fetchData() {
          let resp=await fetch("");  
          
        }
      
    },[])
  return (
    <div>
      <h1>this is my home page</h1>
    </div>
  )
}

export default Home
