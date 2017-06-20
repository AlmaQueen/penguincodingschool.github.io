var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=750;
canvas.height=750;

var img_player = document.createElement("img");
img_player.src = "https://t2.rbxcdn.com/39e183ed6cf88b19a00ec07b42b3e04d";
var x=0;
var y=0;
var xSpeed =0;
var ySpeed =0;
var gravity =5;
var playerW = 50;
var playerH = 50;
var req;
//varhttps:"https://s-media-cache-ak0.pinimg.com/originals/94/9b/80/949b80956f246b74dc1f4f1f476eb9c1.png"

function animate () {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  coin();
if (x>canvas.width ||x<0) {xSpeed=-xSpeed}
if (y>canvas.height || y<0) {ySpeed = -ySpeed}
}

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",10,50);
  stop()
}




function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

var plat=[];
plat.push({x: 0, y: 100, w:100, h:10});
plat.push({x: 200, y: 150, w:200, h:10});
plat.push({x: 250, y: 200, w:225, h:10});
plat.push({x: 300, y: 250, w:200, h:10});
plat.push({x: 450, y: 350, w:275, h:10});
plat.push({x: 600, y: 300, w:200, h:10})


var lava=[];
lava.push({x: 0, y: 650, w:1000, h:30});

function platform() {
gravity =5;
cx.fillStyle="grey";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<=plat[i].x + plat[i].w)
  {gravity=0}
 }
 }

function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH && x>=lava[i].x-playerW && x<=lava[i].x + lava[i].w)
   {gameOver()}
}
}



var xM = 400;
var yM = 180;
var xMsp = -5;
var yMsp = 0;
var mW =10;
var mH =10;

function monster() {
  cx.fillStyle = "blue";
  cx.fillRect(xM,yM, mW,mH);
  xM += xMsp;
  yM += yMsp;
  if (x+playerW> xM && xM+mW>x && yM+mH> y && y+playerH> yM){
    gameOver()
  } if (xM <0 || xM >canvas.width) {
    xMsp =-xMsp;
  }
 }

var xC = 300;
var yC = 100;
var wC = 20;
var hC = 20;

function coin() {
  cx.fillStyle = "gold";
  cx.fillRect(xC,yC,wC,hC);
  if (x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH > yC)
  {
  var i = Math.ceil(Math.random()*plat.length);
  xC =plat[i].x+30;
  yC = plat[i].y-50;
  }

}

function setDirection(dir) {
  if (dir=="up") {
    xSpeed = 0;
    ySpeed = -5;
  }  else if (dir=="down") {
    xSpeed = 0;
    ySpeed = 5;
  }  else if (dir=="left") {
    xSpeed = -5;
    ySpeed = 0;
  }  else if (dir=="right") {
    xSpeed = 5;
    ySpeed = 0;
  }  else if (dir=="stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir=== "jump" && gravity ===0) {
   ySpeed = -10;
  }

}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

var music = new Audio('music.mp3');
music.play();
music.loop = true;



animate();