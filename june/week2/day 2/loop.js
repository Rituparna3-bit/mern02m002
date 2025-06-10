//let age=prompt("enter you age");
//if(age>=18){
//console.log("he/she can eligible for voting")
//}
//else{
  //  console.log("can not eligible")
//}

let stMark=40;
if(stMark>=90){
    console.log("Grade A")
}else if(stMark>=80){
    console.log("Grade B")
}else if(stMark>=60 ){
    console.log("Grade C")
}else{
    console.log("Fail")
}

//ternary operator

//let stage=16;
//console.log(stage>=18 ? "can vote" :"can't vote")
// check the number is divisible 5 using prompt
//let n=prompt("enter a num")
//if(n%5==0){
  //  console.log(n," num is divisible by 5")
//}else{
  //  console.log(n," num is not divisible by 5")
//}

//loops
//1.for loop
//2.while loop
//3.do-while loop

for(let i=1;i<=10;i++){
    console.log(i)
}

console.log("while loop")
let i=1;
while(i<=5){
    console.log(i)
    i++;
}

console.log("do while loop")
let n=1;
do{
    console.log(n)
    n++;
} while(n<=15);


//object
let obj={
    name:"xyz",
    age:30,
    phone:9086,
    email:"xyz@gmail.com"
}
console.log(obj.name)
console.log(obj.age)
console.log(obj["email"])  // above 2 method used to print object
console.log(obj.jd)
obj.name="y"
console.log(obj.name)


let arr=[1,2,3,4,5];
//console.log(typeof arr)


//for-in

for(const key in obj){      // const for variable declaration
    console.log(obj[key])
}

for(let idx in arr){
    console.log(arr[idx])
}


//for-of
console.log("for-of loop")
for(const e of arr){
    console.log(e)
}


//for(const e of obj){
  //  console.log(e)
// }


let str="Qlith innovation"
console.log(" length is :",str.length)

console.log(str[0])

str[0]="D";
console.log(str)


//interpolation of string
let c=20;
console.log("value is :",(c+1));
console.log(`value is : ${c}+1`);   