var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "8bit-mario2.png"
var x = 0;
var y = 0;
var w = 50;
var h = 50;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,w,h);
  x+=xspeed;
  y+=yspeed+gravity;
  
  if (x<0) {
    xspeed = -xspeed;
  }
  if (y<0) {
    yspeed = -yspeed;
  }
  if (x>canvas.height) {
    xspeed = -xspeed;
  }
  if (y>canvas.height) {
    yspeed = -yspeed;
  }
}

function setDirection(dir) {
  //if (dir =="up") {
  //yspeed = - 10
  //
  if (dir =="left") {
    xspeed = -5;
    yspeed = 0;
    img_player.src = "8bit-mario2.png"
  }

  if (dir =="right") {
    xspeed = 5;
    yspeed = 0;
    img_player.src = "8bit-mario.png"
  }
  
 if (dir =="down") {
    xspeed = 0;
    yspeed = 5;
  }
  
  if (dir =="jump") {
    y-=220;
}
}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
};

document.addEventListener('keydown' ,function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);})
  
document.addEventListener('keyup' ,function(event) {
var stop = keyActions[event.keyCode];
setDirection("stop");
})

animate();