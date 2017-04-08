var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.hieght=1000;

var img_player = document.createElement("img");
img_player.src = "http://en.xn--icne-wqa.com/images/icones/1/3/animals-elephant.png"

var x = 0;
var y = 0;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y);
  x++; y++;
}

animate();