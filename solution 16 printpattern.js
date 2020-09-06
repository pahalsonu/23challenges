var readlinesync = require("readline-sync");

var input=Number(readlinesync.question("Enter Number to print Pattren :"))
arr=[]
  for (let i = 1; i <=input; i++) {
    
    for (let j = i; j >= 1; j--) {
      arr.push(j)
    }
    console.log(arr);
    arr=[]
  }
