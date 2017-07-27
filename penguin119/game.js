var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=1200;
canvas.height=700;

var img_player = document.createElement ("img");
img_player.src = "lollipop.png";

var x=0;
var y=0;
var playerW = 50;
var playerH = 50;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var req;
var xM = 800;
var yM = 180;
var xMsp = 3;
var yMsp = 3

function animate ()  {
req = requestAnimationFrame (animate);
cx.clearRect (0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y,playerW,playerH);
x+=xSpeed;
y+=ySpeed+gravity;
if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
if(y<0 || y>canvas.height) {ySpeed = -ySpeed}
if (y<0){y=0; ySpeed=5}
platform();
obstacle();
monster();
displayLife();
}

function setDirection(dir) {
  if (dir =="jump") {
    y -= 50;
  }
 if (dir =="down") {
    xSpeed = 0;
    ySpeed = 5;
  }
  if (dir =="left") {
    xSpeed = -5;
    ySpeed = 0;
  }
  if (dir =="right") {
    xSpeed = 5;
    ySpeed = 0;
  }
  if (dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}
var keyActions = {
  38: "stop",
  37: "left",
  32: "jump",
  39: "right",
  40: "down"
}

document.addEventListener('keydown',function(event){

  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup',function(event){

  var dir = keyActions[event.keyCode];
  setDirection("stop");
});



  
var plat=[];
plat.push({x:0,y:100,w:100,h:10})
plat.push({x:700, y:150, w:100, h:10})
plat.push({x:150, y:400, w:100, h:10})
plat.push({x:300, y:600, w:100, h:10})
plat.push({x:605, y:250, w:100, h:10})
plat.push({x:700, y:500, w:100, h:10})
plat.push({x:975, y:700, w:100, h:10})

function platform () {
  gravity =5;
  cx.fillStyle="transparent";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerH &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
  }
}

var lava = []
lava.push({x:0,y:650,w:1200,h:10})

var life = 9;

function obstacle () {
  cx.fillStyle="transparent";
  for (var i =0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y-playerH &&
    x>lava[i].x-playerH &&
    x<lava[i].x+lava[i].w)
    
    
    {life = life -1;
    x = 0; //starting position of player
    y = 0;
    if(life ===0) { gameOver(); }
    }
    
  }}
  
 var mW =100;
 var mH = 100;
 var xMsp = 5
 var yMsp = 5
// var mr = [];
// mr.push({link:"monster.jpg", x: 500, y:500, w:50, h:50, xSpeed:0, ySpeed:5})
 
var img_m1 = document.createElement("img");
var img_m2 = document.createElement("img");
var img_m3 = document.createElement("img");
var img_m4 = document.createElement("img");
var img_m5 = document.createElement("img");

img_m1.src = "monster.png";
img_m2.src = "monster.png";
img_m3.src = "monster.png";
img_m4.src = "monster.png";
img_m5.src = "monster.png";
 
var mr =[];
mr.push({img:img_m1, x:400, y:300, w:50, h:50, msp:-5})
mr.push({img:img_m2, x:500, y:280, w:50, h:50, msp:5})
mr.push({img:img_m3, x:600, y:290, w:50, h:50, msp:-5})
mr.push({img:img_m4, x:700, y:310, w:50, h:50, msp:2})
mr.push({img:img_m5, x:900, y:320, w:50, h:50, msp:-2})

 var mx1 = 400;
 var my1 = 300;
 var mxsp = 5;
 var mxsp2 = 5;
 
 function monster() {
  for (var i =2; i<mr.length; i++) {
  //cx.drawImage(mr[i].img,mr[i].x,mr[i].y,mr[i].w,mr[i].h);
  mr[i].y+=mr[i].msp;
  
  if(x+playerW > mr[i].x && mr[i].x+mr[i].w >x && mr[i].y+mr[i].h > y && y+playerH > mr[i].y)
 {
  life--;
  y=0; x=0;
  }
  if(mr[i].y > 400 || mr[i].y<200){
    mr[i].msp=-mr[i].msp
  }
  
  }
  cx.drawImage(mr[0].img,mr[0].x,mr[0].y,mr[0].w,mr[0].h);
  mr[0].y+=mr[0].msp;
  mr[0].x+=mxsp;
  
  if(mr[0].y > canvas.height || mr[0].y<0){
    mr[0].msp=-mr[0].msp
  }
  if(mr[0].x > canvas.width || mr[0].x<0){
    mxsp=-mxsp
  }
  if(mr[1].y > canvas.height || mr[1].y<1){
    mr[1].msp=-mr[1].msp
  }
  if(mr[1].x > canvas.width || mr[1].x<1){
    mxsp2=-mxsp2
  
 }cx.drawImage(mr[1].img,mr[1].x,mr[1].y,mr[1].w,mr[1].h);
  mr[1].y+=mr[1].msp;
     mr[1].x+=mxsp2;
 }
    
  var xC = 80;
  var yC = 450;
  var wC = 30;
  var hC = 30;
  
  //function coin() {
    //cx.drawImage(img_coin xC,yC,wC,hC)
    
//  }
  


  function gameOver() {
    cx.fillStyle = "black";
    cx. font = "30px Comic Sans MS";
    cx.fillText("Game Over",10,50);
    stop();
  }
  
  function displayLife() {
    cx.fillStyle = "white";
    cx.font = "30px Comic Sans MS";
    cx.fillText("Lives Left: "+life, 100,50)
  }
  
  function stop() {
    if(req) {
      cancelAnimationFrame(req);
      req = undefined;
  }}


animate();