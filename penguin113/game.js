var canvas = document.getElementById("canvas");
var cx = canvas.getContext ("2d");
canvas.width=1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "mario.png";

var x =0;
var y =0;
var playerW = 40;
var playerH = 40;
var xSpeed = 0;
var ySpeed =0;
var gravity =5;

function animate()  {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW, playerH);
x+=xSpeed;
y+=ySpeed+gravity;
platform();


if (x>canvas.width || x <0)  {
xSpeed = -xSpeed;
  }
//var ySpeed = 5;
if (y>canvas.height || y<0) {
ySpeed = -ySpeed;
  }
   }

function setDirection(dir){
if (dir === "down") {
  xSpeed = 0;
  ySpeed = 5;}
else if (dir === "up") {
  xSpeed = 0;
  ySpeed = -5;}
else if (dir === "left") {
  xSpeed = -5;
  ySpeed = 0;}
else if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;}
else if (dir === "stop") {
  xSpeed = 0;
  ySpeed = 0;
} else if (dir === "jump" && gravity ===0) {
  y = y-20;
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
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

function platform() {
gravity =5;
cx.fillStyle = "grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
     x>=plat[i].x-playerW &&
     x<=plat[i].x + plat[i].w)
    {gravity=0}
  else {}
}
}
//variables for player size
var playerW = 30;
var playerH = 35;
cx.drawImage(img_player, x, y, playerW, playerH);

var plat=[];
plat.push({x: 0, y: 100, w: 100, h: 10});
plat.push({x: 100, y: 80, w: 100, h: 10});
plat.push({x: 200, y: 60, w: 100, h: 10});
plat.push({x: 300, y: 40, w: 100, h: 10});
plat.push({x: 400, y: 90, w: 125, h: 10});
plat.push({x: 500, y: 70, w: 150, h: 10});
plat.push({x: 0, y: 690, w:canvas.width, h: 10});

animate();

