import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  let a=10;
  let str="xyz"
  let obj={
    name:"xy",
    age:20

  }
  let arr=[0,1,2,3]

   let img1="https://cdn.pixabay.com/photo/2019/05/24/21/55/cat-4227330_1280.jpg";
  let img2="https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_1280.jpg";
  let img3="https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_1280.jpg";
  

  return ( 
    <>
     <h1>hello to react world</h1>
     
    {/* <Home a={a} str={str} obj={obj} arr={arr}/>*/}

    
    </>
  )
}

export default App
