var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "http://sweetcandy.hu/wp-content/uploads/2015/01/t9penguino_trans.png"

var x = 550;
var y = 0;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y,50,50);
  x++; y++;
}

animate();