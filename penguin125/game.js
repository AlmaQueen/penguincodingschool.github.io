var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "Mario.png"

var x=0;
var y=0;
var xspeed=0;
var yspeed=0;
var playerW=50;
var playerH = 50;
var gravity=5;
var life=80;
var plat=[];
plat.push({x:0,y:400,w:100,h:10 });
plat.push({x:100,y:350,w:100,h:10 });
plat.push({x:200,y:300,w:100,h:10 });
plat.push({x:300,y:250,w:100,h:10 });
plat.push({x:400,y:200,w:100,h:10 });
plat.push({x:0,y:600,w:100,h:10 });
plat.push({x:10,y:600,w:100,h:10 });
plat.push({x:20,y:600,w:100,h:10 });
plat.push({x:30,y:600,w:100,h:10 });
plat.push({x:40,y:600,w:100,h:10 });
plat.push({x:0,y:550,w:100,h:10 });
plat.push({x:0,y:450,w:100,h:10 });
plat.push({x:0,y:400,w:100,h:10 });
plat.push({x:0,y:620,w:100,h:10 });
plat.push({x:0,y:470,w:100,h:10 });
plat.push({x:0,y:490,w:100,h:10 });
plat.push({x:0,y:510,w:100,h:10 });
plat.push({x:0,y:530,w:100,h:10 });
plat.push({x:0,y:640,w:100,h:10 });
plat.push({x:0,y:660,w:100,h:10 });
plat.push({x:0,y:680,w:100,h:10 });
plat.push({x:0,y:700,w:100,h:10 });
plat.push({x:0,y:720,w:100,h:10 });
plat.push({x:0,y:380,w:100,h:10 });
plat.push({x:0,y:360,w:100,h:10 });
plat.push({x:0,y:340,w:100,h:10 });
plat.push({x:0,y:320,w:100,h:10 });
plat.push({x:0,y:300,w:100,h:10 });
plat.push({x:0,y:280,w:100,h:10 });
plat.push({x:0,y:260,w:100,h:10 });
plat.push({x:0,y:240,w:100,h:10 });
plat.push({x:0,y:220,w:100,h:10 });
plat.push({x:0,y:200,w:100,h:10 });
plat.push({x:0,y:180,w:100,h:10 });
plat.push({x:0,y:160,w:100,h:10 });
plat.push({x:0,y:140,w:100,h:10 });
plat.push({x:0,y:120,w:100,h:10 });
plat.push({x:0,y:100,w:100,h:10 });
plat.push({x:0,y:80,w:100,h:10 });
plat.push({x:0,y:60,w:100,h:10 });
plat.push({x:0,y:40,w:100,h:10 });
plat.push({x:0,y:20,w:100,h:10 });
plat.push({x:0,y:0,w:100,h:10 });
plat.push({x:20,y:550,w:100,h:10 });
plat.push({x:40,y:570,w:100,h:10 });
plat.push({x:60,y:590,w:100,h:10 });
plat.push({x:80,y:610,w:100,h:10 });
plat.push({x:100,y:630,w:100,h:10 });
plat.push({x:0,y:888,w:100,h:10 });
plat.push({x:0,y:500,w:100,h:10 });
plat.push({x:0,y:550,w:100,h:10 });
plat.push({x:0,y:600,w:100,h:10 });
plat.push({x:0,y:650,w:100,h:10 });
plat.push({x:0,y:700,w:100,h:10 });
plat.push({x:0,y:750,w:100,h:10 });
plat.push({x:5,y:550,w:100,h:10 });
plat.push({x:5,y:570,w:100,h:10 });
plat.push({x:5,y:590,w:100,h:10 });
plat.push({x:250,y:590,w:100,h:10 });
plat.push({x:400,y:590,w:100,h:10 });
plat.push({x:510,y:590,w:100,h:10 });
plat.push({x:620,y:590,w:100,h:10 });
plat.push({x:730,y:590,w:100,h:10 });
plat.push({x:840,y:590,w:100,h:10 });
plat.push({x:950,y:590,w:100,h:10 });
plat.push({x:200,y:500,w:100,h:10})
plat.push({x:300,y:610,w:100,h:10 });
plat.push({x:140,y:630,w:100,h:10 });
plat.push({x:300,y:630,w:100,h:10})
plat.push({x:300,y:480,w:100,h:10})
function animate() {
  requestAnimationFrame(animate) ;
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage (img_player,x,y, playerW, playerH);
  x+=xspeed; y+=yspeed+gravity;
 if(x<0|| x>canvas.width){xspeed = -xspeed}
 if(y<0|| y>canvas.height){yspeed = -yspeed}
platform();
obstacle();
monster();
scoreDisplay();
lifeleft();
coin();
  
}

  

function setDirection(dir) {
if(dir =="down") {
  xspeed=0;
  yspeed=5;
}
if(dir =="jump" && gravity===0) {
  xspeed=0;
  y -=300;
}
if(dir =="right") {
  xspeed=5;
  yspeed=0;
}

if(dir =="left") {
  xspeed=-5;
  yspeed=0;
}

if(dir =="stop") {
  xspeed=0;
  yspeed=0;
}


}
var keyActions = {
32:"jump",
37:"left",
39:"right",
40:"down",
38:"stop",
}

document.addEventListener('keydown',function(event){var dir = keyActions[event.keyCode];
setDirection(dir);});

/*
document.addEventListener('keyup',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
*/

/*
 function platform() {
   cx.fillStyle="black";
   cx.fillRect(0,500,100,10);
   cx.fillStyle="white";
   cx.fillRect(200,400,100,10);
   if(y==500-playerH && x<100) {
     gravity=0;
   
   } else if(y==400-playerH && x>200 && x<300)
     {
   }
 else {gravity=5}

}
*/
function platform() {
  gravity =5;
  cx.fillStyle="white";
  for (var i =0; i<plat.length; i++) {
 cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
   if (y==plat[i].y-playerH &&
   x>plat[i].x-playerW &&
   x<plat[i].x+plat[i].w)
    {gravity=0}
  }
}

var lava = [];
lava.push({x:0,y:660,w:canvas.width,h:40 });

function obstacle() {
  cx.fillStyle="red";
  for (var i =0; i<lava.length; i++) {
 cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
   if (y==lava[i].y-playerH &&
   x>lava[i].x-playerW &&
   x<lava[i].x+lava[i].w)
    {gravity=0}
  }
}

function lifeleft() {
  cx.fillStyle = "red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("lives "+life,200,50);
  
}

function gameover() {
  cx.fillStyle = "red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("you beat the games",500,50);
  yspeed=0;
  xspeed=0;
  gravity=0;
  stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

function bonuspoints() {
  score+=1000000;

}
/*var muisic = new Audio('dancing.mp3');s
music.play();
muisc.loop = true;*/







var xM = 500;
var yM = 500;
var xMsp = 360;
var yMsp = 142;

var mW =100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.png";

function monster() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (life==0){gameover()}
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {life--;
    x=0;
    y=0;
  }
  if (xM<0 || xM>canvas.width-mW) {
  xMsp = -xMsp;
    if(yM<0 || yM>canvas.height-mH){
      yMsp = -yMsp
  }
}
}


var xC = 200;
var yC = 100;
var wC = 20;
var hC = 20;


function coin() {
  cx.fillStyle = "yellow";
  cx.fillRect(xC,yC,wC,hC);
if (x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH >yC ) {
  xC=200;
  yC =400;
  score++;
if (x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH >yC ) {
xC =Math.random()*canvas.width;
yC = Math.random()*canvas.height;
score++;
  //var i = Math.floor(Math.random()*plat.length);
  //xC = plat[i].x;
  //yC = plat[i].y - 40;}
  
}}
}
var score=0;

/*
function coin() {
  cx.drawImage(img_coin,xC, yC, wC,hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
{

  score +=10;
    var i = Math.floor(Math.random()*plat.length);
    xC = plat[i].x+20;
    yC = plat[i].y-40;
    
  }
}
*/

function scoreDisplay() {
  cx.fillStyle="black";
  cx.fillText("Score: "+score, 500,100);
  if (score===30) {
    gamewin();
  }
}

function gamewin() {
  cx.fillStyle = "green";
  cx.font = "70px Comic Sans MS";
  cx.fillText("you beat the game")
}

animate();
