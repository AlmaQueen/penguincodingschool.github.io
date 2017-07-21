var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "candy1.png";

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
coin();
treasure();
scoreDisplay();
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
   if(dir=="down" && y<canvas.height-playerH){
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
img_monster.src = "mouth.png";

function monster(){
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if(x+playerW > xM && xM+mW+20 >x&& yM+mH>y+20 && y+playerH>yM+20)
  
  {gameOver()}
  else if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  } else if (yM<5 || yM>canvas.height-mH) {
  yMsp = -yMsp;
}
}

var img_coin = document.createElement("img");
img_coin.src = "coin.png";


var xC = 300;
var yC = 500;
var wC = 30;
var hC = 30;
var score =0;

function coin(){
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if(x+playerW > xC && xC+wC >x&& yC+hC>y && y+playerH>yC)
  {
    score+=10
    xC = Math.random()*canvas.width;
    yC = Math.random()*canvas.height;
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
function scoreDisplay(){
  cx.fillStyle ="black";
  cx.font = "60px 'Comic Sans MS'";
  cx.fillText("Score: "+score, 500, 100);
}

var gem = []
gem.push ({x:10, y:200, w:10, h:10, color: "blue"});
gem.push ({x:200, y:250, w:10, h:10, color: "red"});
gem.push ({x:400, y:300, w:20, h:20, color: "pink"});
gem.push ({x:600, y:350, w:20, h:20, color: "orange"});
gem.push ({x:800, y:400, w:30, h:30, color: "purple"});
gem.push ({x:400, y:450, w:30, h:30, color: "green"});
gem.push ({x:600, y:500, w:40, h:40, color: "black"});
gem.push ({x:800, y:550, w:40, h:40, color: "magenta"});
gem.push ({x:100, y:600, w:50, h:50, color: "navy"});
gem.push ({x:600, y:650, w:55, h:50, color: "lightblue"});









function treasure() {
  for (var i= 0; i <gem.length; i++){
    cx.fillStyle=gem[i].color;
    cx.fillRect(gem[i].x, gem[i].y, gem[i].w, gem[i].h);
    if (x+playerW>gem[i].x &&
    gem[i].x+gem[i].w>x &&
    gem[i].y+gem[i].h>y &&
    y+playerH>gem[i].y)
  {score+=gem[i].y-100
  gem[i].x=Math.random()*canvas.width;
  gem[i].y=Math.random()*canvas.height;
}
}
}

var music = new Audio('music.mp3')
music.play();
music.loop = true;
animate();