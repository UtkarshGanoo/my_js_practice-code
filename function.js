//first function program
/*function addnum(a,b){
    return a+b;
}

let a = 10;
let b = 20;
console.log("the sum fo no is",addnum(a,b));*/




// loops and function practice

//  que 1

/*let obj = {
    harry :'80',
    rohan : '70',
    aakash :'60',
}
for(let b in obj ){
    console.log("marks of" + b + "is" +obj[b]  );
}*/


// que 2 
/*
const prompt=require('prompt-sync')();
let n;
let i=10;
n=Number.parseInt(n);
while(n!=i){
    console.log("try again !")
n=prompt("Enter The Vlaue Of n"); 
}
console.log("you have enter correct no. of n );
*/


// que 3

/*
const mean = (a,b,c,d,e)=>{

    return (a+b+c+d+e)/5;
}
console.log(mean(5,6,7,8));*/
/*
let my_game = (num) =>{
//   return let prompt = require('prompt-sync')();
  let number;
  let guess = Math.floor(Math.random() * 100);
  let attmp=0;
  number=Number.parseInt(number);
  
  while(number!=guess ){                       
      number= prompt("Enter The Number");
  
  
      if(number > guess){
          console.log ("your no is grater then guess");
          attmp++;
      } 
      else if (number < guess){
          console.log("your no is less then guess");
          attmp++;  
      }
      else if (number==guess){
          console.log("congratulation! your guess is right ",attmp);
      }  
  }
  
}

console.log(my_game)*/

