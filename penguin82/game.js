
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;

var img_player = document.createElement("img");
img_player.src = "https://static.giantbomb.com/uploads/original/0/3683/1120634-penguin_chick.jpg";

var x = 0;
var y = 0;
var xspeed = 1;
var yspeed = 1;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y,50,50);
  x+=xspeed;
  y+=yspeed;
  if (x>canvas.width||x<0) {xspeed=-xspeed}
  if (y>canvas.height || y<0) {yspeed = -yspeed}
  }

function setDirection(dir) {
  if (dir === "up") {
  xSpeed = 0;
  ySpeed = -5;
} else if (dir === "down") {
  xSpeed = 0;
  ySpeed = 5;
} else if (dir === "left") {
  xSpeed = -5;
  ySpeed = 0;
} else if (dir === "right") {
  xSpeed = 5;
  ySpeed = 0;
} else if (dir === "stop") {
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
} ;

document.addEventListener('keydown',function(event) {
var dir = keyActions[event.keyCode] ;
setDirection("dir") ;
});
document.addEventListener('keyup',function(event) {
var dir = keyActions[event.keyCode] ;
setDirection("stop") ;
});
animate();


// var canvas = document.getElementById("canvas");
// var cx = canvas.getContext("2d");
// canvas.width=1000;
// canvas.height=1000;

// var img_player = document.createElement("img");
// img_player.src = "https://static.giantbomb.com/uploads/original/0/3683/1120634-penguin_chick.jpg";
// var x=0;
// var y=0;
// var xSpeed =0;
// var ySpeed =0;
// var gravity =1;

// function animate () {
//   requestAnimationFrame(animate);
//   cx.clearRect (0,0,canvas.width, canvas.height);
//   cx.drawImage(img_player, x, y,100,100);
//   x+=xSpeed;
//   y+=ySpeed+gravity;
// if (x>canvas.width-250 ||x<0) {xSpeed=-xSpeed}
// if (y>canvas.height-250 || y<0) {ySpeed = -ySpeed}
  
// }
// function setDirection(dir) {
//   if (dir=="up") {
//     xSpeed = 0;
//     ySpeed = -5;
//   }  else if (dir=="down") {
//     xSpeed = 0;
//     ySpeed = 5;
//   }  else if (dir=="left") {
//     xSpeed = -5;
//     ySpeed = 0;
//   }  else if (dir=="right") {
//     xSpeed = 5;
//     ySpeed = 0;
//   }  else if (dir=="stop") {
//     xSpeed = 0;
//     ySpeed = 0;
//   }
// }

// var keyActions = {
//   32: "stop",
//   37: "left",
//   38: "up",
//   39: "right",
//   40: "down"
// };

// document.addEventListener('keydown', function(event) {
//   var dir = keyActions[event.keyCode];
// setDirection("dir");
// });

// document.addEventListener('keyup', function(event) {
//   var dir = keyActions[event.keyCode];
//   setDirection("stop");
// });

// animate()