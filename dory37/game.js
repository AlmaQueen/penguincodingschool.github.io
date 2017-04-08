var canvas=document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "http://cdn.playbuzz.com/cdn/0eb198ec-6e36-4701-8f80-70b7188f5e10/a49aea40-27e9-43d8-bbde-19c4af035b60.jpg"

var x = 0;
var y = 0;

function animate() {
  requestAnimationFrame(animate);
 cx.clearRect(1000,1000, canvas.width, canvas.height);
 cx.drawImage(img_player,x,y);
 x++;x++;

}

animate()