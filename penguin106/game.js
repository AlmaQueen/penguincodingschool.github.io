var canvas = document.getElementById("canvas");
var cx =canvas.getContext("2d");
canvas.width =1000;
canvas.height =700;

var img_player = document.createElement("img")
img_player.src = "mario.jpg";

var x = 800;
var y = 700;
var w =50;
var h = 50;
var xspeed = -5;
var yspeed = -5;
var gravity = 1;
function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,w,h);
  x+=xspeed;
  y+=yspeed+gravity;
  if (x<=0){
    xspeed= -xspeed;
  }
  if (y<=0) {
    yspeed = -yspeed;
  }
  if (x>canvas.width) {
   xspeed= -xspeed;
  }
  if (y>canvas.height) {
       yspeed = -yspeed;
  }
}
animate()
 
function setDirection(dir) {
  if (dir == "up") {
  xspeed = 0;
  yspeed = -5;
  }
if (dir == "down") {
  xspeed = 0;
  yspeed = 5;
  }if (dir == "right") {
  xspeed = 5;
  yspeed = 0;
  }if (dir == "left") {
  xspeed = -5;
  yspeed = 0;
  }if (dir == "stop") {
  xspeed = 0;
  yspeed = 0;
  } if (dir=="jump") {
    yspeed = -10;
  }
  
}




var keyActions = {
32:"jump",
37:"left",
38:"up",
39:"right",
40:"down",
}

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});