'use strict';


var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1597;
canvas.height=1101;

var img_player= document.createElement("img");
img_player.src="http://shmector.com/_ph/8/228098179.png";

var x =0;
var y=0;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;
var req;
function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW, playerH);
  x+=xspeed;
  y+=yspeed + gravity;
  platform();
  obstacle();
  monster();
  coin();
  scoreDisplay();
  if (x>canvas.width||x<0) {xspeed=-xspeed}
  if (y>canvas.height ||y<0) {yspeed=-yspeed}
  }

function setDirection(dir) {
  if(dir==="up") {
  xspeed =0;
  yspeed = -5;
 } else if(dir==="down") {
  xspeed =0;
  yspeed =5;
 } else if(dir==="left") {
  xspeed = -5;
  yspeed =0;
 } else if(dir==="right") {
  xspeed =5;
  yspeed =0;
 } else if(dir==="stop") {
  xspeed =0;
  yspeed =0;
  
 } else if(dir==="jump"&& gravity ===0) {
  xspeed =0;
  yspeed =-10;
 }
}
var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
 
};

document.addEventListener ('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
  
});document.addEventListener ('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

 

var lava=[];


 lava.push({x: 100,y: 100,w:100,h:10});


var plat=[];


 plat.push({x: 0,y: 100,w:100,h:10});
 plat.push({x: 100,y: 180,w:100,h:10});
 plat.push({x: 200,y: 160,w:100,h:10});
 plat.push({x: 300,y: 140,w:100,h:10});
 plat.push({x: 0,y: 350,w:canvas.width,h:10});


function platform () {
gravity =5;
cx.fillStyle= "grey";
for (var i = 0; i<plat.length; i++) {
 cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
if (y==plat[i].y-playerH &&
   x>=plat[i].x-playerW &&
   x<=plat[i].x + plat[i].w)
  {gravity=0}
}
}

function obstacle() {
cx.fillStyle= "red";
for (var i = 0; i<lava.length; i++) {
 cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
if (y==lava[i].y-playerH &&
   x>=lava[i].x-playerW &&
   x<=lava[i].x + lava[i].w)
  {gameOver()}
}
}

var xM = 800;
var yM = 80;
var xMsp = -5;
var yMsp = 0;

var mW = 10;
var mH = 10;

function monster(){
  cx.fillStyle = "orange";
  cx.fillRect(xM,yM,mW,mH);
  xM+=xMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameOver()}
  else if (xM<0 || xM>canvas.width) {
    xMsp = -xMsp;
  }
}
var xC = 800;
var yC = 80;

var cW = 10;
var cH = 10;
var score =0;

function coin(){
  cx.fillStyle = "green";
  cx.fillRect(xC,yC,cW,cH);
  if (x+playerW > xC && xC+cW >x && yC+cH>y && y+playerH>yC)
  {
  score+=10;
  xC = Math.random()*canvas.width;
  yC = Math.random()*canvas.height;
  }
}

function scoreDisplay() {
   cx.fillStyle = "Green";
   cx.font = "30px Comic Sans MS";
   cx.fillText("Score "+score,10,50);
 }

 function gameOver() {
   cx.fillStyle = "Red";
   cx.font = "30px Comic Sans MS";
   cx.fillText("game Over",10,50);
   stop();
 }
 
 function stop() {
   if(req){
     cancelAnimationFrame(req);
     req = undefined;
}}

animate();