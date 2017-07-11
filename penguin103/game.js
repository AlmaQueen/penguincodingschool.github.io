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
  yspeed= -10;
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
plat.push({x:750, y:300, w:100, h:10});
plat.push({x:850, y:350, w:100, h:10});
plat.push({x:550, y:150, w:100, h:10});

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

function platform() {
  gravity = 5 ;
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
animate();