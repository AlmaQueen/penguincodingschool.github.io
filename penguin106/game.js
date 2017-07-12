var canvas = document.getElementById("canvas");
var cx =canvas.getContext("2d");
canvas.width =1000;
canvas.height =700;

var img_player = document.createElement("img")
img_player.src = "https://s-media-cache-ak0.pinimg.com/originals/89/92/70/8992702632b80fc3ab2c40f23df06995.png";

var x = 0;
var y = 0;
var playerW =50;
var playerH = 50;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var life =32;
function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
   platform();
   obstacle();
   monster();
   coin();
   scoreDisplay();
  if (x<=0){
    xspeed= -xspeed;
  }
  if (y<=0) {
    yspeed = -yspeed;
  }
  if (x>canvas.width) {
   xspeed= -xspeed;
  }
  if (y>canvas.height) {
       yspeed = -yspeed;
  }
  
}
 
function setDirection(dir) {
  if (dir == "up") {
  xspeed = 0;
  yspeed = -5;
  }
  if (dir == "right") {
  xspeed = 5;
  yspeed = 0;
  }if (dir == "left") {
  xspeed = -5;
  yspeed = 0;
  }if (dir == "stop") {
  xspeed = 0;
  yspeed = 0;
  } if (dir=="jump") {
    yspeed = -30;
  }
  
}




var keyActions = {
32:"jump",
37:"left",
38:"up",
39:"right",
40:"down",
}

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

var plat=[];
plat.push({x:10, y:500, w:100, h:10});
plat.push({x:200, y:500, w:100, h:10});
plat.push({x:350, y:500, w:200, h:10});
plat.push({x:350, y:200, w:200, h:10});
plat.push({x:300, y:250, w:150, h:10});
plat.push({x:270, y:300, w:150, h:10});
plat.push({x:240, y:350, w:150, h:10});
plat.push({x:300, y:500, w:150, h:10});
plat.push({x:500, y:600, w:100, h:10});
plat.push({x:400, y:500, w:555, h:10});
plat.push({x:900, y:100, w:650, h:10});
plat.push({x:200, y:70, w:320, h:10});
plat.push({x:300, y:270, w:410, h:10});



function platform() {
  gravity=5;
  cx.fillStyle="blue";
 for (var i=0;i<plat.length;i++)
 {cx.fillRect(plat[i].x, plat[i].y, plat[i].w,plat[i].h);
if(y==plat[i].y-playerH &&
x>=plat[i].x-playerW &&
x<=plat[i].x+plat[i].w)
{gravity=0}
else{}
}
}

var lava =[];
lava.push({x:0,y:600,w:1000,h:50});

function obstacle() {
  cx.fillStyle="red";
 for (var i=0;i<lava.length;i++)
 {cx.fillRect(lava[i].x, lava [i].y, lava[i].w,lava[i].h);

if(y==lava[i].y-playerH &&
x>=lava[i].x-playerW &&
x<=lava[i].x+lava[i].w)
{life-=1;
x=0;
y=0;
if(life===0) {gameover()}
    }
  }
}


function gameover() {
  cx.fillStyle ="red";
  cx.font ="80px Comic Sans MS";
  cx.fillText("Gameover",10,500);
  stop();
}
  
function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

var xM = 400;
var yM = 180;
var mW =100;
var mH = 100;
var xMsp = 5;
var yMsp = 10;

var img_monster = document.createElement("img");
img_monster.src = "minions.png";

function monster() {
cx.drawImage(img_monster,xM,yM,mW,mH);
xM+=xMsp;
yM+=yMsp;
if (x+playerW >xM && xM+mW >x && yM+mH>y && y +playerH>yM)
{gameover()}
if (xM<0|| xM>canvas.width-mW) {
  xMsp = -xMsp;
}if(yM<0 || yM>canvas.height-mH) {
  yMsp = -yMsp;
}
}

var xC = 80;
var yC = 450;
var wC = 30;
var hC = 30;
var score = 0;

var img_coin = document.createElement("img");
img_coin.src = "coin.png";

function coin() {
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y +playerH>yC)
  {
  score +=10;
  var i = Math.ceil(Math.random()*plat.length);
  xC = plat[i].x+20;
  yC=plat[i].y-40;}
}
function scoreDisplay(){
  cx.fillStyle="gold"
  cx.fillText("Score: "+score, 500,100);
}

function lifeleft() {
  cx.fillStyle = "gold"
  cx.font = "30px Comic Sans MS";
  cx.fillText = "life:"+life ,300,350
}
animate();









