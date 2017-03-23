"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var interval =65;
var gravity = 5;
var ground = false;
var game = true;
var ladderQ = false;
//monster variables
var xMonster=500;
var yMonster=500;
var xMonsterspeed=-10;
var yMonsterspeed=-12;
var MonsterW=10;
var MonsterH=10;
//variables for Sprite Animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img = document.createElement("img");
img.src = "img/mario.png";
var img_sprite = document.createElement("img");
img_sprite.src = "img/mario_sprite.png";
var fireballX=0;
var fireball = false;
var fireBallSpeed = 5;
//moving platform
var platformxSpeed = 2;
var platform = 300;
//functions section
function movePlayer() {
  clearCanvas();
  cx.drawImage(img_sprite, cycle*spriteW,0,spriteW,spriteH,x,y,spriteW, spriteH);
  cycle=(cycle+1)%6;
  x+=xSpeed;
  y+=gravity+ySpeed;
  obstacle();
  platForm();
  ladder();
  lava();
  monster();
  console.log(ladderQ);
}
/*function fireBall() {
fireballX = fireBallSpeed + fireballX;
    cx.fillStyle="red";
  cx.fillRect(fireballX,y,10,10);
}
*/
function monster() {
  cx.fillStyle="black";
  cx.fillRect(xMonster,yMonster,MonsterW,MonsterH);
  xMonster += xMonsterspeed;
  yMonster += yMonsterspeed;
if (xMonster<0||xMonster>canvas.width) {
 xMonsterspeed =  -xMonsterspeed;
}
else if (yMonster<0||yMonster>canvas.height) {
 yMonsterspeed =  -yMonsterspeed;
}
else if (x+spriteW>xMonster && xMonster + MonsterW >x && y+spriteH>yMonster && yMonster + MonsterH >y){
  gameOver();
}
}
 
 function platForm() {
   cx.fillStyle= "black";
   cx.fillRect(0,130,200,10);
   cx.fillRect(250,160,100,10);
   cx.fillRect(425,190,200,10);
   cx.fillRect(70,500,200,10);
   cx.fillRect(400,540,200,10);
   cx.fillRect(platform+platformxSpeed,360,76,10);
   if (y==130-(spriteH-5) && x<190) {
     gravity=0;
     ground=true;
   } else if (y==160-(spriteH-5) && x<350 && x>250-spriteW) {
     gravity=0;
     ground=true;
   }else if (y==190-(spriteH-5) && x<625 && x>425-spriteW) {
     gravity=0;
     ground=true;
   }else if (y==500-(spriteH-5) && x<270 && x>70-spriteW) {
     gravity=0;
     ground=true;
   }else if (y==540-(spriteH-5) && x<600 && x>400-spriteW) {
     gravity=0;
     ground=true;
   }else if (y==360-(spriteH-5) && x<platform+75 && x>platform-spriteW) {
     gravity=0;
     ground=true;
    }else if (platform<0||platform>canvas.width) {
    platformxSpeed =  -platformxSpeed;
    }else
     {gravity=5;
      ground=false;}
 
  platform = platform+platformxSpeed;
    
 }
 function ladder() {
   cx.fillStyle = "silver";
   cx.fillRect(375,2,10,650);
   if (x>365 && x<395) {
    ladderQ = true;
   }
   else {
    ladderQ = false;
   }
 }
  function lava() {
   cx.fillStyle = "red";
   cx.fillRect(0,650,999,50);
   }
function gameOver(){
  cx.fillStyle = "red";
  cx.font = "50px Comic Sans MS";
  cx.fillText("FAIL", 50, 50);
  xMonsterspeed=0;
  yMonsterspeed=0;
  xSpeed=0;
  ySpeed=0;
  game = false;
}

function clearCanvas() {
cx.clearRect(0,0,canvas.width, canvas.height);
}

function setDirection(dir) {
  if (game === true) {
  if (dir === "left") {
    xSpeed = -9;
    ySpeed = 0;
  } else if (dir === "right") {
    xSpeed = 9;
    ySpeed = 0;
  }else if (dir === "jump" && ground===true) {
    y=y-50;
  }
  else if (dir === "stop") {
    xSpeed = 0;
    ySpeed = 0;
    gravity=0;
  }
  else if (ladderQ === true && dir === "up" ) {
    xSpeed = 0;
    ySpeed = -5;
    gravity=0;
  }
  else if (ladderQ === true) {
    gravity=0;
    if(dir === "down") {
    xSpeed = 0;
    ySpeed = 5;
  }
  }
}
}
function fireBall2(fireBall) {
 if (fireBall === "fireBall3") {
   fireBall();
   fireball = true;
  }
}

var keyActions = {
  100: "stop",
  37: "left",
  39: "right",
  38: "up",
  40: "down",
  32: "jump",
  90: "fireBall"
};

$("body").keydown(function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

$("body").keyup(function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

/*$("body").keydown(function(event) {
  var fireBall2 = keyActions[event.keyCode];
  fireBall();
});
*/
function obstacle() {
  if (x <0 || x>canvas.width) {
    xSpeed=-xSpeed;
  }
  if (y <0 || y>canvas.height-50 ){
    ySpeed=-ySpeed;
    gameOver();
  }
}


setInterval(movePlayer,interval);