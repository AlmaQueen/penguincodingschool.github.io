var canvas=document.getElementById("canvas");
var cx=canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player=document.createElement("img")
img_player.src="http://cliparting.com/wp-content/uploads/2016/06/Unicorn-silhouette-cliparts.jpg"

var x =100;
var y =1000;

function animate ()   {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width,canvas.height);
cx.drawImage(img_player,x,y);
x-=3;y+=3
}


animate();


