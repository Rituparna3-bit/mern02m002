//console.log("welcome")

//let a=1
//let A=2
//let a=2
//console.log(a)
//console.log(A)


let d=30.5;
console.log(typeof d)

// global declaration of variable
var fullName="Qlith"
console.log(fullName)

{
    console.log(fullName)
}

function getName(){
    console.log(fullName)
}

getName()

//normal block

//this is my block label declaratuion
{
    var a=40;
    console.log("block level declaration of variable",a)
}
console.log("local access :",a)

function getA(){
    console.log("fuction level declaration",a)

}
getA();

function variableDeclare(){

}

//!global level declaration
//let name="Innovation";
//console.log(name)
//{
  //  console.log(name)
//}
//function getName(){

    //console.log(name)
//}
//getName()

//block level declaration

//{
  //  let a=30;
    //console.log(a)
//}

//console.log("local access :",a)

//function getA(){
  //  console.log("function level declaration",a)
    //console.log(name)
//}
//getA()

//const name="xyz";
//console.log(name)
//{
  //  console.log(name)
//}

//function getName(){
  //  console.log(name)
//}

//{
  //  const a=70;
    //console.log(a);
//}
//console.log(a)

//var a=60;
//console.log(a)
//a=40;
//console.log(a)
//a="y";
//console.log(a)

//var a=30;
//console.log(a)

//let a=50;
//console.log(a)
//a=80;
//console.log(a)

//const s="String";
//console.log(s)
//s="Rohan";
//console.log(s)

//const s="xyz";
//console.log(first)

//Difference between var,let,const
//redclaration
//let-not possible
//var - possible
//const- not possible

//Reinitialization
//var -possible
//let-possible
//cont-not possible

//only declaration possible
//var - possible
//let - possible
//const - not possible



//way of declaration and Access

//global declaration 
//var
//local access :var - access
//block access :access
//function access :access

//let
//local access :- access
//block access :access
//function access :access

//const
//local access : access
//block access :access
//function access :access 



//block level declaration
//var
//local access :var - access
//block access :access
//function access :access 

//let
//local access :not access
//block access :access
//function access :not access 

//const
//local access :not access
//block access :access
//function access :not access 



//function level declaration
//var
//local access :var - not access
//block access not possible
//function access :access 

//let
//local access :not access
//block access :access
//function access :not access 

//const
//local access :not access
//block access :not access
//function access : access 
