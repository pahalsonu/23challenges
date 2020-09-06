var readlinesync= require("readline-sync");


var input=readlinesync.question("Enter Your String for Encryption :");

var ascii = {};
  for(var i=0; i<=127; i++) {
    ascii[String.fromCharCode(i)] = i;
  }
var decimal= input.split("").map((val)=>ascii[val])
console.log("Decimal Values"+" "+decimal)
var key=readlinesync.question("Enter Your Key :");
var decimalkey= key.split("").map((val)=>ascii[val])
console.log("Decimal Value of Key"+ " "+decimalkey)

var binary=''
function atob(decval){
  if (decval==0) return ;
  atob(Math.floor(decval/2))
  var value=decval%2
binary=value+binary
  }
 var binaryarr=[]
for (i=0;i<decimal.length;i++){
  atob(decimal[i]);
  
binaryarr.push(binary);
binary="";
}

var finalarr=[]
for(i=0;i<binaryarr.length;i++){
  if(binaryarr[i].length<8){
    finalarr.push('0'+binaryarr[i])
  }
}
var finalnoarray=[]

for(i=0;i<finalarr.length;i++){
 finalnoarray.push(Number(finalarr[i]))
 }
console.log('Binary Conversion' + " "+finalnoarray)
 var finalkey=Number(decimalkey[i])
atob(decimalkey)
var binkey=binary
 var binkeyno=Number(binkey)
console.log("Key"+" "+binkeyno)
var encryption=[]
 for(i=0;i<finalnoarray.length;i++){
  encryption.push(finalnoarray[i]^binkeyno)
}
console.log("Encrypted Code"+" "+encryption)
var deencryption=[]
 for(i=0;i<encryption.length;i++){
  deencryption.push(encryption[i]^binkeyno)
}
console.log("Decrypted Binary Code"+" "+deencryption)

