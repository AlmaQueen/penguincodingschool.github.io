var canvas = document.getElementById('canvas');
var cx = canvas.getContext ('2d');
var lensdiv = document.getElementById('lensdiv');
var reset = document.getElementById('reset');
var image = new Image();
var mousedown = {};
var lens = {};
var dragging = false;

function Start (x,y) {
  mousedown.x = x;
  mousedown.y = y;
  lens.left = mousedown.x
  lens.top = mousedown.y
  movelens();
  showlens();
  dragging = true;
}

function Stretch (x,y) {
  lens.left = x<mousedown.x ? x: mousedown.x;
  lens.top = y<mousedown.y ? y: mousedown.y;
  lens.width = Math.abs(x-mousedown.x);
  lens.height = Math.abs(y-mousedown.y);
  movelens();
  resizelens();
}

function End() {
  var box = canvas.getBoundingClientRect();
  cx.drawImage(canvas,lens.left-box.left,lens.top-box.top,lens.width,lens.height,0,0,canvas.width,canvas.height);
  resetlens();
  lensdiv.style.width = 0;
  lensdiv.style.height = 0;
  hidelens();
  dragging=false
}

function movelens() {
  lensdiv.style.top = lens.top;
  lensdiv.style.left = lens.left;
}

function resizelens() {
  lensdiv.style.width = lens.width;
  lensdiv.style.height = lens.height;
}

function showlens() {
  lensdiv.style.display = 'inline';
}

function hidelens() {
  lensdiv.style.display = 'none';
}

function resetlens() {
  lens = {top: 0, left: 0, width:0, height:0};
}

canvas.onmousedown = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  Start(x,y);
};

window.onmousemove = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  if (dragging) {
    Stretch(x,y);
  }};
  
window.onmouseup = function(e) {
  End()};

image.onload = function() {
  cx.drawImage(image,0,0,canvas.width,canvas.height);
};

reset.onclick = function(e) {
  cx.clearRect(0,0,cx.canvas.width,canvas.height);
  cx.drawImage(image,0,0,canvas.width,canvas.height);
};

image.src = 'FINDONE'