var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "8bit-mario2.png"
var x = 0;
var y = 0;
var playerw = 50;
var playerh = 50;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var req;
function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width,canvas.height);
  cx.drawImage(img_player,x,y,playerw,playerh);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  obstacle();
  barrier();
  levitationplat();
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
    img_player.src = "8bit-mario2.png"
  }

  if (dir =="right") {
    xspeed = 5;
    yspeed = 0;
    img_player.src = "8bit-mario.png"
  }
  
 if (dir =="down") {
    xspeed = 0;
    yspeed = 5;
  }
  
  if (dir =="jump") {
    y-=100;
}
if (dir =="stop") {
    xspeed = 0;
    yspeed = 0;
  }
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
plat.push({x:0,y:500, w:100, h:10, color:"yellow"});
plat.push({x:70,y:530, w:100, h:10, color:"green"});
plat.push({x:5,y:300, w:100, h:10, color:"brown"});
plat.push({x:20,y:650, w:100, h:10, color:"purple"});
plat.push({x:200,y:500, w:100, h:10, color:"purple"});
plat.push({x:200,y:470, w:100, h:30, color:"white"});
plat.push({x:200,y:370, w:100, h:10, color:"white"});
plat.push({x:200,y:370, w:100, h:10, color:"white"});
plat.push({x:200,y:200, w:100, h:40, color:"black"});
var lplat =[];
lplat.push({x:200,y:400, w:100, h:10, color:"black"})

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
    else{}
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
    else{}
  }
}
var lava =[];
lava.push({x:0,y:500, w:100, h:10, color:"red"})
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
  stop();
}

function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}
animate();
