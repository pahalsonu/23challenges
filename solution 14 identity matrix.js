var readlinesync = require("readline-sync");

var lengthofmatrix=Number(readlinesync.question("Enter Square Matrix Length N:"))
var matrix=[]
function makematrix(){

 for(i=0;i<lengthofmatrix;i++){
var row=[]
for(j=0;j<lengthofmatrix;j++){
var rowinput=Number(readlinesync.question("Enter Matrix Element:"))
row.push(rowinput)}
 matrix.push(row)
 row=[]
 }
 console.log(matrix)
}
makematrix()
var test = []
var test2=[]
for (i = 0; i < matrix.length; i++) {
  for (j = 0; j < matrix.length; j++) {

    if (i === j) {
      dig =  matrix[i][j]
      test.push(dig)
          }
          if(i!==j){
            others=matrix[i][j]
            test2.push(others)
          }
  }
}
test3=[]
for (i = 0; i < matrix.length; i++){
if(test[i]==1){
  test3.push(1)
}}
test4=[]
var computed=matrix.length-1
for (i = 0; i < matrix.length*computed; i++){
if(test2[i]===0){
  test4.push(1)
}}

if(test3.length===matrix.length&&test4.length===matrix.length*computed){
  console.log("Matrix is an Identity Matrix")
}
else{
  console.log("Matrix is not an Identity Matrix")
}
