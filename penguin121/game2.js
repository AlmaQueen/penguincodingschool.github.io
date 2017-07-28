var canvas = document.getElementById ("canvas");
var cx = canvas.getContext("2d");
canvas.width =1000;
canvas.height=700;
var img_player = document.createElement("img");
img_player.src = "apple.png";

//Variables
var x =0;
var y=0;
var playerW = 50;
var playerH = 50;
var xSpeed = 0;
var ySpeed = 0;
var gravity=10;
var life=5;
var xM = Math.random()*canvas.width;
var yM = Math.random()*canvas.height;
var xMsp = -27;
var yMsp = 27;
var xM2 = Math.random()*canvas.width;
var yM2 = Math.random()*canvas.height;
var xMsp2 = -27;
var yMsp2 = 27;

var mW =50;
var mH =50;
var mW2 =50;
var mH2 =50;

var xC = 300;
var yC = 400;
var cW = 50;
var cH = 50;
var score = 0;


//var start;
//var fps=30;
//var delay=1000/fps;


var img_monster = document.createElement("img");
img_monster.src = "Monster.png";

var img_monster2 = document.createElement("img");
img_monster2.src = "Monster2.png";

var stop1 = false;
var frameCount = 0;
var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;

startAnimating(22);

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    console.log(startTime);
    animate();
}


function animate() {
    if (stop1) {
        return;
    }
    // request another frame
    req=requestAnimationFrame(animate);
    // calc elapsed time since last loop
    now = Date.now();
    elapsed = now - then;
    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);
        // draw stuff here
          cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
  if(y<0 || y>canvas.width) {ySpeed = -ySpeed}
  platform();
  obstacle();
  lifeleft();
  monster();
  monster2();
  coins();
//  randomInt();
  scoreDisplay();



        // TESTING...Report #seconds since start and achieved fps.
        var sinceStart = now - startTime;
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
        $results.text("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");

    }
}

/*function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
  if(y<0 || y>canvas.width) {ySpeed = -ySpeed}
  platform();
  obstacle();
  lifeleft();
  monster();
  monster2();
  coins();
//  randomInt();
  scoreDisplay();
}
*/
//Movement
function setDirection(dir) {
  if(dir =="jump" && gravity===0) {
    y -= 100;
  }
  if(dir =="right" && x<canvas.width) {
    xSpeed = 15;
    ySpeed = 0;
    img_player.src = "apple.png";
  }
  if(dir =="left" && x>0) {
    xSpeed = -15;
    ySpeed = 0;
    img_player.src = "appleL.png";
  }
  if(dir =="stop") {
    xSpeed = 0;
    ySpeed = 0;
  }
}
  
var keyActions = {
  32:"jump",
  37:"left",
  38:"up",
  39:"right",
};

document.addEventListener('keydown',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});

document.addEventListener('keyup',function(event) {
  var dir = keyActions[event.keyCode];
  setDirection("stop");
});
/*
function platform() {
  cx.fillStyle = "black";
  cx.fillRect(0,500,100,10);
  if (y==500) {
  gravity = 0;
  }
  else {
    gravity = 5;
     if (y==500-playerW && x<100) {
  gravity = 0;
  } else {gravity=5}
  }
}
*/
var plat=[];
plat.push({x:0,y:500,w:100,h:10});
plat.push({x:100,y:500,w:100,h:10});
plat.push({x:100,y:400,w:100,h:10});
plat.push({x:200,y:300,w:100,h:10});
plat.push({x:300,y:200,w:100,h:10});
plat.push({x:400,y:100,w:100,h:10});
plat.push({x:600,y:300,w:100,h:10});
plat.push({x:900,y:600,w:100,h:10});
plat.push({x:700,y:600,w:100,h:10});
plat.push({x:500,y:600,w:100,h:10});
plat.push({x:350,y:550,w:100,h:10});
plat.push({x:230,y:500,w:100,h:10});

function platform() {
  gravity= 10;
  cx.fillStyle="black";
  for (var i =0; i<plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if (y==plat[i].y-playerH &&
    x>plat[i].x-playerW &&
    x<plat[i].x+plat[i].w)
    {gravity=0}

    
  }
}
//lava
var lava=[];
lava.push({x:0,y:680,w:canvas.width,h:20});

function obstacle() {
  cx.fillStyle="#626065";
  for (var l =0; l<lava.length; l++) {
    cx.fillRect(lava[l].x, lava[l].y, lava[l].w, lava[l].h);
    if (y==lava[l].y-playerH &&
    x>lava[l].x-playerW &&
    x<lava[l].x+lava[l].w)
    {life-=1;
    x=0;
    y=0;
    if(life===0) {gameover()}
    }
    }
}

function lifeleft() {
  cx.fillStyle = "black";
  cx.font = "30px Comix Sans MS";
  cx.fillText("Lives "+life,2,22);
}

function gameover() {
  cx.fillStyle = "black";
  cx.font = "100px Comix Sans MS";
  cx.fillText("Gameover",300,400);
  stop();
}

function stop() {
  if (req) {
    cancelAnimationFrame(req);
    req = undefined;
  }
}

function bonuspoints() {
  score+=1000000;
}

//Music
var music = new Audio('Super - smb_theme_song.mp3');
music.play();
music.loop = true;


function monster() {
  cx.drawImage(img_monster,xM, yM, mW, mH);
  xM+=xMsp;
  yM+=yMsp;
  if (x+playerW > xM && xM+mW >x && yM+mH>y && y+playerH>yM)
  {gameover()}
  if (xM<0 || xM>canvas.width-mW) {
    xMsp = -xMsp;
  } if (yM<0 || yM>canvas.height-mH) {
    yMsp = -yMsp;
  }
}

function monster2() {
  cx.drawImage(img_monster2,xM2, yM2, mW2, mH2);
  xM2+=xMsp2;
  yM2+=yMsp2;
  if (x+playerW > xM2 && xM2+mW2 >x && yM2+mH2>y && y+playerH>yM2)
  {gameover()}
  if (xM<0 || xM2>canvas.width-mW2) {
    xMsp2 = -xMsp2;
  } if (yM<0 || yM2>canvas.height-mH2) {
    yMsp2 = -yMsp2;
  }
}

var img_sprite = document.createElement("img");
img_sprite.src ="apple_sprite.png"

var cycle=0;

function coins() {
//console.log(img_coin);
cx.drawImage(img_sprite, cycle*317, 0, 317, 272,xC,yC, 50, 50);
  cycle = (cycle+1)%6;
//cx.drawImage(img_coin2,xC, yC, cW, cH);
//cx.drawImage(img_coin3,xC, yC, cW, cH);
 if (x+playerW > xC && xC+cW >x && yC+cH>y && y+playerH>yC)
{ score +=10;
    var i = Math.floor(Math.random()*plat.length);
    xC = plat[i].x+20;
    yC = plat[i].y-50;
}


}
//var j = Math.floor((Math.random() * 5) + 1);
//var img_coin = "img_coin"+j


function scoreDisplay() {
  cx.fillStyle="Black";
  cx.font = "30px Comix Sans MS";
  cx.fillText("Score: "+score, 500,22);
}

//function youWin() {
  //cx.fillStyle = "black";
  //cx.font = "100px Comix Sans MS";
  //cx.fillText("You Win!",300,400);
  //stop();



/*function animate() {
  req=requestAnimationFrame(animate);
  cx.clearRect(0,0,canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x+=xSpeed;
  y+=ySpeed+gravity;
  if(x<0 || x>canvas.width) {xSpeed = -xSpeed}
  if(y<0 || y>canvas.width) {ySpeed = -ySpeed}
  if(start===null){start=time;}
  var elapsed=time-start;
  if(elapsed<delay){return;}
  platform();
  obstacle();
  lifeleft();
  monster();
  monster2();
  coins();
  
  start=time
}
*/
animate();