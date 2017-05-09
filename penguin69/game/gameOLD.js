var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width =500;
canvas.height =500;


var playerW = 30;
var playerH = 35;


var gravity=1;






var img_player = document.createElement("img");
img_player.src = "mario.png";
var xSpeed = 0;
var ySpeed = 0;
var x = 0;
var y = 0;

function animate(){
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, playerW, playerH);
  x++; y++;
  x+=xSpeed;
  if (x>canvas.width || x <0){
  xSpeed = -xSpeed;

}
  var ySpeed = 5;
 y+=ySpeed;
  if (y>canvas.height || y <0){
  ySpeed = -ySpeed;
y+=ySpeed+gravity
    
  }
}
animate();

var keyactions = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

function setDirection(dir) {
  if (dir === "up")
{  xSpeed = 0;
  ySpeed = -5;
} else if (dir === "left")
{  xSpeed = 0;
  ySpeed = 5;
} else if (dir === "left")
{ xSpeed = -5;
  ySpeed = 0;
} else if (dir === "right")
{ xSpeed = 5;
  ySpeed = 0;
} else if (dir === "right")
{ xSpeed = 0;
  ySpeed = 0;
}
}