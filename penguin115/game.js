var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "candy.png";

var x =500;
var y =0;
var playerW = 70;
var playerH= 50;
var xSpeed = 0;
var ySpeed = 0;

function animate(){
req = requestAnimationFrame(animate);
cx.clearRect(0,0, canvas.width, canvas.height);
cx.drawImage(img_player,x,y, playerW, playerH);
x+=xSpeed;
y+=ySpeed;
monster();
if(x<0 || x>canvas.width-playerW){
  xSpeed=-xSpeed;
}
if(y<0 || y>canvas.height-playerH)
  ySpeed=-ySpeed;
}

function setDirection(dir){
  if(dir=="up"){
    xSpeed=0;
    ySpeed=-5;
  }
   if(dir=="down"){
    xSpeed=0;
    ySpeed=5;
  }
   if(dir=="right"){
    xSpeed=5;
    ySpeed=0;
  }
   if(dir=="left"){
    xSpeed=-5;
    ySpeed=0;
  }
   if(dir=="stop"){
    xSpeed=0;
    ySpeed=0;
  }
}

var keyAction = {
  37:"left",
  38:"up",
  39:"right",
  40:"down",
};


document.addEventListener('keydown',
function(event) {
  var dir = keyAction[event.keyCode];
  setDirection(dir);
});


document.addEventListener('keyup',
function(event) {
  var dir = keyAction[event.keyCode];
  setDirection("stop");
});


var xM = 400;
var yM = 50;
var xMsp = -5;
var yMsp = -5;
var mW = 100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "tomato.png";

function monster(){
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if(x+playerW > xM && xM+mW+20 >x&& yM+mH+20>y && y+playerH>yM+20)
  
  {gameOver()}
  else if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  } else if (yM<0 || yM>canvas.height-mH) {
  yMsp = -yMsp;
}
}

function gameOver() {
  cx.fillStyle = "red";
  cx.font ="60px 'Comic Sans MS'";
  cx.fillText("Game Over", 250, 250);
  stop();
}

function stop () {
  if(req) {
    cancelAnimationFrame(req);
    req=undefined;
  }
}


animate();