var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src="http://png.bychuhe.com/wp-content/uploads/2014/08/airplane-png-image-3.jpg";

var x = 0;
var y = 0;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height) ;
  cx.drawImage(img_player, x,y);
  x++; y++;
}

animate();