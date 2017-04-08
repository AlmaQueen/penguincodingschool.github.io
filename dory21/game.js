var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjBot_inJXTAhUCJCYKHZE8B8UQjBwIBA&url=https%3A%2F%2Fwww.shareicon.net%2Fdownload%2F2016%2F10%2F11%2F841482_sport.svg&bvm=bv.152180690,d.eWE&psig=AFQjCNHlytBIi-3HMXpEhNPGk-i8FZcVog&ust=1491753420946735";

var x = 0;
var y = 0;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player, x,y);
  x++; y++;
}

animate();