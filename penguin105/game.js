var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;


var img_player = document.createElement("img");
img_player.src = "8bit-mario.png";
var x = 0;
var y = 0;
var playerw = 50;
var playerh = 50;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var req;

function animate() {
  backgroundmusic.play();
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,playerw,playerh);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  obstacle();
  barrier();
  scoreDisplay();
  //levitationplat();
  monster();
  coin();
 /* if (x>200 && x<210 && y>280 && y<380 ) {
    xspeed = 0;
    yspeed = 0;
  }*/

//  platformG()
  if (x<0) {
    xspeed = -xspeed;
  }
  if (y<0) {
    yspeed = -yspeed;
  }
  if (x>canvas.width) {
    xspeed = -xspeed;
  }
  if (y>canvas.height) {
    yspeed = -yspeed;
  }
}

function setDirection(dir) {
  //if (dir =="up") {
  //yspeed = - 10
  //
  if (dir =="left") {
    xspeed = -5;
    yspeed = 0;
    img_player.src = "8bit-mario2.png";
   
  }

  else if(dir =="right") {
    xspeed = 5;
    yspeed = 0;
    img_player.src = "8bit-mario.png";
  }
  
  else if (dir =="down") {
    xspeed = 0;
    yspeed = 5;
  }
  else if (dir =="stop") {
    xspeed = 0;
    yspeed = 0;
  }
  else if (dir =="jump" && y>0) {
    y-=100;
    jumpsound.play();
   img_player.src = "mario-jumping.jpg";
  }
  else {img_player.src = "8bit-mario.png"}
}


var keyActions = {
  32: "jump",
  37: "left",
  39: "right",
  40: "down",
  
};

document.addEventListener('keydown' ,function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);})
  
document.addEventListener('keyup' ,function(event) {
var dir = keyActions[event.keyCode];
setDirection("stop");
})

var plat =[];
plat.push({x:0,y:400, w:100, h:10, color:"green"});
plat.push({x:80,y:530, w:100, h:10, color:"green"});
plat.push({x:50,y:300, w:100, h:10, color:"black"});
plat.push({x:500,y:150, w:100, h:10, color:"green"});
plat.push({x:900,y:400, w:100, h:10, color:"purple"});
plat.push({x:20,y:650, w:100, h:10, color:"purple"});
plat.push({x:200,y:500, w:100, h:10, color:"purple"});
plat.push({x:200,y:470, w:100, h:30, color:"white"});
plat.push({x:200,y:370, w:100, h:10, color:"white"});
plat.push({x:200,y:370, w:100, h:10, color:"white"});
plat.push({x:200,y:200, w:100, h:10, color:"black"});
plat.push({x:500,y:450, w:100, h:10, color:"black"});
plat.push({x:450,y:400, w:100, h:10, color:"yellow"});
plat.push({x:450,y:200, w:100, h:10, color:"black"});
plat.push({x:200,y:200, w:100, h:10, color:"yellow"});
plat.push({x:700,y:200, w:100, h:10, color:"yellow"});
plat.push({x:900,y:600, w:100, h:10, color:"blue"});
plat.push({x:100,y:100, w:100, h:10, color:"green"});
plat.push({x:50,y:50, w:100, h:10, color:"green"});
plat.push({x:5,y:200, w:100, h:10, color:"orange"});
plat.push({x:500,y:600, w:100, h:10, color:"orange"});

//var lplat =[];
plat.push({x:200,y:400, w:100, h:10, color:"black"});


var wall =[];
wall.push({x:200,y:280, w:10, h:100, color:"red"});


function barrier() {
  for (var i = 0; i<wall.length; i++)
  {cx.fillStyle=wall[i].color;
    cx.fillRect(wall[i].x, wall[i].y, wall[i].w, wall[i].h)
  if(x==wall[i].x-playerw &&
  y>=wall[i].y-playerh &&
  y<=wall[i].y+wall[i].h)
   {gameover()}
  //{xspeed=-xspeed;}
    //else{}    check this
  }
  
}

function platform() {
  gravity=5;
  for (var i = 0; i<plat.length; i++)
  { cx.fillStyle=plat[i].color;
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h)
  if(y==plat[i].y-playerh &&
  x>=plat[i].x-playerw &&
  x<=plat[i].x+plat[i].w)
  {gravity=0}
  if(y==plat[0].y-playerh &&
  x>=plat[0].x-playerw &&
  x<=plat[0].x+plat[0].w)
  {x = plat[3].x; y = plat[3].y}
  if(y==plat[1].y-playerh &&
  x>=plat[2].x-playerw &&
  x<=plat[2].x+plat[2].w)
  {x = plat[4
].x; y = plat[2
].y}
  }
}

var xC = 170;
var yC= 300;
var wC = 250;
var hC = 150;
var score = 0;
var img_coin = document.createElement("img");
img_coin.src ="coin.png";

function coin() {
  cx.drawImage(img_coin,xC, yC, wC, hC);
  if (x+playerw > xC && xC+wC >x && yC+hC>y && y +playerh>yC)
{coinsound.play();
  score +=10;
   var i = Math.ceil(Math.random()*plat.length);
   xC = plat[i].x-20;
   yC = plat[i].y-110;
   }
}
  
  
  function scoreDisplay(){
    cx.fillStyle = "blue";
    cx.font = "30px";
    cx.fillText("Score: "+score, 500,100)
  }




var xM = 80;
var yM= 450;
var wM = 30;
//var hMsp = 30;
var mW =100;
var mH = 100;

var img_monster = document.createElement("img");
img_monster.src = "monster.png";

var xMsp=5;
var yMsp=-5;

function monster() {
  cx.drawImage(img_monster, xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if(x+playerw > xM && xM+mW >x && yM+mH>y && y+playerh>yM)
  {gameover()}
  if (xM<0 ||xM>canvas.width-mW) {
    xMsp = -xMsp;
  }
    if(yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
   }
   
}

var lava =[];
lava.push({x:0,y:500, w:100, h:10, color:"red"})
lava.push({x:0,y:660, w:canvas.width, h:40, color:"red"});
function obstacle() {
  for (var i = 0; i<lava.length; i++)
  { cx.fillStyle=lava[i].color;
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h)
  if(y==lava[i].y-playerh &&
  x>=lava[i].x-playerw &&
  x<=lava[i].x+lava[i].w)
  {gameover()}
  else{}
  }
}

/*function levitationplat() {
  for (var i = 0; i<lplat.length; i++)
  { cx.fillStyle=lplat[i].color;
    cx.fillRect(lplat[i].x, lplat[i].y, lplat[i].w, lplat[i].h)
  if(y==lplat[i].y-playerh &&
  x>=lplat[i].x-playerw &&
  x<=lplat[i].x+lplat[i].w)
  {gravity=-2000}
  else{}
  }
}*/

function gameover(){
  cx.fillStyle = "red";
  cx.font = "30px Comic Sans MS";
  cx.fillText("Game Over",10,50);
  img_player.src = "dead-mario.png";
  stop();
  deathsound.play();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
    backgroundmusic.pause();
    img_player.src = "dead-mario.png";
  }
}

//sounds

var deathsound = new Audio('mariodies.wav');
var coinsound = new Audio('smb_coin.wav');
var jumpsound = new Audio('smb_jump-small.wav')
var backgroundmusic = new Audio('background.mp3')
animate();
