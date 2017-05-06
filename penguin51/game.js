var canvas = document.getElementById ("canvas")
var cx = canvas.getContext("2d")

canvas.width=1000
canvas.height=1000

var img_player = document.createElement("img")
img_player.src = "http://static.tvtropes.org/pmwiki/pub/images/sans_sprite.jpg"

var x = 0;
var y = 0;
var xspeed = 0;
var yspeed = 0;
var gravity = 5;
var playerW = 35;
var playerH = 45;
var plat = []

plat.push({x: 0, y:100, w:100, h: 10});
plat.push({x: 0, y:100, w:100, h: 10});
plat.push({x: 0, y:100, w:100, h: 10});
plat.push({x: 200, y:200, w:30, h: 30});
plat.push({x: 0, y:100, w:100, h: 10});
plat.push({x: 0, y:990, w:1000, h: 10});

function animate () {
  requestAnimationFrame(animate)
 cx.clearRect(0,0,canvas.width, canvas.height)
 cx.drawImage(img_player, x,y, playerW, playerH);
  x+=xspeed;
  y+=yspeed+gravity;
  platform();
  
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
  plat.push({x: x, y:y, w:1000, h: 10});

  
} else if (dir=== "jump") {
  xspeed=0;
  yspeed=-20;
  }
  
} else if (dir=== "left") {
  xspeed=0;
  yspeed=5;
  
 else if (dir=== "stop") {
  xspeed=0;
  yspeed=0;
  }
  
}



var keyActions = {
  32:"platmake",
  37:"left",
  38:"jump",
  39:"right",
  40:"down",
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




animate();