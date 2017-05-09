var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=750;
canvas.height=750;

var img_player = document.createElement("img");
img_player.src = "https://t2.rbxcdn.com/39e183ed6cf88b19a00ec07b42b3e04d";
var x=0;
var y=0;
var xSpeed =0;
var ySpeed =0;
var gravity =5;
var playerW = 50;
var playerH = 50;

function animate () {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
if (x>canvas.width-25 ||x<0) {xSpeed=-xSpeed}
if (y>canvas.height-25 || y<0) {ySpeed = -ySpeed}
}

var plat=[];
plat.push({x: 0, y: 100, w:100, h:10});
plat.push({x: 100, y: 180, w:250, h:10});
plat.push({x: 300, y: 160, w:100, h:10});
plat.push({x: 450, y: 140, w:150, h:10});
plat.push({x: 250, y: 100, w:100, h:10});

var lava=[];
lava.push({x: 300, y: 100, w:100, h:10});

function platform() {
gravity =5;
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<=plat[i].x + plat[i].w)
  {gravity=0}
 }
 }

function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH &&
  x>=lava[i].x-playerW &&
  x<=lava[i].x + plat[i].w)
   {gameOver()}
}
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
  } else if (dir=== "jump" && gravity ===0) {
   ySpeed = -10;
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
setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});




animate();