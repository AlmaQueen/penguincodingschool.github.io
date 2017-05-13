var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=2000;
canvas.height=850;

var img_player = document.createElement("img");
img_player.src="http://vignette1.wikia.nocookie.net/supre-smesh-bras/images/4/43/Ssbsanic.png/revision/latest?cb=20150501065043";
var playerW = 70;
var playerH = 90;

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var plat=[];
var img_lava = document.createElement("img");
img_lava.src="http://img00.deviantart.net/fe4a/i/2014/059/8/0/sre_design_texture_test_lava_floor_test_1_by_wakaflockaflame1-d78e6wm.png";
var req;

plat.push({x: 0, y:100 , w:100, h:10});
plat.push({x: 200, y: 80, w:100, h:10});
plat.push({x: 400, y: 60, w:100, h:10});
plat.push({x: 600, y: 200, w:100, h:10});
plat.push({x: 0, y:770, w:canvas.width, h:10});

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height) ;
  cx.drawImage(img_player, x,y, playerW,playerH);
   x+=xSpeed;
   y+=ySpeed+gravity;
   platform();
   obstacle();
if (x>canvas.width || x<0) {
  xSpeed = -xSpeed;}
if (y>canvas.width || y<0) {
  ySpeed = -ySpeed}
  if (x>1900)  {
  gameWin();

}
}



function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}


function platform() {
  gravity = 5;
  cx.fillStyle = "grey";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect (plat[i].x,plat[i].y,plat[i].w,plat[i].h);
    if (y===plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x + plat[i].w)
    {gravity=0}
  }
  }
  
var lava = [];
lava.push ({x:0, y:600, w:1000, h:100});



function obstacle() {

for (var i = 0; i<lava.length; i++)  {
 cx.drawImage(img_lava,lava[i].x, lava[i].y, lava[i].w,lava[i].h);
 // cx.fillRect(lava[i].x, lava[i].y, lava[i].w,lava[i].h);
  if (y==lava[i].y-playerH &&
      x>=lava[i].x-playerW &&
      x<=lava[i].x + lava[i].w)
      {gameOver()}
}
}

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "75px Cracked";
  cx.fillText("You're a Noob!",850,100);
  stop();
  }

function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "75px Cracked";
  cx.fillText("You're Not a noob!",850,100);
  stop();
  }

function setDirection(dir) {
 
   if (dir === "left") {
    xSpeed = -5;
    ySpeed = 0;
  } else if (dir === "right") {
    xSpeed = 5;
    ySpeed = 0;
  } else if (dir === "stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir === "jump" && gravity===0) {
    y = y-80;
  }
       
}

var keyActions = {
  32: "jump",
  37: "left",
  39: "right",
  
};

document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

animate();