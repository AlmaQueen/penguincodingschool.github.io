var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

cx.fillStyle="black"

circle(100,100,50);
circle(75,75,8);
cx.fill();
circle(125,75,8);
cx.fill();
triangle();

function circle(x,y,r) {
cx.beginPath();
cx.arc(x,y,r,0,2*Math.PI);
cx.stroke();
}

cx.beginPath();
cx.ellipse(50, 100, 5, 15, 45 * Math.PI/180, 0, 2 * Math.PI);
cx.stroke();

cx.beginPath();
cx.ellipse(150, 100, 5, 15, 45 * Math.PI/180, 0, 2 * Math.PI);
cx.stroke();

function triangle(){
  cx.beginPath();
  cx.moveTo(85,75);
  cx.lineTo(115,75);
  cx.lineTo(100,95);
  cx.lineTo(85,75);
  cx.stroke();
}
