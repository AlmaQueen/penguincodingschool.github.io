var canvas = document.getElementById("canvas");
var cx = canvas.getContext ("2d");
canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "mario.png";

var x =0;
var y =0;
var playerW = 40;
var playerH = 40;
var xSpeed = 5

function animate()  {
requestAnimationFrame (animate);
cx.clearRect (0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW, playerH);
x+=xSpeed;
if (x>canvas.width || x <0)  {
xSpeed = -xSpeed;
   };

}

animate();

