var readlinesync= require("readline-sync");
var input= Number(readlinesync.question("Enter Any Number:"))

if(input%10===0){
    var leftshift = Number(input << 3)+Number(input << 1)
 }
else{
var leftshift = Number(input << 3)


}
console.log("Result"+" "+ leftshift)