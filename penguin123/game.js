
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

var img_player = document.createElement("img");
img_player.src = "Player.png";

var x = 0;
var y = 0;
var playerw = 50;
var playerh = 50;
var xSpeed = 0;
var ySpeed = 0;
var gravity=5;
var life=10;

function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerw,playerh);
  x+=xSpeed;
  y+=ySpeed+gravity;
  
  if (x<0 || x>canvas.width) {xSpeed = -xSpeed} //The equal sign means that you are assigning one value to another...
  if (y<0 || y>canvas.height) {ySpeed = -ySpeed}
 platform();
 obstacle();
 lifeleft();
 }

function setDirection(dir) {
 if(dir =="jump"){
  xSpeed = 0;
  y-=200;
}
  if(dir =="down"){
  xSpeed = 0;
  ySpeed = 5;
}
  if(dir =="right"){
  xSpeed = 5;
  ySpeed = 0;
}
  if(dir =="left" && x>0){
  xSpeed = -5;
  ySpeed = 0;
}
if(dir =="stop"){
  xSpeed = 0;
  ySpeed = 0;
}
}


var keyActions= {
  32:"jump",
  37:"left",
  //38:"up",
  39:"right",
  //40:"down"
};

document.addEventListener('keydown',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event)
{
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});


var plat=[];
plat.push({x:0, y:500, w:100, h:10});
plat.push({x:300, y:400, w:100, h:10});
plat.push({x:300, y:100, w:100, h:10});
plat.push({x:500, y:200, w:100, h:10});
plat.push({x:600, y:500, w:100, h:10});
plat.push({x:800, y:200, w:100, h:10});
plat.push({x:900, y:700, w:100, h:10});
plat.push({x:970, y:300, w:100, h:10});
plat.push({x:490, y:700, w:100, h:10});
plat.push({x:170, y:200, w:100, h:10});
plat.push({x:200, y:650, w:1000, h:10});
plat.push({x:750, y:300, w:100, h:10});
plat.push({x:500, y:700, w:100, h:10});
plat.push({x:190, y:300, w:100, h:10});
plat.push({x:900, y:60, w:100, h:10});
plat.push({x:970, y:400, w:100, h:10});
plat.push({x:490, y:700, w:100, h:10});
plat.push({x:0, y:650, w:1000, h:10});


function platform() {
  gravity=5;
  cx.fillStyle="#48F315";
  
  for (var i=0; i<plat.length; i++) {
    cx.fillRect
    (plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerh &&
    x>=plat[i].x-playerw &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
    /*
    if(x+playerw>plat[i].x &&
  x<plat[i].x+plat[i].w &&
  y<=plat[i].y+plat[i].h &&
  y>plat[i].y)
  {ySpeed=-ySpeed}
  */
  }
  
  
}

var lava=[];
var img_lava = document.createElement("img");
img_lava.src = "https://images.pond5.com/lava-background-1080p-footage-000097699_prevstill.jpeg";

lava.push({x:0, y:625, w:canvas.width, h:75})

function obstacle() {
    for (var i=0; i<lava.length; i++) {
    cx.drawImage(img_lava,lava[i].x,lava[i].y,lava[i].w,lava[i].h);
    if (y==lava[i].y-playerh &&
    x>=lava[i].x-playerw &&
    x<lava[i].x+lava[i].w)
    {console.log("die");life-=1;
    x=0;
    y=0;
    if(life===0){gameover()}
    }
  }
}
function lifeleft (){
  cx.fillStyle="turquoise";
  cx.font="30px Comic Sans MS";
  cx.fillText("Lives Left:" +life, 100, 50);
  }
  
function gameover (){
  cx.fillStyle="black";
  cx.font="30px Comic Sans MS";
  cx.fillText("Game Over", 100, 50);
  stop();
  }
  
  function stop (){
    if (req){
      cancelAnimationFrame(req);
      req=undefined
    }
}
  

    



animate();