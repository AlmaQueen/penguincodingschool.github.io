var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 710;

var img_player = document.createElement("img");
img_player.src = "https://pbs.twimg.com/profile_images/635013579/pinguinsmoveis_400x400.png";

var x = 0;
var y = 0;
var playerW = 55;
var playerH = 55;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var life = 25;

function animate() {
 req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  
/* if(x==0 || x==945)
  {
    xspeed= -xspeed
  }
  
  if (y==0 || y==655)
  {
    yspeed= -yspeed
  }*/
  
displaylifeleft();
platform();
obstacle();
monster();
monster2();
coin();
scoredisplay();
  if (x<=0) {
    xspeed = -xspeed;
  }
  if (y<=0) {
    yspeed = -yspeed;
  }
  if (x>canvas.width) {
    xspeed = -xspeed;
  }
  if (y>canvas.height) {
    yspeed = -yspeed;
    
  }
}

function setDirection(dir) {
  if (dir == "jump" && y>0 ) {
    y-=120;
  }
//if (dir == "down") {
    //xspeed = 0;
    //yspeed = 5;
//}

 if  (dir == "right" && x<canvas.width ) {
    xspeed = 5;
    yspeed = 0;
}
 if  (dir == "left" && x>0) {
    xspeed = -5;
    yspeed = 0;
     
   }

if (dir == "stop") {
    xspeed = 0;
    yspeed = 0;
}
}

var keyActions = {
  32: "stop",
  37: "left",
  38: "jump",
  39: "right",
  //40: "down",
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
})

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
})

var plat = [];
plat.push({x:0, y:500, w:100, h:10, color:"grey"})
plat.push({x:50, y:600, w:100, h:10, color:"grey"})
plat.push({x:250, y:600, w:100, h:10, color:"grey"})
plat.push({x:250, y:660, w:320, h:10, color: "grey" })
plat.push({x:490, y:40, w:100, h:10, color: "grey"})
plat.push({x:560, y:160, w:100, h:10, color:"grey"})
plat.push({x:570, y:520, w:100, h:10, color: "grey"})
plat.push({x:100, y:180, w:100, h:10, color:"grey"})
plat.push({x:70, y:390, w:canvas.width-300, h:10, color:"grey"})
plat.push({x:790, y:310, w:100, h:10, color:"grey"})
plat.push({x:870, y:80, w:100, h:10, color:"grey"})
plat.push({x:460, y:260, w:100, h:10, color:"grey"})
plat.push({x:650, y:660, w:320, h:10, color:"grey"})
function platform() {
   cx.fillStyle="grey";
   gravity=5;
  
  for (var i = 0; i<plat.length; i++)
  {cx.fillRect(plat[i].x, plat[i].y, plat[i].w,plat[i].h);
if (y==plat[i].y-playerH && x>=plat[i].x-playerW && x<=plat[i].x+plat[i].w)
{gravity=0}
  else{}
  }
}
 
var lava =[];
lava.push({x:0, y:680, w:1050, h:50});
 
 
 function obstacle() {
   cx.fillStyle="red";
  for (var i = 0; i<lava.length; i++)
  {cx.fillRect(lava[i].x, lava[i].y, lava[i].w,lava[i].h);
if (y>lava[i].y-playerH && x>=lava[i].x-playerW && x<=lava[i].x+lava[i].w)
{lifeleft();
}
  else{}
 }
 }
var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = -5;

var mW = 100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.jpg";

function monster() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {lifeleft()}
   if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;}
   if(yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
  }
}
var xM2 = 400;
var yM2= 180;
var xMsp2 = -10;
var yMsp2 = -5;

var mW = 100;
var mH = 100;

var img_monster2 = document.createElement("img");
img_monster2.src = "monster.jpg";

function monster2() {
  cx.drawImage(img_monster2,xM2, yM2, mW, mH);
  xM2+=xMsp2;
  yM2+=yMsp2;
  if (x+playerW > xM2 && xM2+mW >x && yM2+mH>y && y+playerH>yM2)
  {lifeleft()}
   if (xM2<0 || xM2>canvas.width-mW) {
    xMsp2 = -xMsp2;}
   if(yM2<0 || yM2>canvas.height-mH) {
    yMsp2 = -yMsp2;
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
  if(x+playerW> xC && xC+wC >x && yC+hC>y && y+playerH>yC)
 {score +=10;
var i = Math.ceil(Math.random()*plat.length);
setTimeout(xC = plat[i].x+20,1000);
yC = plat[i].y-40;
}
}

function scoredisplay(){
  cx.fillStyle="green";
  cx.font = "30px 'Lobster'";
  cx.fillText("Score: "+score, 500,100);
}

function lifeleft() {
  life-=1;
x=0;y=0;xM=800;yM=180;xM2=400;yM2=180;
if(life===0){gameover()
}
}

 function displaylifeleft() {
  if (life>0) {cx.fillStyle ="green"
   cx.font = "30px Comic Sans MS";
   cx.fillText("Lives "+life,100,50);
   }
 }
function gameover() {
  cx.fillStyle = "red";
  cx.font = "60px Comic Sans MS";
  cx.fillText("Game Over!",400,50);
   cx.fillStyle ="green"
   cx.font = "30px Comic Sans MS";
   cx.fillText("Lives "+life,100,50);
  stop();
}

function stop() {
  if(req) {
  cancelAnimationFrame(req);
  req = undefined;
    
  }
}










animate()