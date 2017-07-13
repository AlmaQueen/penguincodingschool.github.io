var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
document.getElementById("canvas").style.background = "#00bfff";
var img_player = document.createElement("img");
img_player.src = "sprite.png";
var x = 0;
var y = 0;
var xac = 0;
var yac = 0;
var gravity = 1;
var xspeed = 0;
var yspeed = 0;
var playerW = 100;
var playerH = 100;
var plat = [];
var lava = [];
var score = 0;
var xMonster = 500;
var YMonster = 0;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monster = document.createElement("img");
monster.src = "https://www.mariowiki.com/images/thumb/7/71/Yoshibowser.png/200px-Yoshibowser.png";

var monsterW = 10;
var monsterH = 10;

plat.push({x: 0, y: 400, w:150, h:15});
plat.push({x: 250, y: 300, w:150, h:15});
plat.push({x: 500, y: 450, w:100, h:15});
plat.push({x: 250, y: 500, w:150, h:15});
plat.push({x: 750, y: 400, w:150, h:15});

lava.push({x: 0, y: 650, w:1000, h:50});

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0, 0, canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x += xspeed; y += yspeed + gravity;
  xspeed += xac;
  yspeed += yac;
  if (xspeed > 2) {xac = 0}
  if (yspeed > 2) {gravity = 0}
  if (xspeed < -2) {xac = 0}
  if (yspeed < -0.0000005) {yac = 0}
  monster();
  platform();
  obstacle();
if(x > canvas.width - playerW || x < 0) {
  xspeed = -xspeed;}

if(y > canvas.height - playerH || y < 0) {
  yspeed = -yspeed;
}
}

function monster() {
  cx.drawImage(monster, xMonster, yMonster, monsterW, monsterH);
  xMonster += xmonsterSpeed;
  yMonster += yMonsterSpeed;
  if() {
    gameOver();
  } else if (xMonster < 0) {
    xMonsterSpeed = -xMonsterSpeed;
  }
}


function platform() {
  cx.fillStyle = "#000000";
  gravity = 1;
  for (var i = 0; i < plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if(y === plat[i].y - playerH &&
    x >= plat[i].x - playerW * .63 &&
    x <= plat[i].x + plat[i].w * .70)
    {gravity = 0}
  }
}
function obstacle() {
  cx.fillStyle = "#cf1020";
  //gravity = 1;
  for (var i = 0; i < lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if(y === lava[i].y - playerH &&
    x >= lava[i].x - playerW * .63 &&
    x <= lava[i].x + lava[i].w * .70)
    {gameOver();}
  }
}

function stop() {
  if(req) {
  cancelAnimationFrame(req);
  req = undefined;}
}

function gameOver() {
  cx.fillStyle = "red";
  cx.font = "40px Comic Sans MS";
  cx.fillText("Game Over",500, 100);
  stop();
}
function gameWin() {
  cx.fillStyle = "green";
  cx.font = "40px Comic Sans MS";
  cx.fillText("You Win",500, 100);
  stop();
}
function setDirection(dir){
  if(dir === "up") {
    yspeed = -5;
    xspeed = 0;
  } else if(dir === "down" && gravity === 1) {
    yspeed = 5;
    xspeed = 0;
  } else if(dir === "left") {
    yspeed = 0;
    xac = -1;
    xspeed = -3;
  } else if(dir === "right") {
    yspeed = 0;
    xac = 1;
    xspeed = 3;
  } else if(dir === "stop") {
    yspeed = 0;
    xspeed = 0;
  }else if(dir === "jump" && gravity === 0) {
  yac = -20;
  }
}

var keyActions = {
  32: "jump",
  37: "left",
  39: "right"
};

document.addEventListener('keydown' ,function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});


document.addEventListener('keyup', function(event) {
  setDirection("stop");
})


animate();
