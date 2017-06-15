var canvas= document.getElementById("canvas");
var cx =canvas.getContext("2d");
canvas.width=1000;
canvas.height=700;

var img_player=document.createElement("img");
img_player.src="https://s-media-cache-ak0.pinimg.com/236x/c5/9c/c3/c59cc33fa581a80fa12c4a0001081827.jpg"

var img_obstacle=document.createElement("img");
img_obstacle.src="cutepuppy.gif";

var x=0;
var y=0;
var xspeed= 0;
var yspeed = 0;
var playerw = 50;
var playerh = 50;
var gravity = 5;
var plat=[];
var lava = [];

lava.push({x: 0, y: 600, w:canvas.width, h:10})
lava.push({x: 100, y:100, w:100, h:100})

plat.push({x: 0, y: 100, w:100, h:10})
plat.push({x: 100, y:80, w:100, h:10})
plat.push({x: 200, y: 60, w:100, h:10})
plat.push({x: 300, y: 40, w:100, h:10})
plat.push({x: 0, y: 350, w:canvas.width, h:10})

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0, canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerw, playerh);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  obstacle();
  monster();
  coin();
  scoreDisplay();
  if (x===canvas.width){
    gameWin();
  }
    if (y>canvas.height|| y<0) {yspeed = -yspeed}

  
}


function stop() {
  if (req){
    cancelAnimationFrame(req);
    req=undefined;
  }
}

function setDirection(dir) {
  if(dir==="up") {
    xspeed =0;
    yspeed =-5;
  } else if(dir==="down") {
    xspeed =0;
    yspeed =5;
  } else if(dir==="left") {
    xspeed =-5;
    yspeed =-0;
  } else if(dir==="right") {
    xspeed =5;
    yspeed =-0;
  } else if(dir==="stop") {
    xspeed =0;
    yspeed =0;
  } else if (dir==="jump" && gravity===0) {
    yspeed=-20;
  }
}

var keyactions = {
  32:"jump",
  37:"left",
  38:"up",
  39:"right",
  40:"down"
}

function platform() {
gravity =5;
cx.fillStyle="grey";
 for (var i = 0; i<plat.length; i++) {
   cx.fillRect(plat[i].x, plat[i].y, plat[i].w,plat[i].h);
   if (y==plat[i].y-playerh && x>=plat[i].x-playerw && x<=plat[i].x +plat[i].w)
   {gravity=0}
 }
}

function fatality(){
   cx.fillStyle = "red"
   cx.font ="30px Times New Roman";
   cx.fillText ("fatality",10,50);
   stop();
}

function gameWin(){
   cx.fillStyle = "green"
   cx.font ="30px Times New Roman";
   cx.fillText ("ha i won!!!",10,50);
   stop();
}

function obstacle() {
 for (var i = 0; i<lava.length; i++) {
   cx.drawImage(img_obstacle, lava[i].x, lava[i].y, lava[i].w,lava[i].h);
   if (y==lava[i].y-playerh && x>=lava[i].x-playerw && x<=lava[i].x +lava[i].w)
   {fatality()}
 }

}

document.addEventListener('keydown',function(event) {
  var dir = keyactions[event.keyCode];
  setDirection(dir);
})

document.addEventListener('keyup',function(event) {
  var dir = keyactions[event.keyCode];
  setDirection("stop");

  
})




var xm =500;
var ym = 180;
var xmsp = 0;
var ymsp = -5;
var mw =100;
var mh =100;

var img_monster = document.createElement("img");
img_monster.src = "monster.jpg";

function monster() {
cx.drawImage(img_monster,xm,ym,mw,mh);
xm+=xmsp;
ym+=ymsp;
if(x+playerw > xm  && xm+mw>x && ym+mh>y && y+playerh>ym)
{fatality()}
if (ym>canvas.height|| ym<0)
{ymsp = -ymsp;}

}

var xc =500;
var yc = 180;
var cw =10;
var ch =10;
var score =0;

function coin() {
cx.fillStyle = "gold";
cx.fillRect(xc,yc,cw,ch);
if(x+playerw > xc  && xc+mw>x && yc+ch>y && y+playerh>yc)
{score+=10;
  var i = Math.ceil(Math.random()*plat.length);
  xc = plat[i].x+50;
  yc = plat[i].y - 40;
}

}

function scoreDisplay() {
  cx.fillStyle="green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("score:" + score,500,100)
}

animate();
