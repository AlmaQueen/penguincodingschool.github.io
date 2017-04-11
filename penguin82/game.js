var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;

var img_player = document.createElement("img");
img_player.src = "https://static.giantbomb.com/uploads/original/0/3683/1120634-penguin_chick.jpg";

var x = 0;
var y = 0;
var xspeed = 10;
var yspeed = 10;

function animate() {
   requestAnimationFrame(animate);
   cx.clearRect(0,0,canvas.width, canvas.height);
   cx.drawImage(img_player, x, y,50,50);
   x+=xspeed;
   y+=yspeed;
   if (x>canvas.width||x<0) {xspeed=-xspeed}
   if (y>canvas.height || y<0) {yspeed = -yspeed}
  }

function setDirection(dir) {
  if (dir === "up") {
  xSpeed = 0;
  ySpeed = -5;
} else if (dir == "down") {
  xSpeed = 0;
  ySpeed = 5;
} else if (dir == "left") {
  xSpeed = -5;
  ySpeed = 0;
} else if (dir == "right") {
  xSpeed = 5;
  ySpeed = 0;
} else if (dir == "stop") {
  xSpeed = 0;
  ySpeed = 0;
 }
}
 animate();