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
  coin();
  scoreDisplay();
  gems();
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
var yMsp =-8;

var img_monster =document.createElement("img");
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

var img_coin = document.createElement("img");
img_coin.src = "Star_Coin.png";

var xC =300;
var yC =500;
var wC = 50;
var hC = 50;
var score = 0;

function coin() {
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerW >xC && xC+wC >x && yC+hC>y&& yC+hC>y && y+playerH>yC)
  {
    score +=10
   xC = Math.random()*canvas.width;
  yC = Math.random()*canvas.height;
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


function scoreDisplay(){
 cx.fillStyle-"blue";
 cx.font = "60px 'Comic sans MS'";
  cx.fillText("Score: "+score, 500,100);
}

var g = [];
g.push({x:100, y:100, w:11, h:10,color:"blue"});
g.push({x:300, y:220, w:10, h:10,color:"red"});
g.push({x:500, y:240, w:10, h:10,color:"purple"});
g.push({x:700, y:360, w:10, h:10,color:"lime"});
g.push({x:500, y:80, w:10, h:10,color:"green"});
g.push({x:350, y:300, w:10, h:10,color:"blue"});
g.push({x:490, y:30, w:10, h:20,color:"blue"});
g.push({x:330, y:140, w:10, h:20,color:"blue"});
g.push({x:110, y:560, w:10, h:10,color:"blue"});
g.push({x:600, y:680, w:21, h:20,color:"blue"});
g.push({x:100, y:400, w:21, h:21,color:"blue"});


function gems() {
  for (var i = 0; i<g.length; i++) {
    cx.fillStyle=g[i].color;
    cx.fillRect(g[i].x, g[i].y, g[i].w, g[i].h);
  if(x+playerW > g[i].x &&
    g[i].y+g[i].h>y &&
    y+playerH>g[i].y)
    {score+=g[i].y;
    g[i].x=-100
   }
  }
}

var music = new Audio('music.ogg');

music.play();


animate();