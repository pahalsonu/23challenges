var readlinesync= require("readline-sync");



 function check(){
  var input= Number(readlinesync.question("Enter Any Number:"))

var a=0
var arr=[]
var trueornot=[]
 
for(i=1;i<input;i++){
if(input===(2+13*(i+a))){
  trueornot.push(i)}
a=a+i}
var b=trueornot[0]+1

if(trueornot.length===0){
 return check()
}
 
else{
  var a=0
for(i=0;i<b;i++){
arr.push(2+13*(i+a))
a=a+i
}
}
console.log(arr)
 }
 check()