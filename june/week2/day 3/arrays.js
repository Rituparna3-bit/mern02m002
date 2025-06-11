console.log("Hello array")

let a=20;
console.log("the value of a is :",a+1)
console.log(`the value of a is :${a+1}`)

let str="WELCOME";
console.log(str[1]);
str[0]="D";
console.log(str)

console.log(str.length);

const newstr=str.toLocaleLowerCase();
console.log(newstr)
console.log(str.toUpperCase())

console.log("after trim :",str.trim().length);
console.log("here trim not applicable",str.length);

console.log(str.charAt(0));

console.log(str.concat(" Qlith").concat(" Innovation"));

const newString=str.replace("w","D")
console.log(newString);

console.log(str.slice(0,str.length));
console.log(str.slice(-2));
console.log(str.slice(4,4));

//const UserName=prompt("enter ypur name");
//console.log("".concat("@").concat(UserName).concat(UserName.length));

//console.log(str.substring(-2));

//console.log(str.substring(0,str.length))

//Arrays

let starr=["babul","sagar","gujuhik","prangya","ytjbb"];
console.log(starr[0])

for(let e of starr){
    console.log(e)
}

let numArr=[2,3,4,5,6,7];
let sum=0;
for(let e of numArr){
    sum=sum+e;
}
console.log(sum/numArr.length)

//const addEle=numArr.push(8)
//console.log(addEle)

let arr2=[1,2,3,4,5];
let arr3=[6,7,9]
arr2.push(6,7,"ghggujj");
console.log(arr2)
arr2.pop()

console.log(arr2)

console.log(arr2.toString())
console.log(arr2.concat(arr3))

arr2.unshift(0)
console.log(arr2)
arr2.shift();
console.log(arr2)

console.log(arr2.slice(0,4))
console.log(arr2.slice(-2))

arr2.pop()
console.log(arr2)
arr2.splice(1,2,10)
console.log(arr2)
arr2.splice(4,1)
console.log(arr2)

console.log(arr2.includes(11));   //it show if the element is in the array then it give true or false
console.log(arr2.reverse())

//console.log("Qlith".split("'"));

let arr4=["bloomberg","microsoft","uber","google","IBM","netflix"];
console.log(arr4)
arr4.shift(0);
console.log(arr4)
arr4.splice(1,1,"ola")
console.log(arr4);
arr4.push("Amazon")
console.log(arr4)