enchant();
window.onload=function() {
  var game = new Game(300,300);
  game.spriteSheetWidth = 256;
  game.spriteSheetHeight = 16;
  game.fps = 15;
  game.spriteWidth=16;
  game.spriteHeight=16;
  game.preload('sprites.png');
  var map = new Map(game.spriteWidth, game.spriteHeight);
  var foregroundMap = new Map(game.spriteWidth, game.spriteHeight);

function setMaps() {
  map.image=game.assets['sprites.png'];
  map.loadData(mapData);
  foregroundMap.image = game.assets['sprites.png'];
  foregroundMap.loadData(foregroundData);
  var collisionData = [];  //new
  for (var i=0; i<foregroundData.length; i++) {
    collisionData.push([]);
    for(var j=0; j<foregroundData[0].length;j++) {
       if (foregroundData[i][j] == 2 || foregroundData[i][j] == 4 || foregroundData[i][j] == 13 || foregroundData[i][j] == 15 || foregroundData[i][j] === 14){
        var collision = 1;
      collisionData[i][j] = collision;
    }
  }
  map.collisionData = collisionData;
}
}



function setStage() {
  var stage = new Group();
  stage.addChild(map);
  stage.addChild(player);
  stage.addChild(foregroundMap);
  stage.addChild(player.statusLabel);
  game.rootScene.addChild(stage);
}

var player = new Sprite(game.spriteWidth, game.spriteHeight);//new

function setPlayer() {
  player.spriteOffset = 5;
  player.startingX = 6;
  player.startingY = 14;
  player.x = player.startingX * game.spriteWidth;
  player.y = player.startingY * game.spriteHeight;
  player.direction = 0;
  player.walk = 0;
  player.frame = player.spriteOffset + player.direction;
  player.image = new Surface(game.spriteSheetWidth,game.spriteSheetHeight);
  player.image.draw(game.assets['sprites.png']);
    //new player status info
  player.name = "Robin";
  player.charClass = "Necromancer";
  player.exp = 0;
  player.level= 1;
  player.gp = 100;
  player.hp = 100;
  player.maxHp =100;
  player.statusLabel= new Label("");
}

player.displayStatus = function() {
  player.statusLabel.width = game.width;
  player.statusLabel.height = 100;
  player.statusLabel.x = 0;
  player.statusLabel.y = 0;
  player.statusLabel.color = "white";
  player.statusLabel.backgroundColor = "black";
  
  player.statusLabel.text =
  "--" + player.name + " the " + player.charClass+
  "<br>--HP: "+player.hp + "/" + player.maxHp +
  "<br>--Exp: "+player.exp +
  "<br>--Level: "+player.level+
  "<br>--Gold: "+player.gp;
};

player.clearStatus = function () {
  player.statusLabel.text = " ";
player.statusLabel.height = 0;
}

//what is this here
player.move = function(){
  this.frame = this.spriteOffset + this.direction * 2 + this.walk;
  if (this.isMoving) {
    this.moveBy(this.xMovement, this.yMovement);
    if ((game.frame%2)!==0 ){
      this.walk++;
      this.walk %=2;
    }
    if ((this.xMovement && this.x % 16 === 0) || (this.yMovement && this.y % 16 ===0)) {
      this.isMoving = false;
      this.walk = 1;
    }
  } else {
    this.xMovement = 0;
    this.yMovement = 0;
    if (game.input.up) {
      this.direction = 1;
      this.yMovement = -4;
    } else if (game.input.right) {
      this.direction = 2;
      this.xMovement = 4;
    } else if (game.input.left) {
      this.direction = 3;
      this.xMovement = -4;
    } else if (game.input.down) {
      this.direction = 0;
      this.yMovement = 4;
    }
    //use of ? : as if (this is true)- then (?) - else(:)
    if (this.xMovement || this.yMovement) {
      var x = this.x + (this.xMovement ? this.xMovement/Math.abs(this.xMovement)*16: 0);
      var y = this.y + (this.yMovement ? this.yMovement/Math.abs(this.yMovement)*16: 0);
      //new added !map.hitTest(x,y) so only allow movement if hitTest(x,y) is false
      if (0<=x && x < map.width && 0 <= y && y< map.height && !map.hitTest(x,y)) {
        this.isMoving = true;
        this.move();
      }
    }
  }
}; //for player.move

//NEW - player.square, facingSquare, facing
player.square = function() {
  return {x: Math.floor(this.x/game.spriteWidth),y: Math.floor(this.y/game.spriteHeight)};
};

player.facingSquare = function(){
    var playerSquare = player.square();
    var facingSquare;
    if(player.direction === 0){
      facingSquare = {x: playerSquare.x, y: playerSquare.y + 1}
    }else if (player.direction === 1) {
      facingSquare = {x: playerSquare.x, y: playerSquare.y - 1}
    }else if (player.direction === 2) {
      facingSquare = {x: playerSquare.x + 1, y: playerSquare.y}
    }else if (player.direction === 3) {
      facingSquare = {x: playerSquare.x - 1, y: playerSquare.y}
    }
    if ((facingSquare.x < 0 || facingSquare.x >= map.width/16) || (facingSquare.y < 0 || facingSquare.y >= map.height/16)) {
      return null;
    } else {
      return facingSquare;
    }
  }
  player.facing = function(){
    var facingSquare = player.facingSquare();
    if (!facingSquare){
      return null;
    }else{
      return foregroundData[facingSquare.y][facingSquare.x];
    }
  }
  

game.focusViewport = function() {
  var x = Math.min((game.width -16)/2 - player.x,0);
  var y = Math.min((game.height -16)/2 - player.y,0);
  x = Math.max(game.width, x+map.width) - map.width;
  y = Math.max(game.height, x+map.height) - map.height;
  game.rootScene.firstChild.x = x;
  game.rootScene.firstChild.y = y;
};

game.onload = function() {
  setPlayer();
  setMaps();
  setStage();
  player.on('enterframe', function() {
    player.move();
    if (game.input.a) {
      var playingFacing = player.facing();
      if (!playerFacing || !spriteRoles[playerFacing]) {
        player.displayStatus();
      } else {
        spriteRoles[playerFacing].action();
      };
    }
  });
  game.rootScene.on('enterframe', function(e) {
    game.focusViewport();
  });
};

game.start();

};