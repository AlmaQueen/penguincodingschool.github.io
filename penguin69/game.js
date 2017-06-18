'use strict';
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width =2000;
canvas.height =1000;

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var playerW = 30;
var playerH = 35;
var gravity=5;
var req;
var img_player = document.createElement("img");
img_player.src = "mario.png";

function animate(){
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  if (x <0 || x>canvas.width-playerW){
  xSpeed=-xSpeed;}
  if (y <0 || y>canvas.height-playerH){
  ySpeed=-ySpeed;}
  if (x>1950) {
  gameWin();
  }
}




function setDirection(dir) {
  if (dir === "left")
{  xSpeed = -5;
  ySpeed = 0;
} else if (dir === "right")
{  xSpeed = 5;
  ySpeed = 0;
} else if (dir === "stop")
{ xSpeed = 0;
  ySpeed = 0;
} else if (dir === "jump")
{ xSpeed = 0;
  ySpeed = -20;
}
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
var dir = keyActions [event.keyCode];
  setDirection('stop');
});

function platform() {
  gravity=5;
  cx.fillStyle="green";
  for (var i = 0; i<plat.length; i++) {
 cx.fillRect (plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<=plat[i].x + plat[i].w)
  {gravity=0}
}
}


var plat=[];

plat.push({x: 0, y: 350, w:100, h:10});
plat.push({x: 150, y: 330, w:100, h:10});
plat.push({x: 300, y: 310, w:100, h:10});
plat.push({x: 450, y: 290, w:100, h:10});
plat.push({x: 600, y: 750, w:200, h:10});
plat.push({x: 0, y: 900, w:2010, h:10});
plat.push({x: 860, y: 700, w:25, h:10});
plat.push({x: 860, y: 600, w:100, h:10});

function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req=undefined;
  }
}
function gameOver() {
  cx.fillStyle = "blue";
  cx.font = "30px Jazzy";
  cx.fillText("Roses Are Red Violets Are Blue Failures Like You Belong in a Zoo. Don't be Mad I Will be There Too Not in The Cage But laughing At You",10,50);
  stop();
}

function gameWin() {
  cx.fillStyle = "blue";
  cx.font = "30px Jazzy";
  cx.fillText("( ͡° ͜ʖ ͡°)",10,50);
  stop();
}

function obstacle() {
  cx.fillStyle="orange";
  for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava [i].y-playerH &&
    x>=lava[i].x-playerW &&
    x<=lava[i].x + lava[i].w)
  {gameOver()}
    
  }
}

var lava=[];
lava.push({x: 0, y: 880, w:750, h: 10});
lava.push({x: 620, y: 800, w: 300, h: 10});
lava.push({x: 920, y: 850, w: 1000, h: 10});

var xMonster = 500;
var yMonster = 0;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 100; //monster width
var monsterH = 100; //monster heigh

var img_monster = document.createElement("img");
img_monster.src = "lenny.jpg";


function monster() {
  //cx.fillStyle = "white";
  //cx.fillRect(xMonster, yMonster, monsterW, monsterH);
  cx.drawImage(img_monster,xMonster, yMonster, monsterW, monsterH);

  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if (x+playerW>xMonster&&xMonster+monsterW>x && yMonster+monsterH>y&&y+playerH>yMonster){
    gameOver();
   }
   else if (xMonster>0) {
     xMonsterSpeed = -xMonsterSpeed;
   }
  }
animate();




















































































































































































































































































































































