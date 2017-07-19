var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=805;
var img_player = document.createElement("img");
img_player.src = "feather.jpg";


var x = 0;
var y= 0 ;
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
var yMonster = 0;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 10; //monster width
var monsterH = 10; //monster height

function animate() {
req=requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player, x,y, playerW, playerH);
x+=xSpeed;
y+=ySpeed+gravity;
counterDisplay();
platform();
obstacle();

if (x>canvas.width -playerW || x <0){
xSpeed = -xSpeed;

}
             
if (y>canvas.height-playerH || y <0){
ySpeed = -ySpeed;

}

}

function counterDisplay() {
  cx.font = "325px";
  cx.fillText('Platform Touches:'+counter,100,100);

}

function setDirection(dir) {
if (dir === "up") {
xSpeed = 0;
ySpeed = -5;
} else if (dir === "down") {
  xSpeed = -0;
  ySpeed = 5;
}
else if (dir === "left") {
  xSpeed = -5;
  ySpeed = 0;
}
else if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;
}
else if (dir === "stop") {
  xSpeed = 0;
  ySpeed = 0;
}
else if (dir === "jump") {
ySpeed=-10;
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
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
 cx.fillRect(plat[i].x, plat[i].y,plat[i].w, plat[i].h);
 if (y===plat[i].y-playerH &&
    x>=plat[i].x-playerW &&
    x<=plat[i].x + plat[i].w)
  {gravity=0}
else {}


}


}

lava.push({x:375, y:600, w:500, h:10});

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
  }}

function gameOver() {
  cx.fillSytle = "Red";
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
xMonster += xMonsteSpeed;
yMonster += yMonsterSpeed;
if (xMonster===x && yMonster ===y)  {
    gameOver();
} else if (xMonster<0) {
    xMonsterSpeed = -xMonsterSpeed;
}
  
  
  
  
}

  







  








animate();