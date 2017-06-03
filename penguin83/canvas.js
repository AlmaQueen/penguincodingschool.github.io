var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');

function circle(centerX, centerY, radius) {
  cx.beginPath();
  cx.arc(centerX, centerY, radius, 0, 2*Math.PI);
  cx.stroke();
}

function eye(centerX, centerY, radius,eyeradius) {
  circle(centerX+radius/3,centerY-radius/3,eyeradius);
  cx.fill();
  circle(centerX-radius/3+eyeradius,centerY-radius/3,eyeradius);
  cx.fill();
}

function mouth(centerX, centerY, radius) {
  cx.beginPath();
  cx.moveTo(centerX-radius/5,centerY-radius/7);
  cx.lineTo(centerX+radius/5,centerY-radius/7);
  cx.stroke();
}

function mouth2(centerX, centerY, radius) {
  cx.beginPath();
  cx.arc(centerX, centerY, radius/10, 1*Math.PI, 2*Math.PI);
  cx.stroke();
}

function mouth3(centerX, centerY, radius) {
  cx.beginPath();
  cx.arc(centerX, centerY, radius/15, 2*Math.PI, 1*Math.PI);
  cx.stroke();
}

function mouth4(centerX, centerY, radius) {
  cx.beginPath();
  cx.arc(centerX, centerY, radius/15, 0, 2*Math.PI);
  cx.stroke();
}

function legs(centerX, centerY, radius,leglength) {
  cx.beginPath();
  var xl = centerX+radius*Math.cos((Math.PI/180)*110);
  var yl = centerY+radius*Math.sin((Math.PI/180)*110);
  cx.ellipse(xl,yl,leglength/2,leglength,0,0,1.1*Math.PI);
  cx.stroke();
  cx.beginPath();
  var xr = centerX+radius*Math.cos((Math.PI/180)*70);
  var yr = centerY+radius*Math.sin((Math.PI/180)*70);
  cx.ellipse(xr,yr,leglength/2,leglength,0,0-.2,0.94*Math.PI);
  cx.stroke();
}

function arms(centerX, centerY, radius,armlength) {
  cx.beginPath();
  var xl = centerX+radius*Math.cos((Math.PI/180)*180);
  var yl = centerY+radius*Math.sin((Math.PI/180)*180);
  cx.ellipse(xl,yl,armlength/2,armlength,90,0,1.1*Math.PI);
  cx.stroke();
  cx.beginPath();
  var xr = centerX+radius*Math.cos((Math.PI/180)*0);
  var yr = centerY+radius*Math.sin((Math.PI/180)*0);
  cx.ellipse(xr,yr,armlength/2,armlength,180,0-.2,0.94*Math.PI);
  cx.stroke();
}

function durp(centerX, centerY, radius,eyeradius,leglength,armlength) {
  circle(centerX,centerY,radius);
  eye(centerX, centerY, radius,eyeradius);
  mouth3(centerX, centerY, radius);
  //mouth2(centerX, centerY, radius);
  //mouth(centerX, centerY, radius);
  legs(centerX,centerY,radius,leglength);
  arms(centerX,centerY,radius,armlength);
}

function maddurp(centerX, centerY, radius,eyeradius,leglength,armlength) {
  circle(centerX,centerY,radius);
  eye(centerX, centerY, radius,eyeradius);
  //mouth3(centerX, centerY, radius);
  mouth2(centerX, centerY, radius);
  //mouth(centerX, centerY, radius);
  legs(centerX,centerY,radius,leglength);
  arms(centerX,centerY,radius,armlength);
}

function shockeddurp(centerX, centerY, radius,eyeradius,leglength,armlength) {
  circle(centerX,centerY,radius);
  eye(centerX, centerY, radius,eyeradius);
  //mouth3(centerX, centerY, radius);
  //mouth2(centerX, centerY, radius);
  mouth4(centerX, centerY, radius);
  legs(centerX,centerY,radius,leglength);
  arms(centerX,centerY,radius,armlength);
}

durp(300,300,100,5,30,30);
maddurp(550,550,100,5,30,30);
shockeddurp(850,300,100,5,30,30);
