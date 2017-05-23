
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "https://static.giantbomb.com/uploads/original/0/3683/1120634-penguin_chick.jpg";

var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = -5;

var mW =100;
var mH = 100;


var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW = 50;
var playerH = 50;
var req;
var plat = [];
var lava = [];

var xMonster = 500;
var yMonster = 0;

var xMonsterSpeed = -5;
var yMonsterSpeed =0;

var monsterW = 10;
var monsterH = 10;


var xC = 500;
var yC = 300;
var wC = 20;
var hC = 20;


function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed + gravity;
  platform();
  obstacle();
  monster();
  coin();
  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height || y<0) {ySpeed = -ySpeed}
  }

function platform() {
gravity =5;
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
      x>=plat[i].x-playerW &&
      x<plat[i].x + plat[i].w)
      {gravity=0}
  }
}

//plat.push({x:100, y:100, w:100, h:10});
plat.push({x:0, y:200, w:100, h:10});
plat.push({x:200, y: 200, w:400, h:10});
lava.push({x:0, y:500, w:100, h:10});
lava.push({x:0, y:500, w:100, h:10});

//plat.push({x: 100, y: 100, w:100, h:10});
//plat.push({x: 0, y: 100, w:100, h:10});
//plat.push({x: 300, y: 100, w:100, h:10});
//plat.push({x: 200, y: 300, w:100, h:10});
//plat.push({x: 300, y: 300, w:100, h:10});

//lava.push({x: 700, y: 300, w:100, h:10});
//lava.push({x: 100, y: 400, w:100, h:100});
//lava.push({x: 500, y: 400, w:100, h:100});
//lava.push({x: 350, y: 10, w:100, h:10});


function obstacle() {
cx.fillStyle="green";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH &&
      x>=lava[i].x-playerW &&
      x<=lava[i].x + lava[i].w)
      {gameOver()}
}
}

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",10,50);
  cx.fillStyle = "none";
  stop();
}

function stop() {
  if(req) {
      cancelAnimationFrame(req);
      req = undefined;
}}


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
} else if (dir ==="jump" && gravity ===0){
  y = y-100;
}
}

function coin() {
   cxc.fillStyle = "pink";
   cx.fillRect(xC,yC,wC,hC);
  if (x+playerW > xC && xC+wC > x && yC+hC>y && y+playerH>yC)
  
}



function monster() {
  cx.fillStyle = "orange";
  cx.fillRect(xM,yM,mW,mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameOver()}
  else if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  }else if(yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
    
  }
}



var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
} ;

document.addEventListener('keydown',function(event) {
var dir = keyActions[event.keyCode];
setDirection(dir);
});
document.addEventListener('keyup',function(event) {
var dir = keyActions[event.keyCode];
setDirection("stop") ;
});


animate();
