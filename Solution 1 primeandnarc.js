/* 1 Problem 1 : Given an array of positive integer elements.Print out the count of Prime
numbers and Narcissistic numbers from the array and remove those elements from the
array.
Sample Input 1 :
10,20,30,40,2,5,7,153,1024,1634,11
Expected Output format :
Prime Numbers Count : 4
Narcissistic Numbers Count : 5
The updated array : 10,20,30,40,1024 */



const readlineSync = require("readline-sync")
arr=[]
const forloopno = Number(readlineSync.question("How Many Number Should be in ARRAY : "))
for(i=0;i<forloopno;i++){

    const arrayele = Number(readlineSync.question("Enter No : "))
    console.clear()
    arr[i]=arrayele
    if(arr.length===forloopno){
        
        findsol()
    }
}
function findsol(){
       var primes=[]
    var nprimes=[]
    for(var i=1;i<arr.length;i++){
        if(arr[i]===2||arr[i]===3||arr[i]===5||arr[i]===7){
       primes.push(arr[i])
        }
       else if(arr[i]%2===0||arr[i]%3===0||arr[i]%5===0||arr[i]%7===0){
       nprimes.push(arr[i])
        }
        else {
         primes.push(arr[i])
        }    
           }
           var primeslength=primes.length
           console.log("Total Prime Number" +" "+ primes.length)
  
       var narc=[]
    for (var i=0;i<arr.length;i++){
      var num =arr[i]
      var str=num.toString();
       var numarr=str.split("")
       var pow=numarr.length
       var sum=0
for(j=0;j<numarr.length;j++){
  var ele=numarr[j]
  sum+=Math.pow(ele,pow)
  if (num===sum){
    narc.push(arr[i])
        }
     }   
    }

 console.log("Total Narcissit Number" +" "+narc.length)
var concatarr= primes.concat(narc)
 
var uniquearr=[]
for(i=0;i<concatarr.length;i++){
  if(uniquearr.indexOf(concatarr[i])===-1){
    uniquearr.push(concatarr[i]);
  }
}
 console.log("Array of Prime and Narcissit Number" + " "+uniquearr)

 var result=[]
 for(i=0;i<arr.length;i++){
   if(uniquearr.indexOf(arr[i])===-1){
     result.push(arr[i])
   }
 
 }
 console.log("The Updated Array"+ " " +result)
 
}





