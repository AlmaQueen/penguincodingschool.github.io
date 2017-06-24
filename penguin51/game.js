var canvas = document.getElementById ("canvas")
var cx = canvas.getContext("2d")

canvas.width=1000;
canvas.height=800;

var img_player = document.createElement("img")
img_player.src = "http://static.tvtropes.org/pmwiki/pub/images/sans_sprite.jpg";

var img_coin =document.createElement("img");
img_coin.src = "hi.png";


var score = 0;

var rek;
var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var playerW = 35;
var playerH = 45;
var plat = [];
var platforms = 5;

plat.push({x: 0, y:100, w:100, h: 10});
plat.push({x: 0, y:100, w:100, h: 10});
plat.push({x: 0, y:100, w:100, h: 10});
plat.push({x: 200, y:200, w:30, h: 30});
plat.push({x: 0, y:100, w:100, h: 10});

function scoreDisplay (){
  cx.fillStyle = "Red"
  cx.font = "30px 'papyrus'"
  cx.fillText("points:  " +score, 650,20);
}

function animate () {
  rek=requestAnimationFrame(animate);
 cx.clearRect(0,0,canvas.width, canvas.height)
 cx.drawImage(img_player, x,y, playerW, playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  //gameover();
  obstacle();
  sampleText();
  coin();
  scoreDisplay();
  
  if (x>canvas.width || x<0) {xspeed = -xspeed}
  if (y>canvas.height || y<0) {yspeed = -yspeed}
}




function setDirection(dir){

if (dir=== "down") {
  xspeed=0;
  yspeed=5;
  
} else if (dir=== "right") {
  xspeed=5;
  yspeed=0;
  
} else if (dir=== "platmake") {
  if (platforms>0)
  plat.push({x: x, y:y+playerH+5, w:50, h: 10});
  platforms --
  
} else if (dir=== "jump" && gravity===0) {
  xspeed=0;
  yspeed=-20;
  }
  
 else if (dir=== "dank") {
 platforms=999999999999;
  }
  
else if (dir=== "left") {
  xspeed=-5;
  yspeed=0;
}
  
 else if (dir=== "stop") {
  xspeed=0;
  yspeed=0;
  }
  
}
function stop () {
  if (rek) {

    cancelAnimationFrame(rek);
    rek = undefined;
  }
}


var keyActions = {
  32:"platmake",
  37:"left",
  38:"jump",
  39:"right",
  40:"down",
  192:"dank"
};



document.addEventListener('keydown', function(event) {
var dir = keyActions[event.keyCode];
setDirection(dir);
});

document.addEventListener('keyup', function(event) {
var dir = keyActions[event.keyCode];
setDirection("stop");
});

/*function platform(){

  cx.fillStyle="blue";
  cx.fillRect(0,500,1000,10);
  if (y==500-playerH && x<1000)
      gravity=0;
  else if (y==500-playerH && x<2000)
  {
    gravity=0;}
      
      else if (y=canvas.height-playerH)
      {gravity = 0;
      }
      
    else{
      gravity=1;
      
    }

}*/
var img_coin =document.createElement("img");
img_coin.src = "hi.png";

var CX =500;
var CH =50;
var CY =500;
var CW =50;

function coin(){
  cx.drawImage(img_coin,CX,CY,CW,CH);
  if(x+playerW>CX && CX+CW >x && CY+CH>y && y+playerH>CY) {
    score +=10;
    platforms +=3
    CY =Math.random()*canvas.height - 20;
    CX =Math.random()*canvas.width;
  }
}



function platform(){
gravity=5;
  cx.fillStyle="blue";
 for (var i=0 ; i<plat.length; i++){
   cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h );
   if(y==plat[i].y-playerH &&
   x>=plat[i].x-playerW &&
   x<=plat[i].x + plat[i].w)
   
   {gravity=0}
   
    else{}
   
 }
  
  

}

function sampleText (){
  if (platforms>0){
  cx.fillText("Platforms left "+ platforms ,650,50)
  cx.font = "22px Papyrus"
  }
  else {
    {gameover()}
    cx.fillText("Platforms left 0" ,650,50)
    
  }
  
  
}

var lava = [];
lava.push({x: 0, y:790, w:1000, h: 10});
function obstacle(){
  cx.fillStyle="red";
 for (var i=0 ; i<lava.length; i++){
   cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
   if(y==lava[i].y-playerH &&
   x>=lava[i].x-playerW &&
   x<=lava[i].x + lava[i].w)
  
   {gameover()}
 }
}

function gameover() {
cx.fillStyle = "red";
cx.font = "40px Papyrus"
cx.fillText("Get dunked on",10,50);
stop();
}


var mlgtunes = new Audio ('sans.mp3');
 
 mlgtunes.loop = true
 mlgtunes.play()
 

 
animate();






































































































































































































































































































































































































































































































































































































































































































































































































