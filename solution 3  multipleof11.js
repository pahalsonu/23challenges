const { request } = require("express");

var readSync = require('readline-sync');
 
function multiple(){
  
    var a = Number(readSync.question('Enter any Number'));
    if(a%11===0){
     
    return console.log(a + " "+'Is multiple of 11');
    
    }
    else {
        console.log('a is not multiple of 11 ')
    
    }
    multiple()
}
multiple()