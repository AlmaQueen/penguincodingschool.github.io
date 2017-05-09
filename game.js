var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;


var img_player = document.createElement("img");
img_player.src="http://trillioncreative.com/wp-content/uploads/2014/03/Leprechaun-red1.jpg";

var x= 0;
var y= 0;
var xSpeed = 0;
var ySpeed = 0;
var playerH = 35;
var playerW = 30;
var gravity=5;
var lava=[]
function animate( )
{
 requestAnimationFrame(animate);
 cx.clearRect(0,0,canvas.width, canvas.height) ;
 cx.drawImage(img_player,x,y,playerW,playerH);
 x+=xSpeed;
 y+=ySpeed+gravity;
 platform();
 if (x>canvas.width ||x<0){xSpeed= -xSpeed}
 if (y>canvas.height || y<0) {ySpeed = -ySpeed}
}

 function platform() {
   gravity =5;
   cx.fillStyle="grey";
   for (var i = 0;1<plat.length; i++) {
     cx.fillFect (plat[i].x, plat[i].y, plat.w, plat[i].h);
     if(y==plat[i].y-playerH &&
     x>=plat[i].x-playerW &&
     x<=plat[i].x+plat[i].w)
     {gravity=0}
     else {}
   }
 }
 
 function obstacle() {
 cx.fillStyle="red";
   for (var i = 0;1<plat.length; i++) {
     cx.fillFect (plat[i].x, plat[i].y, plat.w, plat[i].h);
     if(y==lava[i].y-playerH &&
     x>=lava[i].x-playerW &&
     x<=lava[i].x+lava[i].w)
     {gravity=0}
     else {}
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
 
 
function platform() {
   cx.fillStyle = "yellow";
   cx.fillRect(0,500,100,10);
   if (y==500-playerH && x<100 ) {
     gravity=0;
   } else {
     gravity=5;
   }
 }
 
 var plat = [];
 plat.push({x:0, y:100,w:100 ,h:10});
 plat.push({x:100, y:80,w:100 ,h:10});
 plat.push({x:200, y:60,w:100 ,h:10});
 plat.push({x:300, y:40,w:100 ,h:10});
 plat.push({x:0, y:350,w:canvas.width ,h:10});
 lava.push({x:0, y:600,w:canvas.width ,h:10});
 lava.push({x:100, y:200,w:100 ,h:10});
 
animate();










































