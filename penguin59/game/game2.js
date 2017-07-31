// Y is up and down//
// X is side to side//


//variables//


alert ("Hi! Welcome!");

  var names = prompt("What's your name?");
      alert("Nice to meet you, " + names + "!");

document.addEventListener('keydown',function(event) {

  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {

  var dir = keyActions[event.keyCode];
  setDirection("stop");
});

var coinSound = new Audio('coinSound.wav');
var monsterSound = new Audio('monster.wav');

var counter = 0;

var score = 0;

var canvas = document.getElementById("canvas");

var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 650;

var img_player = document.createElement("img");
img_player.src = "zapper.png";

var img_monster = document.createElement("img");
img_monster.src = "BOWLER.png";

var img_monster2 = document.createElement("img");
img_monster2.src = "BOWLER.png";

var img_coin = document.createElement("img");
img_coin.src = "Coin.png";

var img_Life = document.createElement("img");
img_Life.src = "extraLife.png";

var x = 0;

var y = 0;

var Xspeed = 0;

var Yspeed = 0;

var PlayerH=50;

var PlayerW=50;

var keyActions = {
  32: "jump",
  37: "left",
  38: "jump",
  39: "right",
  40: "down",
};

var gravity = 1;

var XM2 = 1000;

var YM2 = 0;

var XM = 500;

var YM = 0;

var MW = 100;

var MH = 100;

var MW2 = 100;

var MH2 = 100;

var XMSPEED =  3;

var YMSPEED =   -3;

var XMSPEED2 =  0;

var YMSPEED2 = 0;

var XC = 40;

var YC = 225;

var WC = 20;

var HC = 20;

var XL = 40;

var YL = 225;

var WL = 20;

var HL = 20;

var plat = [];

var life = 2;

var TELEPORTX = 10;

var TELEPORTY = 360;

plat.push({x: 100, y: 360, w:150, h:5});
plat.push({x: 0, y: 260, w:100, h:5});
plat.push({x: 250, y: 210, w:75, h:5});
plat.push({x: 400, y: 260, w:75, h:5});
plat.push({x: 700, y: 400, w:75, h:5});
plat.push({x: 400, y: 150, w:75, h:5});
plat.push({x: 820, y: 320, w:75, h:5});
plat.push({x: 700, y: 250, w:75, h:5});
plat.push({x: 520, y: 480, w:75, h:5});

var wall = [];

wall.push({x: 100, y: 260, w:5, h:100});
wall.push({x: 250, y: 210, w:5, h:155});

var lava = [];

lava.push({x: 100, y: 310, w: 150, h: 50 });
lava.push({x: 0, y: 650, w: 1000, h: 50 });


//functions//


function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, PlayerW, PlayerH);
  x+=Xspeed;
  y+=Yspeed + gravity;
  if (x > canvas.width - PlayerW || x < 0)
      {Xspeed = -Xspeed}
  if (y > canvas.height - PlayerH || y < 0)
      {Yspeed = -Yspeed}
  platform();
  obstacle();
  barrier();
  // monster();
  coin();
  scoreDisplay();
  displayLife();
  extraLife();

}
  
  function setDirection(dir) {
  if (dir === "jump" && gravity === 0) {
   y -= 100;
  } else if (dir === "left") {
    Xspeed = -5;
    Yspeed =  0;
  } else if (dir === "right") {
    Xspeed =  5;
    Yspeed =  0;
    
  }
   else if (dir === "stop") {
    Xspeed =  0;
    Yspeed =  0;
  }
}


function platform() {
 gravity = 1;
cx.fillStyle = "grey";
for (var e = 0; e<plat.length; e++) {
  cx.fillRect (plat[e].x, plat[e].y, plat[e].w, plat[e].h);
  if(y == plat[e].y-PlayerH &&
  x>= plat[e].x-PlayerW &&
  x<= plat[e].x + plat[e].w)
  {gravity = 0
  }
}}


function barrier() {
 cx.fillStyle = "grey";
for (var i = 0; i<wall.length; i++) {
  cx.fillRect(wall[i].x, wall[i].y, wall[i].w, wall[i].h);
  if(x+PlayerW > wall[i].x && wall[i].x+wall[i].w >x && wall[i].y+wall[i].h > y && y+PlayerH > wall[i].y)
  { console.log("i've hit the wall!")
    Xspeed = -Xspeed;
    Yspeed = -Yspeed;
  }
}}

function obstacle() {
  cx.fillStyle = "red";
  for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h );
    if (y == lava[i].y-PlayerH &&
    x >= lava[i].x-PlayerW &&
    x <= lava[i].x + lava[i].w)
    {alert("Sorry, but you lost a life!")
      life -=;
      x = 0;
      y = 0;
      XM = 500;
      YM = 0;
      if(life === 0) { gameOver() }
      
    }
  }
}


function stop() {
    if(req) {
      cancelAnimationFrame(req);
      req = undefined;
    }
  }
  
function gameOver() {
    alert("Sorry, it's Game Over for you!");
    stop();
  }
  
function gameWin() {
    cx.fillStyle = "blue";
    cx.font = "30px Comic Sans MS";
    cx.fillText("You Win!", 10, 50);
    stop();
  }



function monster() {
    cx.drawImage(img_monster, XM, YM, MW, MH);
    XM += XMSPEED;
    YM += YMSPEED;
  if (x+PlayerW > XM && XM+MW >x && YM+MH > y && y+PlayerH > YM) {
      monsterSound.play();
      alert("Sorry, but you lost a life!")
      life -=1;
      x = 0;
      y = 0;
      if(life === 0) { gameOver() }
  }
  if (XM < 0 || XM + MW > canvas.width) {
      XMSPEED = -XMSPEED;
    }
    if (YM < 0 || YM + MH > canvas.height) {
      YMSPEED = -YMSPEED;
} }
  
function monster2() {
  cx.drawImage(img_monster2, XM2, YM2, MW2, MH2);
  XM2 += XMSPEED2;
  YM2 += YMSPEED2;
  if (x+PlayerW > XM2 && XM2+MW2 >x && YM2+MH2 > y && y+PlayerH > YM2) {
      gameOver();
    }
  if (XM2 < 0 || XM2 + MW2 > canvas.width) {
      XMSPEED2 = -XMSPEED2;
    }
  if (YM2 < 0 || YM2 + MH2 > canvas.height) {
      YMSPEED2 = -YMSPEED2;
} }

  
  function coin() {
    cx.drawImage(img_coin, XC, YC, WC, HC);
    if(x + PlayerW > XC && XC + WC > x && YC + HC > y && y+PlayerH > YC) {
    coinSound.play();
    score += 2;
    var i = Math.ceil(Math.random()*plat.length);
    XC = plat[i].x;
    YC = plat[i].y - 40;
}}

  function extraLife() {
    console.log(XL,YL,counter);
    
    cx.drawImage(img_Life, XL, YL, WL, HL);
    counter++;
    if(counter%200 == 0) {
      XL= -100;
      YL = -100;
      //XL = -192837401293874012983740128937401289374.128340128937409803274019283740198237401928
      //YL = -198234701983740198273401823740198720398470128.123410829374019823740198273408912019827340918237409812730498172039847102983740192837400010010101000001011111110001010100011100110
      
    }
    
    if(counter%300 == 0) {
    var i = Math.ceil(Math.random()*plat.length);
    XL = plat[i].x;
    YL = plat[i].y - 40;
    }
    if(x + PlayerW > XL && XL + WL > x && YL + HL > y && y+PlayerH > YL) {
    life += 1;
    
}}
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random()*(min-max)) +min;}
  
  
  function scoreDisplay() {
    cx.fillStyle = "green"
    cx.font = "30px trebuchet MS";
    cx.fillText("Score: "+ score,700,100)
    console.log("I GOT THE COIN!")
  }
  
  function displayLife() {
    cx.fillStyle = "green"
    cx.font = "30px trebuchet MS";
    cx.fillText("lives: "+ life,700,150)
    
  }
animate();
