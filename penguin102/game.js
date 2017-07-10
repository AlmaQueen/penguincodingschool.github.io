var canvas = document.getElementById('canvas');
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "https://s-media-cache-ak0.pinimg.com/736x/e7/23/5a/e7235a9fdef8146498e4f837e0bc1f08--mario-yoshi-mario-kart.jpg";

var x = 10;
var y = 10;
var w = 70;
var h = 70;
var xspeed = -5;
var yspeed = -5;
var gravity = 2.5;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,w,h);
  x+=xspeed;
  y+=yspeed + gravity;
  if (x<=0){
    xspeed =-xspeed;
}
 if (y<=0){
   yspeed = -yspeed;
 }
 if (x>canvas.width){
   xspeed = -xspeed;
   }
  if (y>canvas.height){
    yspeed = -yspeed;
    }
}

function setDirection(dir) {
  if(dir == "up") {
    xspeed = 0;
    yspeed = -5;
  } if (dir == "down") {
    xspeed = 0;
    yspeed = 5;
  } if (dir == "left") {
    xspeed = -5;
    yspeed = 0;
  }  if (dir == "right") {
    xspeed = 5;
    yspeed = 0;
  } if (dir == "jump") {
    y-=-10;
  } if (dir == "diagonal") {
    xspeed = 0;
    yspeed = 5;
  }
  


}
 var keyActions = {
   32: "jump",
   37: "left",
   38: "up",
   39: "right",
   40: "down",
   90: "diagonal"
   
 };
 
 document.addEventListener('keydown',function(event) {
   var dir = keyActions[event.keyCode];
   setDirection(dir);
 });
 document.addEventListener('keyup',function(event) {
   var dir = keyActions[event.keyCode];
   setDirection("stop");
 });


animate();

