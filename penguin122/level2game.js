var canvas=document.getElementById('canvas');
var cx= canvas.getContext('2d');
canvas.width=1500;
canvas.height=900;
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
var mW=80;
var mH=50;
var mXsp=-5;
var mYsp=-10;
var life=5;
var xC=500;
var yC=300;
var wC=40;
var hC=30;
var xbM= 500;
var ybM=0;
var mbW=80;
var mbH=50;
var mbXsp=-10;
var mbYsp=1;
var score=100;
var img_polarbear= document.createElement("img");
var h=0;
img_polarbear.src ="polarbear.png";
var img_fish= document.createElement("img");
img_fish.src="fish2.png";
var img_babybear= document.createElement("img");
img_babybear.src="polarbaby.png";
var coin_sound=new Audio ('coinsound.wav');
var level_up= new Audio ('levelup.wav');
var win= new Audio ('win.wav')
function animate() {
    req =requestAnimationFrame(animate);
    cx.clearRect(0,0,canvas.width, canvas.height);
    cx.drawImage(img_player,x,y,playerw,playerh);
    x+=xspeed;
    y+=yspeed + gravity;
  if(x<0 || x>canvas.width-50) {xspeed=-xspeed}
  if (y>canvas.height-playerh) {life-=1;
  x=0;
  y=0;
  if(life===0) {gameover()}}
  platform();
  obstacle();
  lifeleft();
  monster();
  coins();
  score_display();
  winGame();
  babymonster();
}




  
function setDirection(dir){
if(dir=="jump" && y>0){
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
if(dir=="right" && x<1500){
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
plat.push({x:100,y:795,w:800,h:20});
plat.push({x:1300,y:700,w:200,h:10});
plat.push({x:1200,y:400,w:150,h:10});
plat.push({x:650,y:300,w:300,h:10});
plat.push({x:650,y:300,w:200,h:10});

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


function coins() {
  console.log(xC,yC);
  cx.drawImage(img_fish,xC, yC, wC, hC);
  if(x+playerw> xC && xC+wC>x && yC+hC > y&& y+playerh> yC)
  {coin_sound.play();
    score+=10;
    xC = (Math.random()*(canvas.width-100))+10;
    yC= (Math.random()*(canvas.height-200))+10;
  }}

function score_display(){
  cx.fillStyle="orange";
  cx.font="40px Comic Sans MS"
  cx.fillText("Score: "+score,800, 100)
}

function babymonster() {
  cx.drawImage(img_babybear,xbM, ybM, mbW, mbH);
  xbM+= mbXsp;
  ybM+= mbYsp;
  if(x+playerw> xbM && xbM+mbW>x && ybM+mbH > y&& y+playerh> ybM)
  {life-=1;
    x=5;
    y=5;
  }
  else if ( xbM < 0 || xbM> canvas.width ) {
    mbXsp= -mbXsp;
  }
  else if ( ybM<0 || ybM> canvas.height)
  {mbYsp= -mbYsp;
    
  }

  if (life===0) {gameover();}
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
  for (var i =0 ; i<lava.length;i++){
    cx. fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    lava[0].y -=1; lava[0].h+=1;
     if(lava[0].y<500){
      lava[0].y =canvas.height-80;
      lava[0].h = 160;
    }
    if (y==lava[i].y-playerh&&
    x>lava[i].x-playerw &&
    x<lava[i].x+lava[i].w)
    {life-=1;
    x=5;
    y=5;
    level_up.play();
    if(life===0) {gameover()}
    }
    
  }
}

var lava=[];
lava.push({x:0,y:canvas.height-80,w:1600,h:160});


function lifeleft(){
  cx.fillStyle= "green";
  cx.font= "30px Impact";
  cx.fillText("Lives: "+life,100,50);
}

function gameover() {
  cx.fillStyle="orange";
  cx.font ="100px Syncopate";
  cx.fillText("Game Over",500,200);
  stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req =undefined;
  }
}

  

function winGame() {
  if(score==200)
  {win.play();
  cx.fillStyle="orange";
  cx.font ="100px Syncopate";
  cx.fillText("You WON!!!",500,200);
  stop();
    
  }
}

animate();

