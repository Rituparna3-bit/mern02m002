// console.log("event handling")

let button=document.getElementById("btn");
console.log(button)

// button.onclick=()=>{
//      alert("button clicked")
//      button.style.background="black"
//  }

//  button.onclick=()=>{
//      alert("button clicked")
//      button.style.background="white"
//  }


 


// let callback=()=>{
//     console.log("button clicked")
// }




// button.addEventListener("click",callback)
      
//button.removeEventListener("click",callback)


let color="light";
button.addEventListener("click",()=>{
    if(color=="light"){
        console.log("color")
        document.body.style.background="black"
        color="dark"
    }else{
        console.log(color)
        document.body.style.background="white"
        color="light"
    }
})