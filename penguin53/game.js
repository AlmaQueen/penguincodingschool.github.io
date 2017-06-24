var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "https://builtvisible.com/wp-content/uploads/2015/03/mario-big.png";

var x = 300;
var y = 750;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerH = 50;
var playerW = 50;
var plat=[];
var req;

plat.push({x:175, y:50, w:100, h:10});
plat.push({x:250, y:150, w:100, h:10});
plat.push({x:350, y:250, w:100, h:10});
plat.push({x:500, y:350, w:100, h:10});
plat.push({x:0, y:850, w:999, h:10});
plat.push({x:300, y:750, w:105, h:10});
plat.push({x:500, y:700, w:105, h:10});
plat.push({x:500, y:600, w:105, h:10});
plat.push({x:700, y:550, w:100, h:10});
plat.push({x:600, y:450, w:100, h:10});

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y, playerW, playerH);
   x+=xSpeed;
   y+=ySpeed+gravity;
   lH += 10;
   platform();
   obstacle();
   monster();
   coin();
   monster2();
   scoreDisplay();
   lavafall();
   if (x>canvas.width||x<0) {xSpeed=-xSpeed}
   if (y>canvas.height || y<0) {ySpeed = -ySpeed}
   if (y<0 && score>=100) {gameWin();}
}


function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
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
  } else if (dir === "jump" && gravity ===0) {
    xSpeed = 0;
    ySpeed = -15;
}
}

var losesound= new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_mariodie.wav');

function gameOver() {
  losesound.play();
  cx.fillStyle = "Red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over:(:(:(",400,150);
  stop();
}

function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("You Won!:):):)",400,150);
  stop();
}
var keyActions = {
  65: "left",
  87: "jump",
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

function platform() {
  gravity=5;
  cx.fillStyle="green";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>=plat[i].x-playerW &&
    x<=plat[i].x + plat[i].w)
    {gravity=0}
    else {}
  }
}

var lava = [];
lava.push ({x:0, y:250, w:100, h:10});
lava.push ({x:300, y:50, w:150, h:10});
lava.push ({x:250, y:450, w:250, h:10});
lava.push ({x:700, y:650, w:100, h:10});

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

var yL = 0;
//var xL = 0;
var yLsp = 6;
var lW = 70;
var lH = 10;
var xL = Math.ceil(Math.random()*(canvas.width-lW));

function lavafall() {
  cx.fillStyle="red";
  cx.fillRect(xL,yL,lW,lH);
  //if (y<yL+lH && x>xL && xL+lW>x+playerW) {
  if (y<yL+lH && x+playerW>xL && xL+lW>x){
    gameOver();
  }
  if (lH==850) {
    lH=0;
    xL = Math.ceil(Math.random()*(canvas.width-lW));
  }
}

var xM = 800;
var yM = 650;
var yMsp = 3;
var xMsp = -5;

var mW =30;
var mH =30;

var img_monster = document.createElement("img");
img_monster.src = "https://vignette2.wikia.nocookie.net/fantendo/images/5/54/BooNSMBWii.png/revision/latest?cb=20120922005024"

function monster() {
  cx.drawImage(img_monster, xM,yM, mW, mH);
  xM += xMsp;
  yM += yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH > y && y+playerH > yM) {
    gameOver ();
  } else if (xM<0 || xM>canvas.width) {
    xMsp = -xMsp;
  } else if (yM<0 || yM>850) {
    yMsp = -yMsp
  }
}

var xM2 = 500;
var yM2 = 550;
var yMsp2 = 4;
var xMsp2 = -4;

var mW2 =30;
var mH2 =30;

function monster2() {
  cx.drawImage(img_monster, xM2,yM2, mW2, mH2);
  xM2 += xMsp2;
  yM2 += yMsp2;
  if (x+playerW > xM2 && xM2+mW2 >x && yM2+mH2 > y && y+playerH > yM2) {
    gameOver ();
  } else if (xM2<0 || xM2>canvas.width) {
    xMsp2 = -xMsp2;
  } else if (yM2<0 || yM2>850) {
    yMsp2 = -yMsp2
  }
}

var img_coin = document.createElement("img");
img_coin.src = "https://s-media-cache-ak0.pinimg.com/originals/d3/5c/ae/d35cae18fdc0463f065f9df49374239a.png";

var xC = 300;
var yC = 750;
var wC = 30;
var hC = 30;
var score = 0;

var coinsound = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav');

var bkgdsound = new Audio('super_mario_medley.mp3')
bkgdsound.loop = true;
bkgdsound.play()

function coin() {
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
  {
    coinsound.play();
    score += 10;
    var i = Math.ceil(Math.random()*plat.length);
    xC = plat[i].x;
    yC = plat[i].y-40;
  }
}

function scoreDisplay(){
  cx.fillStyle="green";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Score: "+score, 400,100);
  
}


animate();