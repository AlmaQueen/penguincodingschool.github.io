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

var jump = new Audio('jump.wav');

var landPlat = new Audio('platLand.wav');

var extraLife222 = new Audio('extraLife222.wav');

var monsterSound = new Audio('monster.wav');

var lavaDeath = new Audio('lavaDeath.wav');

var coinPlat = 1;

var counter = 0;

var score = 0;

var canvas = document.getElementById("canvas");

var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 650;

var img_player = document.createElement("img");
img_player.src = "player.png";

var img_monster = document.createElement("img");
img_monster.src = "monster22.png";

var img_monster2 = document.createElement("img");
img_monster2.src = "monster22.png";

var img_coin = document.createElement("img");
img_coin.src = "Coin.png";

var img_Life = document.createElement("img");
img_Life.src = "extraLife.png";

var img_JET = document.createElement("img");
img_JET.src = "JETPACK.png";

var x = 0;

var y = 0;

var count = 0;

var AXY = 0;

var AXX = 0;

var Xspeed = 0;

var Yspeed = 0;

var PlayerH=50;

var PlayerW=50;

var keyActions = {
  32: "JETUP",
  37: "left",
  38: "jump",
  39: "right",
  40: "JETUP",
};

var ANTIJET = 0;

var gravity = 2;

var XM2 = 1000;

var YM2 = 0;

var XM = 500;

var YM = 0;

var MW = 100;

var MH = 100;

var MW2 = 100;

var MH2 = 100;

var XMSPEED =  0;

var YMSPEED =   0;

var XMSPEED2 =  0;

var YMSPEED2 = 0;

var XC = 40;

var YC = 225;

var WC = 20;

var HC = 20;

var XJ = 40;

var YJ = 225;

var WJ = 20;

var HJ = 20;

var XL = 40;

var YL = 225;

var WL = 20;

var HL = 20;

var plat = [];

var life = 2;

var TELEPORTX = 10;

var TELEPORTY = 360;

plat.push({x: 100, y: 360, w:150, h:5});
plat.push({x: 0, y: 260, w:105, h:5});
plat.push({x: 250, y: 210, w:75, h:5});
plat.push({x: 400, y: 260, w:75, h:5});
plat.push({x: 695, y: 400, w:80, h:5});
plat.push({x: 400, y: 150, w:75, h:5});
plat.push({x: 820, y: 320, w:75, h:5});
plat.push({x: 700, y: 250, w:75, h:5});
plat.push({x: 520, y: 480, w:75, h:5});


var wall = [];

wall.push({x: 100, y: 265, w:5, h:95});
wall.push({x: 250, y: 215, w:5, h:150
});

wall.push({x: 590, y: 485, w:5, h:1000});
wall.push({x: 695, y: 405, w:5, h:2000});


var lava = [];

lava.push({x: 100, y: 310, w: 150, h: 50 });
lava.push({x: 0, y: 650, w: 1000, h: 50 });
lava.push({x: 595, y: 500, w: 100, h: 5000 });




//functions//


function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player, x, y, PlayerW, PlayerH);
  Xspeed += AXX-(.5*Xspeed);
  Yspeed += AXY-(.4*Yspeed);
  x+=Xspeed;
  if (ANTIJET) {y+=Yspeed ;}
  if (ANTIJET == false) {y+=Yspeed+gravity}
  if (x > canvas.width - PlayerW || x < 0)
      {Xspeed = -Xspeed}
  if (y > canvas.height - PlayerH || y < 0)
      {Yspeed = -Yspeed}
  platform();
  obstacle();
  barrier();
  monster();
  monster2();
  coin();
  scoreDisplay();
  displayLife();
  extraLife();
  gamePause();
  Jetpack();

}
  
  function setDirection(dir) {
  if (dir === "jump" && gravity === 0) {
   Yspeed=-100;
   //y -= 100;
   jump.play();
  } else if (dir === "left" && x>0) {
    AXX = -5;
    Yspeed =  0;
  } else if (dir === "right" && x<canvas.width) {
    AXX=5;
    //Xspeed =  5;
    Yspeed =  0;
  }
   else if (dir === "JETUP") {
    Yspeed = -5;
    Xspeed = 0;
  }
}


function platform() {
 gravity = 2;
cx.fillStyle = "grey";
for (var e = 0; e<plat.length; e++) {
  cx.fillRect (plat[e].x, plat[e].y, plat[e].w, plat[e].h);
  if(y > plat[e].y-PlayerH &&
  y<plat[e].y+plat[e].h-PlayerH &&
  x>= plat[e].x-PlayerW &&
  x<= plat[e].x + plat[e].w)
  {gravity = 0
  }
}}


function barrier() {
 cx.fillStyle = "grey";
for (var i = 0; i<wall.length; i++) {
  cx.fillRect(wall[i].x, wall[i].y, wall[i].w, wall[i].h);
  if(
    x+PlayerW >= wall[i].x &&
    wall[i].x+wall[i].w >=x &&
    wall[i].y+wall[i].h >= y &&
    y+PlayerH >= wall[i].y)
  { console.log("i've hit the wall!");
   AXX =  -AXX;
    AYY =  -AYY;
  }
}}

function obstacle() {
  cx.fillStyle = "red";
  for (var i = 0; i<lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h );
    if (x + PlayerW > lava[i].x && lava[i].x + lava[i].w > x && lava[i].y + lava[i].h > y && y + PlayerH > lava[i].y)
    
    
    {lavaDeath.play();
      
      alert("Sorry, but you lost a life!")
    
      life -= 1;
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

function gamePause() {
  
}

function monster() {
    cx.drawImage(img_monster, XM, YM, MW, MH);
    XM += XMSPEED;
    YM += YMSPEED;
  if (x+PlayerW > XM && XM+MW >x && YM+MH > y && y+PlayerH > YM) {
      monsterSound.play();
      alert("Sorry, but you lost a life!")
      life -=1;
      XM = 500;
      YM = 0;
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
    score += 1;
    var i = Math.ceil(Math.random()*plat.length);
    XC = plat[i].x;
    YC = plat[i].y - 40;
    
}}

  function extraLife() {
    console.log(XL,YL,counter);
    
    cx.drawImage(img_Life, XL, YL, WL, HL);
    counter++;
    if(counter%900 == 0) {
      XL = -100
      YL = -100
    }
    if(counter%910 == 0) {
    
    var i = Math.ceil(Math.random()*plat.length);
    XL = plat[i].x;
    YL = plat[i].y - 40;
    }
    if(x + PlayerW > XL && XL + WL > x && YL + HL > y && y+PlayerH > YL) {
    extraLife222.play();
    life += 1;
    XL= -100;
    YL= -100;
    
    
    
}}
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random()*(min-max)) +min;}
  
  
  function scoreDisplay() {
    cx.fillStyle = "green"
    cx.font = "30px trebuchet MS";
    cx.fillText("Score: "+ score,700,100)
    
  }
  
  function displayLife() {
    cx.fillStyle = "green"
    cx.font = "30px trebuchet MS";
    cx.fillText("lives: "+ life,700,150)
    
  }
  
  function Jetpack() {
    cx.drawImage(img_JET, XJ, YJ, WJ, HJ);
  //   counter++;
  //   if(counter%900 == 0) {
  //     XL = -100
  //     YL = -100
  //   }
  //   if(counter%910 == 0) {
    
  //   var j = Math.ceil(Math.random()*plat.length);
  //   XJ = plat[j].x;
  //   YJ = plat[j].y - 40;
  //   }
  //   if(x + PlayerW > XJ && XJ + WJ > x && YJ + HJ > y && y + PlayerH > YJ) {
  //   gravity === 0;
  //   XSPEED = 10;
  //   YSPEED = 10;
  //   XJ = -100;
  //   YJ = -100;
  // }}
  
  count++;
    if(count%900 == 0) {
      XJ = -100
      YJ = -100
      ANTIJET=false;
    }
    if(count%910 == 0) {
    
    var JET = Math.ceil(Math.random()*plat.length);
    XJ = plat[JET].x;
    YJ = plat[JET].y - 40;
    }
    if(x + PlayerW > XJ && XJ + WJ > x && YJ + HJ > y && y + PlayerH > YJ) {
    ANTIJET = true;
  //  Yspeed = 10;
  //  Xspeed = 10;
    XJ = -100;
    YJ = -100;
    }
}
  
  
animate();
