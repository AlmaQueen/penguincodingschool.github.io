var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "mario.png"

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;

var plat = [];
plat.push ({x: 0, y: 100, w:100, h:10});
plat.push ({x: 200, y: 125, w:100, h:10});
plat.push ({x: 300, y: 210, w:500, h:100});
plat.push ({x: 100, y: 270, w:800, h:100});
plat.push ({x: 0, y: 570, w:400, h:100});
plat.push ({x: 500, y: 570, w:100, h:1000});
plat.push ({x: 0, y:500, w:50, h:10});
plat.push ({x: 50, y:410, w:50, h:10});
plat.push ({x: 0, y:320, w:50, h:10});
plat.push ({x: 900, y:160, w:50, h:10});


var lava = [];
lava.push ({x: 0, y: 600, w:1000, h:1000});




function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  monster2();
  coin();
  scoreDisplay();
 if (x>canvas.width||x<0) {xSpeed=-xSpeed}
 if (y>canvas.height || y<0) {ySpeed = -ySpeed}
}
 
function setDirection(dir) {
 if (dir=="up") {
 xSpeed = 0;
 ySpeed = -5;
 } else if (dir=="down") {
 xSpeed = 0;
 ySpeed = 5;
 } else if (dir=="left") {
 xSpeed = -5;
 ySpeed = 0;
 } else if (dir=="right") {
 xSpeed = 5;
 ySpeed = 0;
 } else if (dir=="stop") {
 xSpeed = 0;
 ySpeed = 0;
 } else if (dir === "jump") { y = y-90;}
}

 var keyActions = {
 32: "jump",
 37: "left",
 38: "up",
 39: "right",
 40: "down",
 };
 
document.addEventListener('keydown', function(event) {
var dir = keyActions[event.keyCode];
setDirection(dir);
})

document.addEventListener('keyup', function(event) {
var dir = keyActions[event.keyCode];
setDirection("stop");
})




function platform() {
  cx.fillStyle = "gray";
  gravity =5;
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y - playerH
    && x>=plat[i].x -playerW
    && x<=plat[i].x + plat[i].w)
  {gravity = 0}
  }
}

function obstacle() {
  cx.fillStyle = "red";
  for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y - playerH
    && x>=lava[i].x -playerW
    && x<=lava[i].x + lava[i].w)
  {youDied()}
  }
}

var req;

function youDied() {
   cx.fillStyle = "pink";
   cx.font = "30px Comic Sans MS";
   cx.fillText("You Died",10,50);
   console.log("you died");
   stop();
}

function gameWin() {
   cx.fillStyle = "pink";
   cx.font = "30px Comic Sans MS";
   cx.fillText("You Won",10,50);
   console.log("you won");
   stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}
   
   
   
  
var xM = 900;
var yM = 280;
var xMsp = 0;
var yMsp = -5;

var mW =50;
var mH = 60;

var img_monster = document.createElement("img");
img_monster.src = "mario.png";

function monster() {
cx.drawImage(img_monster,xM,yM,mW,mH);
xM+=xMsp;
yM+=yMsp;
if (x+playerW>xM&&xM+mW>x&&yM+mH>y&&y+playerH>yM)
{youDied()}

else if (xM<0 || xM>canvas.width-mW) {xMsp = -xMsp;}
else if(yM<0 || yM>canvas.height-mH) {yMsp = -yMsp;}
}

var xM2 = 500;
var yM2 = 280;
var xMsp2 = -5;
var yMsp2 = -5;

var mW =50;
var mH =60;

var img_monster = document.createElement("img");
img_monster.src = "mario.png";

function monster2() {
cx.drawImage(img_monster,xM2,yM2,mW,mH);
xM2+=xMsp2;
yM2+=yMsp2;
if (x+playerW>xM2&&xM2+mW>x&&yM2+mH>y&&y+playerH>yM2)
{youDied()}

else if (xM2<0 || xM2>canvas.width-mW) {xMsp2 = -xMsp2;}
else if(yM2<0 || yM2>canvas.height-mH) {yMsp2 = -yMsp2;}
}




var xC = 300;
var yC = 500;
var wC = 30;
var hC = 30;
var score = 0;

function scoreDisplay()  {
cx.fillStyle = "Cyan";
cx.font = "30px Comic Sans MS";
cx.fillText("Score: "+score,500,100)
}

var backgroundmusic = new Audio('lasers.mp3');
backgroundmusic.loop = true;
backgroundmusic.play();














var img_coin = document.createElement("img");
img_coin.src = "mario.png";

var coinsound = new Audio('smb_coin.wav') ;

function coin() {
cx.drawImage(img_coin,xC, yC, wC, hC);
if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
{
  coinsound.play();
  score +=10;
  if (score == 10000) {
    gameWin();
  }
  var i = Math.ceil(Math.random()*plat.length);
  xC = plat[i].x;
  yC = plat[i].y-40;
  
}
}































animate()












