"use strict";
alert ("this works only in fullscreen and was built in chrome so thats probably the best browser to use for this game :)")
//variables section
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = window.innerWidth-100;
canvas.height = window.innerHeight-100;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var interval = 120;
var gravity=5;
var ground = false;
var xMonster = 500;
var yMonster = 0;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var MonsterH = 100;
var MonsterW = 100;
var Stop = false;
var xPortal = 1070;
var yPortal = 220;
var wPortal = 100;
var hPortal = 100;
/*
var xPortal = 1070;
var yPortal = 320;
var wPortal = 100;
var hPortal = -100;
*/
//variables for Sprite Animation
var spriteW = 30;
var spriteH = 35;
var cycle = 5;
var img = document.createElement("img");
img.src = "img/toad.png";
var img_sprite = document.createElement("img");
img_sprite.src = "img/toad_sprite.png";
var img_Monster = document.createElement("img");
img_Monster.src = "img/A.jpg";
var img_Win = document.createElement("img");
img_Win.src = "img/portal.jpg";

//functions section
var plat =[];

function platform() {
if(ground===false) {gravity=5}
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-spriteH && x>plat[i].x-spriteW && x<plat[i].x + plat[i].w){
    ground = true; gravity=0;
  } else {ground=false}
}

}

function movePlayer() {
  clearCanvas();
  cx.drawImage(img_sprite, cycle*spriteW,0,spriteW,spriteH,x,y,spriteW, spriteH);
  cycle=(cycle+1)%6;
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  end();
  if (Stop) {
    xSpeed = 0;
    ySpeed = 0;
    gameOver();
  }
 
}
plat.push({x:0,y:70,w:100,h:10});
plat.push({x:120,y:150,w:100,h:10});
plat.push({x:120,y:190,w:100,h:10});
plat.push({x:270,y:190,w:100,h:10});
plat.push({x:320,y:230,w:100,h:10});
plat.push({x:460,y:230,w:100,h:10});
plat.push({x:510,y:230,w:100,h:10});
plat.push({x:630,y:270,w:100,h:10});
plat.push({x:750,y:270,w:100,h:10});
plat.push({x:750,y:320,w:100,h:10});
plat.push({x:910,y:320,w:100,h:10});
plat.push({x:1070,y:320,w:100,h:10});


function clearCanvas() {
cx.clearRect(0,0,canvas.width, canvas.height);
}

function setDirection(dir) {
  if (dir === "jump" && gravity===0) {
    y = y-60;
    x = x+20;
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
  } else if (dir === "GMOV") {
    gameOver();
  } else if (dir === "MSTP") {
    xMonsterSpeed = 0;
    yMonsterSpeed = 0;
  } else if (dir === "MSTRT"){
    xMonsterSpeed = -5;
    yMonsterSpeed = 0;
  } else if (dir === "up") {
     var answer = prompt ("Did You Really Think That Would Work!?!")
    if (answer === "yes") {
      alert ("You Are Stupid!")
    } else if (answer === "no") {
      var Answer2 = prompt ("Then why did you press it!")
        if (Answer2 === "to demonstrate") {
         alert ("Oh, Well Ok Then.")
        } else if (Answer2 === "to test") {
          alert ("Thanks for fixing me!")
        } else {
          alert ("Hmmph...")
        }
    }else if (answer === "whoopie cushion"){
      alert ("pfff *farts*")
    }else if (answer === "sorry") {
      alert ("Its okay everyone makes mistakes")
    }else if (answer === "help!") {
      alert ("*press control (ctrl) to slow the monster...*")
    }else if (answer === "you suck bro") {
      alert ("REDIRECTING.")
      alert ("REDIRECTING..")
      alert ("REDIRECTING...")
      alert ("REDIRECTING....")
      alert ("REDIRECTING.....")
      alert ("SUCSESS")
      window.location = "about:blank"
    } else {
      alert ("you need to say yes or no.")
    }
  }
}

function monster() {
cx.drawImage(img_Monster,xMonster,yMonster,MonsterW,MonsterH);
xMonster += xMonsterSpeed;
yMonster += yMonsterSpeed;
if (x+spriteW > xMonster && xMonster+MonsterW >x && yMonster+MonsterH > y && y+spriteH > yMonster) {
  gameOver();
} else if (xMonster<0) {
  xMonsterSpeed = -xMonsterSpeed
}
}

function end() {
  cx.drawImage(img_Win,xPortal,yPortal,wPortal,hPortal);
if (x+spriteW > xPortal && xPortal+wPortal >x && yPortal+hPortal > y && y+spriteH > yPortal) {
  gameWin();
}
}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  8: "GMOV",
  17:"MSTP"
};

function gameOver() {
  ySpeed = 0
  xSpeed = 0
  cx.font = "30px Comic Sans MS"
  cx.fillText("Game Over",10,50)
  Stop = true
  window.location = "https://penguincodingschool.github.io/penguin20/game.html";
  
}

function gameWin() {
ySpeed = 0;
xSpeed = 0;
cx.fillStyle = "Green";
cx.font = "30px Comic Sans MS";
cx.fillText("You Won!",10,50);
}

$("body").keydown(function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

$("body").keyup(function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
  if (dir == "MSTP") {
    setDirection("MSTRT");
  }
});


function obstacle() {
  cx.fillStyle = "Red";
  cx.fillRect (0,700,canvas.width,canvas.height-380);
  if (x <0 || x>(canvas.width)) {
    xSpeed=-xSpeed;
  }
  if (y <0 || y>canvas.height-spriteH ){
    ySpeed=-ySpeed;
  }
  if (x >canvas.width-spriteW) {
    gameWin();
  }
  if (y >700-spriteH) {
    gameOver();
  }
}

setInterval(movePlayer,interval);
