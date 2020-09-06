var readlinesync = require("readline-sync");

var rowno=Number(readlinesync.question("Enter Matrix ROW M :"))
var col=Number(readlinesync.question("Enter Matrix COL N :"))
var matrix=[]
function makematrix(){

 for(i=0;i<rowno;i++){
var row=[]
for(j=0;j<col;j++){
var rowinput=Number(readlinesync.question("Enter Matrix Element:"))
row.push(rowinput)}
 matrix.push(row)
 row=[]
 }
 console.log(matrix)
}
makematrix()

even=[]
odd=[]
for(i=0;i<rowno;i++){
    for(j=0;j<col;j++){
       if( matrix[i][j]%2===0){
           even.push(matrix[i][j])
       }
       else{
           odd.push(matrix[i][j])
       }
    }
}
console.log("Count of Even Numbers "+":"+" "+ even.length)
console.log("Count of Odd Numbers "+":"+" "+odd.length)

