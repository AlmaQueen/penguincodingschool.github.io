var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player= document.createElement("img");
img_player.src="http://images.vectorhq.com/images/thumbs/f92/hedgehog-vector-graphics-eps-80908.jpg"

var x =0;
var y=0;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var playerW = 100

var playerH = 100;
function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW, playerH);
  x+=xspeed;
  y+=yspeed + gravity;
  platform();

  if (x>canvas.width||x<0) {xspeed=-xspeed}
  if (y>canvas.height ||y<0) {yspeed=-yspeed}
  }


function setDirection(dir) {
  if(dir==="up") {
  xspeed =0;
  yspeed = -5;
 } else if(dir==="down") {
  xspeed =0;
  yspeed =5;
 } else if(dir==="left") {
  xspeed = -5;
  yspeed =0;
 } else if(dir==="right") {
  xspeed =5;
  yspeed =0;
 } else if(dir==="jump"&& gravity ===0) {
  xspeed =0;
  yspeed =10;
 }
}
var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener ('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
  
});document.addEventListener ('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});


function platform(){
cx.fillStyle ="grey";
cx.fillRect (0,500,100,10);
if (y==500-playerH) {gravity=0}
 
 else { gravity=1}
}
 
animate();



 var plat=[]


 plat.push({x: 0,y: 100,w:100,h:10});
 plat.push({x: 100,y: 80,w:100,h:10});
 plat.push({x: 200,y: 60,w:100,h:10});
 plat.push({x: 300,y: 40,w:100,h:10});
 plat.push({x: 0,y: 350,w:canvas.width,h:10});


function platform () {
gravoty =5;
cx.fillStyle= "fuchsia"
for (var i = 0; i<plat.lenath; i++) {
 cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
if (y==plat[i].y-playerH &&
   x>=plat[i].y-playerw &&
   x<=plat[i].y + plat[i].w)
  {gravity=0}
  else {}
}
}