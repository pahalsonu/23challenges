
setInterval(function sw(){
    var d = new Date();
  var m = d.getSeconds(0);
  var ml = d.getMilliseconds(0) / 10;
  var min=d.getMinutes(0)
  var ml2=ml.toFixed(0)
  var stopwatch = (min+":"+m +":"+ ml2+'<br>')
  document.getElementById("p3").innerHTML=stopwatch;}
  ,1)
clearInterval(sw)