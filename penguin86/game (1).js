var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=800;

var img_player = document.createElement("img");
img_player.src = "https://image.flaticon.com/icons/png/128/107/107071.png";

var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var playerH = 35;
var playerW = 30;
var plat=[];

plat.push({x: 0, y:100, w:100, h:10});
plat.push({x: 100, y: 80, w:100, h:10});
plat.push({x: 0, y:300, w:100, h:10});
plat.push({x: 400, y:500, w:100, h:10});
plat.push({x: 200, y:400, w:100, h:10});
plat.push({x: 750, y:300, w:100, h:10});
plat.push({x: 500, y:300, w:100, h:10});
plat.push({x: 750, y:400, w:250, h:10});
plat.push({x: 550, y:500, w:30, h:10});
plat.push({x: 650, y:450, w:30, h:10});
plat.push({x: 600, y:450, w:30, h:10});
plat.push({x: 300, y:100, w:100, h:10});
plat.push({x: 675, y:250, w:15, h:80});

var lava=[];

lava.push({x: 0,y: 700, w:canvas.width, h: 300});
lava.push({x: 100,y: 500, w: 100, h: 100});
lava.push({x: 300,y: 300, w: 100, h: 10});
lava.push({x: 700,y:400 , w: 30, h: 15});
lava.push({x: 150,y:150 , w: 100, h: 10});
lava.push({x: 600,y:150 , w: 100, h: 10});
lava.push({x: 850,y:400 , w: 100, h: 10});
lava.push({x: 450,y:200 , w: 40, h: 10});

var req;
function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xspeed;
  y+=(yspeed+gravity);
  platform();
  obstacle();
  monster();
  coin();
  monster2();
  scoreDisplay();
  
  if (x>canvas.width|| x<0) {xspeed= -xspeed}
  if (y>canvas.width|| y<0) {yspeed= -yspeed}
  if (x>800) {
  gameWin();
}

}
  
  function setDirection(dir) {
    if (dir=="up") {
      xspeed = 0;
      yspeed = -15;
      }else if (dir=="right") {
      xspeed = 5;
      yspeed = 0;
      }else if (dir=="left") {
      xspeed = -5;
      yspeed = 0;
      }else if (dir=="stop") {
      xspeed = 0;
      yspeed = 0;
      }else if (dir=="down") {
      xspeed = 0;
      yspeed = 15;
     } else if (dir === "jump") {
        y = y-50;
      }
      
    
  }


var keyActions = {
  32: "jump",
  38: "up",
  39: "right",
  37: "left",
  40: "down"
};

document.addEventListener("keydown", function(event) {
  var dir = keyActions[event.keyCode];
setDirection(dir);
});
document.addEventListener("keyup", function(event) {
  var dir = keyActions[event.keyCode];
setDirection("stop");
});

function platform(){
gravity =5;
cx.fillStyle ="blue";
for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
  x>=plat[i].x-playerW &&
  x<plat[i].x + plat[i].w) {gravity=0;}
}
}

function obstacle(){
cx.fillStyle ="red";
for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
//  if (y==100) {gravity = 0}
  if (y==lava[i].y-playerH &&
  x>=lava[i].x-playerW &&
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
  cx.fillstyle = "Red";
  cx.font = "100px Comic Sans MS";
  cx.fillText("You died!",300,300);
  stop();
}

function gameWin() {
  cx.fillstyle = "Green";
  cx.font = "100px Comic Sans MS";
  cx.fillText("You Won!",300,300);
  stop();
}

var xM = 500;
var yM = 0;
var xMsp = -5;
var yMsp = 0;

var monsterW = 30;
var monsterH = 30;

var img_monster = document.createElement("img");
img_monster.src = "http://clipartall.com/subimg/clipart-light-bulb-lit-clipartbold-light-bulb-clip-art-2273_2400.png";

function monster(){
  //cx.fillStyle = "Blue"
  //cx.fillRect (xM,yM,monsterW,monsterH);
  cx.drawImage(img_monster,xM, yM, monsterW, monsterH)
  xM += xMsp;
  yM += yMsp;
  if (x+playerW > xM && xM+monsterW > x && yM+monsterH>y && y+playerH>yM) {
    gameOver();
  } else if (xM<0 || xM>canvas.width)
  xMsp = -xMsp;
}

var xM2 = 0;
var yM2 = 300;
var xMsp2 = -5;
var yMsp2 = 0;

var monsterW = 30;
var monsterH = 30;

var img_monster = document.createElement("img");
img_monster.src = "http://clipartall.com/subimg/clipart-light-bulb-lit-clipartbold-light-bulb-clip-art-2273_2400.png";

function monster2(){
  cx.drawImage(img_monster,xM2, yM2, monsterW, monsterH)
  xM2 += xMsp2;
  yM2 += yMsp2;
  if (x+playerW > xM2 && xM2+monsterW > x && yM2+monsterH>y && y+playerH>yM2) {
    gameOver();
  } else if (xM2<0 || xM2>canvas.width)
  xMsp2 = -xMsp2;
}




var xC = 500;
var yC = 300;
var wC = 20;
var hC = 20;

function coin(){
  cx.fillStyle = "Green";
  cx.fillRect (xC,yC,wC,hC);
  if (x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH >yC)
  {
    score += 5;
      var i = Math.ceil(Math.random()*plat.length);
      xC = plat[i].x;
      yC = plat[i].y - 40;
    }
  }
  
  var score = 0;
  
 
  
function scoreDisplay() {
    cx.fillStyle = "Blue";
    cx.font = "30px Comic Sans MS"
    cx.fillText("Score "+score,500,100)
  }
  

var music = new Audio("Tours_-_01_-_Enthusiast.mp3");
music.play();
music.loop = true;


animate()