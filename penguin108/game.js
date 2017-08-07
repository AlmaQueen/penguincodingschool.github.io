var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width = 675;
canvas.height = 300;

var img_ball = document.createElement("img");
img_ball.src="football.png";

var x = 0;
var y = 150;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_ball,x,y,20,20);
  x++;
  rec();
}

var img_rec = document.createElement("img");
img_rec.src="rec.png";

var rX = 350;
var rY = 0;




function rec() {
  cx.drawImage(img_rec,rX,rY,50,50);
  rY++;
  
}



canvas.addEventListener("click", function(event) {
  var dX = event.offsetX;
  var dY = event.offsetY;
  x = dX;
  y = dY;
  if(rX+50 >=dX && rY+50>dY ) {alert("You caught the ball"); rX ==-50; rY==-50}
})

animate();