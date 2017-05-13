var canvas= document.getElementById("canvas");
var cx =canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000

var img_player=document.createElement("img");
img_player.src="https://s-media-cache-ak0.pinimg.com/236x/c5/9c/c3/c59cc33fa581a80fa12c4a0001081827.jpg"
var x=0;
var y=0;
var xspeed= 0;
var yspeed = 0;
var playerW = 50;
var playerH = 50;
var gravity = 5;
var plat=[]

plat.push({x: 0, y: 100, w:100, h:10})
plat.push({x: 100, y:80, w:100, h:10})
plat.push({x: 0, y: 100, w:100, h:10})
plat.push({x: 0, y: 100, w:100, h:10})
plat.push({x: 0, y: 100, w:100, h:10})

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0, canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  if (x>canvas.width||x<0) {xspeed=-xspeed}
  if (y>canvas.height|| y<0) {yspeed = -yspeed}

  
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
  }
}

var keyactions = {
  32:"stop",
  37:"left",
  38:"up",
  39:"right",
  40:"down"
}

function platform() {
gravity =5;
cx.fillStyle="grey"
 for (var i = 0; i<plat.length; i++) {
   cx.fillRect(plat[i].x, plat[i].y, plat[i].w,plat[i].h);
   if (y==plat[i].y-playerH && x>=plat[i]-playerW && x<=plat[i].x +plat[i].w)
   {gravity=0}
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


















































animate();
