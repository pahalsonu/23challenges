var readlinesync= require("readline-sync");
var input= Number(readlinesync.question("Enter Any Number:"))
var leftrotation= Number(readlinesync.question("Enter Left Rotation value:"))
var rightrotation= Number(readlinesync.question("Enter Left Rotation value:"))
if(input===1){
   console.log(input) 
 }
else{
var leftshift = Number(input << leftrotation)
var rightshift=Number(input >> rightrotation)

console.log("NUMBER After Left Rotation"+" "+ leftshift)
console.log("NUMBER After Right Rotation"+" "+ rightshift)
}