var readlinesync= require("readline-sync");

function oddevenstring(input){
 
    var input= (readlinesync.question("Enter Any String:"));
    var oddstr=""
    var evenstr=""
    for(i=0;i<input.length;i=i+2){
    oddstr =oddstr.concat(input[i])
    }
     
    for(i=1;i<input.length;i=i+2){
    evenstr =evenstr.concat(input[i])
    }
      var finaloddstr="000"+oddstr+"111"
      var finalevenstr="000"+evenstr+"111"
     
    console.log(finaloddstr)
    console.log(finalevenstr)}
     
    oddevenstring()
    