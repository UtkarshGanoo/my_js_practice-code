// const prompt = require("prompt-sync")();
// let age = prompt("what is age ");
//   age = Number.parseInt(age);

//   // Check if the age is between 10 and 20
//   if (age > 10 && age <= 20) {
//     console.log("Your age is between 10 and 20");
//   }
//    else {
//     console.log("Your age is not between 10 and 20");
//   }
  //console.log("you are in ",(age<20) ? "man": "older");

  /*const prompt = require('prompt-sync')();
  let a = prompt("enter your number");
a= Number.parseInt(a);
if (a%2==0 || a%3==0){
  console.log("your no is divisible by 2")
}
else{
  console.log("your no id divisible by 2")
}*/
const prompt = require('prompt-sync')();
let n;
n = prompt("enter the value of n ");
n=Number.parseInt(n);
for(let i=0; i<=10; i++){
  sum =n*i;
  
  console.log((i),"*",(n),"=",sum);
}
// console.log("i " +n+ "n" ,sum);

