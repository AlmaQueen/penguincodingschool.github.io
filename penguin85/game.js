// variables
var canvas = document.getElementById("canvas");  //qfvawiogoiaewoigh
var cx = canvas.getContext("2d");
canvas.width=window.innerWidth-50;
canvas.height=window.innerHeight-50;

var img_player = document.createElement("img");
img_player.src = "DATBOI.png";

var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW=50;
var playerH=50;
var keyActions = {
  37: "left",
  38: "jump",
  39: "right",
  40: "down"
};
var req;


function animate(){
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW,playerH);
  x+=xSpeed; y+=ySpeed+gravity;
  platform();
  obstacle();
  if (x>canvas.width || x <0) {xSpeed = -xSpeed;}
if (y>canvas.width || y <0) {ySpeed = -ySpeed;}
if (x>330) {gameWin() ;}
}




function setDirection(dir) {
  if (dir === "jump" && gravity ===0) {
    xSpeed = 0;
    ySpeed = -10;
}
else if (dir === "down") {
    xSpeed = 0;
    ySpeed = 5;
}
 else if (dir === "left") {
    xSpeed = -5;
    ySpeed = 0;
}
 else if (dir === "right") {
    xSpeed = 5;
    ySpeed = 0;
}
 else if (dir === "stop") {
    xSpeed = 0;
    ySpeed = 0;

  }
}

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
var lava=[];
var plat=[];
plat.push({x: 0, y:100, w:100, h:10});
plat.push({x: 100, y:90, w:118, h:10});
plat.push({x: 250, y:70, w:88, h:10});
plat.push({x: 320, y:120, w:110, h:10});
lava.push({x: 0, y:350, w:canvas.width, h:10});

function platform() {
  
  gravity =5;
  cx.fillStyle="green";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>=plat[i].x-playerW &&
    x<=plat[i].x + plat[i].w)
    {gravity=0}
    
  }
 }
function obstacle() {
  
  cx.fillStyle="pink";
  for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y-playerH &&
    x>=lava[i].x-playerW &&
    x<=lava[i].x + lava[i].w)
    {gameOver()}
    
  }
 }
animate();

function stop() {
  if(req) {
  cancelAnimationFrame(req);
  req = undefined;
}}

function gameOver() {
  cx.fillStyle = "Orange";
  cx.font = "30px Georgia";
cx.fillText("Get Rekt Son",10,50);
  stop();
}
function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
cx.fillText("GG BOIZZZZ",10,50);
  stop();
}

//dank memes 4 lyfe