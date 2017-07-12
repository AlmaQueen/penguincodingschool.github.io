var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "butterfly.png";

var x = 0;
var y = 0;
var playerW = 50;
var playerH = 50;
var xspeed =0;
var yspeed =0;
var gravity =5;

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  obstacle();
  monster();
  coin();
  scoreDisplay();
if (x<0){
   xspeed = -xspeed;
}
if (y<0) {
  yspeed = -yspeed;
}
if (x>canvas.width) {
   xspeed = -xspeed
}
if (y>canvas.height)
   yspeed = -yspeed
}


function setDirection(dir) {
  if(dir =="up") {
  xspeed= 0;
  yspeed= -5;
  }
  if(dir =="down") {
  xspeed= 0;
  yspeed= 5;
  }
  if(dir =="right") {
  xspeed= 5;
  yspeed= 0;
  }
  if(dir =="left") {
  xspeed= -5;
  yspeed= 0;
  }
  if(dir =="stop") {
  xspeed= 0;
  yspeed= 0;
  }
   if(dir =="jump") {
  xspeed= 0;
  yspeed= -15;
  }
}
var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
}

document.addEventListener('keydown',function(event){
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event){
  var dir = keyActions[event.keyCode];
  setDirection("stop");
})

var plat =[];
plat.push({x:0, y:300, w:100, h:10});
plat.push({x:150, y:200, w:100, h:10});
plat.push({x:250, y:300, w:100, h:10});
plat.push({x:350, y:350, w:100, h:10});
plat.push({x:550, y:450, w:100, h:10});
plat.push({x:750, y:400, w:100, h:10});
plat.push({x:850, y:350, w:100, h:10});
plat.push({x:600, y:250, w:100, h:10});
plat.push({x:750, y:200, w:100, h:10});
plat.push({x:750, y:200, w:100, h:10});
plat.push({x:650, y:100, w:100, h:20});
plat.push({x:500, y:150, w:100, h:10});

function platform() {
  gravity=5;
  cx.fillStyle="pink";
  for (var i = 0; i<plat.length; i++)
  {cx.fillRect(plat[i].x, plat[i].y, plat[i].w,
    plat[i].h);
  if(y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<=plat[i].x+plat[i].w)
  {gravity=0}
  else{}
  }
}

var lava =[];
lava.push({x:0,y:650,w:1000,h:50})

function obstacle() {
  cx.fillStyle="orange";
  for (var i = 0; i<lava.length; i++)
  {cx.fillRect(lava[i].x, lava[i].y, lava[i].w,
    plat[i].h);
  if(y==lava[i].y-playerH &&
  x>=lava[i].x-playerW &&
  x<=lava[i].x+lava[i].w)
  {gameover()}
  else{}
  }
}

function gameover() {
  cx.fillStyle = "orange";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",10,50);
  stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = -5;
var mar = 10;

var mW =100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.png";

function monster() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW-mar > xM && xM+mW >x-mar && yM+mH>y-mar && y-mar
  +playerH>yM)
  {gameover()}
  if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  } if (yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
  }
}

var xC = 0;
var yC = 0;
var wC = 30;
var hC = 30;
var score = 0;

var img_coin = document.createElement("img");
img_coin.src = "coin.png";

function coin() {
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y
  +playerH>yC)
{  score +=10;
  var i = Math.ceil(Math.random()*plat.length);
  xC = plat[i].x+20;
  yC=plat[i].y-40
  }

}

function scoreDisplay(){
  cx.fillstyle="purple";
  cx.font = "30px";
  cx.fillText("Score: "+score, 500,100);
}

function lifeleft(){
  cx.fillstyle="purple";
  cx.font = "30px Comic Sans MS ";
  cx.fillText("Score: "+score, 500,100);
}

animate();