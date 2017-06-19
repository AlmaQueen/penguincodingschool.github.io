var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width =1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "youtuber.png"

var x=0;
var y=0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;
var req;
var score = 0;


function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y,playerW, playerH);
  platform();
  obstacle();
  monster();
  coin();
  scoredisplay();
  if(score===100){gamewin()}
  x+=xSpeed;
  y+=ySpeed+gravity;
  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height || y<0) {ySpeed = -ySpeed}
}

function scoredisplay() {
  cx.fillStyle ="Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText ("Score: "+score,500,100);
}

function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req=undefined;
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
  } else if (dir ==="stop") {
  ySpeed = 0;
  xSpeed =0;
  }  else if (dir ==="jump" && gravity===0) {
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

var plat = [];

plat.push({x: 0, y: 300, w:100, h:10});
plat.push({x: 200, y: 300, w:100, h:10});
plat.push({x: 400, y: 300, w:100, h:10});
plat.push({x: 600, y: 400, w:100, h:10});
plat.push({x: 800, y: 200, w:100, h:10});
plat.push({x: 50, y: 500, w:100, h:10});
function platform() {
gravity=5;
cx.fillStyle="#ed029e";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH && x>plat[i].x-playerW && x<plat[i].x + plat[i].w) {gravity=0;}
}
}

var lava=[];
lava.push({x: 0, y: 600, w:canvas.width,h:100});
lava.push({x:100,y: 100, w:100, h:100});

function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH && x>lava[i].x-playerW &&
  x<lava[i].x +lava[i].w) {gameOver()}
}
}

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS"
  cx.fillText("game over",10,50);
  stop();
}
  
function gamewin () {
  cx.fillStyle = "green";
  cx.font = "30px comic sans ms";
  cx.fillText("you won trlolol",100,100);
  stop();
}

var xmonster = 500;
var ymonster = 290;
var xmonsterspeed = -1;
var ymonsterspeed = -1;
var monsterw = 50;
var monsterh = 50;

var img_monster = document.createElement("img");
img_monster.src = "baby.png"


function monster() {
//cx.fillStyle = "blue";
//cx.fillRect(xmonster,ymonster, monsterw,monsterh);
cx.drawImage(img_monster,xmonster,ymonster, monsterw,monsterh);
xmonster += xmonsterspeed;
ymonster += ymonsterspeed;
if (x+playerW > xmonster && xmonster+monsterw>x &&
ymonster+monsterh > y && y+playerH > ymonster)
{gameOver()}
if (xmonster>canvas.width||xmonster<0) {xmonsterspeed=-xmonsterspeed}
if (ymonster>canvas.width||ymonster<0) {ymonsterspeed=-ymonsterspeed}
}
var xC = 0;
var yC = 200;
var cW = 20;
var cH = 20;

function coin() {
cx.fillStyle = "gold";
cx.fillRect(xC,yC,cW, cH);
  if (x+playerW > xC && xC + cW> x && yC+cH >y && y+playerH >yC)
  {
    score+=10;
    var i = Math.ceil(Math.random()*plat.length)
    xC = plat[i].x;
    yC = plat[i].y -50;
  }
}

var backroundmusic = new Audio('ed.mp3');
backroundmusic.loop=true;
backroundmusic.play()
animate();
