var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=700;
canvas.height=700;


var img_player = document.createElement("img");
img_player.src="http://trillioncreative.com/wp-content/uploads/2014/03/Leprechaun-red1.jpg";

var x= 0;
var y= 0;
var xSpeed = 0;
var ySpeed = 0;
var playerH = 35;
var playerW = 30;
var gravity=5;
var lava=[];
var req;
lava.push({x:0, y:600,w:canvas.width ,h:10});
lava.push({x:100, y:200,w:100 ,h:10});
 

function animate( )
{
 req=requestAnimationFrame(animate);
 cx.clearRect(0,0,canvas.width, canvas.height) ;
 cx.drawImage(img_player,x,y,playerW,playerH);
 x+=xSpeed;
 y+=ySpeed+gravity;
 obstacle();
 platform();
 if (x>canvas.width ||x<0){xSpeed= -xSpeed}
 if (y>canvas.height || y<0) {ySpeed = -ySpeed}
}

 function platform() {
   gravity =5;
   cx.fillStyle="grey";
   for (var i = 0;i<plat.length; i++) {
     cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
     if(y==plat[i].y-playerH &&
     x>=plat[i].x-playerW &&
     x<=plat[i].x+plat[i].w)
     {gravity=0}
     else {}
   }
 }
 
 function obstacle() {
 cx.fillStyle="red";
   for (var i = 0;i<lava.length; i++) {
     cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
     if(y==lava[i].y-playerH &&
     x>=lava[i].x-playerW &&
     x<=lava[i].x+lava[i].w)
     {gameOver()}
   }
   }
   
function setDirection(dir) {
   if (dir=="up") {
      xSpeed=0;
      ySpeed = -5}
      if(dir=="down") {
      xSpeed=0;
      ySpeed=5 }
    else  if (dir=="left") {
      xSpeed=-5;
      ySpeed =0 }
    else  if (dir=="right") {
      xSpeed=5;
      ySpeed = 0}
    else  if (dir=="stop") {
      xSpeed=0;
      ySpeed= 0}
      else  if (dir==="jump" && gravity===0) {
      xSpeed=0;
      ySpeed= -20}
   }

 
 var keyActions = {
   32: "jump",
   37: "left",
   38: "up",
   39: "right",
   40: "down",
 };
 
 document.addEventListener('keydown',function(event) {
   var dir = keyActions[event.keyCode];
   setDirection(dir);
 });
   document.addEventListener('keyup',function(event){
   var dir = keyActions[event.keyCode];
   setDirection("stop");
   
 });
 
var plat = [];
 plat.push({x:0, y:100,w:100 ,h:10});
 plat.push({x:100, y:80,w:100 ,h:10});
 plat.push({x:200, y:60,w:100 ,h:10});
 plat.push({x:300, y:40,w:100 ,h:10});
 plat.push({x:0, y:350,w:canvas.width ,h:10});
 
function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req=undefined; }
}
function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over" ,10,50);
  stop();
}
 
animate();

var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = 0;

var xW =10;
var mH = 10;

function moster() {
  cx.fillStyle = "orange";
  cx.fillRect(xM,yM,mW,mH);
  xM+=xMsp;
  if (x+playerw > xM && xM+mH>y && y+playerH>ym)
  
}

}


































































































