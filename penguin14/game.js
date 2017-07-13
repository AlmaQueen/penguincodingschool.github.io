var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "narwhal.png";

var x =0;
var y =0;
var playerW = 100;
var playerH = 100;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;

function animate () {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  obstacle();
  coin();
  scoreDisplay();
  monster();
  monster2();
  gameWin();
  if(x<0 ||x>canvas.width) {
    xspeed=-xspeed;
  }
}


function setDirection(dir) {
  if (dir=="up") {
    xspeed =0;
    yspeed = -5;
  }
  if (dir=="down") {
    xspeed =0;
    yspeed = 5;
  }
  if (dir=="left") {
    xspeed =-5;
    yspeed = 0;
  }
  if (dir=="right") {
    xspeed =5;
    yspeed = 0;
  }
  if (dir=="stop") {
    xspeed =0;
    yspeed = 0;
  }
  if (dir === "jump" && y>0) {
  yspeed = -20;
}
}
  

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});



var plat = [];
plat.push({x:0, y:200, w:500, h:10});
plat.push({x:700, y:400, w:500, h:10});
plat.push({x:700, y:200, w:500, h:10});

function platform() {
gravity =5;
cx.fillStyle="#e87fe8";
for (var i = 0; i <plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h)
  if(y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<=plat[i].x + plat[i].w)
  {gravity=0}
  else {}
}
}

function obstacle() {
cx.fillStyle="#aa5caa";
for (var i = 0; i <lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if(y==lava[i].y-playerH &&
  x>=lava[i].x-playerW &&
  x<=lava[i].x + lava[i].w)
  {gameOver()}
}
}

var lava=[];

lava.push({x: 0, y: 600, w:canvas.width, h:10});
  
function stop() {
    if(req){
      cancelAnimationFrame(req);
      req = undefined;
    }
  }
  
function gameOver() {
    cx.fillStyle = "#3bd3d3";
    cx.font = "70px Arial";
    cx.fillText("Game Over",300,300);
    stop();
  }
  
  var xC = 500;
  var yC = 300;
  var wC = 100;
  var hC = 100;
  

  var img_coin = document.createElement("img");
  img_coin.src = "unicornfrappaccino.gif";
  var score =0;
  
  function coin() {
    cx.drawImage(img_coin,xC, yC, wC, hC);
    if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
  {
  score +=1;
  var i = Math.floor(Math.random()*plat.length);
  xC = plat[i].x + Math.random()*plat[i].w;
  yC = plat[i].y-hC;
  if (score===10) {gameWin()}
  }
  }
  
   var img_monster2 = document.createElement("img");
  img_monster2.src = "kitten.png";
  
  var xM2 = 800;
  var yM2 = 74;
  var wM2 = 80;
  var hM2 = 95;
  
  var xMonsterSpeed2 = -5
  var yMonsterSpeed2 =0;
  
  function monster2() {
    cx.drawImage(img_monster2,xM2, yM2, wM2, hM2);
    xM2 += xMonsterSpeed2;
    yM2 += yMonsterSpeed2;
    if (x+playerW > xM2 && xM2+wM2 >x && yM2+hM2>y && y+playerH>yM2)
    {
      gameOver()
    }
    else if (xM2<0 || xM2>900) {
      xMonsterSpeed2 = -xMonsterSpeed2;
    }
  }
  
  var img_monster = document.createElement("img");
  img_monster.src = "bunny.png";
  
    var xM = 800;
  var yM = 275;
  var wM = 90;
  var hM = 140;
  
  var xMonsterSpeed = -5
  var yMonsterSpeed =0;
  
  function monster() {
    cx.drawImage(img_monster,xM, yM, wM, hM);
    xM += xMonsterSpeed;
    yM += yMonsterSpeed;
    if (x+playerW > xM && xM+wM >x && yM+hM>y && y+playerH>yM)
    {
      gameOver()
    }
    else if (xM<0 || xM>900) {
      xMonsterSpeed = -xMonsterSpeed;
    }
  }
  
function scoreDisplay() {
  cx.fillStyle = "#b3d9ff";
  cx.font = "30px Arial";
  cx.fillText("Score: "+score,500,100);
}

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
  }
  

function gameWin() {
  cx.fillStyle = "#5ae2ae";
  cx.font = "Arial";
  cx.fillText("Congrats! You won!");
}
  
  
  
animate();
