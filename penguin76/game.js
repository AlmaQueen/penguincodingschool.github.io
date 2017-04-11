var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "https://t2.rbxcdn.com/39e183ed6cf88b19a00ec07b42b3e04d"
img_player.width=50
img_player.height=50
var x=0;
var y=0;
var xSpeed =10;
var ySpeed =10;

function animate () {
  requestAnimationFrame(animate);
  cx.clearRect (0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y,300,300);
  x+=xSpeed;
  y+=ySpeed;
if (x>canvas.width-250 ||x<0) {xSpeed=-xSpeed}
if (y>canvas.height-250 || y<0) {ySpeed = -ySpeed}
  
}
function setDirection(dir) {
  if (dir=="up") {
    xSpeed = 0;
    ySpeed = -5;
  }  else if (dir=="down") {
    xSpeed = 0;
    ySpeed = 5;
  }  else if (dir=="left") {
    xSpeed = -5;
    ySpeed = 0;
  }  else if (dir=="right") {
    xSpeed = 5;
    ySpeed = 0;
  }  else if (dir=="stop") {
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
animate();