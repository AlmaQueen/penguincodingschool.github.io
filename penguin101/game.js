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
var life = 6;

function animate() {
 req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
platform();
obstacle();
lifeleft();
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
  if (dir == "jump") {
    y-=120;
  }
if (dir == "down") {
    xspeed = 0;
    yspeed = 5;
}

 if  (dir == "right") {
    xspeed = 5;
    yspeed = 0;
}
 if  (dir == "left") {
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
  40: "down",
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
if (y==lava[i].y-playerH && x>=lava[i].x-playerW && x<=lava[i].x+lava[i].w)
{life-=1;
x=0;y=0;
if(life===0){gameover()}
}
  else{}
 }
 }
 function lifeleft() {
   cx.fillStyle ="green"
   cx.font = "30px Comic Sans MS";
   cx.fillText("Lives "+life,100,50);
   
 }
function gameover() {
  cx.fillStyle = "red";
  cx.font = "60px Comic Sans MS";
  cx.fillText("Game Over!",400,50);
  stop();
}

function stop() {
  if(req) {
  cancelAnimationFrame(req);
  req = undefined;
    
  }
}










animate()