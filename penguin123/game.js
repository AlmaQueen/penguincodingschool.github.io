
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 900;

var img_player = document.createElement("img");
img_player.src = "Player.png";

var x = 0;
var y = 0;
var playerw = 50;
var playerh = 50;
var xSpeed = 0;
var ySpeed = 0;
var gravity=5;
var life=10;
var xM = 800;
var yM = 180
var xMsp = 10;
var yMsp = 10;
var mW = 100;
var mH = 100;

function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerw,playerh);
  x+=xSpeed;
  y+=ySpeed+gravity;
  
  if (x<0 || x>canvas.width) {xSpeed = -xSpeed} //The equal sign means that you are assigning one value to another...
  if (y<0 || y>canvas.height) {ySpeed = -ySpeed}
 platform();
 obstacle();
 lifeleft();
 monster();
 coin();
scoreDisplay();
 }

function setDirection(dir) {
 if(dir =="jump" && y>0){
  xSpeed = 0;
  y-=200;
}
  if(dir =="down"){
  xSpeed = 0;
  ySpeed = 5;
}
  if(dir =="right"){
  xSpeed = 5;
  ySpeed = 0;
}
  if(dir =="left" && x>0){
  xSpeed = -5;
  ySpeed = 0;
}
if(dir =="stop"){
  xSpeed = 0;
  ySpeed = 0;
}
}


var keyActions= {
  32:"jump",
  37:"left",
  //38:"up",
  39:"right",
  //40:"down"
};

document.addEventListener('keydown',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});


var plat=[];
plat.push({x:0, y:500, w:100, h:10});
plat.push({x:300, y:400, w:100, h:10});
plat.push({x:300, y:100, w:100, h:10});
plat.push({x:500, y:200, w:100, h:10});
plat.push({x:600, y:500, w:100, h:10});
plat.push({x:800, y:200, w:100, h:10});
plat.push({x:900, y:700, w:100, h:10});
plat.push({x:970, y:300, w:100, h:10});
plat.push({x:490, y:700, w:100, h:10});
plat.push({x:170, y:200, w:100, h:10});
plat.push({x:200, y:650, w:100, h:10});
plat.push({x:750, y:300, w:100, h:10});
plat.push({x:500, y:700, w:100, h:10});
plat.push({x:190, y:300, w:100, h:10});
plat.push({x:900, y:60, w:100, h:10});
plat.push({x:970, y:400, w:100, h:10});
plat.push({x:490, y:700, w:100, h:10});
plat.push({x:0, y:650, w:100, h:10});


function platform() {
  gravity=5;
  cx.fillStyle="#48F315";
  
  for (var i=0; i<plat.length; i++) {
    cx.fillRect
    (plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerh &&
    x>=plat[i].x-playerw &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
    
  }
}
 function platform2() {
   
    if(x+playerw>plat[i].x &&
  x<plat[i].x+plat[i].w &&
  y<=plat[i].y+plat[i].h &&
  y>plat[i].y)
  {ySpeed=-ySpeed}

}

var lava=[];
var img_lava = document.createElement("img");
img_lava.src = "https://images.pond5.com/lava-background-1080p-footage-000097699_prevstill.jpeg";

lava.push({x:0, y:canvas.height-50, w:canvas.width, h:75})

function obstacle() {
    for (var i=0; i<lava.length; i++) {
    cx.drawImage(img_lava,lava[i].x,lava[i].y,lava[i].w,lava[i].h);
    if (y==lava[i].y-playerh &&
    x>=lava[i].x-playerw &&
    x<lava[i].x+lava[i].w)
    {console.log("die");life-=1;
    x=0;
    y=0;
    if(life===0){gameover()}
    }
  }
}
function lifeleft (){
  cx.fillStyle="turquoise";
  cx.font="40px Comic Sans MS";
  cx.fillText("Lives Left:" +life, 30, 50);
  }
  
function gameover (){
  cx.fillStyle="red";
  cx.font="100px Comic Sans MS";
  cx.fillText("GameOver", 500, 350);
  stop();
  }
  
  function stop (){
    if (req){
      cancelAnimationFrame(req);
      req=undefined
    }
}
  
var img_monster = document.createElement("img");
img_monster.src = "http://tf2classic.com/wiki/images/thumb/2/2f/PoacherPride3rdperson.png/120px-PoacherPride3rdperson.png";

function monster () {
  cx.drawImage(img_monster, xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerw>xM && xM+mW>x && yM+mH>y && y+playerh>yM)
  {life -=1;
  x=0; y=0;
    if(life===0){gameover()}
  }
  if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  } if(yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
  }
  
}


var xC = 80;
var yC = 450;
var wC = 60;
var hC = 60;
var score = 0;
var img_coin = document.createElement("img");
img_coin.src = "http://www.pngmart.com/files/3/Lakshmi-Gold-Coin-PNG-File.png";

function coin() {
  cx.drawImage(img_coin, xC, yC, wC, hC);
  if (x+playerw>xC && xC+wC>x && yC+hC>y && y+playerh>yC)
  
  {score+=10;
  var i = Math.floor(Math.random()*plat.length);
  xC = plat[i].x;
  yC = plat[i].y-50;
}

}

function scoreDisplay(){
  cx.fillStyle="pink";
    cx.font="40px Comic Sans MS";
  cx.fillText("Score: "+score, 300, 50);
}

/*
var xCC = Math.random()*canvas.width;
var yCC = Math.random()*canvas.height;

for(var i = 0; i<lava.length; i++) {
  if(xCC < lava[i].x+lava[i].w && xCC >= lava[i].x && yCC > lava[i].y && yCC < lava[i].y+lava[i].h) {xC=xCC+100; yC=yCC+100}
  else {
    xC = xCC;
    yC = yCC;
  }
}

*/

animate();