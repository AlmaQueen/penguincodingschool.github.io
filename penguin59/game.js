// Y is up and down
// X is side to side
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "zapper.png";

var x = 0;
var y = 0;
var Xspeed = 9;
var Yspeed = 9;
var PlayerHeight = zapper.png;
var PlayerWidth = zapper.png;
function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y);
  x+=Xspeed; y+=Yspeed;
  if (x > PlayerWidth + canvas.width || x < 0)
      {Xspeed = -Xspeed}
  if (y > PlayerHeight + canvas.height || y < 0)
      {Yspeed = -Yspeed}
}

animate();