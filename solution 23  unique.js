
var readlinesync = require("readline-sync");
var x = Number(readlinesync.question("Enter Length of Array:"))
function eraseduplicate() {
       var input = []
    for (i = 0; i <x; i++) {
        var arrayelement = Number(readlinesync.question("Enter Any Number:"))
        input.push(arrayelement)
    }
    input.sort(function(a,b){return a- b});
    var unique = []
    for (i = 0; i < input.length; i++) {
        if (input[i] !== input[i + 1]) {
            unique.push(input[i])
        }
       
    }
    
    console.log("Unique Element Array" + ":" + unique)
    console.log("Number of Unique Elements" + ":" + unique.length)
}
eraseduplicate()

