var canvas =document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width=10000;
canvas.height=1000;

var img_player = document.createElement("img");
img_player.src = "poop.png";
var tube_block = document.createElement("img");
tube_block.src = "tube.png";
var x =0;
var y =0;
var playerW = 50;
var playerH = 50;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var life = 100;


function animate() {
req=requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_player,x,y, playerW, playerH);
x+=xspeed;
y+=yspeed+gravity;
if(x<0 || x>canvas.width) {xspeed = -xspeed}
if(y<0 || y>canvas.height) {yspeed = -yspeed}
obstacle();
platform();
//getDistance();
coin();
circ();
scoreDisplay();
displayLife();
}


function setDirection (dir) {
   if (dir =="jump") {
    y -= 50;
   }
   if (dir =="right") {
     xspeed = 5;
     yspeed = 0;
   }
   if (dir =="left") {
     xspeed = -5;
     yspeed = 0;
   }
   if (dir =="stop") {
     xspeed = 0;
     yspeed = 0;
   }
}
var keyActions= {
  32: "jump",
  38: "up",
  39: "right",
  37: "left"
};
document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

//sample

var circle={x:250,y:250,r:170};
var rect={x:100,y:100,w:40,h:100};
/*
// return true if the rectangle and circle are colliding
function RectCircleColliding(circle,rect){
    var distX = Math.abs(circle.x - 50.x-50.w/2);
    var distY = Math.abs(circle.y - 50.y-50.h/2);

    if (distX > (playerW/2 + circle.r)) { return false; }
    if (distY > (playerH/2 + circle.r)) { return false; }

    if (distX <= (playerW/2)) { return true; }
    if (distY <= (playerH/2)) { return true; }

    var dx=distX-playerW/2;
    var dy=distY-playerH/2;
    return (dx*dx+dy*dy<=(circle.r*circle.r));
    function gameOver ()
      cx.fillStyle = "Red"
      cx.font = "30px Comic Sans MS"
      cx.fillText("Game Over",10,50);
      stop();
    }
}
*/


function getDistance() {
//console.log(getDistance());
  for(var i =0; i<zebra.length; i++) {
  var dX = (x+playerW/2) - zebra[i].x;
  var dY = (y+playerH/2) - zebra[i].y;
  return Math.sqrt((dX*dX)+(dY*dY));
  }
}
var zebra=[];
zebra.push({x:250,y:250,r:170});
zebra.push({x:750,y:250,r:170});
zebra.push({x:1250,y:250,r:170});
zebra.push({x:1750,y:250,r:170});
zebra.push({x:250,y:750,r:170});
zebra.push({x:750,y:750,r:170});
zebra.push({x:1250,y:750,r:170});
zebra.push({x:1750,y:750,r:170});


function circ(){
  cx.fillStyle="red";
  cx.beginPath();
  cx.arc(zebra.x, zebra.y, zebra.r,0,2*Math.PI)
  cx.stroke();
}
var req;

function stop(){
  if(req){
    cancelAnimationFrame(req);
    req = undefined;
  }}


var xC = 400;
var yC = 450;
var wC = 50;
var hC = 50;
var score = 0;
var img_coin = document.createElement("img");
img_coin.src ="coin.png";
var coinsound= new Audio('coinsound.wav');
function coin() {
  if (x+playerW > xC && xC+wC >x && y+playerH>yC)
  {coinsound.play();
  }
  cx.drawImage(img_coin, xC, yC, wC, hC);
    if (x+playerW > xC && xC+wC >x && y+playerH>yC)
    {score +=15;
    //xC =Math.random()*canvas.width;
    //yC = Math.random()*canvas.height;}
    xC+=450;
    }
      
    }
    function scoreDisplay(){
      cx.fillStyle ="#1aa7bc";
      cx.font="30px Cosmic Sans MS";
      cx.fillText("SCORE: "+score, 500,100);
    }
    
    if (score===500) {gameWin()}
    function gameWin() {
      cx.fillStyle="Green";
      cx.font="80px Comic Sans MS";
      cx.fillText("YOU WIN!!!",500,500);
      }
function platform() {
  cx.drawImage(tube_block,-70,700,200,300);
  if(y==700-playerH && x<100) {
    gravity=0;
  } else {gravity=5}
}

var plat=[]
plat.push({x:0, y:200, w:100, h:10})
plat.push({x:100, y:500, w:100, h:10})
plat.push({x:300, y:400, w:100, h:10})
plat.push({x:1000, y:10, w:100, h:10})
plat.push({x:0, y:1000, w:100, h:10})
plat.push({x:100, y:10, w:100, h:10})
plat.push({x:450, y:10, w:100, h:10})


var lava=[]
lava.push({x:250, y:250, w:10, h:10})
lava.push({x:80, y:250, w:10, h:10})

function gameOver () {
      cx.fillStyle = "Red";
      cx.font = "80px Comic Sans MS";
      cx.fillText("Game Over",300,300);
      stop();
}

function displayLife() {
  cx.fillStyle = "Cyan";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Lives Left: "+life, 100, 50);
}

var dX;
var dY;
var distance;

function obstacle() {
  

for(var i=0; i<zebra.length; i++) {
dX = (x+playerW/2) - zebra[i].x;
dY = (y+playerH/2) - zebra[i].y;
distance= Math.sqrt((dX*dX)+(dY*dY));
if(distance<200 || y>canvas.height) {
life -=1;
x = 0;
y = 0;
if(life<=0) {gameOver()}
}
}
}
  //cx.fillStyle="#3a475b";
  /*
  for (var i =0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if (y==lava[i].y-playerH &&
    x>lava[i].x-playerW &&
    x<lava[i].x+plat[i].w)
    {gravity=0}
    }
    */





animate();
