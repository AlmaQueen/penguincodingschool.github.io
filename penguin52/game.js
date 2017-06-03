var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=1000;
canvas.height=890;

var img_player = document.createElement("img");
img_player.src = "https://s-media-cache-ak0.pinimg.com/originals/b5/16/0e/b5160e49ec3d6467cf7dec25abb2cd9c.jpg"

var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerH = 70;
var playerW = 65;
var plat=[];
var lava=[];
var req;

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined
  }
}

function gameOver() {
  cx.fillStyle = "red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",10,50);
  stop();
}

lava.push({x: 0, y: 500, w:1000, h:10})

function obstacle() {
  cx.fillStyle="crimson";
  for (var i = 0; i<lava.length; i++) {
  cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
  if (y==lava[i].y-playerH &&
      x>=lava[i].x-playerW &&
      x<=lava[i].x + lava[i].w)
      {GameOver()}
  }
}

plat.push({x: 0, y: 100, w:100, h:10});
plat.push({x: 50, y: 200, w:100, h:10});
plat.push({x: 100, y: 300, w:100, h:10});
plat.push({x: 150, y: 400, w:100, h:10});
plat.push({x: 0, y: 500, w:canvas.width, h:10});


function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x,y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  platform();
  obstacle();
  monster();
  if (x>canvas.width||x<0) {xSpeed= -xSpeed}
  if (y>canvas.height|| y<0) {ySpeed = -ySpeed}
}

function setDirection(dir) {
  if (dir=="up"){
    xSpeed = 0;
    ySpeed = -5;
  } else if (dir=="down"){
    xSpeed = 0;
    ySpeed = -5;
  }
   else if (dir=="left"){
    xSpeed = -5;
    ySpeed = 0;
  } else if (dir=="right"){
    xSpeed = 5;
    ySpeed = 0;
  } else if (dir=="stop"){
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir=="jump"){
    xSpeed = 0;
    ySpeed = -10;
  }
}

var keyActions = {
  32: "jump",
  65: "left",
  87: "up",
  68: "right",
  83: "down"
};

document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

function platform() {
  gravity =5;
  cx.fillStyle="gold";
  for (var i = 0; i<plat.length; i++) {
  cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
  if (y==plat[i].y-playerH &&
      x>=plat[i].x-playerW &&
      x<=plat[i].x + plat[i].w)
    {gravity=0}
    else {}
  }
}
 
 var xC = 500;
 var yC = 300;
 var wC = 20;
 var hC = 20;
 
var img_coin = document.createElement("img");
img_coin.src = "coin-animated.gif"
 
 if(
   x+playerW > xC &&
   xC + wC> x &&
   yC + hC >y &&
   y+player >yC)
  
  if (x+playerW > xC && xC +wC> x && yC+hC >y && y+playerH >yC )
  {
    
    xC =Math.random()*canvas.width;
    yC =  Math.random()*canvas.height;
  }
  
  if (x+playerW > xC && xC + wC>x  && yC+hC >y && y+playerH >yC ) {
    xC = plat[i].x;
    yC = plat[i].y-40;
  }
 
 animate()
   obstacle();
   platform();
   monster();
   coin();
 
   
   if (x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH > yC)
   {
     score +=10;
     
   }
   
   function coin() {
     cx.drawImage(img.coin,xC,yC,wC,hC);
     if (x+playerW > xC && xC+wC >x && yC+hC>y && y+playerH>yC)
     {
       score +=10;
       var i = getRandomInt(1,plat.length);
       xC = plat[i].x;
       yC = plat[i].y-40;
       // xC = Math.random()*(canvas.width-100);
       //yC = getRandomInt(1,3)*150;
       }
   }
 
 function getRandomInt (min,max) {
   min = Math.ceil(min);
   max = Math.ceil(max);
   return Math.floor(Math.random()*(max-min)) +min;
 }
 
 function scoreDisplay() {
   cx.fillStyle = "Green";
   cx.font = "30x Comic Sans MS";
   cx.fillText("Score: "+score,500,100);
 }
 
 if (score===100) {gameWin()}
 
var xM = 800;
var yM = 180;
var xMsp = -5;
var yMsp = 0;

var mW = 10;
var mH = 10;

function monster() {
  cx.fillStyle="red";
  cx.fillRect(xM,yM,mW,mH);
  xM+=xMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameOver()}
  else if (xM<0 || xM>canvas.width){
  }
}



  animate();