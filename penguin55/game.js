var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width = 900;
canvas.height=850;

var img_player = document.createElement("img");
img_player.src = "http://orig14.deviantart.net/4845/f/2016/129/0/1/genji_by_robert93nww-da1w1wl.png"

var x = 0;
var y = 0;

var xspeed = 0;
var yspeed = 0;

var gravity = -2;

var playerH = 50;
var playerW = 50;
var plat =[]

plat.push({x :0, y: 100, w:100, h:10});
plat.push({x :200, y: 150, w:100, h:10});
plat.push({x :0, y: 850, w:900, h:1});
plat.push({x :400, y: 200, w:100, h:10});
plat.push({x :600, y: 250, w:100, h:10});
plat.push({x :700, y: 300, w:100, h:10});
plat.push({x :600, y: 250, w:100, h:10});
plat.push({x :0, y: 500, w:100, h:10});
plat.push({x :200, y: 450, w:100, h:10});
plat.push({x :400, y: 400, w:100, h:10});
plat.push({x :600, y: 350, w:100, h:10});

function animate(){
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y,playerW, playerW);
  x+=xspeed;y+=yspeed-gravity;
  platform();
  if (x>canvas.width || x<0){xspeed=-xspeed}
    if (y>canvas.height || y<0){yspeed=-yspeed}
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