/*
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width =1500;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "bunny.png";
var img_player2 = document.createElement("img");
img_player2.src = "Rabbit.jpg";

// var i = Math.ceil(Math.random()*plat.length);
var x = 600;
var y = 500;
var playerW = 80;
var playerH = 70;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var life = 100;
var x2 = 600;
var y2 = 400;
var player2W = 80;
var player2H = 70;
var xspeed2 = 0;
var yspeed2 = 0;
var gravity2 = 5;
var life2 = 100;

function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  cx.drawImage(img_player2,x2,y2,player2W,player2H);
  x+=xspeed;
  y+=yspeed+gravity;
  if(x<0 || x>canvas.width) {xspeed = -xspeed}
  if(y<0 || y>canvas.height) {yspeed = -yspeed}
  platform();
  obstacle();
  lifeleft();
  monster();
  coin();
  scoreDisplay();
}

function setDirection(dir) {
  if(dir =="jump" && gravity===0) {
    xspeed = 0;
    y -= 200
    ;}
    
    if(dir =="down") {
    xspeed = 0;
    yspeed = 5;}
    
    if(dir =="right" && x<canvas.width) {
    xspeed = 5;
    yspeed = 0;}
    
    if(dir =="left" && x>0 ) {
    xspeed = -5;
    yspeed = 0;}
    
    if(dir =="stop") {
    xspeed = 0;
    yspeed = 0;
    }
    if(dir =="jump2" && gravity2===0) {
    xspeed2 = 0;
    y2 -= 200
    ;}
    
    if(dir =="down2") {
    xspeed2 = 0;
    yspeed2 = 5;}
    
    if(dir =="right2" && x<canvas.width) {
    xspeed2 = 5;
    yspeed2 = 0;}
    
    if(dir =="left2" && x>0 ) {
    xspeed2 = -5;
    yspeed2 = 0;}
    
    if(dir =="stop2") {
    xspeed2 = 0;
    yspeed2 = 0;
  }
}

var keyActions = {
  87:"jump",
  65:"left",
  83:"down",
  68:"right",
  32:"stop",
  38:"jump2",
  37:"left2",
  39:"right2",
  40:"down2",
}

document.addEventListener('keydown',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection("stop");
  setDirection("stop2");
});


var plat = [];
plat.push({x:0,y:500,w:100,h:10})
plat.push({x:200,y:350,w:200,h:20})
plat.push({x:400,y:400,w:100,h:10})
plat.push({x:600,y:600,w:100,h:10})
plat.push({x:200,y:400,w:100,h:10})
plat.push({x:600,y:500,w:100,h:10})
plat.push({x:800,y:500,w:100,h:10})
plat.push({x:1000,y:500,w:100,h:10})
plat.push({x:1200,y:500,w:100,h:10})
plat.push({x:1400,y:500,w:100,h:10})
function platform() {
  gravity = 5;
  gravity2 = 5;
  cx.fillStyle = "#29af24"
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x,plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH && x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w
    )
    {gravity=0}
    {gravity2=0}
  }
}

var lava = [];
lava.push({x:0,y:660,w:2000,h:40})



function obstacle() {
  cx.fillStyle = "#60473c"
for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x,lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y-playerH &&
    x>lava[i].x-playerW &&
    x<lava[i].x+lava[i].w
    )
    {life-=1
      x=600
      y=500
      if(life===0) {gameover()}
    }
  }
}

function lifeleft() {
  cx.fillStyle = "blue";
  cx.font = "30px Comic Sans MS";
  cx.fillText("body parts left "+life,100,50);
}

function gameover() {
  cx.fillStyle = "red";
  cx.font = "70px Comic Sans MS";
  cx.fillText("You Were a Great Meal ",0,400);
  stop();
}

function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

function bonuspoints() {
  score+=1000000
}

/*
var music = new Audio('runningrabbit.mp3');
music.play();
music.loop = true


var xM = 800;
var yM = 0;
var xMsp = 10;
var yMsp = 6;

var mW = 100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.png";

function monster() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW>xM&&xM+mW>x&&yM+mH>y&&y+playerH>yM)
  {life--;
    x=600;
    y=500;
  }
  if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  } if(yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
    if(life<=0) {gameover()}
  }
}


var xM2 = 800;
var yM2 = 400;
var xM2sp = 10;
var yM2sp = 6;

var m2W = 100;
var m2H = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster2.jpg";

function monster2() {
  cx.drawImage(img_monster,xM2, yM2, mW2, m2H);
  xM2+=xM2sp;
  yM2+=yM2sp;
  if (x+playerW>xM2&&xM2+m2W>x&&yM2+m2H>y&&y+playerH>yM2)
  {life--;
    x=0;
    y=0
  }
  if (xM2<0 || xM2>canvas.width-m2W) {
    xM2sp = -xM2sp;
  } if(yM2<0 || yM2>canvas.height-m2H) {
    yM2sp = -yM2sp;
    if(life===0) {gameover()}
  }
}


var xC = 80;
var yC = 450;
var wC = 120;
var hC = 100;
var score = 0;
var img_coin = document.createElement("img");
img_coin.src = "coin.png";

function coin() {
  cx.drawImage(img_coin, xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x &&yC+hC>y && y+playerH >yC)
  { score +=10;
    var i = Math.floor(Math.random()*plat.length);
    xC = plat[i].x+20;
    yC = plat[i].y-40;
}


}

function scoreDisplay() {
  cx.fillStyle="black";
  cx.fillText("Score: "+score, 500,100);
  if (score===100) {
    gamewin();
  }
  }

function gamewin() {
  cx.fillStyle = "green";
  cx.font = "70px Comic Sans MS";
  cx.fillText("You Suvived in the Food Chain ",0,400);
  stop();
}
  



animate();
*/










var canvas = document.getElementById("canvas");
var cx =  canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "bunny.png"
var img_player2 = document.createElement("img");
img_player2.src = "Rabbit.jpg";

var x = 0;
var x2=500;
var y = 0;
var y2=100;
var playerW = 70
var playerH = 100
var xspeed = 0; //Mario
var yspeed = 0;
var xspeed2=0;//Luigi
var yspeed2=0;
var gravity = 5;
var gravity2 = 5;
var life = 3
var life2 = 3

var coinsound = new Audio('smb_coin.wav');

function animate() {
req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y, playerW,playerH);
  cx.drawImage(img_player2,x2,y2, playerW,playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  x2+=xspeed2;
  y2+=yspeed2+gravity2;
//  platformG();
  platform();
  platform2();
  obstacle();
//  obstacle2();
  lifeleft();
//  lifeleft2()
  monster();
  //in();
  
  coin2();
  coin();
  scoreDisplay();
  
  if (x<=0) {
    xspeed = -xspeed;
  }
  if (y<=0){
    yspeed = -yspeed;
  }
  if (x>canvas.width){
    xspeed = -xspeed
  }
  if(y>canvas.height){
    yspeed = -yspeed
  }
  
  //Luigi
  if (x2<=0) {
    xspeed2 = -xspeed2;
  }
  if (y2<=0){
    yspeed2 = -yspeed2;
  }
  if (x2>canvas.width){
    xspeed2 = -xspeed2
  }
  if(y2>canvas.height){
    yspeed2 = -yspeed2
}
}


function setDirection(dir) {
  if (dir == "down"){
    xspeed = 0;
    yspeed = 5;
    img_player.src = "Mario1.png"
  }
  if (dir == "down2"){
    xspeed2 = 0;
    yspeed2 = 5;
    img_player2.src = "Luigi1.png"
  }
  if (dir == "right"){
    xspeed = 5;
    yspeed = 0;
    img_player.src = "Mario2.png"
  }
   if (dir == "right2"){
    xspeed2 = 5;
    yspeed2 = 0;
    img_player2.src = "Luigi3.png"
  }
  if (dir == "left"){
    xspeed = -5;
    yspeed = 0;
    img_player.src = "Mario3.png"
  }
  if (dir == "left2"){
    xspeed2 = -5;
    yspeed2 = 0;
    img_player2.src = "Luigi2.png"
  }
  if (dir == "stop"){
    xspeed = 0;
    yspeed = 0;
  }
  if (dir == "jump" && y>0){
    y-=55;
  }
  if (dir == "stop2"){
    xspeed2 = 0;
    yspeed2 = 0;
  }
  if (dir == "jump2" && y>0){
    y2-=55;
  }
}

var keyActions = {
  38: "jump",
  37: "left",
  39: "right",
  40: "down",
  87: "jump2",
  65: "left2",
  68: "right2",
  83: "down2",
};
document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir)
})
document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
  setDirection("stop2");
})

var plat = [];
plat.push({x:0,y:500,w:100,h:10})
plat.push({x:200,y:350,w:200,h:20})
plat.push({x:400,y:400,w:100,h:10})
plat.push({x:600,y:600,w:100,h:10})
plat.push({x:200,y:400,w:100,h:10})
plat.push({x:600,y:500,w:100,h:10})
plat.push({x:800,y:500,w:100,h:10})
plat.push({x:1000,y:500,w:100,h:10})
plat.push({x:1200,y:500,w:100,h:10})
plat.push({x:1400,y:500,w:100,h:10})

function platform() {
  gravity = 5;
  gravity2 = 5;
  cx.fillStyle = "#29af24"
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x,plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH && x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w
    )
    {gravity=0}
    {gravity2=0}
  }
}







var lava = [];
lava.push({x:0, y:650, w:5000, h:900});

function obstacle() {
  cx.fillStyle="red";
  for (var i = 0; i<lava.length; i++)
  {cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if(y== lava[i].y-playerH &&
  x>=lava[i].x-playerW &&
  x<=lava[i].x+lava[i].w)
  {life-=1;
  x=0;
  y=0;
   if(life===0) {gameover()}
  }
  else{}
  }
}

var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = -5

var mW = 100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.png";


function monster() {
  cx.drawImage(img_monster, xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y +playerH>yM)
  {gameover()}
  if (xM<0 || xM>canvas.width-mW)
  {xMsp = -xMsp;}
    if (yM<0 || yM>canvas.width-mW) {
    yMsp = -yMsp;
  }
}

function bonuspoints() {
  score+=10000000;
}

function lifeleft() {
  cx.lifeStyle = "green"
  cx.font = "30px Comic Sans MS";
  cx.fillText("Lives "+life, 875 , 40);
}
function gameover() {
  cx.fillStyle = "red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over", 25, 50);
  stop();
}

var xC = 200;
var yC = 50;
var wC = 30;
var hC = 30;
var xC2 = 400;
var yC2 = 500;
var wC2 = 40;
var hC2 = 40;
var score = 0;

var img_coin = document.createElement("img");
img_coin.src = "coin.png";
var img_coin2 = document.createElement("img");
img_coin2.src = "coin2.png";

function coin() {
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y +playerH>yC)
 {score +=10;
 coinsound.play();
    var i = Math.ceil(Math.random()*plat.length);
  setTimeout(xC = plat[i].x+20,1000)
  yC=plat[i].y-40;
  
 }
}

function coin2() {
  cx.drawImage(img_coin2,xC2, yC2, wC2, hC2);
  if (x+playerW > xC2 && xC2+wC2 >x && yC2+hC2>y && y +playerH>yC2)
  {score +=50;
  coinsound.play();
  var i = Math.ceil(Math.random()*plat.length);
  setTimeout(xC2 = plat[i].x+20,3000)
  yC2=plat[i].y-40;
  }
}

function scoreDisplay(){
  cx.fillStyle="green";
  cx.font = "30px 'Comic Sans MS'";
  cx.fillText("Score "+score, 500, 100);
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

animate();