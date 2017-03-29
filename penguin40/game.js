"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var interval = 60;
var gravity=5;
//variables for Sprite Animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var xCoin = 65;
var yCoin = 230;
var coinW = 20;
var coinH = 20;
var score = 0;
var ground=false;
var xMonster = 300;
var yMonster = 330;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var xMonster2 = 300;
var yMonster2 = 130;
var xMonster2Speed = -5;
var yMonster2Speed = 0;
var monsterW = 50;
var monsterH = 50;
var img = document.createElement("img");
var enemyimg = document.createElement("img");
var enemyimg2 = document.createElement("img");
var audio = new Audio("smb_mariodie.wav")
var score = 0;
img.src = "img/toad_sprite.png";

enemyimg.src = "img/enemy.gif"
enemyimg2.src = "img/enemy.gif"

//functions section
function movePlayer() {
  clearCanvas();
  //You will add a function here today
  cx.drawImage(img, cycle*spriteW, 0, spriteW, spriteH, x,y, spriteW, spriteH);
  cycle=(cycle+1)%6;
  x+=xSpeed;
  y+=ySpeed+gravity;
  obstacle();
  platform();
  monster();
  monster2();
  coin();
  scoredisplay();
  //You will add the obstacle() function here today
}

function clearCanvas() {
cx.clearRect(0,0,canvas.width, canvas.height);
}

function setDirection(dir) {
  if (dir === "up") {
    xSpeed = 0;
    ySpeed = -5;
  } else if (dir === "down" && ground ===false) {
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
  } else if (dir === "jump" && gravity==0) {
    y = y-60;
    
  }
}

var keyActions = {
  32: "jump",
  37: "left",
/*  38: "up",*/
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
  cx.fillStyle = "Lime";
  cx.fillRect(0,450,canvas.width, 20);
  if (x <0 || x>canvas.width) {
    xSpeed=-xSpeed;
  }
  if (y <0 || y>canvas.height ){
    ySpeed=-ySpeed;
  } if (y>450-spriteH) {
   gameOver();
    
  } if (x>canvas.width) {
    gameWin ();
  }
}
/*
function platform() {
  cx.fillStyle = "grey";
  cx.fillRect(0,80,100,10);
  cx.fillRect(0,550,100,50);
  if (y==(80-spriteH) && x<100) {
    gravity = 0; ground = true;
  } else if (y==(550-spriteH) && x<100) {
    gravity = 0; ground = true;
  }  else {ground = false;
    gravity = 5;
  }
}
*/

function gameOver() {
  cx.fillstyle = "Lime"
   cx.font = "30px Comic Sans MS";
    cx.fillText("You Dead",75, 75);
  xSpeed = 0;
  ySpeed = 0;
audio.play()
gravity = 10;
ground = false;
clearInterval(myVar);

  
}
function gameWin () {
  xSpeed = 0;
  ySpeed = 0;
  cx.fillstyle = "Gold";
  cx.font = "30px Comic Sans MS";
  cx.fillText("You Win", 75, 75)
}
function monster() {
  cx.drawImage(enemyimg, xMonster, yMonster, monsterH, monsterW);
  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if(x+spriteW > xMonster && xMonster+monsterW >x && yMonster+monsterH > y && y+spriteH > yMonster) {
    
    gameOver();
    
  }else if (xMonster<0 || xMonster>canvas.width-monsterW) {
    xMonsterSpeed = -xMonsterSpeed;
  }
}

function monster2() {
  cx.drawImage(enemyimg2, xMonster2, yMonster2, monsterH, monsterW);
  xMonster2 += xMonster2Speed;
  yMonster2 += yMonster2Speed;
  if(x+spriteW > xMonster2 && xMonster2+monsterW >x && yMonster2+monsterH > y && y+spriteH > yMonster2) {
    
    gameOver();
    
  }else if (xMonster2<0 || xMonster2>canvas.width-monsterW) {
    xMonster2Speed = -xMonster2Speed;
  }
}



function coin() {
  cx.fillStyle = "gold"
  cx.fillRect(xCoin, yCoin, coinW, coinH);
   if(x+spriteW > xCoin && xCoin+coinW >x && yCoin+coinH > y && y+spriteH > yCoin) {
     score +=10;
     xCoin = Math.floor(Math.random()*canvas.width-coinW);
     yCoin = Math.floor(Math.random()*350)+100;
   }
}

function scoredisplay() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText ("Score: "+score,300,100)
}

var plat=[]

plat.push({x:0,y:80,w:100, h:10});
plat.push({x:0,y:550,w:100, h:50});
plat.push({x:200,y:180,w:100, h:10});
plat.push({x:250,y:320,w:100, h:10});
plat.push({x:50,y:560,w:100, h:10});
plat.push({x:380,y:210,w:100, h:10});
plat.push({x:380,y:180,w:100, h:10});
plat.push({x:30,y:390,w:100, h:10});
plat.push({x:40,y:450,w:100, h:10});
plat.push({x:270,y:450,w:100, h:10});
plat.push({x:70,y:330,w:100, h:10});
plat.push({x:130,y:280,w:100, h:10});
plat.push({x:360,y:410,w:100, h:10});
plat.push({x:360,y:350,w:100, h:10});
plat.push({x:380,y:210,w:100, h:10});
plat.push({x:70,y:230,w:100, h:10});
function platform() {
  if (ground===false) {gravity=5}
  cx.fillStyle="grey";
  for (var i=0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if(y==plat[i].y-spriteH && x>plat[i].x -spriteW && x<plat[i].x + plat[i].w){
      ground = true; gravity=0;
    } else {ground=false}
  }
}

var myVar = setInterval(function(){movePlayer()},interval);

