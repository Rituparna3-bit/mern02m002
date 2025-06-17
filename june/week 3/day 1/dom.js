//window.document.write("Qlith")
//console.error("this is error")
//let heading1=document.getElementById("heading1");
//heading1.innerText="Bye Bye"
//console.log(heading1)
//let div=document.getElementsByClassName("box")
//console.log(div)

//let secondDiv=document.getElementsByClassName("box")[1];
//console.log(secondDiv)
//let h2coll=secondDiv.children;
//console.log(h2[0])
//console.log(h2coll[1])
//h2coll[1].innerHTML="<i>this is italic</i>"
//console.log(h2coll[1])


//let para=document.getElementsByTagName("p")
//console.log(para)

//let box=document.querySelectorAll(".box");
//console.log(box[1])

//let box1Data=box[1].children;
//console.log(box1Data[0].getAttribute("style"))
//box1Data[0].setAttribute("style","visibility: none")
//console.log(box1Data[0])

//h2coll[1].style="color:red;background:aqua"

let inputs=document.querySelectorAll("input")


let btn=document.querySelector("button")
console.log(btn)

btn.addEventListener('click',()=>{
  console.log(inputs[0].value)
console.log(inputs[1].value)  


let userObj={
    fullName:inputs[0].value,
    age:inputs[1].value
}

localStorage.setItem("user",JSON.stringify(userObj));
})




let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
})

let div=document.querySelector("#createEle");
console.log(div)

let p=document.createElement("p")
p.innerText="this is my paragraph";
console.log(div)

div.appendChild(p);
console.log(div)