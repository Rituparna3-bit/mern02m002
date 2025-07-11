import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ChildA from './compnents/ChildA';
// let nameContext=createContext();
// let colorContext=createContext();

let valueContext=createContext();

function App() {



//use state

let [count,setCount]=useState(0)


// function handleClick(){
//   setValue(value+1)

// }


  // let obj={
  //   name:"xyz",
  //   age:20,
  //  arr:[1,2,3,4,5]
  // }

  
  
  //to crreate a context object
  //step1: create a context object by using a method create context
  //step2: give a provider to the context object
  //step3: give the value to the context object provider
  //step4: export the context object
  
  //how to access inside the child component
  //by using useContext() hook we can get the value from the cointext object

  return (
    <>
    {/* <nameContext.Provider value={obj}>
      <ChildA/>
    </nameContext.Provider>
    <colorContext.Provider value={"red"}>
     <ChildA/>
    </colorContext.Provider> */}

    <h1>Count : {value}</h1>
    <br />
    

<valueContext.Provider>
  <button onClick={()=>setValue(value+1)}>Increment</button>

</valueContext.Provider>
     
    </>
  )
}

export {valueContext}
export default App
