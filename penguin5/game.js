"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 350;
var x = 0;
var y = 0;
var xMonster = 0;
var yMonster = 285;
var xSpeed = 0;
var ySpeed = 0;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 10;  //monster width
var monsterH = 40;  //monster height
var interval = 100;
var ground = false;
var xCoin = 500;
var yCoin = 300;
var coinW = 30;
var coinH = 30;
var score = 0;
var plat = [];
 plat.push({x: 0, y:100, w:100, h:10});
 plat.push({x: 100, y:200, w:100, h:10});
 plat.push({x: 200, y:100, w:100, h:10});
 plat.push({x: 0, y: 325, w:canvas.width, h:10});
 plat.push({x: 530, y: 150, w:100, h:10});
 plat.push({x: 400, y: 270, w:100, h:10});
 plat.push({x: 370, y: 170, w:100, h:10});
 plat.push({x: 670, y: 200, w:100, h:10});
 plat.push({x: 0, y:270, w:100, h:10});
 plat.push({x: 750, y: 100, w:100, h:10});
 plat.push({x: 800, y: 270, w: 100, h:10});

//variables for Sprite Animation
var gravity = 5;
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img_sprite =document.createElement("img");
img_sprite.src="img/toad_sprite.png";
var img_coin =document.createElement("img");
img_coin.src="img/coin.png";


//functions section
function movePlayer() {
  clearCanvas();
  cx.drawImage(img_sprite, cycle*spriteW, 0, spriteW, spriteH,x,y, spriteW, spriteH);
  cycle = (cycle+1)%6;
  x+=xSpeed;
  y+=ySpeed+gravity;
  //obstacle();
  platform();
  monster();
  coin();
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
    ySpeed = 10;
  } else if (dir === "left") {
    xSpeed = -10;
    ySpeed = 0;
  } else if (dir === "right") {
    xSpeed = 10;
    ySpeed = 0;
  } else if (dir === "stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir === "jump" && gravity==0) {
    y = y-100;
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


/*function obstacle() {
 cx.fillStyle = "black";
 cx.fillRect(0,340,1000,350);
 if (x <0 || x>canvas.width) {
    console.log("say cheese");
    xSpeed=-xSpeed;
  }
else if (y <0 || y>canvas.height ){
    console.log("say cheese")
    ySpeed=-ySpeed;
  }
else if (y == 120) {
    console.log("i'm here")
    gravity=0;
    //gameOver();
  //ground = true;
  //gravity = 0;
    
  }
/*
  if (x>canvas.width) {
    gameWin();
  }

}*/

function gameOver() {
  score = 0;
  
}

/*function gameWin() {
  ySpeed = 0;
  xSpeed = 0;
  cx.fillStyle = "Black";
  cx.font = "30px Times New Roman";
  cx.fillText("You are not dead!",10,50);
}

/*function platform() {
  cx.fillStyle = "gray";
  cx.fillRect(0,80,100,10);
  cx.fillRect(0,340,100,10);
if (y==(80-spriteH) && x<100) {
  gravity = 0;
  ground = true;
} else if (y==(340-spriteH)) {
  gravity = 0;
  ground=true;
} else {
  gravity = 5;
  ground = false;
  }
}*/

function monster() {
  cx.fillStyle = "red";
  cx.fillRect (xMonster, yMonster, monsterW, monsterH);
  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if (x+spriteW>xMonster && xMonster+monsterW>x && yMonster+monsterH>y && y+spriteH>yMonster) {
    gameOver();
  }else if (xMonster<0 || xMonster>canvas.width) {
    xMonsterSpeed = -xMonsterSpeed;
  }
}

function coin(){
  cx.fillStyle = "gold";
  cx.drawImage(img_coin, xCoin,yCoin,coinW,coinH);
   if (x+spriteW>xCoin && xCoin+coinW>x && yCoin+coinH>y && y+spriteH>yCoin)
   if (x+spriteW > xCoin && xCoin + coinW > x && yCoin + coinH > y && y+spriteH > yCoin){
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



function platform() {
  if(ground===false) {gravity=5}
  cx.fillStyle = "grey";
  for (var i = 0; i<plat.length; i++){
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-spriteH && x>plat[i].x-spriteW && x<plat[i].x+plat[i].w){
      ground = true; gravity = 0;
      
    } else {ground=false}
  }
}

setInterval(movePlayer,interval);