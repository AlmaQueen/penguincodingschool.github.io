var canvas =document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1900;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src="http://icons.iconarchive.com/icons/martin-berube/animal/256/turtle-icon.png";

var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerH = 25;
var playerW = 25;
var req;
var coinsound = new Audio('http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav')


function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerW,playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  monster2();
  scoreDisplay();
  coin();
  coin2();
  if (score===100) {gameWin()}

  if (x>canvas.width||x<0) {xSpeed=-xSpeed}
  if (y>canvas.height||y<0) {ySpeed=-ySpeed}
  if (x>canvas.width) {
    gameWin();}
}

function setDirection(dir) {
  if(dir=="up") {
    xSpeed = 0;
    ySpeed = -5;
  } else if (dir=="down") {
    xSpeed = 0;
    ySpeed = 5;
  } else if (dir=="left") {
    xSpeed = -5;
    ySpeed = 0;
  } else if (dir=="right") {
    xSpeed = 5;
    ySpeed = 0;
  } else if (dir=="stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir =="jump" ) {
    ySpeed = -15;
  }
}

function stop() {
  if(req) {
     cancelAnimationFrame(req);
     req = undefined;
  }}

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",10,50)
  stop();
}

function scoreDisplay() {
  cx.fillStyle = "Magenta";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Score: "+score,10,90)
}
function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("You Won!",10,50);
  stop();
}

var keyActions = {
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down"
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});


var plat=[]

plat.push({x: 0, y: 500, w:100, h:10});
plat.push({x: 200, y: 460, w:100, h:10});
plat.push({x: 400, y: 420, w:100, h:10});
plat.push({x: 600, y: 380, w:100, h:10});
plat.push({x: 800, y: 340, w:100, h:10});
plat.push({x: 1000, y: 340, w:100, h:10});
plat.push({x: 1200, y: 380, w:100, h:10});
plat.push({x: 1400, y: 420, w:100, h:10});
plat.push({x: 1600, y: 460, w:100, h:10});
plat.push({x: 1800, y: 500, w:100, h:10});
plat.push({x: 0, y:750, w:canvas.width, h:10});


function platform() {
gravity =5;
cx.fillStyle="magenta";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
      x>=plat[i].x-playerW &&
      x<=plat[i].x + plat[i].w)
     {gravity=0}
  else if (y==plat[9].y-playerH &&
      x>=plat[9].x-playerW &&
      x<=plat[9].x + plat[i].w)
     {gravity=-100}
  else {}
}
}




function obstacle() {
cx.fillStyle="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH &&
      x>=lava[i].x-playerW &&
      x<=lava[i].x + lava[i].w)
     {gameOver()}
}
}

var lava=[]

lava.push({x: 0, y: 600, w:canvas.width, h:10});
lava.push({x: 100, y: 480, w:100, h:10});
lava.push({x: 300, y: 440, w:100, h:10});
lava.push({x: 500, y: 400, w:100, h:10});
lava.push({x: 700, y: 360, w:100, h:10});
lava.push({x: 900, y: 320, w:100, h:10});
lava.push({x: 1100, y: 360, w:100, h:10});
lava.push({x: 1300, y: 400, w:100, h:10});
lava.push({x: 1500, y: 440, w:100, h:10});
lava.push({x: 1700, y: 480, w:100, h:10});

var xM = 0;
var yM = 500;
var xMsp = -10;
var yMsp = -20;

var mW = 50;
var mH = 50;

function monster() {
  cx.fillStyle = "orange"
  cx.fillRect(xM,yM,mW,mH);
  yM+=yMsp
  xM+=xMsp
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameOver()}
  if (xM<0 || xM>canvas.width) {
     xMsp = -xMsp;
  }
  if (yM<0 || yM>canvas.height) {
    yMsp = -yMsp
  }
}

var xM2 = 0;
var yM2 = 500;
var xM2sp = -20;
var yM2sp = -10;

var mW2 = 50;
var mH2 = 50;

function monster2() {
  cx.fillStyle = "orange"
  cx.fillRect(xM2,yM2,mW2,mH2);
  yM2+=yM2sp
  xM2+=xM2sp
  if (x+playerW > xM2 && xM2+mW2 >x && yM2+mH2>y && y+playerH>yM2)
  {gameOver()}
  if (xM2<0 || xM2>canvas.width) {
     xM2sp = -xM2sp;
  }
  if (yM2<0 || yM2>canvas.height) {
    yM2sp = -yM2sp
  }
}

var xC = 500;
var yC = 300;
var wC = 20;
var hC = 20;
var score=0;

function coin() {
  cx.fillStyle = "aqua"
  cx.fillRect(xC,yC,wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
  { coinsound.play();
    score += 10;
    xC =Math.random()*canvas.width;
    yC =Math.random()*canvas.height;
  }
}
var xC2 = 1380;
var yC2 = 300;
var wC2 = 20;
var hC2 = 20;
var score=0;

function coin2() {
  cx.fillStyle = "aqua"
  cx.fillRect(xC2,yC2,wC2, hC2);
  if (x+playerW > xC2 && xC2+wC2 >x && yC2+hC2>y && y+playerH>yC2)
  { coinsound.play();
    score += 10;
    xC2 =Math.random()*canvas.width;
    yC2 =Math.random()*canvas.height;
  }
}

var backgroundmusic = new Audio('http://themushroomkingdom.net/sounds/mp3/yarblat_smb_techno.mp3')
backgroundmusic.loop = true;
backgroundmusic.play();
animate();