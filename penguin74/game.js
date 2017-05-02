var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=750;
canvas.height=750;

var img_player = document.createElement("img");
img_player.src="http://vignette1.wikia.nocookie.net/mario/images/5/5a/Mario3DWorld.png/revision/latest?cb=20140422130632";
var playerW = 100;
var playerH = 125;

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;


function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height) ;
  cx.drawImage(img_player, x,y, playerW,playerH);
   x+=xSpeed;
   y+=ySpeed+gravity;
   platform();
if (x>canvas.width || x<0) {
  xSpeed = -xSpeed}
if (y>canvas.width || y<0) {
  ySpeed = -ySpeed}
}


function platform() {
  gravity = 5;
  cx.fillStyle = "grey";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect (plat[i].x,plat[i].y,plat[i].w,plat[i].h);
    if (y===plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x + plat[i].w)
    {gravity=0}
  else {}
  }
  
  }

function setDirection(dir) {
  if (dir === "up") {
    xSpeed = 0;
    ySpeed = -5;
  } else if (dir === "down") {
    xSpeed = 0;
    ySpeed = 5;
  } else if (dir === "left") {
    xSpeed = -5;
    ySpeed = 0;
  } else if (dir === "right") {
    xSpeed = 5;
    ySpeed = 0;
  } else if (dir === "stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir==="jump") {
    y = y-100;
  } else if (dir === "jump" && gravity===0) {
    ySpeed = -10;
  }
       
}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
};

document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

animate();


