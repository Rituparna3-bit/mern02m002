import React from 'react'

function Home(props) {
  return (
    <div>
        value is :{props.a} <br />
        the string value is :{props.str}
        <br />
        the object value are 
        <br />
        name :{props.obj.name}
        <br />
        age :{props.obj.age}
        <br />

       Array elements are :{props.arr[1]}
        
        

      <h1>this is my home page</h1>
    </div>
  )
}

export default Home
