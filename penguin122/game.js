var canvas=document.getElementById('canvas');
var cx= canvas.getContext('2d');
canvas.width=1000;
canvas.height=700;

var img_player= document.createElement('img');
img_player.src='penguin.png';

var x=5;
var y=5;
var playerw=70;
var playerh=70;
var xspeed=8
var yspeed=5
function animate() {
    requestAnimationFrame(animate);
    cx.clearRect(0,0,canvas.width, canvas.height);
    cx.drawImage(img_player,x,y,playerw,playerh);
    x+=xspeed;
    y+=yspeed;
  if(x<0 || x>canvas.width-100) {xspeed=-xspeed}
  if (y<0|| y>canvas.height-100) {yspeed=-yspeed}
}
function setDirection(dir){
  if(dir=="up"){
      xspeed=0;
      yspeed=-5;
}
if(dir=="down"){
      xspeed=0;
      yspeed=5;
}
if(dir=="left"){
      xspeed=-5;
      yspeed=0;
}
if(dir=="stop"){
  xspeed=0
  yspeed=0
}
if(dir=="right"){
      xspeed=5;
      yspeed=0;
}
}

var keyActions ={
    32:"stop",
    39:"right",
    37:"left",
    40:"down",
    38:"up"
    
}

document.addEventListener('keydown', function(event){

  var dir = keyActions[event.keyCode];
  setDirection(dir);
});
document.addEventListener('keyup', function(event){

  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
animate();

