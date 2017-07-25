/*This is game is still in development.*/
/*Don't expect much of it.*/
/*New features might be added at any time.*/


var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=800;
var img_player = document.createElement("img");
img_player.src = "cheese.png";

var x = 0;
var y= 0;
var playerW = 150;
var playerH = 100;
var xSpeed = 0;
var ySpeed = 0;
var counter=0;
var gravity = 5;
var plat=[];
var lava=[];
var req;
var xMonster = 500;
var yMonster = 250;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 50; //monster width
var monsterH = 50; //monster height
var xC = 500;
var yC = 300;
var wC = 20;
var hC = 20;
var score =0;

function animate() {
req=requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player, x,y, playerW, playerH);
x+=xSpeed;
y+=ySpeed+gravity;
platform();
obstacle();
monster();
coin();
scoreDisplay();
if (x <0 || x> canvas.width-playerW) {
xSpeed=-xSpeed;

}
             
if (y <0 || y>canvas.height-playerH) {
ySpeed=-ySpeed;

}

if (x>800) {
  gameWin();
}

}

function setDirection(dir) {
if (dir === "up") {
xSpeed = 0;
ySpeed = -5;

} if (dir === "down") {
  xSpeed = 0;
  ySpeed = 5;
}
if (dir === "left") {
  xSpeed = -5;
  ySpeed = 0;
}
 if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;
}
if (dir === "stop") {
  xSpeed = 0;
  ySpeed = 0;
}
 if (dir === "jump") {
y-=60;
}
}

var keyActions = {
  87: "up",
  83: "down",
  68: "right",
  65: "left",
  32: "jump"
};


document.addEventListener('keydown',function(event) {
var dir = keyActions[event.keyCode];
setDirection(dir);
 
});

document.addEventListener('keyup',function(event) {
var dir = keyActions[event.keyCode];
setDirection('stop');
 
});




plat.push({x: 0, y: 230, w:100, h:10});
plat.push({x: 100,y: 235, w:100, h:10});
plat.push({x: 200,y: 240, w:100, h:10});
plat.push({x: 500,y: 500, w:100, h:10});
plat.push({x: 0, y:785, w:canvas.width, h:10});

function platform() {
gravity =5;
for(var i = 0; i<plat.length; i++) {
cx.fillStyle="grey";
cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h)
 if (y===plat[i].y-playerH &&
    x>=plat[i].x-playerW &&
    x<=plat[i].x + plat[i].w)
  {gravity=0}
}
}

lava.push({x:400, y:600, w:500, h:10});

function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
if (y==lava[i].y-playerH &&
    x>=lava[i].x-playerW &&
    x<=lava[i].x + lava[i].w)
   {gameOver()}
}
}

function stop() {
  if(req){
    cancelAnimationFrame(req);
    req = undefined;
  }};

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over", 10,50);
  stop();
}

function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("You Won!",10,50);
  stop();
}

function monster() {
cx.fillStyle = "blue";
cx.fillRect(xMonster,yMonster, monsterW,monsterH);
xMonster += xMonsterSpeed;
yMonster += yMonsterSpeed;
if(x+playerW > xMonster && xMonster+monsterW >x && yMonster+monsterH > y && y+playerH > yMonster) {
  gameOver();
}
if (xMonster<0||xMonster>1000) {
    xMonsterSpeed = -xMonsterSpeed;
}
}

function coin() {
 cx.fillStyle = "gold"
 cx.fillRect(xC,yC,wC, hC)
 if(x+playerW > xC &&
 xC + wC> x &&
 yC + hC >y &&
 y+playerH >yC)
 {
   score+=10;
   xC =Math.random()*canvas.width;
   yC = Math.random()*canvas.height;
}
}
 /*
 if (x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH >yc ) {
   var i = Math.ceil(Math.random()*plat.length);
   xC = plat[i].x;
   yC = plat[i].y;
   
 }

if (x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH >yC )
{
   score+= 10;
}
 
function coin()
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hCy && y+playerH>yC)
  {
  score +=10;
  var i = getRandomInt(1,plat.length);
    xC = plat[i].x;
    yC = plat[i].y-40;
//  xC = Math.random()*(canvas.width-1000);
 // yC = getRandomInt(1,3)*150;
  }
  
  
}
*/

function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}

function scoreDisplay() {
  cx.fillStyle ="Green";
  cx.font = "30px Lobster";
  cx.fillText("Score: "+score,500,100);
}







animate();