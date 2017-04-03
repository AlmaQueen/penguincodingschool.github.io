"use strict";
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 350;
//variable section
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var interval = 60;
var gravity = 5;
var ground = false;
var xmonster=500;
var ymonster=260;
var xmonsterspeed = -5;
var ymonsterspeed = 0;
var monsterw = 30;
var monsterh = 35;
var xcoin = 500;
var ycoin = 280;
var coinw = 20;
var coinh = 20;
var score = 0;
var plat=[];
var audiocoin = new Audio ("mb_coin.wav")
var audiodie = new Audio("smb_gameover.wav")
var audiojump = new Audio("mb_jump.wav")
var audiobkgd = new Audio("SuperMarioBros.mp3")

//variables for Sprite Animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img = document.createElement("img");
img.src = "img/luigi_sprite.png";
var img_sprite = document.createElement("img");
img_sprite.src = "img/luigi_sprite.png";
var img_monster = document.createElement("img");
img_monster.src = "img/monster.jpg";

//functions section
//  move player
function movePlayer() {
  clearCanvas();
  cx.drawImage(img_sprite,cycle*spriteW, 0, spriteW, spriteH, x,y,30,35);
  cycle= (cycle+1)%6;
  x+=xSpeed;
  y+=ySpeed+gravity;
  obstacle();
  platform();
  platform2();
  monster();
  coin();
  scoredisplay();
  audiobkgd.play();
  if (score >10) {gameWin()}
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
    } else if  (dir === "jump" && gravity==0){
      y = y-40;
      audiojump.play();
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
  if (y>300){
  gameOver();
  }
}
function gameOver() {
  cx.font = "30px Lobster";
  cx.fillText("Game Over", 200,50);
  xSpeed = 0;
  ySpeed = 0;
  audiodie.play();
alert("you fail")
var answer2 = prompt("do ya suckers whanna play agian")
if (answer2 == "yes"){
  window.location="game.html";
}
}
//examele of promts
// url to game
 //file:///home/chronos/u-49726fd3415e6dade9bc0112301786c54f6ddad1/Downloads/penguin29/game/game.html
  

function gameWin() {
     cx.font = "30px Lobster";
     cx.fillText("you win sucker", 200,50);
   xSpeed = -300000;
  ySpeed = -300000;
     alert("you win")
     var answer = prompt("would you like to play again");
     if (answer=="yes") {
       window.location="game.html";
     }
}

function monster(){
cx.fillStyle = "black"
cx.drawImage(img_monster,xmonster,ymonster,monsterw,monsterh);
//cx.fillRect(xmonster,ymonster,monsterw,monsterh);
xmonster += xmonsterspeed;
ymonster += ymonsterspeed;
if(x+spriteW > xmonster && xmonster+monsterw >x && ymonster+monsterh > y && y+spriteH > ymonster) {
  gameOver();
} else if (xmonster <0 || xmonster>canvas.width) {
    xmonsterspeed=-xmonsterspeed;
  }
  else if (ymonster <0 ){
    ymonsterspeed=-ymonsterspeed;
  }
  else if (ymonster>300) {
    ymonsterspeed=-ymonsterspeed
}}
function coin() {
  cx.fillStyle = "gold";
  cx.fillRect(xcoin,ycoin,coinw,coinh);
  if(x+spriteW > xcoin && xcoin+coinw >x && ycoin+coinh > y && y+spriteH > ycoin) {
    score += 1;
    audiocoin.play();
xcoin = Math.random()*(canvas.width-20);
ycoin = Math.random()*(250);
}}
function  scoredisplay(){
cx.fillStyle = "gold"
cx.font = "30px Cosmic Sans MS";
cx.fillText("you score  "+score,500,100);
}
function platform() {
  cx.fillStyle = "red";
  cx.fillRect(0,80,100,10);
  cx.fillRect(60,240,30,60);
  cx.fillStyle = "brown";
  cx.fillRect(0,300,canvas.width,30)
  
  if (y==(80-spriteH) && x<100) {
  gravity = 0;
  ground = true;
  } else if (y==(240-spriteH) && x>60-spriteW && x<90+spriteW) {
    gravity = 0;
    ground = true;
} else if (y==(300-spriteH) && x>0) {
    gravity = 0;
    ground = true;
}
  else   {
    gravity = 5;
    ground = false;
  }
}


function platform2(){
  if (ground===false) {gravity=5}
  cx.fillStyle="red";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w,plat[i].h);
    if (y==plat[i].y-spriteH && x>plat[i].x-spriteW && x<plat[i].x + plat[i].w) {
      ground = true; gravity=0
    } else {ground = false}
  }
}

plat.push({x: 300,y:150, w:100, h:10});
plat.push({x: 100,y:150,w:100,h:10});
plat.push({x: 200,y: 60,w:100,h:10});
plat.push({x:300, y:40,w:100,h:10});

setInterval(movePlayer,interval);
//task: