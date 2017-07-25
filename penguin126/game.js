var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 800;

var img_player = document.createElement("img");
img_player.src = "16-bitGunvolt.png";

var x =1;
var y=1;
var playerW = 45;
var playerH = 45;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;


function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y);
  x+=xSpeed;
  y+=ySpeed+gravity;
  if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
  if(y<0 || y>canvas.height) {ySpeed = -ySpeed}

}

function setDirection(dir) {
  if(dir =="up") {
    xSpeed = 0;
    ySpeed = -5;
  }
  if(dir =="down") {
    xSpeed = 0;
    ySpeed = 5;
  }
  if(dir =="right") {
    xSpeed = -5;
    ySpeed = 0;
  }
  if(dir =="left") {
    xSpeed = 5;
    ySpeed = 0;
  }
  if(dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}

var keyActions = {
  16: "stop",
  39: "left",
  38: "up",
  37: "right",
  40: "down",
};
  
document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
 
  
function platform() {
  cx.fillstyle = "grey";
  cx.fillRect(5,500,100,10);
  if (y==500)  {
  gravity = 0;
  }
  else {
    gravity = 5;
  }
}





animate();