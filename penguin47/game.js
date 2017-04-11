var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d")
canvas.width=1500;
canvas.height=1500;


var img_player = document.createElement("img");
img_player.src="http://trillioncreative.com/wp-content/uploads/2014/03/Leprechaun-red1.jpg"

var x= 500;
var y= 500;
var xspeed = 3;
var yspeed = 3;

function animate() {
 requestAnimationFrame(animate) ;
 cx.clearRect(0,0,canvas.width, canvas.height) ;
 cx.drawImage(img_player,x,y);
 x+=xspeed;
 y+=yspeed;
 if (x>canvas.width ||x<50){xspeed= -xspeed}
 if (y>canvas.height || y<50) {yspeed = -yspeed}
}
function setDirection(dir) {
   if (dir=="up") {
      xspeed=0;
      yspeed = -5}
    else  if (dir=="left") {
      xspeed=5;
      yspeed = }
    else  if (dir=="right") {
      xspeed=-5;
      yspeed = 0}
    else  if (dir=="stop") {
      xspeed=0;
      yspeed= 0}
   }

 
 var keyActions = {
   32: "stop",
   37: "left",
   38: "up",
   39: "right",
   40: "down",
 };
 
 document.addEventListener('keydown',function(event){
   var dir = keyActions[event.keyCode];
   setDirection(dir);
   
 });
animate();

