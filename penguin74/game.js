var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=2000;
canvas.height=850;

var img_player = document.createElement("img");
img_player.src="https://s-media-cache-ak0.pinimg.com/originals/b8/03/be/b803becf10c28afad61b6f3e5a394d5c.jpg";
var playerW = 50;
var playerH = 50;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var plat=[];
var img_lava = document.createElement("img");
img_lava.src="http://img00.deviantart.net/fe4a/i/2014/059/8/0/sre_design_texture_test_lava_floor_test_1_by_wakaflockaflame1-d78e6wm.png";
var req;
var xM = 500;
var yM = 0;
var xMS = -5;
var yMS = 0;
var mW = 50; //monster width
var mH = 50; //monster height
var img_monster = document.createElement("img");
img_monster.src="http://www.clipartbest.com/cliparts/Kij/gjd/Kijgjd5iq.png"

plat.push({x: 0, y:100 , w:110, h:10});
plat.push({x: 200, y: 80, w:110, h:10});
plat.push({x: 400, y: 60, w:110, h:10});
plat.push({x: 600, y: 200, w:10, h:10});
plat.push({x: 0, y:770, w:canvas.width, h:10});

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height) ;
  cx.drawImage(img_player, x,y, playerW,playerH);
   x+=xSpeed;
   y+=ySpeed+gravity;
   platform();
   obstacle();
   monster();
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

function monster() {
  cx.drawImage(img_monster, xM, yM, mW, mH);
  xM += xMS;
  yM += yMS;
  if (x+playerW > xM && xM+mW >x && yM+mH > y && y+playerH > yM)
  {gameOver()}
  else if (xM<0 || xM>700) {
    xMS = -xMS;
  
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
  87: "jump",
  65: "left",
  68: "right",
  
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