var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement('img');
img_player.src = "luigi.png";

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;
var req;
var xMonster = 0;
var yMonster = 570;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 10;
var monsterH = 10;
var xC = 500 ;
var yC = 180;
var wC = 20;
var hC = 20;
var score = 0;
var audio = new Audio ('audio_file.wav');
var coinsound = new Audio ('coinsound.wav');
var backgroundmusic = new Audio ('backgroundmusic.mp3');
var death = new Audio ('Death.wav');

backgroundmusic.loop = true;

function animate() {
  req = requestAnimationFrame (animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player, x, y, playerW, playerH);
  platform();
  obstacle();
  monster();
  coin();
  scoreDisplay();
    if  (score === 10) {gameWin()}
  x+=xSpeed;
  y+=ySpeed+gravity;
  if (x>canvas.width || x<0) {xSpeed=-xSpeed}
  if (y>canvas.height || y<0) {ySpeed=-ySpeed}
if  (x>800) {
  gameWin();
}
}

function setDirection (dir) {
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
  } else if (dir === "jump" && gravity===0)  {
    ySpeed = ySpeed-10;
  }
}

var lava = [];
lava.push({x:0, y:630, w:1000, h:90});
lava.push({x:300, y:260, w:1000, h:70});
lava.push({x:0, y:260, w:230, h:100});

function obstacle ()  {
  cx.fillStyle = "Red";
  for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y===lava[i].y-playerH &&
  x>lava[i].x-playerW &&
  x<lava[i].x + lava[i].w)
  {gameOver()}
  
}
}

function monster()  {
  cx.fillStyle = "blue";
  cx.fillRect (xMonster, yMonster, monsterW, monsterH);
  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if (x+playerW > xMonster && xMonster + monsterW > x && yMonster + monsterH > y && y + playerH > yMonster)  {
      gameOver();
  } else if (xMonster < 0)  {
    xMonsterSpeed = -xMonsterSpeed;
  }
    else if (xMonster > 999) {
    xMonsterSpeed = -xMonsterSpeed;
    }
}

function gameOver() {
  cx.fillStyle = "red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over", 500, 150);
  death.play();
  backgroundmusic.pause();
  stop();
}

function stop() {
  if (req) {
    cancelAnimationFrame (req);
    req = undefined;
  }
}

function coin() {
  cx.fillStyle = "gold";
  cx.fillRect (xC, yC, wC, hC);
  if (x + playerW > xC && xC + wC > x && yC + hC > y && y + playerH > yC)
  { coinsound.play();
  score += 10;
  var i = Math.ceil(Math.random()*plat.length)
  xC = plat[i].x + (0.5*plat[i].w);
  yC = plat[i].y-40;
  }
}

function scoreDisplay() {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText ("score: " +score, 500, 100);
}

function gameWin()  {
  cx.fillStyle = "Green";
  cx.font = "30px Comic Sans MS";
  cx.fillText ("YOU WON!",500, 50);
  backgroundmusic.pause();
  stop();
}

var keyActions = {
  
  32: "jump",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  
};

document.addEventListener ('keydown',function(event)  {
  var dir = keyActions [event.keyCode];
  setDirection(dir);
});

document.addEventListener ('keyup',function(event)  {
  var dir = keyActions [event.keyCode];
  setDirection("stop");
});

function platform() {
  gravity = 5;
  cx.fillStyle = "#ff02dd";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y == plat[i].y-playerH && x>plat[i].x-playerW && x<plat[i].x + plat[i].w) {
       gravity = 0;
    }
  }
}

var plat = [];
plat.push ({x:0, y:200, w:100, h: 10});
plat.push ({x:130, y:200, w:100, h: 10});
plat.push ({x:330, y:200, w:100, h: 10});
plat.push ({x:490, y:200, w:50, h: 10});
plat.push ({x:600, y:200, w:100, h: 10});
plat.push ({x:800, y:200, w:100, h: 10});
plat.push ({x:200, y:400, w:200, h: 10});
plat.push ({x:450, y:400, w:400, h: 10});
plat.push ({x:0, y:600, w:100, h: 10});
plat.push ({x:200, y:600, w:100, h: 10});
plat.push ({x:390, y:600, w:100, h: 10});
plat.push ({x:600, y:600, w:100, h: 10});
plat.push ({x:800, y:600, w:100, h: 10});

backgroundmusic.play();
animate();