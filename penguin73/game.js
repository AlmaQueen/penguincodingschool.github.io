var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1500;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src= "penguin.gif";

var x = 0;
var y = 0;
var xSpeed =0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;
var req;

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  coin();
  scoreDisplay();
  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height || y<0) {ySpeed = -ySpeed}
  if (score>1000) {gameWin()}
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
    ySpeed = -10;
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
  cx.fillText("You Win",700,150);
  stop();
}

function scoreDisplay() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Score"+score,800,100);
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

plat.push({x:0, y:200, w:100,h:10});
plat.push({x:200, y:200, w:100,h:10});
plat.push({x:400, y:200, w:100,h:10});
plat.push({x:600, y:200, w:100,h:10});
plat.push({x:100, y:550, w:400,h:10});
plat.push({x:300, y:750, w:600,h:10});
plat.push({x:480, y:320, w:50,h:10});
plat.push({x:250, y:390, w:50,h:10});
plat.push({x:210, y:920, w:50,h:10});
plat.push({x:630, y:480, w:50,h:10});
plat.push({x:440, y:460, w:50,h:10});
plat.push({x:930, y:820, w:50,h:10});
plat.push({x:345, y:640, w:50,h:10});
plat.push({x:382, y:489, w:50,h:10});
plat.push({x:495, y:731, w:50,h:10});
plat.push({x:625, y:820, w:50,h:10});
plat.push({x:265, y:940, w:50,h:10});
plat.push({x:282, y:730, w:50,h:10});
plat.push({x:265, y:940, w:50,h:10});
plat.push({x:265, y:940, w:50,h:10});
plat.push({x:175, y:820, w:50,h:10});
plat.push({x:385, y:930, w:50,h:10});
plat.push({x:325, y:920, w:50,h:10});

function platform() {
gravity = 5;
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
      x>plat[i].x-playerW &&
      x<plat[i].x + plat[i].w)
      {gravity=0;}
}
}

var lava = [];
lava.push ({x:0, y:600, w:100,h:10});
lava.push ({x:300, y:400, w:20,h:10});
lava.push ({x:300, y:750, w:200,h:10});
lava.push ({x:259, y:620, w:600,h:10});

function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH &&
      x>lava[i].x-playerW &&
      x<lava[i].x + lava[i].w)
      {gameOver()}
}}

var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = -5;
var mW = 10;
var mH = 10;

function monster() {
  cx.fillStyle = "orange";
  cx.fillRect(xM,yM,mW,mH);
  xM+=xMsp;
  yM+=yMsp;
  if(x+playerW> xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameOver()}
  else if (xM<0 || xM>canvas.width) {
    xMsp = -xMsp
  }
  else if (yM<0 || yM>canvas.height) {
    yMsp = -yMsp
  }
}

var xC = 100;
var yC = 300;
var wC = 20
var hC = 20;
var score =0;

function coin() {
  cx.fillStyle = "gold";
  cx.fillRect(xC,yC,wC,hC);
  if(x+playerW> xC && xC+wC >x && yC+hC>y && y+playerH>yC)
  {
    score+=5;
    var i = Math.ceil(Math.random()*plat.length);
    xC = plat[i].x;
    yC = plat[i].y - 40;
  }
}
var backroundmusic = new Audio (mario.mp3);
backroundmusic.loop = true;
backroundmusic.play();
animate();