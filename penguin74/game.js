var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");

canvas.width=2000;
canvas.height=850;

var img_player = document.createElement("img");
img_player.src="https://s-media-cache-ak0.pinimg.com/originals/b8/03/be/b803becf10c28afad61b6f3e5a394d5c.jpg";
var playerW = 50;
var playerH = 50;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var gravity = 5;
var plat=[];
var img_lava = document.createElement("img");
img_lava.src="http://img00.deviantart.net/fe4a/i/2014/059/8/0/sre_design_texture_test_lava_floor_test_1_by_wakaflockaflame1-d78e6wm.png";
var req;

var xC = 560;
var yC = 162;
var wC = 100;
var hC = 45;
var img_coin = document.createElement("img");
img_coin.src="https://image000.tutpad.com/tut/0/53/32-done.gif"
var score = 0;

plat.push({x: 0, y:130, w:110, h:10});
plat.push({x: 0, y:350, w:110, h:10});
plat.push({x: 200, y: 90, w:110, h:10});
plat.push({x: 400, y: 60, w:110, h:10});
plat.push({x: 600, y: 200, w:20, h:10});
plat.push({x: 600, y: 370, w:110, h:10});
plat.push({x: 180, y: 400, w:160, h:10});
plat.push({x: 400, y: 350, w:110, h:10});
plat.push({x: 430, y: 500, w:110, h:10});
plat.push({x: 550, y: 550, w:110, h:10});
plat.push({x: 700, y: 450, w:110, h:10});
plat.push({x: 1050, y: 300, w:110, h:10});
plat.push({x: 250, y: 300, w:110, h:10});
plat.push({x: 250, y: 470, w:110, h:10});
plat.push({x: 100, y: 520, w:110, h:10});
plat.push({x: 150, y: 210, w:110, h:10});
plat.push({x: 700, y: 210, w:110, h:10});
plat.push({x: 800, y: 310, w:110, h:10});
plat.push({x: 750, y: 350, w:50, h:10});
plat.push({x: 900, y: 350, w:110, h:10});
plat.push({x: 900, y: 170, w:110, h:10});
plat.push({x: 0, y:770, w:canvas.width, h:10});

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height) ;
  cx.drawImage(img_player, x,y, playerW,playerH);
   x+=xSpeed;
   y+=ySpeed+gravity;
   platform();
   obstacle();
   ghost();
   coin();
   scoreDisplay();
if (x>canvas.width || x<0) {
  xSpeed = -xSpeed;}
if (y>canvas.width || y<0) {
  ySpeed = -ySpeed}
  if (x>1900)  {
  gameWin();
if (score===100) {gameWin()}

}
}



function stop() {
  if(req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}


function platform() {
  gravity = 5;
  cx.fillStyle = "grey";
  for (var i = 0; i<plat.length; i++) {
    cx.fillRect (plat[i].x,plat[i].y,plat[i].w,plat[i].h);
    if (y===plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x + plat[i].w)
    {gravity=0}
  }
  }
  
  
  
var lava = [];
lava.push ({x:0, y:700, w:1000, h:700});
lava.push ({x:1000, y:700, w:1000, h:700});



function obstacle() {

for (var i = 0; i<lava.length; i++)  {
 cx.drawImage(img_lava,lava[i].x, lava[i].y, lava[i].w,lava[i].h);
 // cx.fillRect(lava[i].x, lava[i].y, lava[i].w,lava[i].h);
  if (y==lava[i].y-playerH &&
      x>=lava[i].x-playerW &&
      x<=lava[i].x + lava[i].w)
      {gameOver()}
}
}

var mon=[];
mon.push({x: 500, y: 0, w:50, h:50, sx:-5, sy:-8});
mon.push({x: 1000, y: 0, w:50, h:50, sx:-3, sy:-7});
mon.push({x: 350, y: 0, w:50, h:50, sx:-8, sy:-5});
var img_monster = document.createElement("img");
img_monster.src="monster.png"

function ghost() {
  for (var i = 0; i<mon.length; i++)  {
  cx.drawImage(img_monster,mon[i].x, mon[i].y, mon[i].w,mon[i].h);
  //cx.drawImage(img_monster,500,0,50,50);
  mon[i].x += mon[i].sx;
  mon[i].y += mon[i].sy;
  if (x+playerW > mon[i].x && mon[i].x+mon[i].w >x && mon[i].y+mon[i].h > y && y+playerH > mon[i].y)
  {gameOver()}
  else if (mon[i].x<0 || mon[i].x>1300) {
    mon[i].sx = -mon[i].sx;
  }
  else if (mon[i].y<0 || mon[i].y>700) {
    mon[i].sy = -mon[i].sy;
  }

}
}

function coin() {
  cx.drawImage(img_coin,xC,yC,wC,hC);
  if (x+playerW > xC && xC+wC > x && yC+hC>y && y+playerH>yC)
  {
    score += 10;
    var i = Math.ceil(Math.random()*plat.length);
    xC = plat[i].x;
    yC = plat[i].y-40;
  }
}

function scoreDisplay() {
  cx.fillStyle = "Yellow";
  cx.font = "45px Cracked"
  cx.fillText("Score: "+score,535,30);
}

function gameOver() {
  cx.fillStyle = "Red";
  cx.font = "75px Cracked";
  cx.fillText("Game Over",850,100);
  stop();
  }

function gameWin() {
  cx.fillStyle = "Green";
  cx.font = "75px Cracked";
  cx.fillText("You Win!",850,100);
  stop();
  }

function setDirection(dir) {
 
   if (dir === "left") {
    xSpeed = -5;
    ySpeed = 0;
    img_player.src="PacMan.png"
  } else if (dir === "right") {
    xSpeed = 5;
    ySpeed = 0;
    img_player.src="https://s-media-cache-ak0.pinimg.com/originals/b8/03/be/b803becf10c28afad61b6f3e5a394d5c.jpg"
  } else if (dir === "stop") {
    xSpeed = 0;
    ySpeed = 0;
  } else if (dir === "jump" && gravity===0) {
    y = y-90;
  }
       
}

var keyActions = {
  87: "jump",
  65: "left",
  68: "right",
  
};

document.addEventListener('keydown', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup', function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

animate();