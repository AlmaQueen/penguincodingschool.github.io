var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "gecko.gif";

var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;
var req;


var plat=[];

plat.push({x: 0, y: 100, w:100, h:10});
plat.push({x: 100, y: 280, w:100, h:10});
plat.push({x: 200, y: 260, w:100, h:10});
plat.push({x: 300, y: 240, w:100, h:10});
plat.push({x: 0, y:350, w:canvas.width, h:10});

function animate() {
  req=requestAnimationFrame(animate) ;
cx.clearRect (0,0, canvas.width, canvas.height);
  cx.drawImage (img_player,x,y,playerW,playerH);
x+=xSpeed;
y+=ySpeed+gravity;
  platform();
  obstacle();
if (x>canvas.width || x <0) {
xSpeed = -xSpeed;}
if (y>canvas.height || y <0) {
 ySpeed = -ySpeed;}
   
}

animate() ;


function setDirection (dir) {
  if (dir === "up"){
    xSpeed = 0;
    ySpeed = -5;
  } else if (dir === "down") {
    xSpeed = 0;
    ySpeed = 5;

  }else if(dir === "left") {
    xSpeed = -5;
    ySpeed=0;
    
  }else if (dir === "right") {
    xSpeed = 5;
    ySpeed = 0;
  
  }else if (dir ==="stop") {
    xSpeed =0;
    ySpeed =0;
  
  }
}

var keyActions = {
  32 : "stop",
  37 : "left",
  38 : "up",
  39 : "right",
  40 : "down"
};

document.addEventListener('keydown', function(event) {
  var dir  = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup' , function(event) {
  var dir  = keyActions[event.keyCode];
  setDirection("stop");
});

function platform() {
  gravity =5;
  cx.fillStyle="grey";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH && x>=plat[i].x - playerW &&
    x<plat[i].x + plat[i].w)
    {gravity=0}
}
}
function obstacle() {
  cx.fillStyle="black";
for (var i = 0; i<lava.length; i++) {
 cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h) ;
 if (y===lava[i].y-playerH &&
     x>lava[i].x-playerW &&
     X<lava[i].x + lava[i].w)
     {gameOver()}
}
 
}
var lava=[];

lava.push({x: 0, y: 600, w:canvas.width, h:10}) ;
lava.push({x: 100, y: 100, w:100, h:10});

function stop() {
  
  if(req){
    cancelAnimationFrame(req);
    req = undefined;
    
  }}
  
function gameOver() {
 cx.fillStyle="red";
 cx.font="30px Comic Sans MS";
 cx.fillText("The Geico Gecko Is Dissapointed In You",10,50);
 stop();
 
 function gameWin() {
   cx.fillStyle = "green"
 }
 
}
  