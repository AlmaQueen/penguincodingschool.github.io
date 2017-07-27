var canvas=document.getElementById('canvas');
var cx= canvas.getContext('2d');
canvas.width=1000;
canvas.height=700;

var img_player= document.createElement('img');
img_player.src='penguin.png';

var x=5;
var y=5;
var playerw=60;
var playerh=60;
var xspeed=0;
var yspeed=0;
var gravity = 5;
var dlava = 5;
var xM= 500;
var yM=0;
var mW=70;
var mH=50;
var mXsp=-5;
var mYsp=-5;
var life=5;
var img_polarbear= document.createElement("img");
img_polarbear.src ="polarbear.png"

function animate() {
    req =requestAnimationFrame(animate);
    cx.clearRect(0,0,canvas.width, canvas.height);
    cx.drawImage(img_player,x,y,playerw,playerh);
    x+=xspeed;
    y+=yspeed + gravity;
  if(x<0 || x>canvas.width-100) {xspeed=-xspeed}
  if (y>canvas.height-playerh) {life-=1;
  x=0;
  y=0;
  if(life===0) {gameover()}}
  platform();
  obstacle();
  lifeleft();
  monster();
}
function setDirection(dir){
  if(dir=="jump" && gravity===0){
      y-=250;
  }
if(dir=="down" && y<520){
      xspeed=0;
      yspeed=5;
}
if(dir=="left" && x>0){
      xspeed=-5;
      yspeed=0;
}
if(dir=="stop"){
  xspeed=0;
  yspeed=0;
}
if(dir=="right" && x<1000){
      xspeed=5;
      yspeed=0;
}
}

var keyActions ={
    32:"jump",
    39:"right",
    37:"left",
    40:"down",
    38:"jump"
    };

document.addEventListener('keydown', function(event){

  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup', function(event){

  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

function platform(){
  cx.fillStyle="blue";
  cx.fillRect(20,500,100,10);
  if(y==500-playerh && x<100 && x> 20- playerw)
    {gravity=0}
   else {gravity= 5}
}

var plat=[];
plat.push({x:0,y:500,w:200,h:10});
plat.push({x:75,y:200,w:150,h:10});
plat.push({x:450,y:570,w:50,h:10});
plat.push({x:200,y:400,w:130,h:10});
plat.push({x:504,y:50,w:100,h:10});
plat.push({x:800,y:200,w:100,h:10});
plat.push({x:650,y:500,w:100,h:10});
plat.push({x:500,y:400,w:100,h:10});
plat.push({x:200,y:600,w:100,h:10});
plat.push({x:100,y:600,w:1000,h:20});
plat.push({x:650,y:300,w:100,h:10});

function platform() {
  gravity=5;
  cx.fillStyle="white";
  for ( var i =0 ; i<plat.length;i++){
    cx. fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerh&&
    x>plat[i].x-playerw &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
  }
}


function monster() {
  cx.drawImage(img_polarbear,xM, yM, mW, mH);
  xM+= mXsp;
  yM+= mYsp;
  if(x+playerw> xM && xM+mW>x && yM+mH > y&& y+playerh> yM)
  {life-=1;
    x=5;
    y=5;
  }
  else if ( xM < 0 || xM> canvas.width ) {
    mXsp= -mXsp;
  }
  else if ( yM<0 || yM> canvas.height)
  {mYsp= -mYsp;
    
  }

  if (life===0) {gameover();}
}


function obstacle() {
  cx.fillStyle="red";
  for ( var i =0 ; i<lava.length;i++){
    cx. fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y-playerh&&
    x>lava[i].x-playerw &&
    x<lava[i].x+lava[i].w)
    {life-=1;
    x=5;
    y=5;
    if(life===0) {gameover()}
    }
  }



}

function lifeleft(){
  cx.fillStyle= "green";
  cx.font= "30px Impact";
  cx.fillText("Lives: "+life,100,50);
}

function gameover() {
  cx.fillStyle="orange";
  cx.font ="50px Impact";
  cx.fillText("Game Over",500,50);
  stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req =undefined;
  }
}

var lava=[];
lava.push({x:0,y:canvas.height-80,w:1000,h:160});

/*function rise() {
  lava[0].y-=1;
}
*/



animate();

