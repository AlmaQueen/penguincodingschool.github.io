var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width =2000;
canvas.height =1000;

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var playerW = 30;
var playerH = 35;
var gravity=5;

var img_player = document.createElement("img");
img_player.src = "mario.png";

function animate(){
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  if (x>canvas.width || x <0){
  xSpeed = -xSpeed;}
  if (y>canvas.height || y <0){
  ySpeed = -ySpeed;}
}

function setDirection(dir) {
  if (dir === "left")
{  xSpeed = -5;
  ySpeed = 0;
} else if (dir === "right")
{  xSpeed = 5;
  ySpeed = 0;
} else if (dir === "stop")
{ xSpeed = 0;
  ySpeed = 0;
} else if (dir === "jump")
{ xSpeed = 0;
  ySpeed = -20;
}
}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener('keydown',function(event) {
var dir = keyActions[event.keyCode];
setDirection(dir);
});

document.addEventListener('keyup',function(event) {
var dir = keyActions [event.keyCode];
  setDirection('stop');
});

function platform() {
   cx.fillStyle = "green";
   cx.fillRect(0,500,100,10);
   if (y==500-playerH+5 && x<100) {
     gravity=0;
   }else {
     gravity=5;
   }
}


function platform() {
  gravity=5;
  cx.fillStyle="green";
  for (var i = 0; i<plat.length; i++) {
 cx.fillRect (plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<=plat[i].x + plat[i].w)
  {gravity=0}
}
}


var plat=[];

plat.push({x: 0, y: 350, w:100, h:10});
plat.push({x: 150, y: 330, w:100, h:10});
plat.push({x: 300, y: 310, w:100, h:10});
plat.push({x: 450, y: 290, w:100, h:10});
plat.push({x: 600, y: 750, w:100, h:10});
plat.push({x: 0, y: 900, w:2010, h:10});


function obstacle() {
  cx.fillStyle="orange";
  for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if
    
  }
}
















animate();