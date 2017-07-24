var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "Player.png";

var x = 500;
var y = 0;
var playerw = 250;
var playerh = 250;
var xSpeed = -5;
var ySpeed = -5;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerw,playerh);
  x+=xSpeed;
  y+=ySpeed;
  
  if (x<0 || x>canvas.width) {xSpeed = -xSpeed}; //The equal sign means that you are assigning one value to another...
  if (y<0 || y>canvas.height) {ySpeed = -ySpeed};
}

function setDirection(dir) {
  
 if(dir =="up"){
  xSpeed = 0;
  ySpeed = -5;
}
  if(dir =="down"){
  xSpeed = 0;
  ySpeed = 5;
}
  if(dir =="right"){
  xSpeed = 5;
  ySpeed = 0;
}
  if(dir =="left"){
  xSpeed = -5;
  ySpeed = 0;
}
if(dir =="stop"){
  xSpeed = 0;
  ySpeed = 0;
}
    
}


var keyActions= {
  32:"stop",
  37:"left",
  38:"up",
  39:"right",
  40:"down"
};

document.addEventListener('keydown',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});




animate();