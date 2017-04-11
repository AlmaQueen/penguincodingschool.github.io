var canvas =document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1901.55;
canvas.height=892.95;

var img_player = document.createElement("img");
img_player.src="http://icons.iconarchive.com/icons/martin-berube/animal/256/turtle-icon.png";

var x =0;
var y =0;
var xSpeed = 5
var ySpeed = 5

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y);
  x+=xSpeed;
  y+=ySpeed;
  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height||y<0) {ySpeed=-ySpeed}
}

function setDirection(dir) {
  if(dir=="up") {
    xSpeed = 0;
    ySpeed = -7.5;
  } else if (dir=="down") {
    xSpeed = 0;
    ySpeed = 7.5;
  } else if (dir=="left") {
    xSpeed = -7.5;
    ySpeed = 0;
  } else if (dir=="right") {
    xSpeed = 7.5;
    ySpeed = 0;
  } else if (dir=="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}

var keyActions = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});




animate();