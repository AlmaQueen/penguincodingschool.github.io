var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width = 2000;
canvas.height=850;

var img_player = document.createElement("img");
img_player.src = "http://orig14.deviantart.net/4845/f/2016/129/0/1/genji_by_robert93nww-da1w1wl.png"

var x = 0;
var y = 440;

var xspeed = 0;
var yspeed = 0;

var gravity = -2;
var req;
var playerH = 50;
var playerW = 50;
var plat =[];
var lava=[];
var lavaImg = document.createElement("img");
lavaImg.src = "https://s-media-cache-ak0.pinimg.com/736x/6a/52/5e/6a525ed90375e6f4f760985d5700f3f8.jpg"

plat.push({x :0, y: 100, w:100, h:10});

plat.push({x :0, y: 500, w:100, h:10});


lava.push({x :0, y: 550, w:canvas.width, h:300});
function stop(){
  if (req){
    cancelAnimationFrame(req);
    req = undefined
  }
}

function gameOver(){
  cx.fillStyle = "red";
  cx.font = "50px Comic Sans MS";
  cx.fillText("Game Over",850, 100);
  stop();
}
function gameWin(){
  cx.fillStyle = "blue";
  cx.font = "50 px Comic Sans MS";
  cx.fillText("You Won",850, 100);
  stop();
}
function animate(){
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y,playerW, playerW);
  x+=xspeed;y+=yspeed-gravity;
  platform();
  obstacle();
  if (x>canvas.width || x<0){xspeed=-xspeed}
    if (y>canvas.height || y<0){yspeed=-yspeed}
    if(x<100 && y< 100){
      gameWin()
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
  gravity =-2;
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