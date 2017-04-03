var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player=document.createElement('img');
img_player.src="img/princess.png"

var x=1000;
var y=0;

function animate(){
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y);
  y++;x--;
}

animate();