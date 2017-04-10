var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player= document.createElement("img");
img_player.src="http://images.vectorhq.com/images/thumbs/f92/hedgehog-vector-graphics-eps-80908.jpg"

var x =1000;
var y=1000;
var xspeed = 10;
var yspeed = 10;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y);
  x+=xspeed;
  y+=yspeed;
  if (x>canvas.width||x<0) {xspeed=-xspeed}
  if (y>canvas.height ||y<0) {yspeed=-yspeed}
}

animate();

function setDirection(dir) {
  if(dir==="up") {
  xspeed =0;
  yspeed = -5;
 } else if(dir==="down") {
  xspeed =0;
  yspeed =5;
 } else if(dir==="left") {
  xspeed = -5;
  yspeed =0;
 } else if(dir==="right") {
  xspeed =5;
  yspeed =0;
 } else if(dir==="stop") {
  xspeed =0;
  yspeed =0;
 }
}
var keyActions = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener ('keydown',function(event) {
  var dir =keyActions[event.keyCode];
  setDirection(dir);
});