var canvas = document.getElementById("canvas");
var cx = canvas.getContext ("2d");
canvas.width=1250;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "mario.png";

var x =0;
var y =0;
var playerW = 40;
var playerH = 40;
var xSpeed = 0;
var ySpeed =0;

function animate()  {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW, playerH);
x+=xSpeed;
if (x>canvas.width || x <0)  {
xSpeed = -xSpeed;
  }
//var ySpeed = 5;
y+=ySpeed;
if (y>canvas.height || y<0) {
ySpeed = -ySpeed;
  }

   }



function setDirection(dir){
if (dir === "down") {
  xSpeed = 0;
  ySpeed = 5;}
else if (dir === "up") {
  xSpeed = 0;
  ySpeed = -5;}
else if (dir === "left") {
  xSpeed = -5;
  ySpeed = 0;}
else if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;}
else if (dir === "stop") {
  xSpeed = 0;
  ySpeed = 0;
  }
}


var keyActions = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};
  
document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});


animate();