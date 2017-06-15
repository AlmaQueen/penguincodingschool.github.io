"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var interval = 120;
var gravity=5;
var flying = false;
var ground = true;
var jumpcount = 0;
var score=0;
var plat=[];
plat.push({x: 0, y: 100, w:100, h:10});
plat.push({x: 100, y: 80, w:100, h:10});
plat.push({x: 200, y: 60, w:100, h:10});
plat.push({x: 300, y: 40, w:100, h:10});
plat.push({x: 400, y: 20, w: 100, h:10});
plat.push({x: 500, y: 0, w: 100, h:10});
plat.push({x: 0, y: 890, w: canvas.width, h: 10});
plat.push({x: 600, y: 30, w: 100, h:10});
plat.push({x: 700, y: 50, w: 100, h:10});
plat.push({x: 800, y: 70, w: 100, h:10});
plat.push({x: 900, y: 90, w: 100, h:10});
plat.push({x: 1000, y: 110, w: 100, h:10});
plat.push({x: 1100, y: 120, w: 100, h:10});
plat.push({x: 1200, y: 130, w: 100, h:10});
plat.push({x: 130, y: 140, w: 100, h:10});
plat.push({x: 140, y: 150, w: 100, h:10});
plat.push({x: 150, y: 160, w: 100, h:10});
plat.push({x: 160, y: 170, w: 100, h:10});
plat.push({x: 170, y: 180, w: 100, h:10});
plat.push({x: 180, y: 190, w: 100, h:10});
plat.push({x: 190, y: 200, w: 100, h:10});
plat.push({x: 210, y: 210, w: 100, h:10});
plat.push({x: 220, y: 220, w: 100, h:10});
plat.push({x: 230, y: 230, w: 100, h:10});
plat.push({x: 240, y: 240, w: 100, h:10});
plat.push({x: 250, y: 250, w: 100, h:10});
plat.push({x: 260, y: 260, w: 100, h:10});

//variables for Monster Animation
var xMonster1 = 500;
var yMonster1 = 40;
var xMonster2 = 500;
var yMonster2 = 100;
var xMonster3 = 500;
var yMonster3 = 200;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 20;
var monsterH = 20;
var xPowerUp = 300;
var yPowerUp = 10;
var PowerUpW = 40;
var PowerUpH = 40;
var xCoin = 500;
var yCoin = 40;
var coinW = 20;
var coinH = 20;


//variables for Sprite Animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img = document.createElement("img");
img.src = "img/mario.png";
var img_sprite = document.createElement("img");
img_sprite.src = "img/mario_sprite.png";
var img_monster = document.createElement("img");
img_monster.src = "img/Goomba.png";
var img_coin = document.createElement("img");
img_coin.src = "img/coin.png";
var img_PowerUp = document.createElement("img");
img_PowerUp.src = "img/Flying PowerUp.png";

//functions section

function movePlayer() {
  clearCanvas();
  cx.clearRect(0,0,spriteW, spriteH);
  cx.drawImage(img_sprite, cycle*spriteW,0,spriteW,spriteH,x,y,spriteW, spriteH);
  cycle=(cycle+1)%6;
  
  if (flying) {
    gravity = 0;
  }
  x+=xSpeed;
  y+=ySpeed+gravity;
  obstacle();
  platform();
  monster();
  coin();
  PowerUp();
  scoreDisplay();
}
  
  

function clearCanvas() {
cx.clearRect(0,0,canvas.width, canvas.height);
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
  }
  else if (dir === "jump" && ground) {
    
    jumpcount = jumpcount + 1;
    console.log(jumpcount);
    if (jumpcount > 1)
    {
      xSpeed = 0;
      ySpeed = 0;
      jumpcount = 0;
       }
    else
      {
       y = y-60;
       x = x+20;
	  }
    }
  }

function gameOver()  {
 ySpeed=0;
 xSpeed=0;
 cx.fillStyle = "Red";
 cx.font= "30px Comics Sans MS";
 cx.fillText("Died from lava or the monster",10,50);
}

function gameWin()  {
 ySpeed=0;
 xSpeed=0;
 cx.fillStyle = "Green";
 cx.font= "30px Comics Sans MS";
 cx.fillText("You can dab now!",10,50);
}


function platform()  {
ground=false;
gravity=5;
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if(y===plat[i].y-spriteH && x>plat[i].x-spriteW && x<plat[i].x+plat[i].w){
    ground=true;
    gravity=0;
  }
}
}

function monster()  {
 cx.fillStyle = "blue";
 cx.drawImage(img_monster,xMonster1, yMonster1, monsterW, monsterH);
 cx.drawImage(img_monster,xMonster2, yMonster2, monsterW, monsterH);
 cx.drawImage(img_monster,xMonster3, yMonster3, monsterW, monsterH);
/* cx.fillRect(xMonster, yMonster, monsterW, monsterH); */
 xMonster1 += xMonsterSpeed;
 yMonster1 += yMonsterSpeed;
 xMonster2 += xMonsterSpeed;
 yMonster2 += yMonsterSpeed;
 xMonster3 += xMonsterSpeed;
 yMonster3 += yMonsterSpeed;
 if (x+spriteW > xMonster1 && xMonster1+monsterW >x && yMonster1+monsterH > y && y+spriteH > yMonster1) {
 	gameOver();
 } else if (x+spriteW > xMonster2 && xMonster2+monsterW >x && yMonster2+monsterH > y && y+spriteH > yMonster2) {
   gameOver();
 } else if (x+spriteW > xMonster3 && xMonster3+monsterW >x && yMonster3+monsterH > y && y+spriteH > yMonster3) {
   gameOver();
 }
 else if (xMonster1 < 0 || xMonster1 > canvas.width) {
 	 xMonsterSpeed = -xMonsterSpeed;
 }
}

function PowerUp()  {
 cx.fillStyle = "red";
 cx.drawImage(img_PowerUp,  xPowerUp, yPowerUp, PowerUpW, PowerUpH);
 if (x+spriteW > xPowerUp && xPowerUp+PowerUpW >x && yPowerUp+PowerUpH > y && y+spriteH > yPowerUp) {
   flying = true;
   setTimeout(function(){flying = false}, 30000);
   xPowerUp = Math.floor(Math.random()*canvas.width);
   yPowerUp = Math.floor(Math.random()*(canvas.height-900));
 }
}
function coin()  {
 cx.fillStyle = "gold";
 cx.drawImage(img_coin, xCoin, yCoin, coinW, coinH);
 if (x+spriteW > xCoin && xCoin+coinW >x && yCoin+coinH > y && y+spriteH > yCoin) {
   score+=10;
   flying = false;
   xCoin = Math.floor(Math.random()*canvas.width);
   yCoin = Math.floor(Math.random()*(canvas.height-900));
 }
}

function scoreDisplay()  {
  cx.fillStyle = "Green";
  cx.font = "30px Comics Sans MS";
 cx.fillText("Score: "+score,500,100);
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


function obstacle() {
 cx.fillStyle = "Red";
 cx.fillRect(0,900, canvas.width, 100);
 if (x <0 || x>canvas.width) {
    xSpeed=-xSpeed;
  }
  if (y <0 || y> canvas.height-spriteH){
    ySpeed=-ySpeed;
  }
  if (y>900-spriteH) {
    gameOver();
  }
  if (x>canvas.width-spriteW)  {
    gameWin();
  }
}



$("body").keyup(function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});




setInterval(movePlayer,interval);
