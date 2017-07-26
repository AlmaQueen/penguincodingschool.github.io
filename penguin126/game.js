var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1300;
canvas.height = 800;

var img_player = document.createElement("img");
img_player.src = "16-bitGunvolt.png";
//var img_platform=document.createElement();


var x =0;
var y=0;
var playerW = 90;
var playerH = 80;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;


function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
  if(y<0 || y>canvas.height) {ySpeed = -ySpeed}
  platform();
}

function setDirection(dir) {
  if(dir =="jump" && gravity===0 ) {
    y-= 200;
  }
  if(dir =="right") {
    xSpeed = -5;
    ySpeed = 0;
  }
  if(dir =="left") {
    xSpeed = 5;
    ySpeed = 0;
  }
  if(dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}

var keyActions = {
  16: "stop",
  40: "down",
  39: "left",
  38: "jump",
  37: "right",
};
  
document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
 
/*
function platform() {
  cx.fillStyle="grey";
  cx.fillRect(30,500,100,10);
  cx.fillRect(230,400,100,10);
  if (y==395 && x<80)  {
    gravity = 0;
  }
    
  }//  else {gravity = 5;}
}
*/
var plat=[];
plat.push({x:0, y:435, w:100, h:10});
plat.push({x:750, y:850, w:120, h:10});
plat.push({x:600, y:500, w:350, h:30});
plat.push({x:500, y:250, w:100, h:10});
plat.push({x:300, y:425, w:150, h:15});
plat.push({x:650, y:100, w:125, h:15});

function platform() {
  gravity = 5;
  cx.fillStyle="silver";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h ) ;
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w)
    {gravity=0}}}


var water=[];
water.push({x:0, y:730, w:1300, h:30});

function Water() {
  gravity = 5;
  cx.fillStyle="blue";
  for (var i =0; i<Water.length; i++) {
    cx.fillRect(Water[i].x, Water[i].y, Water[i].w, Water[i].h ) ;
    if (y==Water[i].y-playerH &&
    x>Water[i].x-playerW &&
    x<Water[i].x+Water[i].w)
    {gravity=0}}}

animate();