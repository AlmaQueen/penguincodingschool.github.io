var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "mario.png"

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;

var plat = [];
plat.push ({x: 0, y: 100, w:100, h:10});
plat.push ({x: 200, y: 125, w:100, h:10});
plat.push ({x: 300, y: 210, w:500, h:100});
plat.push ({x: 100, y: 270, w:800, h:100});
plat.push ({x: 0, y: 570, w:400, h:100});
plat.push ({x: 700, y: 570, w:500, h:100});
plat.push ({x: 400, y: 670, w:600, h:1});
plat.push ({x: 500, y: 570, w:100, h:1000});


var lava = [];
lava.push ({x: 0, y: 600, w:1000, h:1000});




function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
 if (x>canvas.width||x<0) {xSpeed=-xSpeed}
 if (y>canvas.height || y<0) {ySpeed = -ySpeed}
}
 
function setDirection(dir) {
 if (dir=="up") {
 xSpeed = 0;
 ySpeed = -5;
 } else if (dir=="down") {
 xSpeed = 0;
 ySpeed = 5;
 } else if (dir=="left") {
 xSpeed = -5;
 ySpeed = 0;
 } else if (dir=="right") {
 xSpeed = 5;
 ySpeed = 0;
 } else if (dir=="stop") {
 xSpeed = 0;
 ySpeed = 0;
 } else if (dir === "jump") { y = y-90;}
}

 var keyActions = {
 32: "jump",
 37: "left",
 38: "up",
 39: "right",
 40: "down",
 };
 
document.addEventListener('keydown', function(event) {
var dir = keyActions[event.keyCode];
setDirection(dir);
})

document.addEventListener('keyup', function(event) {
var dir = keyActions[event.keyCode];
setDirection("stop");
})




function platform() {
  cx.fillStyle = "gray";
  gravity =5;
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y - playerH
    && x>=plat[i].x -playerW
    && x<=plat[i].x + plat[i].w)
  {gravity = 0}
  }
}

function obstacle() {
  cx.fillStyle = "red";
  for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y - playerH
    && x>=lava[i].x -playerW
    && x<=lava[i].x + lava[i].w)
  {youDied()}
  }
}


function youDied() {
   cx.fillStyle = "pink";
   cx.font = "30px Comic Sans MS";
   cx.fillText("You Died",10,50);
   stop();
   
function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}
   
   
   
 }
  
  


animate()












