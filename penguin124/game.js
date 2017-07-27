var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width =1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "bunny.png";

// var i = Math.ceil(Math.random()*plat.length);
var x = 400;
var y = 500;
var playerW = 80;
var playerH = 70;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var life = 8;

function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  if(x<0 || x>canvas.width) {xspeed = -xspeed}
  if(y<0 || y>canvas.height) {yspeed = -yspeed}
  platform();
  obstacle();
  lifeleft();
  monster();
  coin();
  scoreDisplay();
}

function setDirection(dir) {
  if(dir =="jump" && gravity===0) {
    xspeed = 0;
    y -= 200
    ;}
    
    if(dir =="down") {
    xspeed = 0;
    yspeed = 5;}
    
    if(dir =="right" && x<canvas.width) {
    xspeed = 5;
    yspeed = 0;}
    
    if(dir =="left" && x>0 ) {
    xspeed = -5;
    yspeed = 0;}
    
    if(dir =="stop") {
    xspeed = 0;
    yspeed = 0;
  }
}

var keyActions = {
  87:"jump",
  65:"left",
  83:"down",
  68:"right",
  32:"stop",
}

document.addEventListener('keydown',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

/*
function platform() {
  cx.fillStyle = "blue";
  cx.fillRect(0,500,100,10);
  if(y==500-playerH && x<100)
  {
    gravity=0
  } else {gravity = 5}
}
*/

var plat = [];
plat.push({x:0,y:500,w:100,h:10})
plat.push({x:200,y:350,w:200,h:20})
plat.push({x:400,y:400,w:100,h:10})
plat.push({x:600,y:600,w:100,h:10})
plat.push({x:200,y:400,w:100,h:10})
plat.push({x:600,y:500,w:100,h:10})
plat.push({x:500,y:500,w:100,h:10})
plat.push({x:400,y:600,w:100,h:10})

function platform() {
  gravity = 5;
  cx.fillStyle = "#29af24"
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x,plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH && x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w
    )
    {gravity=0}
  }
}

var lava = [];
lava.push({x:0,y:660,w:2000,h:40})



function obstacle() {
  cx.fillStyle = "#60473c"
for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x,lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y-playerH &&
    x>lava[i].x-playerW &&
    x<lava[i].x+lava[i].w
    )
    {life-=1
      x=0
      y=0
      if(life===0) {gameover()}
    }
  }
}

function lifeleft() {
  cx.fillStyle = "blue";
  cx.font = "30px Comic Sans MS";
  cx.fillText("body parts left "+life,100,50);
}

function gameover() {
  cx.fillStyle = "red";
  cx.font = "70px Comic Sans MS";
  cx.fillText("You Were a Great Meal ",0,400);
  stop();
}

function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

function bonuspoints() {
  score+=1000000
}

/*
var music = new Audio('runningrabbit.mp3');
music.play();
music.loop = true
*/

var xM = 800;
var yM = 0;
var xMsp = 10;
var yMsp = 6;

var mW = 100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.png";

function monster() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW>xM&&xM+mW>x&&yM+mH>y&&y+playerH>yM)
  {life--;
    x=0;
    y=0
  }
  if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  } if(yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
    if(life===0) {gameover()}
  }
}

/*
var xM2 = 800;
var yM2 = 400;
var xM2sp = 10;
var yM2sp = 6;

var m2W = 100;
var m2H = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.jpg";

function monster2() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW>xM2&&xM2+m2W>x&&yM2+m2H>y&&y+playerH>yM2)
  {life--;
    x=0;
    y=0
  }
  if (xM2<0 || xM2>canvas.width-m2W) {
    xM2sp = -xM2sp;
  } if(yM2<0 || yM2>canvas.height-m2H) {
    yM2sp = -yM2sp;
    if(life===0) {gameover()}
  }
}
*/

var xC = 80;
var yC = 450;
var wC = 120;
var hC = 100;
var score = 0;
var img_coin = document.createElement("img");
img_coin.src = "coin.png";

function coin() {
  cx.drawImage(img_coin, xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x &&yC+hC>y && y+playerH >yC)
  
{ score +=10;
    var i = Math.ceil(Math.random()*plat.length);
    xC = plat[i].x+20;
    yC = plat[i].y-40;
}


}

function scoreDisplay() {
  cx.fillStyle="green";
  cx.fillText("Score: "+score, 500,100);
  }

animate();

