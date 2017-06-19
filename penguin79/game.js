var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=700;
var img_player = document.createElement("img");
img_player.src = "Pokemon2.png";
var x =280;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity =5;
var playerW = 80;
var playerH = 90;
var req;
var xMonster = 1000;
var yMonster = 50;
var xMonsterSpeed = -5;
var yMonsterSpeed = 0;
var monsterW = 30; //monster width
var monsterH = 30; //monster height
var xC = 500;
var yC = 300;
var wC = 20;
var hC = 20;
var score = 0;

function animate()  {
req=requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW,playerH);
platform();
obstacle();
monster();
coin();
scoreDisplay();
x+=xSpeed; y+=ySpeed+gravity;
if (x>canvas.width || x <0){ xSpeed=-xSpeed}
if (y>canvas.height || y<0 ){ySpeed = -ySpeed}
if (score >=50) {gameWin()}
}

function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req=undefined;
  }
}

function setDirection(dir){
  if (dir==="up") {
    xSpeed =0;
    ySpeed = -5;
  }
  else if (dir ==="down"){
  xSpeed = 0;
  ySpeed = 5;
  }
  else if (dir ==="left"){
  xSpeed = -5;
  ySpeed = 0;
  }
  else if (dir ==="right"){
  xSpeed = 5;
  ySpeed = 0;
  }
  else if (dir ==="stop"){
  xSpeed = 0;
  ySpeed = 0;
  }
  else if (dir ==="jump" && gravity===0) {
    y = y-80;
    
  }
}

/*
function obstacle() {
  cx.fillstyle="red";
  cx.fillRect(0,500,canvas.width, canvas.height);
  if(y===500-playerH) {
    gameOver();
  }
}
*/

function gameOver(){
cx.font = 80;
cx.fillText("Game Over",100,300);
stop();
}
function gameWin() {
  cx.fillstyle = "Green";
  cx.font ="30px Comic Sans MS";
  cx.fillText("You Win!",10,50);
  stop();
}

var img_monster = document.createElement("img");
img_monster.src = "plasma.png";

function monster() {
  cx.drawImage(img_monster,xMonster, yMonster, monsterW, monsterH);
  xMonster += xMonsterSpeed;
  yMonster += yMonsterSpeed;
  if (x+playerW>xMonster && xMonster+monsterW>x && yMonster+monsterH>y && y+playerH>yMonster)
  {gameOver();}
    else if (xMonster<0 || xMonster>canvas.width) {
      xMonsterSpeed = -xMonsterSpeed;
    }
  
  
}

var keyActions = {
  32:"jump",
  37:"left",
  39:"right",
  40:"down",
  38:"up",
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
     

document.addEventListener('keyup',function(event){
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

var plat=[];
plat.push({x: 200, y: 100, w:100, h:10 });
plat.push({x: 400, y: 100, w:100, h:10 });
plat.push({x: 600, y: 100, w:100, h:10 });
plat.push({x: 800, y: 100, w:100, h:10 });
plat.push({x: 80, y: 225, w:100, h:10 });
plat.push({x: 80, y: 275, w:100, h:10 });
plat.push({x: 80, y: 175, w:100, h:10 });
plat.push({x: 80, y: 100, w:100, h:10 });
plat.push({x: 0, y: 350, w:canvas.width, h:10 });


function platform() {
gravity = 5;
cx.fillStyle = "black";
for (var i = 0; i<plat.length ; i++) {
cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h );
  if (y===plat[i].y-playerH && x>plat[i].x-playerW && x<plat[i].x+ plat[i].w) {gravity = 0;}
  }
}

var lava=[];
lava.push({x: 250,y: 150,w: canvas.width, h: 10});
lava.push({x: 350,y: 250,w: 150, h: 10});

function obstacle() {
cx.fillStyle = "red";
for (var i = 0; i<lava.length ; i++) {
cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h );
  if (y===lava[i].y-playerH && x>lava[i].x-playerW && x<lava[i].x+ lava[i].w) {gameOver()}
  }
}
function coin() {
  cx.fillStyle="gold";
  cx.fillRect(xC,yC,wC,hC);
  if (x+playerW>xC && xC+wC>x && yC+hC>y && y+playerH>yC){

    score += 10;
    var i = Math.ceil(Math.random()*plat.length);
    xC =plat[i].x;
    yC =plat[i].y-40;
    
  }
}

function scoreDisplay() {
  cx.fillStyle = "purple";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Score: "+score, 400,70);
}

var backgroundmusic = new Audio('fire.mp3')
backgroundmusic.loop = true;
backgroundmusic.play

backgroundmusic.play();
animate();