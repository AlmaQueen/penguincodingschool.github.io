var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;
var img_player = document.createElement("img")
img_player.src = "pokemon.png"
var x =0;
var y =0;
var xSpeed = 10;
var ySpeed = 10;

function animate()  {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,100,100);
x+=xSpeed; y+=ySpeed;
if (x>canvas.width || x <0){ xSpeed=-xSpeed}
if (y>canvas.height || y<0 ){ySpeed = -ySpeed}
  
  
  
}
function setDirection(dir){
  if (dir==="up") {
    xSpeed =0;
    ySpeed = -5;
  }
  else if (dir ==="down"){
  xSpeed = 0;
  ySpeed = -5;
  }
  else if (dir ==="left"){
  xSpeed = -5;
  ySpeed = 0;
  }
  else if (dir ==="right"){
  xSpeed = 0;
  ySpeed = 0;
  }
  else if (dir ==="stop"){
  xSpeed = 0;
  ySpeed = 0;
  }
}



animate();