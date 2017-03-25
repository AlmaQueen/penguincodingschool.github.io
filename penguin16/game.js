"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height =600;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var interval = 40;
var gravity = 5;

var xMonster=500;
var yMonster=260;
var xMonsterSpeed=-5;
var yMonsterSpeed=0;
var monsterW=30; //monster width
var monsterH=30; //monster height

var xMonster2=0;
var yMonster2=180;
var xMonster2Speed=-5;
var yMonster2Speed=0;

var xMonster3=0;
var yMonster3=90;
var xMonster3Speed=-5;
var yMonster3Speed=0;

var xCoin = 500;
var yCoin = 270;
var coinW = 20;
var coinH = 20;

var score = 0;
//variables for Sprite Animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img = document.createElement("img");
img.src = "img/princess.png";
var img_sprite = document.createElement("img");
img_sprite.src = "img/princess_sprite.png";
var img_monster = document.createElement("img");
img_monster.src = "img/toad.png";


//functions section
function movePlayer() {
  clearCanvas();
  cx.drawImage(img_sprite, cycle*spriteW,0,spriteW,spriteH,x,y,spriteW, spriteH);
  cycle=(cycle+1)%6;
  x+=xSpeed;
  y+=ySpeed+gravity;
  obstacle();
  platform();
  coin();
  monster();
  monster2();
  monster3();
  scoreDisplay();
  if (gamewin===1) {
    gameWin();
    gravity=0;
  }
  
}

function clearCanvas() {
cx.clearRect(0,0,canvas.width, canvas.height);
}

function coin() {
  cx.fillStyle="gold";
  cx.fillRect(xCoin,yCoin,coinW,coinH);
  if(x+spriteW > xCoin && xCoin + coinW>x && yCoin+coinH >y && y+spriteH >yCoin) {
    score+=10;
    if(score >= 200) {
      gameWin();
    }
    xCoin = Math.random()*(canvas.width-coinW);
    yCoin = Math.random()*270;
    xMonster = xCoin;
    yMonster = yCoin;
  }
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
  } else if (dir === "jump") {
    y=y-60;
  }
}

var keyActions = {
  38: "jump",
  37: "left",
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
  cx.fillStyle="red";
  cx.fillRect(0,300,canvas.width,canvas.height);
  if (x <0 || x>canvas.width) {
    xSpeed=-xSpeed;
  }
  if (y <0 || y>canvas.height ){
    ySpeed=-ySpeed;
  }
  if (y>300) {
    gameOver();
  }
}

function monster(){

  cx.drawImage(img_monster,xMonster, yMonster, monsterW, monsterH);
  //cx.fillRect(xMonster, yMonster, monsterW, monsterH);
  xMonster+=xMonsterSpeed;
  yMonster+=yMonsterSpeed;
  if(x+spriteW > xMonster && xMonster + monsterW>x && yMonster+monsterH >y && y+spriteH >yMonster) {
     gameOver();
   } else if (xMonster<0 || xMonster>canvas.width-monsterW) {
     xMonsterSpeed = -xMonsterSpeed;
}
}

function monster2(){
  cx.drawImage(img_monster,xMonster2, yMonster2, monsterW, monsterH);
  //cx.fillRect(xMonster, yMonster, monsterW, monsterH);
  xMonster2+=xMonster2Speed;
  yMonster2+=yMonster2Speed;
  if(x+spriteW > xMonster2 && xMonster2 + monsterW>x && yMonster2+monsterH >y && y+spriteH >yMonster2) {
     gameOver();
   } else if (xMonster2<0 || xMonster2>canvas.width-monsterW) {
     xMonster2Speed = -xMonster2Speed;
}

}
function monster3(){
  cx.drawImage(img_monster,xMonster3, yMonster3, monsterW, monsterH);
  //cx.fillRect(xMonster, yMonster, monsterW, monsterH);
  xMonster3+=xMonster3Speed;
  yMonster3+=yMonster3Speed;
  if(x+spriteW > xMonster3 && xMonster3 + monsterW>x && yMonster3+monsterH >y && y+spriteH >yMonster3) {
     gameOver();
   } else if (xMonster3<0 || xMonster3>canvas.width-monsterW) {
     xMonster3Speed = -xMonster3Speed;
}

}


function platform() {
  cx.fillStyle="grey";
  cx.fillRect(0,80,100,10);
  cx.fillRect(780,100,100,10);
  cx.fillRect(300,290,300,10);
  cx.fillRect(150,200,100,10);
  cx.fillRect(400,140,100,10);
  cx.fillRect(600,125,100,10);
  
  
  
  if (y==(80-spriteH) && x<100) {
    gravity=0;
  }
  else if (y==(100-spriteH) && x>780) {
    gravity=0;
  } else if (y==(290-spriteH) && x>300-spriteW && x<600) {
    gravity=0;
  } else if (y==(200-spriteH) && x>150-spriteW && x<250) {
    gravity=0;
  } else if (y==(140-spriteH) && x>400-spriteW && x<500) {
    gravity=-10;
    
  }  else if (y==(125-spriteH) && x>600-spriteW && x<700) {
    gravity=-10;
  }
  else {
    gravity=5;
  }
  
}

function gameOver() {
  ySpeed=0;
  xSpeed=0;
  cx.font="30px Comic Sans MS";
  cx.fillText("Game Over",10,50);
  xMonsterSpeed=0;
  yMonsterSpeed=0;
  window.location= "game.html"
}

var gamewin;
function gameWin() {
  ySpeed=0;
  xSpeed=0;
  cx.font="30px Comic Sans MS";
  cx.fillText("You Win!",10,50);
  gamewin=1;
  clearInterval(myVar);
}

function scoreDisplay() {
  cx.fillStyle="Cyan";
  cx.font="30px Comic Sans MS";
  cx.fillText("Score:"+score,400,50);
}

var myVar = setInterval(function(){movePlayer()},interval);
