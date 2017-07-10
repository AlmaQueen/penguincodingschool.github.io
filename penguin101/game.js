var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "https://pbs.twimg.com/profile_images/635013579/pinguinsmoveis_400x400.png";

var x = 0;
var y = 0;
var w = 55;
var h = 55;
var xspeed = 0;
var yspeed = 0;
var gravity = 2;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,w,h);
  x+=xspeed;
  y+=yspeed+gravity;
  if (x<=0) {
    xspeed = -xspeed;
  }
  if (y<=0) {
    yspeed = -yspeed;
  }
  if (x>canvas.width) {
    xspeed = -xspeed;
  }
  if (y>canvas.height) {
    yspeed = -yspeed;
    
  }
}

function setDirection(dir) {
  if (dir == "jump") {
    y-=120;
  }
if (dir == "down") {
    xspeed = 0;
    yspeed = 5;
}

 if  (dir == "right") {
    xspeed = 5;
    yspeed = 0;
}
 if  (dir == "left") {
    xspeed = -5;
    yspeed = 0;
     
   }

//if (dir == "stop") {
   // xspeed = 0;
    //yspeed = 0;
//}
}

var keyActions = {
  32: "stop",
  37: "left",
  38: "jump",
  39: "right",
  40: "down",
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
})

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
})


animate()