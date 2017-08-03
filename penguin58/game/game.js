
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=930;
canvas.height=800;

// Variables//
var life = 3;
var score = 0;
var xM = 500;
var yM = 0;
var mW = 100;
var mH = 150;
var xMsp = -4;
var yMsp = 4;
var xC = 40;
var yC = 170;
var wC = 50;
var hC = 75;
var req;
var player = document.createElement("img");
var fire = document.createElement("img");
var evil = document.createElement("img");
var rewardimg = document.createElement("img");
player.src = "main.jpg";
fire.src = "lava.jpg";
evil.src = "evil.jpg";
rewardimg.src = "reward.jpg";
var playerW = 75;
var playerH = 100;
var fireW = canvas.width;
var fireH = 100;
var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var keyActions= {
  37: "left",
  38: "jump",
  39: "right",
};
var gravity = 2;

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

//Platforms and lava//
var plat=[];
plat.push({x: 0, y: 250, w:100, h:10});
plat.push({x: 450, y: 500, w:100, h:10});
plat.push({x: 750, y: 640, w:100, h:10});
plat.push({x: 365, y: 140, w:100, h:10});
plat.push({x: 200, y: 650, w:100, h:10});
plat.push({x: 600, y: 330, w:100, h:10});
var plat1=[];
plat1.push({x: 410, y: 200, w: 110, h: 10});

var lava=[];
lava.push({x: 0, y: 660, w:canvas.width, h:100});
lava.push({x: 0, y: 300, w:400, h:35});
lava.push({x: 365, y: 150, w: 125, h:185});





// Functions//
function coin() {
  
  cx.drawImage(rewardimg, xC,yC,wC,hC);
  if (
    x+playerW > xC && xC + wC> x && yC + hC >y && y+playerH >yC){
      score +=2;
      var i = Math.floor(Math.random()*plat.length);
      xC = plat[i].x;
      yC = plat[i].y - 100;
    }
  
}
function getRandomInt (min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}
function Displayscore() {
  cx.fillStyle = "red";
  cx.font = "30px Georgian";
  cx.fillText("You have a score of "+score,0,50);
}
function animate() {
req = requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(player,x,y, playerW, playerH);
x+=xSpeed;
y+=ySpeed+gravity;
platform();
platform1();
obstacle();
monster();
coin();
Displayscore();
Displife();
if (x > canvas.width || x < 0 ) {
  xSpeed=-xSpeed;
}
else if (y < 0) {
  y=0;
}
}
function platform1(){
  cx.fillStyle="yellow";
  for (var i = 0; i<plat1.length; i++) {
    cx.fillRect(plat1[i].x, plat1[i].y, plat1[i].w, plat1[i].h);
    if (y == plat1[i].y -playerH &&
    x >= plat1[i].x -playerW &&
    x <= plat1[i].x + plat1[i].w)
    {
    gravity = 0;
    
     
     
    }
  }
}
function platform() {
  gravity=1;
  cx.fillStyle="yellow";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y == plat[i].y -playerH &&
    x >= plat[i].x -playerW &&
    x <= plat[i].x + plat[i].w)
    {
    gravity = 0;
     
    }
  }
}
function monster() {
  cx.drawImage(evil, xM, yM, mW, mH);
  xM += xMsp;
  yM += yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH > y && y+playerH > yM)
  {life-=1;
  lostlife();
  x = 0;
  y = 0;
  if (life ===0) { gameOver() }
  }
  else if (xM <0 || xM >canvas.width ) {
    xMsp = -xMsp;
  }else if (yM<0 || yM - mH>canvas.height) {
    yMsp = -yMsp;
  }
}

function setDirection (dir) {
  if (dir === "left" && x>0) {
  xSpeed = -5;
  ySpeed = 0;
}else if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;
}else if (dir ==="stop") {
  xSpeed = 0;
  yspeed = 0;
}else if (dir === "jump" && gravity ===0) {
  y -= 175;
}
}
function obstacle() {
  for (var i = 0; i<lava.length; i++) {
    cx.drawImage(fire,lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (x+playerW > lava[i].x && lava[i].x+lava[i].w >x && lava[i].y+lava[i].h > y && y+playerH > lava[i].y)
    {life -=1;
    lostlife();
      x = 0;
      y = 0;
      if (life===0) {gameOver()}
    }
  }
}
function lostlife() {
  alert("Altjough you have tried very hard, something has taken your life. You have lost a life. I regret being the one to be telling you this, but everything will be allright. Lives remaining: "+life+ ". Click the button to begin again!")
}
function stop(){
  if (req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}
function Displife() {
  cx.fillStyle = "red";
  cx.font = "30px Georgian";
  cx.fillText("Lives remaining: "+life, 0, 100)
}
function gameOver() {
  alert("I'm very sorry, but although you tried very hard, and you had a great adventure, it's time for it to come to end. You've died. I regret being the informer of this dreadfull news. Please do not shoot the messenger. Thank you for playing. Game Over.", 10, 50);
  window.location = "index.html";
  stop();
}

animate();