var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1200;
canvas.height=700;

var img_player = document.createElement ("img");
img_player.src = "lollipop.png";

var x=0;
var y=0;
var playerW = 50;
var playerH = 50;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;

function animate ()  {
requestAnimationFrame (animate);
cx.clearRect (0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW,playerH);
x+=xSpeed;
y+=ySpeed+gravity;
if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
if(y<0 || y>canvas.height) {ySpeed = -ySpeed}
platform();
}

function setDirection(dir) {
  if (dir =="jump") {
    y -= 50;
  }
 if (dir =="down") {
    xSpeed = 0;
    ySpeed = 5;
  }
  if (dir =="left") {
    xSpeed = -5;
    ySpeed = 0;
  }
  if (dir =="right") {
    xSpeed = 5;
    ySpeed = 0;
  }
  if (dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}
var keyActions = {
  32: "stop",
  37: "left",
  38: "jump",
  39: "right",
  40: "down"
}

document.addEventListener('keydown',function(event){

  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup',function(event){

  var dir = keyActions[event.keyCode];
  setDirection("stop");
});



  
var plat=[];
plat.push({x:75,y:200,w:100,h:10})
plat.push({x:100,y:500,w:100,h:10})
plat.push({x:400,y:300,w:100,h:10})
plat.push({x:350,y:300,w:100,h:10})
plat.push({x:525,y:250,w:100,h:10})
plat.push({x:620,y:525,w:100,h:10})
plat.push({x:430,y:185,w:100,h:10})
plat.push({x:200,y:595,w:100,h:10})
plat.push({x:700,y:465,w:100,h:10})
plat.push({x:775,y:205,w:100,h:10})
plat.push({x:0,y:670,w:300,h:10})


function platform () {
  gravity =5;
  cx.fillStyle="turquoise";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerH &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
  }
}


animate();