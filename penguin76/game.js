var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "https://i.ytimg.com/vi/Fz50hqWrHUY/maxresdefault.jpg"
img_player.width=50
img_player.height=50

var x =0;
var y =0;

function animate () {
  requestAnimationFrame(animate);
  cx.clearRect (0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y);
  x-=3;y-=3
  
}

animate();