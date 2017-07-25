var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width =1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "pigeon.jpg";

var x = 0;
var y = 0;
var playerW = 80;
var playerH = 70;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  if(x<0 || x>canvas.width) {xspeed = -xspeed}
  if(y<0 || y>canvas.height) {yspeed = -yspeed}
  platform();
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
plat.push({x:0,y:680,w:canvas.width,h:20})
plat.push({x:400,y:400,w:100,h:10})
plat.push({x:600,y:600,w:100,h:10})
plat.push({x:450,y:200,w:100,h:10})
plat.push({x:600,y:250,w:100,h:10})
plat.push({x:650,y:150,w:100,h:10})
plat.push({x:625,y:200,w:100,h:10})
plat.push({x:200,y:400,w:100,h:10})
plat.push({x:600,y:500,w:100,h:10})


function platform() {
  gravity = 5;
  cx.fillStyle = "blue"
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x,plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH && x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w
    )
    {gravity=0}
  }
}

animate();

