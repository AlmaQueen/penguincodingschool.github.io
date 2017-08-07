var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;

var img_player = document.createElement("img");
img_player.src = "superpig.jpg";

var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0;

function animate() {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height)
cx.drawImage(img_player,x,y,100,100);
x+=xspeed;
y+=yspeed;

  
  
}



function setDirection(dir) {
  if (dir=="left") {
    xspeed = -5;
    yspeed = 0;}
  if (dir=="right") {
    xspeed = 5;
    yspeed = 0;}
   if (dir=="down") {
    xspeed = 0;
    yspeed = 5;}
  if (dir=="stop") {
    xspeed = 0;
    yspeed = 0;}
}

animate();
var keyActions = {
  
  37:"left",
  38:"up",
  39:"right",
  40:"down",
  
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});