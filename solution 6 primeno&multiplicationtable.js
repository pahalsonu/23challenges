var readlinesync= require("readline-sync");
function fun(input){
    var input=Number(readlinesync.question("Enter Any Number:"));
      if(input===1||input===2||input===3||input===5||input===7){
      console.log(input+" is prime")
       for(i=1;i<11;i++){
        var a = input+"x"+i+"="+input*i
       console.log(a)}
        }
     else if(input%2===0||input%3===0||input%5===0||input%7===0){
      console.log(input+" is not prime number")
      fun()}
      else{console.log(input+' is  prime')
      for(i=1;i<11;i++){
        var a = input+"x"+i+"="+input*i
       console.log(a)
      
      }
      }}
     fun()
    