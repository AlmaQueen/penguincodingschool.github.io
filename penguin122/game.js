var canvas=document.getElementById('canvas');
var cx= canvas.getContext('2d');
canvas.width=1000;
canvas.height=700;

var img_player= document.createElement('img');
img_player.src='penguin.png';

var x=5;
var y=5;
var playerw=60;
var playerh=60;
var xspeed=0;
var yspeed=0;
var gravity = 5;

function animate() {
    requestAnimationFrame(animate);
    cx.clearRect(0,0,canvas.width, canvas.height);
    cx.drawImage(img_player,x,y,playerw,playerh);
    x+=xspeed;
    y+=yspeed + gravity;
  if(x<0 || x>canvas.width-100) {xspeed=-xspeed}
  if (y<0|| y>canvas.height-100) {yspeed=-yspeed}
  platform();
}
function setDirection(dir){
  if(dir=="jump" && gravity===0){
      y-=250;
  }
if(dir=="down" && y<510){
      xspeed=0;
      yspeed=5;
}
if(dir=="left" && x>0){
      xspeed=-5;
      yspeed=0;
}
if(dir=="stop"){
  xspeed=0;
  yspeed=0;
}
if(dir=="right" && x<1000){
      xspeed=5;
      yspeed=0;
}
}

var keyActions ={
    32:"jump",
    39:"right",
    37:"left",
    40:"down",
    38:"jump"
    };

document.addEventListener('keydown', function(event){

  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup', function(event){

  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

/*function platform(){
  cx.fillStyle="blue";
  cx.fillRect(20,500,100,10);
  if(y==500-playerh && x<100 && x> 20- playerw)
    {gravity=0}
   else {gravity= 5}
}
*/
var plat=[];
plat.push({x:0,y:500,w:200,h:10})
plat.push({x:75,y:200,w:150,h:10})
plat.push({x:450,y:570,w:50,h:10})
plat.push({x:200,y:400,w:130,h:10})
plat.push({x:504,y:50,w:100,h:10})
plat.push({x:800,y:220,w:100,h:10})
plat.push({x:650,y:500,w:100,h:10})
plat.push({x:500,y:400,w:100,h:10})
plat.push({x:200,y:600,w:100,h:10})
plat.push({x:0,y:600,w:1000,h:20})
plat.push({x:650,y:300,w:100,h:10})

function platform() {
  gravity=5
  cx.fillStyle="white"
  for ( var i =0 ; i<plat.length;i++){
    cx. fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerh&&
    x>plat[i].x-playerw &&
    x<plat[i].x+plat[i].w)
    {gravity=0}
  }
}

animate();

