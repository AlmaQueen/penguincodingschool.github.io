var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "https://image.flaticon.com/icons/png/128/107/107071.png";

var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var playerH = 35;
var playerW = 30;
var plat=[];

plat.push({x: 0, y:100, w:100, h:10});
plat.push({x: 100, y: 80, w:100, h:10});
plat.push({x: 0, y:300, w:100, h:10});
plat.push({x: 400, y:500, w:100, h:10});
plat.push({x: 200, y:400, w:100, h:10});

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xspeed;
  y+=(yspeed+gravity);
  platform();
  console.log(gravity);
  if (x>canvas.width|| x<0) {xspeed= -xspeed}
  if (y>canvas.width|| y<0) {yspeed= -yspeed}
}
  
  function setDirection(dir) {
    if (dir=="up") {
      xspeed = 0;
      yspeed = -15;
      }else if (dir=="right") {
      xspeed = 15;
      yspeed = 0;
      }else if (dir=="left") {
      xspeed = -15;
      yspeed = 0;
      }else if (dir=="stop") {
      xspeed = 0;
      yspeed = 0;
      }else if (dir=="down") {
      xspeed = 0;
      yspeed = 15;
     } else if (dir === "jump") {
        y = y-200;
      }
      
    
  }


var keyActions = {
  32: "jump",
  38: "up",
  39: "right",
  37: "left",
  40: "down"
};

document.addEventListener("keydown", function(event) {
  var dir = keyActions[event.keyCode];
setDirection(dir);
});
document.addEventListener("keyup", function(event) {
  var dir = keyActions[event.keyCode];
setDirection("stop");
});

function platform(){
gravity =5;
cx.fillStyle ="blue";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
//  if (y==100) {gravity = 0}
  if (y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<plat[i].x + plat[i].w) {gravity=0;}
  else{}

}
}

animate()