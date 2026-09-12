var elements = document.getElementsByClassName("my-text");
console.log(elements);
console.log(elements[0].textContent);
console.log(elements[1].textContent)
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext ("2d");
var grd = ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);
