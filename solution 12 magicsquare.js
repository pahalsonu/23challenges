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


rowsum=0
colsum=0
row=[]
col=[]
firstdig=0
seconddig=0
for(i=0;i<matrix.length;i++){
    for(j=0;j<matrix.length;j++){if(true){rowsum=rowsum+matrix[i][j]}
    if(true){colsum=colsum+matrix[j][i]}
    if(i===j){
      firstdig=firstdig+matrix[i][j]
    }
   
}
 row.push(rowsum)
    rowsum=0
    col.push(colsum)
    colsum=0
}


 
for(i=0;i<matrix.length;i++){
    for(j=matrix.length-1;j>=0;j--)
 if(i==j){
      seconddig=seconddig+matrix[i][j]
    }}
    
    var test=[]
    for(i=0;i<matrix.length;i++){
if(firstdig===seconddig&&seconddig===row[i]&&row[i]===col[i]){
  test.push(1)
  }
}
if(matrix.length===test.length){
  console.log("Matrix Is magic Square")
}
else {
  console.log("Matrix Is not magic Square")
}
