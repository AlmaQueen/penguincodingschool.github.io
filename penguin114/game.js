var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=805;
var img_player = document.createElement("img");
img_player.src = "pancakes.png";


var x = 0;
var y= 0 ;
var playerW = 150;
var playerH = 100;
var xSpeed = 0;
var ySpeed = 0;
var counter=0;
var gravity = 5;

function animate() {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player, x,y, playerW, playerH);
x+=xSpeed;
y+=ySpeed+gravity;
counterDisplay();
platform();
if (x>canvas.width -playerW || x <0){
xSpeed = -xSpeed;
counter++;
}

if (y>canvas.height-playerH || y <0){
ySpeed = -ySpeed;
counter++;
}

}

function counterDisplay() {
  cx.font = "325px";
  cx.fillText('Pancake Bounces:'+counter,100,100);

}

function setDirection(dir) {
if (dir === "up") {
xSpeed = 0;
ySpeed = -5;
} else if (dir === "down") {
  xSpeed = -0;
  ySpeed = 5;
}
else if (dir === "left") {
  xSpeed = -5;
  ySpeed = 0;
}
else if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;
}
else if (dir === "stop") {
  xSpeed = 0;
  ySpeed = 0;
}
}

var keyActions = {
  87: "up",
  83: "down",
  68: "right",
  65: "left"
};


document.addEventListener('keydown',function(event) {
var dir = keyActions[event.keyCode];
setDirection(dir);
 
});

document.addEventListener('keyup',function(event) {
var dir = keyActions[event.keyCode];
setDirection('stop');
 
});

function platform() {
cx.fillStyle = "grey;";
cx.fillRect(0,500,100,10);
if (y===500-playerH && x<100) {
gravity = 0;
}

else {
  gravity = 1;
  
}

}
animate();
