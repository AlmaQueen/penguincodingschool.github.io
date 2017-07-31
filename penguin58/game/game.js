
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=800;

// Variables//

var player = document.createElement("img");
player.src = "main.jpg";
var playerW = 75;
var playerH = 100;
var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var keyActions= {
  37: "left",
  38: "jump",
  39: "right",
};
var gravity=1
document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

//Platforms//
var plat=[]
plat.push({x: 0, y: 250, w:100, h:10});
plat.push({x: 450, y: 500, w:100, h:10});
plat.push({x: 750, y: 640, w:100, h:10});
plat.push({x: 150, y: 400, w:100, h:10});
plat.push({x: 365, y: 120, w:100, h:10});
plat.push({x: 200, y: 790, w:100, h:10});
plat.push({x: 600, y: 300, w:100, h:10});



// Coding//

animate();



// Functions//

function animate() {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(player,x,y, playerW, playerH);
x+=xSpeed;
y+=ySpeed+gravity;
platform();
t()
if (x > canvas.width || x < 0 ) {
  xSpeed=-xSpeed;
}
if (y > canvas.height-playerW || y < 0) {
  ySpeed=-ySpeed;
}
}
function platform() {
  gravity=1;
  cx.fillStyle="yellow";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y===plat[i].y-playerH &&
    x>=plat[i].x-playerW &&
    x<=plat[i].x + plat[i].w)
    {gravity=0}
  }
}

function setDirection (dir) {
  if (dir === "left") {
  xSpeed = -5;
  ySpeed = 0;
}else if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;
}else if (dir ==="stop") {
  xSpeed = 0;
  yspeed = 0;
}else if (dir === "jump" && gravity ===0) {
  y = y-175;
}
}
