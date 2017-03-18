"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 350;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity= 5;
var interval = 80;
var ground = false;

var xCoin = 500;
var yCoin = 300;
var coinW = 20;
var coinH = 20;
var score = 0;

 var xMonster = 500;
 var yMonster = 70;
 var xMonsterSpeed = -5;
 var yMonsterSpeed = 0;
 var monsterW = 30; //monster width
 var monsterH = 35; //monster height
 
 var xMonster2 = 300;
 var yMonster2 = 200;
 var xMonsterSpeed = -5;
 var yMonsterSpeed = 0;
 var monsterW = 30; //monster width
 var monsterH = 35; //monster height
 
 
 
//variables for Sprite Animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img_monster= document.createElement("img");
img_monster.src = "img/princess.png"
var img_sprite =  document.createElement("img");
 img_sprite.src = "img/toad_sprite.png"
 
 var plat=[]
 
 plat.push({x: 0, y: 100, w:100, h:10});
 plat.push({x: 100, y: 80, w:100, h:10});
 plat.push({x: 200, y: 60, w:100, h:10});
 plat.push({x: 300, y: 40, w:100, h:10});
 plat.push({x: 370, y: 100, w:100, h:10});
 plat.push({x: 340, y: 70, w:100, h:10});
 plat.push({x: 450, y: 150, w:100, h:10});
 plat.push({x: 0, y: canvas.height-spriteH, w:canvas.width, h:10});
 
//functions section
function movePlayer() {
  clearCanvas();
  //You will add a function here today
  cx.drawImage(img_sprite, cycle*spriteW,0,spriteW,spriteH,x,y, spriteW, spriteH) ;
  cycle = (cycle+1)%6;
  x+=xSpeed;
  y+=ySpeed+gravity;
  obstacle();
  platform();
  monster();
  monster2();
  coin();
  scoreDisplay();
}



function clearCanvas() {
cx.clearRect(0,0,canvas.width, canvas.height);
}


function monster() {
  cx.fillStyle = "blue";
  cx.drawImage(img_monster,xMonster,yMonster, monsterW,monsterH);
  /*cx.fillRect(xMonster,yMonster, monsterW,monsterH);*/
  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if(x+spriteW > xMonster && xMonster+monsterW >x &&
  yMonster+monsterH > y && y+spriteH > yMonster) {
      gameOver();
  } else if (xMonster<0 || xMonster>canvas.width) {
    xMonsterSpeed = -xMonsterSpeed;
  }
}

function monster2() {
  cx.fillStyle = "blue";
  cx.drawImage(img_monster,xMonster2,yMonster2, monsterW,monsterH);
  /*cx.fillRect(xMonster,yMonster, monsterW,monsterH);*/
  xMonster2 += xMonsterSpeed;
  yMonster2 += yMonsterSpeed;
  if(x+spriteW > xMonster2 && xMonster2+monsterW >x &&
  yMonster2+monsterH > y && y+spriteH > yMonster2) {
      gameOver();
  } else if (xMonster2<0 || xMonster2>canvas.width) {
    xMonsterSpeed = -xMonsterSpeed;
  }
}
 
function platform() {
if(ground===false) {gravity=5}
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-spriteH && x>plat[i].x-spriteW && x<plat[i].x+plat[i].w) {
    ground = true; gravity=0;
  } else {ground=false}
}

}

 function coin() {
   cx.fillStyle = "gold";
   cx.fillRect(xCoin,yCoin,coinW, coinH);
   if(x+spriteW > xCoin && xCoin + coinW> x &&
  yCoin+coinH >y && y+spriteH > yCoin) {
    score += 10;
    xCoin = Math.floor(Math.random()*canvas.width);
    yCoin = Math.floor(Math.random()*canvas.height);
 }
 }

function scoreDisplay() {
    cx.fillStyle = "green";
    cx.font = "30px Comic Sans MS";
    cx.fillText("Score: "+score,500,100);
  }

function gameOver() {
    cx.fillStyle = "red";
    cx.font = "30px Comic Sans MS";
    cx.fillText("Game Over ",300,100);
    xMonsterSpeed=0;
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
  }  else if (dir ==="jump" && gravity==0) {
      y = y-60;
      x = x+20;
    }
  }

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

$("body").keydown(function(event) {
 var dir = keyActions[event.keyCode];
 setDirection(dir);
});

$("body").keyup(function(event) {
 var dir = keyActions[event.keyCode];
 setDirection("stop");
});




function obstacle() {
  if (x <0 || x>canvas.width) {
    xSpeed=-xSpeed;
  }
  if (y <0 || y>canvas.height ){
    ySpeed=-ySpeed;
  }
}


setInterval(movePlayer,interval);