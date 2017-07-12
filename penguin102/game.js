var canvas = document.getElementById('canvas');
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "https://s-media-cache-ak0.pinimg.com/736x/e7/23/5a/e7235a9fdef8146498e4f837e0bc1f08--mario-yoshi-mario-kart.jpg";

var x = 0;
var y = 0;
var playerw = 70;
var playerh = 70;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y,playerw,playerh);
  x+=xspeed;
  y+=yspeed + gravity;
  platform();
  obstacle();
  monster();
  coin();
  scoreDisplay();
  if (x<=0){
    xspeed =-xspeed;
}
 if (y<=0){
   yspeed = -yspeed;
 }
 if (x>canvas.width){
   xspeed = -xspeed;
   }
  if (y>canvas.height){
    yspeed = -yspeed;
    }
}

function setDirection(dir) {
  if(dir == "up") {
    xspeed = 0;
    yspeed = -5;
  } if (dir == "down") {
    xspeed = 0;
    yspeed = 5;
  } if (dir == "left") {
    xspeed = -5;
    yspeed = 0;
  }  if (dir == "right") {
    xspeed = 5;
    yspeed = 0;
  } if (dir == "jump") {
    yspeed =-10;
  } if (dir == "diagonal") {
    xspeed = 5;
    yspeed = 5;
  }if (dir == "stop") {
    xspeed = 0;
    yspeed = 0;
    }
    
  }
 var keyActions = {
   32: "jump",
   37: "left",
   38: "up",
   39: "right",
   40: "down",
   90: "diagonal",
   69: "nogravity",
   
 };
 
 document.addEventListener('keydown',function(event) {
   var dir = keyActions[event.keyCode];
   setDirection(dir);
 });
 document.addEventListener('keyup',function(event) {
   var dir = keyActions[event.keyCode];
   setDirection("stop");
 });


var plat =[];
plat.push({x:0, y:500, w:100, h:10});
plat.push({x:50, y:500, w:100, h:10});
plat.push({x:250, y:100, w:100, h:10});
plat.push({x:500, y:500, w:100, h:10});
plat.push({x:890, y:150, w:100, h:10});
plat.push({x:735, y:300, w:100, h:10});

plat.push({x:300, y:500, w:100, h:10});


function platform () {
gravity=5;
cx.fillStyle="blue";
for (var i = 0; i<plat.length; i++)
{cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
if (y==plat[i].y-playerh &&
x>=plat[i].x-playerw &&
x<=plat[i].x + plat[i].w)
{gravity=0}
else{}
}

}


plat.push({x:400, y:500, w:100, h:10, color: "blue"});
plat.push({x:30, y:400, w:100, h:10});
plat.push({x:300, y:90, w:100, h:10});
plat.push({x:300, y:500, w:100, h:10});
plat.push({x:100, y:100, w:100, h:10});
plat.push({x:300, y:500, w:100, h:10});
plat.push({x:200, y:200, w:100, h:10});
plat.push({x:200, y:200, w:100, h:10});
plat.push({x:200, y:200, w:100, h:10});
plat.push({x:365, y:365, w:100, h:10});





var lava = [];
lava.push({x:700, y:100, w:100, h:10});
lava.push({x:235, y:435, w:100, h:10});
lava.push({x:770, y:235, w:100, h:10});
lava.push({x:0, y:600, w:1000000000000, h:30});
lava.push({x:230, y:120, w:100, h:10});

function obstacle () {
cx.fillStyle="red";
  for (var i = 0; i<lava.length; i++)
    {cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
      if (y==lava[i].y-playerh &&
        x>=lava[i].x-playerw &&
        x<=lava[i].x + lava[i].w)
    {gameover()}

  }

}


function gameover(){
  cx.fillStyle = "red";
  cx.font = "30px Comic San MS";
  cx.fillText("You Died", 10, 50);
  stop();
}

function stop(){
  if(req){
    cancelAnimationFrame(req);
    req=undefined;
  }
}
var xm=600;
var ym=180;
var xmsp = -5;
var ymsp = -5;
var mw = 100;
var mh = 100;

var img_monster = document.createElement("img")
img_monster.src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pac_Man.svg/1200px-Pac_Man.svg.png";

function monster () {
  cx.drawImage(img_monster, xm, ym, mw, mh);
  xm+=xmsp;
  ym+=ymsp;
  if (x+playerw > xm && xm+mw >x && ym+mh>y && y+playerh>ym)
  {gameover()}
   if (xm<0 || xm>canvas.width-mw) {
    xmsp = -xmsp
  }if (ym<0 || ym>canvas.height-mh) {
    ymsp = -ymsp
  }
  
}

var xc = 500;
var yc = 300;
var wc = 20
var hc = 20
var score = 0

function coin(){
  cx.fillStyle = "gold";
  cx.fillRect (xc, yc, wc, hc);
  if (
    x+playerw > xc &&
    xc + wc> x &&
    yc + hc >y &&
    y+playerh>yc)
{
    score += 10;
    var i = Math.ceil(Math.random()*plat.length);
    xc = plat[i].x;
    yc = plat[i].y-40;
    }
    
    
}
 
 function getRandomInt(min,max) {
   min + Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random()*(min-max)) + min;
 }
 
 function scoreDisplay() {
   cx.fillStyle = "orange"
   cx.font = "30px Comic San MS"
   cx.fillText("Score:" +score,500,100);
 }


animate();

