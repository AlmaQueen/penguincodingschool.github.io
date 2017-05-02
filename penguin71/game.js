var canvas =document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1901.55;
canvas.height=892.95;

var img_player = document.createElement("img");
img_player.src="http://icons.iconarchive.com/icons/martin-berube/animal/256/turtle-icon.png";

var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerH = 25;
var playerW = 25;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height||y<0) {ySpeed=-ySpeed}
}

function setDirection(dir) {
  if(dir=="up") {
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
  } else if (dir =="jump" ) {
    ySpeed = -15;
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


var plat=[]

plat.push({x: 0, y: 500, w:100, h:10});
plat.push({x: 100, y: 480, w:100, h:10});
plat.push({x: 200, y: 460, w:100, h:10});
plat.push({x: 300, y: 440, w:100, h:10});
plat.push({x: 0, y:750, w:canvas.width, h:10});

function platform() {
gravity =5;
cx.fillStyle="magenta";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
      x>=plat[i].x-playerW &&
      x<=plat[i].x + plat[i].w)
     {gravity=0}
  else {}

}
}

animate();