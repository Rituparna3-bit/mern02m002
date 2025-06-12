//this is function declaration

function print(){
    console.log("this is my function")
}
//function invocation/calling
// print()

//expression function
// let printQlith=function(){
  //  console.log("this is my expression function")
 //}
 //printQlith()
// console.log(printQlith)

//function with parameter
//let add=function(a,b){
  //  return a+b;
//}
//let sum=add(10,20)
//console.log(sum)
//console.log(add)

//let sub=()=>{    //way of declaration of function
  //  console.log("this is my arrow function")
//}
//sub()
//console.log(sub)


//higher order function
//function hof(a,b,task){

  //  return task(a,b)
//}

//let addNum=hof(10,20,(x,y)=>{
  //  return x+y;
//})
//console.log(addNum)


 //count the vowel of  a string using function
//let newString=prompt("enter some string :");
//function checkVowel(str){
    //let newStr=str.toLowerCase();
    //let count=0;

    //using for loop for simple checking
    //for(let e of newStr){
      //  if(e === "a" || e==="i" || e==="e" || e==="o" || e==="u")
        //    count++;
    //}

    //using includes method
    //for(let e of newStr){
      //  if("aeiou".includes(e)){
        //    count++;
        //}
    //}
    //return count;
//}
//console.log("No of vowels is :",checkVowel(newString))


//let arr=[1,2,3,4,5,6,7,8]
//arr.forEach((v,idx)=>{
//console.log(`in index ${idx} value is :${v} array ${arr}`)
//let count=0;
//if(v%2==0){
  //  count++
//}
//})
//console.log(count)


//let strArr=["pagal","dasu","sabya","hvhbj","gguhkhk"]
//let countStartWiths=0;

//strArr.forEach((v) => {       //for each is a higher order function     //arr.foreach(callback function )
  //  if(v.startsWith("s")){
    //    countStartWiths++;
    //}
    
//});

//console.log("ans is :",countStartWiths)

//let numArr=[1,2,3,4,5];
//let modifiedArr=numArr.map((v)=>{
 //   return v+1;
//})
//console.log(modifiedArr)


//filter method

//let filterData=numArr.filter((v)=>{
  //  return v%2===0;

//})
//console.log(filterData)

//this is reduce method 
//let sumOfNumber=numArr.reduce((accu,curr)=>{
  //  return accu+curr;
//},0)
//console.log("sum is:",sumOfNumber)


//Question 1
let numArr=[10,29,35,64,55];
let filterData=numArr.filter((v)=>{
    return v>=50;

})
console.log(filterData)


//Question 2
let n=prompt("enter a number");

let from1toN=[];

for(let i=1;i<=n;i++){
    from1toN.push(i);
}
console.log(from1toN)

let sumfrom1toN=from1toN.reduce((accu,curr)=>{
    return accu+curr;
})

let mulfrom1toN=from1toN.reduce((accu,curr)=>{
    return accu*curr;
})
console.log("summation is :",sumfrom1toN);
console.log("multiplication is :",mulfrom1toN);
