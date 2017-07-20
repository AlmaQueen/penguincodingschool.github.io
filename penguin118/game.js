var canvas=document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "player.jpg";


var x =0;
var y =0;
var playerW = 85;
var playerH = 95;
var xspeed = 0;
var yspeed =0;

function animate() {
 req=requestAnimationFrame(animate);
 cx.clearRect(0,0, canvas.width, canvas.height);
 cx.drawImage(img_player,x,y,playerW, playerH)
  x+=xspeed;
  y+=yspeed;
  monster();
  
  if(x<0 || x>canvas.width-playerW){
  xspeed= -xspeed;
  }
  if(y<0 || y>canvas.height-playerH){
  yspeed= -yspeed;
  }
}
function setDirection(dir) {
if(dir=="up"){
  xspeed =0;
  yspeed=-5;
}
  if(dir=="down"){
  xspeed =0;
  yspeed=5;
  }
  if(dir=="right"){
  xspeed =5;
  yspeed=0;
  }
  if(dir=="left"){
  xspeed =-5;
  yspeed=-0;
  }
  if(dir=="stop"){
  xspeed =0;
  yspeed=-0;
  }
}
 
   var keyActions = {
     37: "left",
     38: "up",
     39: "right",
    40: "down"
   };
   
document.addEventListener('keydown',
 function(event) {
     var dir = keyActions[event.keyCode];
     setDirection(dir);
 });

document.addEventListener('keyup',
     function(event){
     var dir = keyActions[event.keyCode];
     setDirection("stop");
   });


var xM =500;
var yM =0;
var mW = 85;
var mH = 95;
var xMsp = -10;
var yMsp =-10;

var img_monster = document.createElement("img");
img_monster.src = "death.jpg";

function monster() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameOver()}
  if (xM<0 || xM>canvas.width-mW) {
     xMsp = -yMsp;
  }
  if (yM<0 || yM>canvas.height-mH) {
     yMsp = -yMsp;
  }
}
 function gameOver() {
cx.fillStyle="red";
cx.font="60px 'Comic Sans MS'";
cx.fillText("Game Over",250,250);
stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

animate();