import React, { useContext } from 'react'
import { colorContext, nameContext } from '../App'

function ChildB() {

    // let obj=useContext(nameContext);
    // let color=useContext(colorContext);
    let {count}=useContext(countContext)
  return (
    <div>
      {/*Name is :{name} <br />
      objrct value are <br />
      name is :{obj.name} <br />
      age is :{obj.age}  <br />
      array elements are :{obj.arr[1]*/}

      {/* color is {color} */}
    </div>
  )
}

export default ChildB
