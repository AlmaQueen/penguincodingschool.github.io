var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width = 2000;
canvas.height=850;

var img_player = document.createElement("img");
img_player.src = "https://s-media-cache-ak0.pinimg.com/originals/b8/03/be/b803becf10c28afad61b6f3e5a394d5c.jpg"

var x = 0;
var y = 440;

var xspeed = 0;
var yspeed = 0;

var gravity = -5;
var req;
var playerH = 50;
var playerW = 50;
var plat =[];
var lava=[];
var lavaImg = document.createElement("img");
var xM = 1000;
var yM = 300;
var xMS = -5;
var yMS = 0;
var mW = 50;
var mH = 50;
var xC = 1000;
var yC = 330;
var cH = 20;
var cW = 20;
var score = 0;
var mp = document.createElement("img");
lavaImg.src = "lava.jpg";

mp.src = "http://www.pngmart.com/files/2/Pac-Man-Ghost-PNG-Transparent-Image.png";

plat.push({x :0, y: 100, w:100, h:10});
plat.push({x :125, y: 125, w:100, h:10});
plat.push({x :250, y: 150, w:100, h:10});
plat.push({x :375, y: 175, w:100, h:10});
plat.push({x :500, y: 200, w:100, h:10});
plat.push({x :625, y: 225, w:100, h:10});
plat.push({x :750, y: 250, w:100, h:10});
plat.push({x :875, y: 275, w:100, h:10});
plat.push({x :1000, y: 350, w:400, h:10});
plat.push({x :875, y: 425, w:100, h:10});
plat.push({x :750, y: 450, w:100, h:10});
plat.push({x :625, y: 475, w:100, h:10});
plat.push({x :500, y: 500, w:100, h:10});
plat.push({x :375, y: 525, w:100, h:10});
plat.push({x :250, y: 550, w:100, h:10});
plat.push({x :125, y:575, w:100, h:10});
plat.push({x :0, y: 600, w:100, h:10});


lava.push({x :0, y: 650, w:canvas.width, h:300});
function stop(){
  if (req){
    cancelAnimationFrame(req);
    req = undefined;
  }
}
function scoreDisplay(){
  cx.fillStyle = "green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("+score,850,100")
}
function gameOver(){
  cx.fillStyle = "red";
  cx.font = "50px Comic Sans MS";
  cx.fillText("Game Over",850, 100);
  stop();
}
function gameWin(){
  cx.fillStyle = "blue";
  cx.font = "50px Comic Sans MS";
  cx.fillText("You Won",850, 100);
  stop();
}
function animate(){
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y,playerW, playerH);
  x+=xspeed;y+=yspeed-gravity;
  platform();
  obstacle();
  monster();
  coin();
  if (x>canvas.width || x<0){xspeed=-xspeed}
    if (y>canvas.height || y<0){yspeed=-yspeed}
    if(x<100 && y< 100){
      gameWin();
    }
}
function coin() {
  cx.fillStyle = "gold";
  cx.fillRect(xC,yC, cW, cH);
  if (x+playerW > xC && xC+cW>x && yM+cH > y &&y+playerH > yC) {
    score+=10;
    var i = getRandomInt(1,plat.length);
    xC = plat[i].x;
    yC = plat[i].y-20;
    //xC = Math.random()*canvas.width-100);
    //yCgetRandomInt(1,3)*150;
}
function getRandomInt(min,max){
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random()*(max-min))+min;
}
}
function monster() {
  cx.drawImage(mp, xM,yM,mW, mH);
  xM += xMS;
  yM+= yMS;
  if (x+playerW > xM && xM+mW>x && yM+mH > y &&y+playerH > yM) {
    gameOver();
  }
  else if (xM<1000){
    xMS = -xMS;
  }else if (xM>1400){
    xMS= -xMS;
  }
}


function obstacle() {
  
  for (var i= 0; i<lava.length; i++) {
    cx.drawImage(lavaImg,lava[i].x,lava[i].y,lava[i].w,lava[i].h);
    //cx.fillRect(lava[i].x,lava[i].y,lava[i].w,lava[i].h);
  if (y==lava[i].y-playerH &&
  x>=lava[i].x-playerW &&
   x<=lava[i].x+lava[i].w)
  {gameOver()}
  }
}
function setDirection(dir){
  if (dir==="right"){
    xspeed=5;
    yspeed=0;
  }else if (dir==="left"){
    xspeed=-5;
    yspeed=0;
  }else if (dir==="stop"){
    xspeed=0;
    yspeed=0;
}else if (dir==="jump" && gravity===0){
  y = y-100;
}
}
var keyactions = {
  87 : "jump",
  68 : "right",
  65 : "left",
};

document.addEventListener("keydown", function(event) {
  var dir = keyactions[event.keyCode];
  setDirection(dir);
});
document.addEventListener("keyup", function(event) {
  var dir = keyactions[event.keyCode];
  setDirection("stop");
});

function platform() {
  gravity =-5;
  cx.fillStyle="blue";
  for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x,plat[i].y,plat[i].w,plat[i].h);
  if (y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
   x<=plat[i].x+plat[i].w)
   {gravity=0}
   else{}
}
}
animate();