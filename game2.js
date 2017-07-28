
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
 poacher();
 coin();
scoreDisplay();
winGame();
platform2();
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

lava.push({x:0, y:canvas.height-50, w:canvas.width, h:75});
lava.push({x:500, y:200, w:50, h:10});

function obstacle() {
    for (var i=0; i<lava.length; i++) {
    cx.drawImage(img_lava,lava[i].x,lava[i].y,lava[i].w,lava[i].h);
    if (y==lava[i].y-playerh &&
    x>=lava[i].x-playerw &&
    x<lava[i].x+lava[i].w)
    {console.log("die");life-=1; score-=20;
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
img_monster.src = "http://udf.by/images/usa2016/trump2.png";


var monster = [];
monster.push({x:500, y:100, w:100, h:100, xMsp:5, yMsp:10})
monster.push({x:100, y:100, w:100, h:100, xMsp:15, yMsp:10})

function poacher () {
for (var z=0; z<monster.length; z++) {
    cx.drawImage
    (img_monster, monster[z].x, monster[z].y, monster[z].w, monster[z].h);
    monster[z].x+=monster[z].xMsp;
    monster[z].y+=monster[z].yMsp;
    if (y==monster[z].y-playerh &&
    x>=monster[z].x-playerw &&
    x<monster[z].x+monster[z].w)
    {life-=1;
      x=0;
      y=0;
    }
    
  if (monster[z].x<0 || monster[z].x>canvas.width-monster[z].w) {
    monster[z].xMsp = -monster[z].xMsp;
   // xMsp = Math.ceil(Math.random()*10);
  } if(monster[z].y<0 || monster[z].y>canvas.height-monster[z].h) {
    monster[z].yMsp = -monster[z].yMsp;
  }
}
}

var xC = 80;
var xC = 80;
var yC = 450;
var wC = 60;
var hC = 60;
var score = 0;
var ww =0;
var img_coin = document.createElement("img");
img_coin.src = "http://images.clipartpanda.com/bamboo-clipart-plants_bamboo-999px.png";

function coin() {
  cx.drawImage(img_coin, xC, yC, wC, hC);
  if (x+playerw>xC && xC+wC>x && yC+hC>y && y+playerh>yC)
  
  {score+=10; ww++;
  var xCC = Math.random()*canvas.width;
var yCC = Math.random()*canvas.height;


for(var i = 0; i<lava.length; i++) {
  if(xCC < lava[i].x+lava[i].w && xCC >= lava[i].x && yCC > lava[i].y && yCC < lava[i].y+lava[i].h) {xC=xCC+100; yC=yCC+100}
  else {
    xC = xCC;
    yC = yCC;
  }
}

}

}

function scoreDisplay(){
  cx.fillStyle="pink";
    cx.font="40px Comic Sans MS";
  cx.fillText("Score: "+score, 300, 50);
}




function winGame () {
  if (score==200)
  {cx.fillStyle="pink";
    cx.font="40px Comic Sans MS";
  cx.fillText("You Won!!!", 700, 500);
  window.location="game2.html";
}
}



function platform2() {

for (var i=0; i<plat.length; i++){
  if (x+playerw>plat[i].x && plat[i].x+plat[i].w>x && plat[i].y+plat[i].h>y && y+playerh>plat[i].y)
  {
    ySpeed = -ySpeed;
    xSpeed =-xSpeed;
    
  }
}
}



animate();
