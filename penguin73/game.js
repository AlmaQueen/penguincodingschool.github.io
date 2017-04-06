var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src= "http://static.vecteezy.com/system/resources/previews/000/029/330/non_2x/sugar-skull-vector.jpg";

var x =500;
var y =500;

function animate () {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y);
  x-=10; y-=10
}

animate();