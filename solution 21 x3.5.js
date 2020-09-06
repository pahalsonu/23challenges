var readlinesync= require("readline-sync");
var input= Number(readlinesync.question("Enter Any Number:"))


if(input===1){
   console.log(input) 
 }
else{
var leftshift = Number(input << 1)
var rightshift=Number(input >> 1)
var sum=leftshift+rightshift+input

console.log("NUMBER X 3.5"+" "+ sum)
}