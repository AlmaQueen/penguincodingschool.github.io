var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1300;
canvas.height = 800;
var img_player = document.createElement("img");
img_player.src = "16-bitGunvolt.png";
//var img_platform=document.createElement();
var img_bullet = document.createElement("img");
img_bullet.src = "CopenGunBullet.gif";
var img_monster = document.createElement("img");
img_monster.src = "CopenBoss.png";
var img_coin = document.createElement("img");
img_coin.src = "GunvoltEmerald.png";
var x =1220;
var y=0;
var playerW = 90;
var playerH = 80;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var LifeBar = 10;
function animate() {
  req  = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
  if(y<0 || y>canvas.height) {ySpeed = -ySpeed}
  platform();
  LifeBarleft();
  water1();
  monster();
  Bullet();
  coin();
  scoreDisplay();
}
function setDirection(dir) {
  if(dir =="jump" && gravity===0 ) {
    y-= 200;
  }
  if(dir =="down") {
    xSpeed = 0;
    ySpeed = 30;
  }
  if(dir =="right") {
    xSpeed = -5;
    ySpeed = 0;
  }
  if(dir =="left") {
    xSpeed = 5;
    ySpeed = 0;
  }
  if(dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}
var keyActions = {
  16: "stop",
  40: "down",
  39: "left",
  38: "jump",
  37: "right",
};
document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
/*
function platform() {
  cx.fillStyle="grey";
  cx.fillRect(30,500,100,10);
  cx.fillRect(230,400,100,10);
  if (y==395 && x<80)  {
    gravity = 0;
  }
    
  }//  else {gravity = 5;}
}
*/
var plat=[];
plat.push({x:0, y:435, w:100, h:10});
plat.push({x:720, y:700, w:120, h:10});
plat.push({x:600, y:500, w:350, h:30});
plat.push({x:500, y:250, w:100, h:10});
plat.push({x:300, y:425, w:150, h:15});
plat.push({x:650, y:100, w:125, h:15});
plat.push({x:1150, y:450, w:150, h:20});
function platform() {
  gravity = 5;
  cx.fillStyle="silver";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h ) ;
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w)
    {gravity=0}}}
var Water=[];
Water.push({x:0, y:725, w:1300, h:30});
function water1() {
  cx.fillStyle="blue";
  for (var i =0; i<Water.length; i++) {
    cx.fillRect(Water[i].x, Water[i].y, Water[i].w, Water[i].h ) ;
    if (y==Water[i].y-playerH &&
    x>Water[i].x-playerW &&
    x<Water[i].x+Water[i].w)
    {LifeBar-=1;
      x =1220;
      y=0;
      if(LifeBar===0) {gameover()}
    }}}
function LifeBarleft() {
  cx.fillStyle = "azure";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Life Bar at "+LifeBar,100,50);
}
function gameover() {
  cx.fillStyle = "red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Copen Has Defeated You",500,50);
  stop();
}
function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;}}
var xM = 0;
var yM = 345;
var xMsp = -0;
var yMsp = -0;
var Mw = 100;
var Mh = 90;
function monster() {
  cx.drawImage(img_monster, xM,yM,Mw,Mh);
  xM+= xMsp;
  yM+= yMsp;
  if(x+playerW> xM && xM+Mw >x && yM+Mh > y &&
y+playerH > yM)
{
      {LifeBar-=1;
        x =1220
        y=0
      };
  } else if (xM<0 ) {
    xMsp = -xMsp;
  }}

var xB = 25;
var yB = 345;
var xBsp = 5;
var yBsp = -0;
var Bw = 100;
var Bh = 90;
function Bullet() {
  cx.drawImage(img_bullet, xB,yB,Bw,Bh);
  xB+= xBsp;
  yB+= yBsp;
  if(x+playerW> xB && xB+Bw >x && yB+Bh > y &&
y+playerH > yB)
{
      {LifeBar-=1;
        x =1220
        y=0
      };
  }
}
var xC = 250
var yC = 250
var Cw = 50
var Ch = 60
var score=0;

function coin() {
  cx.drawImage(img_coin,yC,xC,Cw,Ch);
  if(x+playerW> xC && xC+Cw >x && yC+Ch > y &&
y+playerH > yC)
{ score+= 10;
  var i =Math.ceil(Math.random()*plat.length);
  xC = plat[i].x;
  yC = plat[i].y-40;
}
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(Math.random()*(max-min))+min;
  }
function scoreDisplay() {
  cx.fillStyle = "lightblue";
  cx.font =  "30px Comic Sans MS"
  cx.fillText("Your Score is: "+score,500,100);
}

animate();