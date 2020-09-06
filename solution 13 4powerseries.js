var readlinesync= require("readline-sync");
var input= Number(readlinesync.question("Enter Any Number:"))

var arr=[]
for(i=0;i<input;i++){
  if(input===Math.pow(4,i)){
    console.log("Yes")
    arr.push(i)
  }
 }
 if(arr.length===0){
   console.log("No")
 }
