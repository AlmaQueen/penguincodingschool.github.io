var canvas =document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1901.55;
canvas.height=892.95;

var img_player = document.createElement("img");
img_player.src="http://icons.iconarchive.com/icons/martin-berube/animal/256/turtle-icon.png";

var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerH = 25;
var playerW = 25;
var req;

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  scoreDisplay();
  coin();
  if (score===100) {gameWin()}

  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height||y<0) {ySpeed=-ySpeed}
  if (x>canvas.width) {
    gameWin();}
}

function setDirection(dir) {
  if(dir=="up") {
    xSpeed = 0;
    ySpeed = -5;
  } else if (dir=="down") {
    xSpeed = 0;
    ySpeed = 5;
  } else if (dir=="left") {
    xSpeed = -5;
    ySpeed = 0;
  } else if (dir=="right") {
    xSpeed = 5;
    ySpeed = 0;
  } else if (dir=="stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir =="jump" ) {
    ySpeed = -15;
  }
}

function stop() {
  if(req) {
     cancelAnimationFrame(req);
     req = undefined;
  }}

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",10,50)
  stop();
}

function scoreDisplay() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Score: "+score,500,100)
}
function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("You Won!",10,50);
  stop();
}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});


var plat=[]

plat.push({x: 0, y: 500, w:100, h:10});
plat.push({x: 200, y: 460, w:100, h:10});
plat.push({x: 400, y: 420, w:100, h:10});
plat.push({x: 600, y: 380, w:100, h:10});
plat.push({x: 800, y: 340, w:100, h:10});
plat.push({x: 1000, y: 340, w:100, h:10});
plat.push({x: 1200, y: 380, w:100, h:10});
plat.push({x: 1400, y: 420, w:100, h:10});
plat.push({x: 1600, y: 460, w:100, h:10});
plat.push({x: 1800, y: 500, w:100, h:10});
plat.push({x: 0, y:750, w:canvas.width, h:10});


function platform() {
gravity =5;
cx.fillStyle="magenta";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
      x>=plat[i].x-playerW &&
      x<=plat[i].x + plat[i].w)
     {gravity=0}
  else {}

}
}

function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH &&
      x>=lava[i].x-playerW &&
      x<=lava[i].x + lava[i].w)
     {gameOver()}
}
}

var lava=[]

lava.push({x: 0, y: 600, w:canvas.width, h:10});
lava.push({x: 100, y: 480, w:100, h:10});
lava.push({x: 300, y: 440, w:100, h:10});
lava.push({x: 500, y: 400, w:100, h:10});
lava.push({x: 700, y: 360, w:100, h:10});
lava.push({x: 900, y: 320, w:100, h:10});
lava.push({x: 1100, y: 360, w:100, h:10});
lava.push({x: 1300, y: 400, w:100, h:10});
lava.push({x: 1500, y: 440, w:100, h:10});
lava.push({x: 1700, y: 480, w:100, h:10});

var xM = 0;
var yM = 500;
var xMsp = -10;
var yMsp = -20;

var mW = 50;
var mH = 50;

function monster() {
  cx.fillStyle = "orange"
  cx.fillRect(xM,yM,mW,mH);
  yM+=yMsp
  xM+=xMsp
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameOver()}
  if (xM<0 || xM>canvas.width) {
     xMsp = -xMsp;
  }
  if (yM<0 || yM>canvas.height) {
    yMsp = -yMsp
  }
}

var xC = 500;
var yC = 300;
var wC = 20;
var hC = 20;
var score=0;

function coin() {
  cx.fillStyle = "aqua"
  cx.fillRect(xC,yC,wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
  {
    score += 10;
    xC =Math.random()*canvas.width;
    yC =Math.random()*canvas.height;
  }


}

animate();