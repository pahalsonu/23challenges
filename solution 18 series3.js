var readlinesync= require("readline-sync");
var series=[]
function check(){
    var arr= Number(readlinesync.question("Enter Any Number:"))
for (i=0;i<1000;i++){
    if(arr===Math.pow(3,i)){
      var a=i+1
 
       for(i=0;i<a;i++){
      series.push(Math.pow(3,i))
      series.push((Math.pow(3,i))*2)}
      series.pop()
 
      }
     if(arr===Math.pow(3,i)*2){
      var a=i+1
       for(i=0;i<a;i++){
      series.push(Math.pow(3,i))
      series.push((Math.pow(3,i))*2)
    }

    }
 }
 
}

check()

if(series.length===0){
        check()
}
console.log(series)
