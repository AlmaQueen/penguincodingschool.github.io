"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 350;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var interval = 120;
var gravity = 5;
var xMonster = 500;
var yMonster = 120;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 10;
var monsterH = 10;
var ground = false;
var xCoin = 600;
var yCoin = 175;
var coinW = 15;
var coinH = 15;
var score = 0;

var plat=[]
   plat.push ({x: 0, y: 130, w: 200, h: 10});
   plat.push ({x: 90, y: 90, w: 160, h: 10});
   plat.push ({x: 300, y: 90, w: 170, h: 10});
   plat.push ({x: 550, y: 90, w: 200, h: 10});
   plat.push ({x: 240, y: 160, w: 120, h: 10});
   plat.push ({x: 425, y: 190, w: 200, h: 10});
   plat.push ({x: 60, y: 190, w: 120, h: 10});
   plat.push ({x: 210, y: 230, w: 200, h: 10});
   //plat.push ({x: 370, y: 222, w: 120, h: 10});
   plat.push ({x: 400, y: 140, w: 130, h: 10});
   plat.push ({x: 30, y: 270, w: 180, h: 10});
   plat.push ({x: 240, y: 310, w: 160, h: 10});
   plat.push ({x: 500, y: 310, w: 200, h: 10});
   plat.push ({x: 400, y: 270, w: 120, h: 10});
   plat.push ({x: 550, y: 230, w: 120, h: 10});

//variables for sprite animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img_sprite = document.createElement("img");
img_sprite.src="img/toad_sprite.png"

//function section
function clearCanvas(){
  cx.clearRect(0,0,canvas.width, canvas.height);
}

function setDirection(dir){
  if (dir == "up") {
    xSpeed=0;
    ySpeed=-10;
  } else if (dir == "down") {
    xSpeed=0;
    ySpeed=10;
  } else if (dir == "left") {
    xSpeed=-5;
    ySpeed=0;
  } else if (dir == "right") {
    xSpeed=5;
    ySpeed=0;
  } else if (dir == "stop") {
    xSpeed=0;
    ySpeed=0;
  } else if (dir == "jump" && gravity==0) {
    y =y-60;
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

function movePlayer(){
  clearCanvas();
  
  cx.drawImage(img_sprite, cycle*spriteW, 0, spriteW, spriteH, x, y, spriteW, spriteH);
  cycle = (cycle+1)%6;
  
  x+=xSpeed;
  y+=ySpeed+gravity;
  
  obstacle();
  platform();
  monster();
  coin();
  scoreDisplay();
  if(score==50)
  {
    gameWin()
  }
}


function obstacle() {
  if(x<0 || x>(canvas.width-spriteW)) {
    xSpeed=-xSpeed
  }
  if(y<0 || y>canvas.width-spriteH) {
    ySpeed=-ySpeed
  }
  if (y>(350-spriteH)) {
    gameOver();
  }
  
  cx.fillStyle = "Red";
  cx.fillRect(0, 340, canvas.width, canvas.height);
  if (x < 0 || x > canvas.width) {
    xSpeed= -xSpeed;
  }
  if (y < 0 || y > canvas.height) {
    ySpeed= -ySpeed;
  }
}

function platform() {
  if(ground===false) {gravity=5}
  cx.fillStyle="grey";
  for (var i = 0; i<plat.length; i++){
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w+5, plat[i].h);
    if (y==plat[i].y-spriteH && x>plat[i].x-spriteW && x<plat[i].x+plat[i].w){
      ground=true; gravity=0;
    }
    else {ground=false}
  

   /*cx.fillStyle= "grey";
   cx.fillRect(0,130,200,10);
   cx.fillRect(240,160,120,10);
   cx.fillRect(425,190,200,10);
   cx.fillRect(60,190,120,10);
   cx.fillRect(210,230,140,10);
  
  
   if (y==130-(spriteH-5) && x<190) {
     gravity=0;
     ground=true;
   } else if (y==160-(spriteH-5) && x<350 && x>250-spriteW) {
     gravity=0;
     ground=true;
   }else if (y==190-(spriteH-5) && x<625 && x>425-spriteW) {
     gravity=0;
     ground=true;
   } else if (y==190-(spriteH-5) && x<180 && x>60-spriteW) {
     gravity=0;
     ground=true;
   } else if (y==230-(spriteH-5) && x<330 && x>220-spriteW) {
     gravity=0;
     ground=true;
   }*/
   
   
  /*
   else {
     gravity=5; ground=false;
   }*/
  }
}
  


function gameOver() {
  xSpeed = 0;
  ySpeed = 0;
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("GAME OVER", 10, 50);
  clearInterval(myVar);
}

var myVar = setInterval(function(){movePlayer()}, interval);

function gameWin() {
  xSpeed = 0;
  ySpeed = 0;
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("YOU WON!", 10, 50);
  clearInterval(myVar);
}

function monster() {
  cx.fillStyle = "blue";
  cx.fillRect(xMonster, yMonster, monsterW, monsterH);
  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if (x+spriteW > xMonster && xMonster+monsterW > x && yMonster+monsterH > y && yMonster+monsterH > y && y+spriteH > yMonster){
    gameOver();
  } else if (xMonster<0 || xMonster==700) {
    xMonsterSpeed = -xMonsterSpeed;
  }
}
  
function coin(){
  cx.fillStyle = "gold";
  cx.fillRect(xCoin, yCoin, coinW, coinH);
  if(x+spriteW > xCoin && xCoin+coinW > x && yCoin+coinH > y && y+spriteH > yCoin){
    score += 10;
    xCoin = Math.floor(Math.random()*700);
    yCoin = Math.floor(Math.random()*300);
  }
}
  
function scoreDisplay() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Score: "+score, 500, 50);
  
  cx.fillStyle = "Black";
  cx.font = "10px Comic Sans MS";
  cx.fillText("space bar = jump", 350, 30);
  cx.fillText("< = left", 350, 40);
  cx.fillText("> = right", 350, 50);
  cx.fillText("don't touch the blue!!", 220, 40);


}