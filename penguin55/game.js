var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "https://cdn-tempostorm.netdna-ssl.com/img/overwatch/hero-background/hq/genji.png"

var x = 0;
var y = 0;

function animate(){
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y,300, 300);
  x++;y++;
}

animate();