var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=700;

var img_player = document.createElement("img");
img_player.src = "gecko.gif";

var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW = 30;
var playerH = 35;
var req;


var plat=[];

plat.push({x: 0, y: 100, w:100, h:10});
plat.push({x: 100, y: 280, w:100, h:10});
plat.push({x: 200, y: 260, w:100, h:10});
plat.push({x: 300, y: 240, w:100, h:10});
plat.push({x: 0, y:350, w:canvas.width, h:10});


function newGame() {
  x = 0;
  y = 0;
  xSpeed = 0;
  ySpeed = 0;
  
  xMonster = 500;
  yMonster = 0;

  xMonsterSpeed = -5;
  yMonsterSpeed = 20;
  
  xC = 500;
  yC = 300;
  score = 0;
  
  animate();
}


function animate() {
req=requestAnimationFrame(animate) ;
cx.clearRect(0,0, canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW,playerH);
x+=xSpeed;
y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  coin();
if (x>canvas.width || x <0) {
xSpeed = -xSpeed;}
if (y>canvas.height || y <0) {
 ySpeed = -ySpeed;}
  
}



function setDirection (dir) {
  if (dir === "up"){
    xSpeed = 0;
    ySpeed = -10;
  } else if (dir === "down") {
    xSpeed = 0;
    ySpeed = 5;

  }else if(dir === "left") {
    xSpeed = -5;
    ySpeed=0;
    
  }else if (dir === "right") {
    xSpeed = 5;
    ySpeed = 0;
  
  }else if (dir ==="stop") {
    xSpeed =0;
    ySpeed =0;
  
  }
}

var keyActions = {
  32 : "stop",
  37 : "left",
  38 : "up",
  39 : "right",
  40 : "down"
};

document.addEventListener('keydown', function(event) {
  var dir  = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup' , function(event) {
  var dir  = keyActions[event.keyCode];
  setDirection("stop");
});

function platform() {
  gravity =5;
  cx.fillStyle="grey";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH && x>=plat[i].x - playerW &&
    x<plat[i].x + plat[i].w)
    {gravity=0}
}
}

var lava=[];

lava.push({x: 0, y: 600, w:canvas.width, h:10}) ;
lava.push({x: 100, y: 100, w:100, h:10});


function obstacle() {
  cx.fillStyle="black";
for (var i = 0; i<lava.length; i++) {
 cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h) ;
 if (y===lava[i].y-playerH &&
     x>lava[i].x-playerW &&
     x<lava[i].x + lava[i].w)
     {gameOver()}
}
 
}

function stop() {
  
  if(req){
    cancelAnimationFrame(req);
    req = undefined;
  }
  
}
  
function gameOver() {
 cx.fillStyle="red";
 cx.font="30px Comic Sans MS";
 cx.fillText("The Geico Gecko Is Disappointed In You",10,50);
 stop();
}

 function gameWin() {
   cx.fillStyle = "green";
 }
 


var xMonster = 500;
var yMonster = 0;

var xMonsterSpeed = -5;
var yMonsterSpeed =20;

var monsterW = 100; //monsterwidth
var monsterH = 100; //monsterheight

var img_monster = document.createElement("img");
img_monster.src = "mrmime.png";


function monster () {
  cx.drawImage(img_monster,xMonster,yMonster,monsterW,monsterH);
  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if (x+playerW > xMonster && xMonster+monsterW >x &&
  yMonster+monsterH > y && y+playerH > yMonster)
  {gameOver();}
  if (xMonster>canvas.width || xMonster <0) {
  xMonsterSpeed = -xMonsterSpeed};
if (yMonster>canvas.height || yMonster <0) {
 yMonsterSpeed = -yMonsterSpeed;}

}
 
 var xC = 500;
 var yC = 300;
 var wC = 20;
 var hC = 20;
 var score = 0;
 
var img_coin = document.createElement("img");
img_coin.src = "copyright.png";

var backgroundmusic = new Audio ('Press Start.mp3');
    
    
function coin () {
    cx.drawImage(img_coin,xC, yC, wC, hC);
      if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
    
      {
        score +=10;
        var i = Math.ceil(Math.random()*plat.length);
      xC = plat[i].x;
      yC = plat[i].y-40;
      }
    }
  
animate();
backgroundmusic.loop = true;
backgroundmusic.play()

function scoreDisplay() {
  cx.fillstyle = "green";
  cx.font = "30px Orbitron";
  cx.fillText("Score: "+score,500,100);
}
