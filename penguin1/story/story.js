function talk() {
  var el=document.getElementById("textbox");
  var x=document.getElementById("reply");
  if (x.selectedIndex==1){
    el.textContent="Maybe.";
  }else if (x.selectedIndex==2){
  el.textContent="My name is Mr. Sean the Seagull. You can call me Sean.";
  }else if (x.selectedIndex==3){
  el.textContent="I think so. Are you the lost moose Ellie?";
  family();
}
  else  {el.textContent="You are weird. What do you mean?"}
}

function family() {
var ele = document.getElementById("familyform");
if(ele.style.display=="none") {
ele.style.display ="block"
}else{}
}

function riddle() {

var el = document.getElementById("answer");
var ele =   document.getElementById("riddlebutton");
var elem = document.getElementById("moosebutton");
var password = prompt("In Harry Potter, what animal is Scabbers?(one word only) ");
if (password ==="rat") {
    el.textContent = "You are correct! You may enter the moose herd.";
    ele.style.display="none";
    if(elem.style.display=="none") {
      elem.style.display = "block";
    }
    
  }

else {el.textContent = "That isn't right. Are you part of our herd or not?!?"}
}


function seagulldisappear() {

var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 200;

var img_seagull = document.createElement ("img");
img_seagull.src = "https://s-media-cache-ak0.pinimg.com/originals/17/fd/93/17fd93d656f302a69bead4b77577dfa7.jpg";
var xM = 100;
var yM = 0;
var xSpeed =6;

function animate() {
  requestAnimationFrame(animate) ;
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_seagull, xM, yM, 75, 75);
  xM+=xSpeed;
  if (xM === 0){
    xSpeed=0;
  }
}

setTimeout(function(){
    var el = document.getElementById("seagull");
    var ele = document.getElementById("textbox");
    el.style.display="none";
    ele.style.display="none";
    animate()} ,5500);
}


