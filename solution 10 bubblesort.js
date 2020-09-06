var readlinesync = require("readline-sync");
var x = Number(readlinesync.question("Enter Length of Array:"))


 function bubblesort(){
    var swapcount=[]
    var arr = []
    

    for (i = 0; i <x; i++) {
        var arrayelement = Number(readlinesync.question("Enter Any Number:"))
        arr.push(arrayelement)
    }
    var original= arr.sort((a,b)=>a-b)
    var len=arr.length-1
 for(i=0;i<len;i++){
     if(arr[i]>arr[i+1]){
      var a=arr[i]
      var b=arr[i+1]
      arr[i]=b
      arr[i+1]=a}
  else{
    var a=arr[i]
      var b=arr[i+1]
      arr[i]=a
      arr[i+1]=b}}
if(JSON.stringify(arr)==JSON.stringify(original)){
  console.log("yes")
 
}
else{
 swapcount.push(1)
  bubblesort()
}
console.log(arr)
console.log(swapcount.length+1)
}
bubblesort()
 

