// variables
var canvas = document.getElementById("canvas");	//udo8skjnhcfjioeusdkgbxchlfijusdgkuewuaceysgfusdgcasfiugdwequhyauicsrfyaiuhcyzefuscyhvduicfyeiufnoifujkfcucfiujcfcyfhjkucwyhcqrsjxfdwhsagcjdeywgasdfbrjuwaesygafhsdzuytfgesdhufydaeghsjufytgesahjfhuygashjfuytagyhsufyhgytgfsghfuyagtsfhaygf
var cx = canvas.getContext("2d");
canvas.width=window.innerWidth-50;
canvas.height=window.innerHeight-50;

var img_player = document.createElement("img");
img_player.src = "DATBOI.png";
var img_monster = document.createElement("img");
img_player.src = "Prince.png";

var x =0;
var y =0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var playerW=50;
var playerH=50;
var keyActions = {
	37: "left",
	38: "jump",
	39: "right",
	40: "down"
};
var req;
var score=0;
function newGame(){
  x = 0;
  y = 0;
  xSpeed = 0;
  ySpeed = 0;
  
  xM = 500;
  yM = 420;
  xMS = -5;
  yMS = 0;
  
  score = 0;
  stop();
  animate();
}
function animate(){
	req = requestAnimationFrame(animate);
	cx.clearRect(0,0,canvas.width, canvas.height);
	cx.drawImage(img_player,x,y, playerW,playerH);
	x+=xSpeed; y+=ySpeed+gravity;
	platform();
	obstacle();
	ms();
	coin();
scoreDisplay();
	if (x>canvas.width || x <0) {xSpeed = -xSpeed;}
if (y>canvas.width || y <0) {ySpeed = -ySpeed;}
if (score==150) {gameWin() ;}
}




function setDirection(dir) {
	if (dir === "jump" && gravity ===0) {
		xSpeed = 0;
		ySpeed = -10;
}
else if (dir === "down") {
		xSpeed = 0;
		ySpeed = 5;
}
 else if (dir === "left") {
		xSpeed = -5;
		ySpeed = 0;
}
 else if (dir === "right") {
		xSpeed = 5;
		ySpeed = 0;
}
 else if (dir === "stop") {
		xSpeed = 0;
		ySpeed = 0;

	}
}

document.addEventListener('keydown',function(event) {
	var dir = keyActions[event.keyCode];
	setDirection(dir);
});

document.addEventListener('keyup',function(event) {
	var dir = keyActions[event.keyCode];
	setDirection("stop");
});
var lava=[];
var plat=[];
plat.push({x:0, y:500, w:100,h:10});
plat.push({x:200, y:500, w:100,h:10});
plat.push({x:400, y:500, w:100,h:10});
plat.push({x: 600, y:500, w:100,h:10});
plat.push({x:800, y:500, w:100,h:10});
plat.push({x: 150, y:200, w:100, h:10});
plat.push({x: 330, y:230, w:100, h:10});
plat.push({x: 500, y:100, w:100, h:10});
plat.push({x:1000, y:600, w:100, h:10})
plat.push({x:1200, y:600, w:100, h:10})

lava.push({x:0, y:750, w:canvas.width, h:10});
function platform() {
	
	gravity =5;
	cx.fillStyle="green";
	for (var i = 0; i<plat.length; i++) {
		cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
		if (y==plat[i].y-playerH &&
		x>=plat[i].x-playerW &&
		x<=plat[i].x + plat[i].w)
		{gravity=0}
		
	}
 }
function obstacle() {
	
	cx.fillStyle="pink";
	for (var i = 0; i<lava.length; i++) {
		cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
		if (y==lava[i].y-playerH &&
		x>=lava[i].x-playerW &&
		x<=lava[i].x + lava[i].w)
		{gameOver()}
		
	}
 }
animate();

function stop() {
	if(req) {
	cancelAnimationFrame(req);
	req = undefined;
}}

function gameOver() {
	cx.fillStyle = "Orange";
	cx.font = "30px 'Lobster'";
cx.fillText("your new name is not a proper noun; it is FAILURE",10,50);
	stop();
}
function gameWin() {
	cx.fillStyle = "Green";
	cx.font = "30px Comic Sans MS";
cx.fillText("GG BOIZZZZ",10,50);
	stop();
}
var xM = 500;
var yM = 420;
var xMS = -5;
var yMS = 0;
var mW = 10;
var mH = 10;

function ms() {
	cx.fillStyle = "purple";
	cx.fillRect(xM, yM, mW, mH);
	xM += xMS;
	yM += yMS;
	if (x+playerW > xM && xM+mW >x && yM+mH >y && y+playerH > yM) {
		gameOver();
	} else if (xM<0 || xM>canvas.width-mW) {
	xMS = -xMS;
	}
	else if (xM<0 || yM>canvas.width-mH) {
	yMS = -yMS;
	}
}
var i = Math.ceil(Math.random()*plat.length);
var xC = plat[i].x;
var yC = plat[i].y - 40;
	
//var xC = 500;
//var yC = 300;
var wC = 20;
var hC = 20;
var bksong= new Audio('Colorblind.mp3');
bksong.loop=true;
bksong.play();
function coin() {
  cx.fillStyle = "gold";
	cx.fillRect(xC,yC,wC,hC)
	if(
		x+playerW > xC &&
		xC +wC> x &&
		yC + hC >y &&
		y+playerH >yC)
		if(x+playerW > xC && xC + wC> x && yC+hC >y && y+playerH >yC)
		{
			score += 10;
			var i = Math.ceil(Math.random()*plat.length);
			xC = plat[i].x;
			yC = plat[i].y - 40;
		}
}

function scoreDisplay() {
			  cx.fillStyle="Orange";
			  cx.font="30px Anton";
			  cx.fillText("Score: "+score,500,30);
			}
//dank memes 4 lyfe