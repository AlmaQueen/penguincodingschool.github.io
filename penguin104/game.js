var canvas = document.getElementById("canvas");
var cx =  canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png"
//var img_player = document.createElement("img");
//img_player.src = "http://vignette3.wikia.nocookie.net/fantendoimages/c/cd/Goomba_Looking.png/revision/latest?cb=20120731143323"
//var img_player = document.createElement("img");
//img_player.src = "http://vignette1.wikia.nocookie.net/fantendo/images/7/7a/NSMBULuigi.png/revision/latest?cb=20121226224332"
var x = 400;
var y = 500;
var W = 70
var H = 100
var xspeed = 0;
var yspeed = 0;
var gravity = 1;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,W,H);
  x+=xspeed;
  y+=yspeed+gravity;
  if (x<=0) {
    xspeed = -xspeed;
  }
  if (y<=0){
    yspeed = -yspeed;
  }
  if (x>canvas.width){
    xspeed = -xspeed
  }
  if(y>canvas.height){
    yspeed = -yspeed
  
  }
}
function setDirection(dir) {
  if (dir == "up"){
    xspeed = 0;
    yspeed = -5;
  }
  if (dir == "down"){
    xspeed = 0;
    yspeed = 5;
  }
  if (dir == "right"){
    xspeed = 5;
    yspeed = 0;
  }
  if (dir == "left"){
    xspeed = -5;
    yspeed = 0;
  }
  if (dir == "stop"){
    xspeed = 0;
    yspeed = 0;
  }
  if (dir == "jump"){
    y-=40;
  }
}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};
document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir)
})
document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop")
})

animate();