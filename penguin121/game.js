var canvas = document.getElementById ("canvas");
var cx = canvas.getContext("2d");
canvas.width =1000;
canvas.height=700;
var img_player = document.createElement("img");
img_player.src = "apple.png";

//Variables
var x =0;
var y=0;
var playerW = 50;
var playerH = 50;
var xSpeed = 0;
var ySpeed = 0;
var gravity=5;

function animate() {
  requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
  if(y<0 || y>canvas.width) {ySpeed = -ySpeed}
  platform();
}
//Movement
function setDirection(dir) {
  if(dir =="jump" && gravity===0) {
    y -= 100;
  }
  if(dir =="right" && x<canvas.width) {
    xSpeed = 5;
    ySpeed = 0;
    img_player.src = "apple.png";
  }
  if(dir =="left" && x>0) {
    xSpeed = -5;
    ySpeed = 0;
    img_player.src = "appleL.png";
  }
  if(dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}
  
var keyActions = {
  32:"jump",
  37:"left",
  38:"up",
  39:"right",
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
/*
function platform() {
  cx.fillStyle = "black";
  cx.fillRect(0,500,100,10);
  if (y==500) {
  gravity = 0;
  }
  else {
    gravity = 5;
     if (y==500-playerW && x<100) {
  gravity = 0;
  } else {gravity=5}
  }
}
*/
var plat=[];
plat.push({x:0,y:500,w:100,h:10});
plat.push({x:100,y:500,w:100,h:10});
plat.push({x:100,y:400,w:100,h:10});
plat.push({x:200,y:300,w:100,h:10});
plat.push({x:300,y:200,w:100,h:10});
plat.push({x:400,y:100,w:100,h:10});
plat.push({x:600,y:300,w:100,h:10});
plat.push({x:900,y:600,w:100,h:10});
plat.push({x:700,y:600,w:100,h:10});
plat.push({x:500,y:600,w:100,h:10});
plat.push({x:0,y:680,w:canvas.width,h:10});

function platform() {
  gravity =5;
  cx.fillStyle="black";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w)
    {gravity=0}

    
  }
}


animate();