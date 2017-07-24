var canvas =document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "poop.jpeg";

var x =500;
var y =0;
var playerW = 50;
var playerH = 50;
var xspeed = 3;
var yspeed = 3;
function animate() {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y, playerW, playerH);
x+=xspeed;
y+=yspeed;
if(x<0 || x>canvas.width) {xspeed = -xspeed}
if(y<0 || y>canvas.height) {yspeed = -yspeed}
}


function setDirection (dir) {
   if (dir =="up") {
     xspeed = 0
     yspeed = -5
   }
   if (dir =="down") {
     xspeed = 0
     yspeed = 5
   }
   if (dir =="right") {
     xspeed = 5
     yspeed = 0
   }
   if (dir =="left") {
     xspeed = -5
     yspeed = 0
   }
   if (dir =="stop") {
     xspeed = 0
     yspeed = 0
   }
}
var keyActions= {
  32: "stop",
  38: "up",
  40: "down",
  39: "right",
  37: "left"
}
document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});



animate();