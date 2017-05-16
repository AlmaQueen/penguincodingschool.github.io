var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src= "https://www.carstickers.com/prodimages/7836_penguin_sticker_decal.gif";

var x = 0;
var y = 0;
var xSpeed =0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;
var req;
var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = 0;

var mW = 10;
var mH = 10;


function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height || y<0) {ySpeed = -ySpeed}
  if (x>1000) {gameWin()}
}

function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

function setDirection(dir) {
  if (dir=="up") {
    xSpeed = 0;
    ySpeed = -5;
  } else if (dir =="down") {
    xSpeed = 0;
    ySpeed = 5;
  } else if (dir =="left") {
    xSpeed = -5;
    ySpeed = 0;
  } else if (dir =="right") {
    xSpeed = 5;
    ySpeed = 0;
  } else if (dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir =="jump" && gravity===0 ) {
    ySpeed = -100;
  }
}

function gameOver() {
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",500,150);
  stop();
}

function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("You Win",500,150);
  stop();
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
 
var plat = [];
plat.push ({x:0, y:200, w:100,h:10});
plat.push ({x:200, y:200, w:100,h:10});
plat.push ({x:400, y:200, w:100,h:10});
plat.push ({x:600, y:200, w:100,h:10});
plat.push ({x:100, y:550, w:400,h:10});
 

function platform() {
gravity = 5;
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
      x>plat[i].x-playerW &&
      x<plat[i].x + plat[i].w)
      {gravity=0;}
  else {}
}
}

var lava = [];
lava.push ({x:0, y:600, w:1000,h:100});
lava.push ({x:300, y:400, w:1000,h:100});

//plat.push ({x:200, y:200, w:100,h:10});
//plat.push ({x:400, y:200, w:100,h:10});
//plat.push ({x:600, y:200, w:100,h:10});


function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH &&
      x>lava[i].x-playerW &&
      x<lava[i].x + lava[i].w)
      {gameOver()}
}
}
function monster() {
  cx.fillStyle = "orange";
  cx.fillRect (xM,yM,mW,mH);
  xM+=xMsp;
  if (x=playerW> xM && xM+mW >x && ym+mH>y && y+playerH>yM)
  {gameOver()}
  else if (xM<0 || xM>canvas.width) {
animate();