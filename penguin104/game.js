var canvas = document.getElementById("canvas");
var cx =  canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "bowser1.png"
//img_player.src = "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png"
var img_player2 = document.createElement("img");
img_player2.src = "bowser2.png";
//img_player2.src = "https://upload.wikimedia.org/wikipedia/en/f/f1/LuigiNSMBW.png"
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
 // platform2();
  obstacle();
//  obstacle2();
  lifeleft();
//  lifeleft2()
  monster();
  //Mario
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
  }
  if (dir == "down2"){
    xspeed2 = 0;
    yspeed2 = 5;
  }
  if (dir == "right"){
    xspeed = 5;
    yspeed = 0;
  }
   if (dir == "right2"){
    xspeed2 = 5;
    yspeed2 = 0;
  }
  if (dir == "left"){
    xspeed = -5;
    yspeed = 0;
  }
  if (dir == "left2"){
    xspeed2 = -5;
    yspeed2 = 0;
  }
  if (dir == "stop"){
    xspeed = 0;
    yspeed = 0;
  }
  if (dir == "jump"){
    y-=55;
  }
  if (dir == "stop2"){
    xspeed2 = 0;
    yspeed2 = 0;
  }
  if (dir == "jump2"){
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
plat.push({x:0, y:150, w:100, h:10, color:"red"});
plat.push({x:140, y:200, w:100, h:10, color:"orange"});
plat.push({x:280, y:250, w:100, h:10, color:"yellow"});
plat.push({x:420, y:300, w:100, h:10, color:"green"});
plat.push({x:560, y:350, w:100, h:10, color:"blue"});
plat.push({x:700, y:400, w:100, h:10, color:"purple"});

function platform() {
  gravity=5; gravity2=5;
for (var i = 0; i<plat.length; i++)
  { cx.fillStyle=plat[i].color;
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h)
    if(y== plat[i].y-playerH &&
      x>=plat[i].x-playerW &&
      x<=plat[i].x+plat[i].w)
    {gravity=0}
    if(y2== plat[i].y-playerH &&
      x2>=plat[i].x-playerW &&
      x2<=plat[i].x+plat[i].w)
    {gravity2=0}
    
   else{}
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
img_monster.src = "bowser1.png";
var img_monster2 = document.createElement("img");
img_monster2.src = "bowser2.png";

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

var xC = 80;
var yC = 50;
var wC = 30;
var hC = 30;
var score = 0;

var img_coin = document.createElement("img");
img_coin.src = "coin.png";

function coin() {
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y +playerH>yC)
  
{   score +=10;
  var i = Math.ceil(Math.random()*plat.length);
  setTimeout(xC = plat[i].x+20,1000)
  yC=plat[i].y-40;
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