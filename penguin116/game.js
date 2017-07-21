var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height =700;

var img_player = document.createElement("img");
img_player.src = "pop.jpg";

var x =0;
var y =0;
var playerW=80;
var playerH =80;
var xSpeed =0;
var ySpeed =0;

function animate() {
req=requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y, playerW,playerH);
x+=xSpeed;
y+=ySpeed;
monster();
coin();
treasure();
scoreDisplay();
if(x<0 || x>canvas.width){
xSpeed = -xSpeed;}
if(y<0 || y>canvas.height){
ySpeed = -ySpeed;
}
}

function setDirection(dir){
 if (dir=="up"){
   xSpeed =0;
   ySpeed=-5;
 }
if (dir=="down"){
   xSpeed =0;
   ySpeed=5;
 }
if (dir=="right"){
   xSpeed =5;
   ySpeed=0;
 }
if (dir=="left"){
   xSpeed =-5;
   ySpeed=-0;
   
 }if (dir=="stop"){
   xSpeed =0;
   ySpeed=-0;
 }
}
  var keyActions = {
   37: "left",
   38: "up",
   39: "right",
   40: "down",
  };
    
document.addEventListener('keydown',function(event) {
    var dir = keyActions[event.keyCode];
    setDirection(dir);
   });
    
document.addEventListener('keyup',function(event) {
    var dir = keyActions[event.keyCode];
    setDirection("stop");
   });

var xM =800;
var yM =200;
var mW =80;
var mH =80;
var xMsp =-10;
var yMsp =-10;

var img_monster = document.createElement("img");
img_monster.src = "fire.jpg";
 
function monster() {
  cx.drawImage(img_monster,xM,yM,mW,mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM) {gameOver()}
  if (xM<0 || xM>canvas.width-mW) {xMsp =-xMsp}
  if (yM<0 || yM>canvas.height-mH) {yMsp = -yMsp}
 }
  
function gameOver() {
  cx.fillStyle = "red";
  cx.font = "60px 'Comic Sans MS'";
  cx.fillText("Game Over",250,250);
  stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req =undefined;
  }
}
  
 
var img_coin = document.createElement("img");
img_coin.src = "butter.jpg";
 
var xC =500;
var yC =200;
var wC =80;
var hC =80;
var score = 0;
 
function coin() {
 cx.drawImage(img_coin,xC, yC,wC,hC);
 if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC){
    score +=10;
      xC = Math.random()*canvas.width;
      yC = Math.random()*canvas.height;
 }
}

function scoreDisplay(){
      cx.fillStyle="blue";
      cx.font ="60px 'Comic Sans MS'";
      cx.fillText("Score: "+score, 500,100);
}
 var gem = [];
 gem.push({x:100, y:200, w:10,h:10,color:"green"});
 gem.push({x:290, y:188, w:10,h:10,color:"pink"});
 gem.push({x:150, y:167, w:10,h:10,color:"red"});
 gem.push({x:100, y:200, w:10,h:10,color:"yellow"});
 gem.push({x:20, y:200, w:10,h:10,color:"mint"});
 gem.push({x:800, y:300, w:10,h:10,color:"orange"});
 gem.push({x:180, y:200, w:10,h:10,color:"purple"});
 gem.push({x:900, y:154, w:10,h:10,color:"black"});

      
function treasure() {
for (var i = 0; i<gem.length; i++) {
  cx.fillStyle=gem[i].color;
  cx.fillRect(gem[i].x, gem[i].y, gem[i].w, gem[i].h);
  if (x+playerW >gem[i].x &&
  gem[i].x+gem[i].w >x &&
  gem[i].y+gem[i].h>y &&
  y+playerH>gem[i].y)
  {score+=gem[i].y;
    gem[i].x=-100; }
  }
}

animate();
      
   
  
   
   
   
   
   
   
 
  
  
  
  
  
   
   
   
   
   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  





