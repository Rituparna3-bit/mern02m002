import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {

 let [count,setCount]=useState(0)







//  //useEffect

//  useEffect(() => {
//    first
 
//    return () => {
//      second
//    }
//  }, [third])
 

//case1
//use effect will execute at every render
// useEffect(()=>{
//   alert("use effect trigger")
// })/

//case2
//it will execute at first render only

// useEffect(()=>{
//   alert("use effect trigger at first render")
// })
  
//case3
//it will give the return when the componemt is unmounted
// useEffect(()=>{
//   alert("value updated")
//   return ()=>{
//     alert("value unmounted")
//   }
// })

// //case4
// //it will execute based on dependency
// useEffect(()=>{
//   alert("based on top")
// },[count,total])

  return (
  
    <>
      {/* <h1>Heyyy</h1>
      <strong>Count :{count}</strong><br />
      <button onClick={()=> setCount(count+1)}>Inc</button>
      <br />
      <button onClick={()=>setTotal}></button> */}
      <Home/>
    </>
  )
}

export default App
