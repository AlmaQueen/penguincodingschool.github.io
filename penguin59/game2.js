// Y is up and down
// X is side to side
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 800;

var img_player = document.createElement("img");
img_player.src = "zapper.png";

var x = 0;
var y = 0;
var Xspeed = 0;
var Yspeed = 0;
var PlayerH=100;
var PlayerW=100;
var keyActions = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
};
var gravity = 1;

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, PlayerW, PlayerH);
  x+=Xspeed;
  y+=Yspeed + gravity;
  if (x > canvas.width - PlayerW || x < 0)
      {Xspeed = -Xspeed}
  if (y > canvas.height - PlayerH || y < 0)
      {Yspeed = -Yspeed}
  platform();
  if (y === 500 -PlayerH && x < 58) {
    gravity = 0;
  }
  else {
    gravity = 1;
  }
}

animate();

function setDirection(dir) {
  if (dir === "up") {
    Xspeed =  0;
    Yspeed = -5;
  } else if (dir === "down") {
    Xspeed =  0;
    Yspeed =  5;
  } else if (dir === "left") {
    Xspeed = -5;
    Yspeed =  0;
  } else if (dir === "right") {
    Xspeed =  5;
    Yspeed =  0;
  } else if (dir === "stop") {
    Xspeed =  0;
    Yspeed =  0;
  }
}

function platform() {
  cx.fillStyle = "grey";
  cx.fillRect(0,500,100,10);
}