var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');

var img_steak = document.createElement('img');
img_steak.src = "steak.jpg";
var x = 0;
var y =0;
var xSpeed = 5;
var ySpeed = 5;

var img_dog = document.createElement('img');
img_dog.src = "steak.jpg";
var x1 = canvas.width;
var y1 = canvas.height;


function animate() {
requestAnimationFrame(animate);
cx.clearRect(0,0,canvas.width, canvas.height);
cx.drawImage(img_steak, x,y,400,200);
cx.drawImage(img_dog, x1,y1,200,100);
x+=xSpeed;
y+=ySpeed;
x1+=xSpeed;
y1+=ySpeed;

if (x <0 || x>canvas.width) {
  xSpeed = -xSpeed
}
if (y <0 || y>canvas.height)
ySpeed=-ySpeed;
}

animate();

