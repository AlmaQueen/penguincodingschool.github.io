var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1200;
canvas.height=700;

var img_player = document.createElement ("img");
img_player.src = "lollipop.png";

var x=0;
var y=0;
var playerW = 50;
var playerH = 50;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var req;
var xM = 800;
var yM = 180;
var xMsp = 3;
var yMsp = 3

function animate ()  {
req = requestAnimationFrame (animate);
cx.clearRect (0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW,playerH);
x+=xSpeed;
y+=ySpeed+gravity;
if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
if(y<0 || y>canvas.height) {ySpeed = -ySpeed}
platform();obstacle();
}

function setDirection(dir) {
  if (dir =="jump") {
    y -= 50;
  }
 if (dir =="down") {
    xSpeed = 0;
    ySpeed = 5;
  }
  if (dir =="left") {
    xSpeed = -5;
    ySpeed = 0;
  }
  if (dir =="right") {
    xSpeed = 5;
    ySpeed = 0;
  }
  if (dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}
var keyActions = {
  32: "stop",
  37: "left",
  38: "jump",
  39: "right",
  40: "down"
}

document.addEventListener('keydown',function(event){

  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup',function(event){

  var dir = keyActions[event.keyCode];
  setDirection("stop");
});



  
var plat=[];
plat.push({x:0,y:100,w:100,h:10})
plat.push({x:700, y:150, w:100, h:10})
plat.push({x:150, y:400, w:100, h:10})
plat.push({x:300, y:600, w:100, h:10})
plat.push({x:605, y:250, w:100, h:10})

function platform () {
  gravity =5;
  cx.fillStyle="lavender";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerH &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
  }
}

var lava = []
lava.push({x:0,y:650,w:1200,h:10})

var life = 5;

function obstacle () {
  cx.fillStyle="white";
  for (var i =0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y-playerH &&
    x>lava[i].x-playerH &&
    x<lava[i].x+lava[i].w)
    
    
    {life = life -1;
    x = 0; //starting position of player
    y = 0;
    if(life ===0) { gameOver(); }
    }
    
  }}
  
 var mW =100;
 var mH = 100;
 var xMsp = 5
 var yMsp = 5
  
  
  function gameOver() {
    cx.fillStyle = "Red";
    cx. font = "30px Comic Sans MS";
    cx.fillText("Game Over",10,50);
    stop();
  }
  
  function stop() {
    if(req) {
      cancelAnimationFrame(req);
      req = undefined;
  }}


animate();