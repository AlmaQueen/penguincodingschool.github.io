var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player= document.createElement("img");
img_player.src="http://images.vectorhq.com/images/thumbs/f92/hedgehog-vector-graphics-eps-80908.jpg"

var x =1000;
var y=1000;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y);
  x-=1; y-=1
}

animate();