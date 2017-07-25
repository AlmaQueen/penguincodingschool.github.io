var canvas =document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=10000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "poop.jpeg";

var x =0;
var y =0;
var playerW = 50;
var playerH = 50;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
function animate() {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y, playerW, playerH);
x+=xspeed;
y+=yspeed+gravity;
if(x<0 || x>canvas.width) {xspeed = -xspeed}
if(y<0 || y>canvas.height) {yspeed = -yspeed}
platform();
}


function setDirection (dir) {
   if (dir =="jump") {
    y -= 100;
   }
   if (dir =="right") {
     xspeed = 5
     yspeed = 0
   }
   if (dir =="left") {
     xspeed = -5
     yspeed = 0
   }
   if (dir =="stop") {
     xspeed = 0;
     yspeed = 0;
   }
}
var keyActions= {
  32: "jump",
  38: "up",
  39: "right",
  37: "left"
}
document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});



/*
function platform() {
  cx.fillStyle="green";
  cx.fillRect(0,500,1000,100);
  cx.fillStyle="brown";
  if(y==500-playerH && x<1000) {
    gravity=0;
  } else {gravity=5}
}
*/
var plat=[]
plat.push({x:0, y:200, w:100, h:10})
plat.push({x:100, y:500, w:100, h:10})
plat.push({x:300, y:400, w:100, h:10})
plat.push({x:1000, y:10, w:100, h:10})
plat.push({x:0, y:1000, w:100, h:10})
plat.push({x:100, y:10, w:100, h:10})
plat.push({x:450, y:10, w:100, h:10})





function platform() {
  gravity =5;
  cx.fillStyle="green";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
    }
}
animate();
