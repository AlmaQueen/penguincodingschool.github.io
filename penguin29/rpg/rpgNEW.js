enchant();
window.onload=function() {
  var game = new Core(300,300);
  game.keybind(32,'a');
  game.spriteSheetWidth = 256;
  game.spriteSheetHeight = 16;
  game.itemSpriteSheetWidth = 64;
  game.items = [{price: 1000, description: "Hurter", id: 0},
               {price: 5000, description: "Drg. Paw", id: 1},
               {price: 1, description: "Ice Magic", id: 2},
               {price: 60, description: "Chess Set", id: 3}];
  game.fps = 15;
  game.spriteWidth=16;
  game.spriteHeight=16;
  game.preload(['sprites.png','items.png']);
  var map = new Map(game.spriteWidth, game.spriteHeight);
  var foregroundMap = new Map(game.spriteWidth, game.spriteHeight);

function setMaps() {
  map.image=game.assets['sprites.png'];
  map.loadData(mapData);
  foregroundMap.image = game.assets['sprites.png'];
  foregroundMap.loadData(foregroundData);
  var collisionData = [];

  for (var i=0; i<foregroundData.length; i++) {
    collisionData.push([]);
    for(var j=0; j<foregroundData[0].length;j++) {
      if (foregroundData[i][j]==2 || foregroundData[i][j]==15 || foregroundData[i][j]==4 || foregroundData[i][j]==3) {
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

var player = new Sprite(game.spriteWidth, game.spriteHeight);

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
  player.name = "Arhip";
  player.charClass = "Awesome";
  player.exp = 1000;
  player.level=5;
  player.gp = 100000;
  player.hp = 1000000;
  player.maxHp =100;
  player.statusLabel= new Label("welcome");
}

player.displayStatus = function() {
  player.statusLabel.width = game.width;
  player.statusLabel.height = 170;
  player.statusLabel.x = undefined;
  player.statusLabel.y = undefined;
  player.statusLabel.color = "black";
  player.statusLabel.text =
  "--" + player.name + " the " + player.charClass+
  "<br>--HP: "+player.hp + "/" + player.maxHp +
  "<br>--Exp: "+player.exp +
  "<br>--Level: "+player.level+
  "<br>--Gold: "+player.gp+
  "<br>--INVENTORY"+player.showInventory(0);
};

//NEW
player.clearStatus = function () {
  player.statusLabel.text = " ";
  player.statusLabel.height = 0;
}




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
      player.clearStatus();
    } else if (game.input.right) {
      this.direction = 2;
      this.xMovement = 4;
      player.clearStatus();
    } else if (game.input.left) {
      this.direction = 3;
      this.xMovement = -4;
      player.clearStatus();
    } else if (game.input.down) {
      this.direction = 0;
      this.yMovement = 4;
      player.clearStatus();
    }
    //use of ? : as if (this is true)- then (?) - else(:)
    if (this.xMovement || this.yMovement) {
      var x = this.x + (this.xMovement ? this.xMovement/Math.abs(this.xMovement)*16: 0);
      var y = this.y + (this.yMovement ? this.yMovement/Math.abs(this.yMovement)*16: 0);
      //new added !map.hitTest(x,y) so only allow movement if hitTest(x,y) is false
      if (x>=0 && x < map.width && y>=0 && y< map.height && !map.hitTest(x,y)) {
        this.isMoving = true;
        this.move();
      }
    }
  }
}; //for player.move

//NEW NPC functions
var npc = {
  say: function(message) {
    player.statusLabel.height=12;
    player.statusLabel.text = message;
  },
  ask: function(question) {
    var name = prompt(question);
    npc.say("that's nice " + name);
  }
};

var greeter = {
  action: function() {
    npc.say("hello you look buitifull"+player.name+" the "+player.charClass+player.name);
  }
}

var warrior = {
  action: function() {
    npc.say("rigth.left.right.left.out wimp!rigth.left.right.left");
  }
}
var shopScene = new Scene();
var cat = {
  action: function() {
    game.pushScene(shopScene);
    
  }
}


var spriteRoles = [,,greeter,,cat,,,,,,,,,,,warrior];
var setShopping = function(){
    var shop = new Group();
    shop.itemSelected = 0;
    shop.shoppingFunds = function(){
      return "Gold: " + player.gp;
    };
    shop.drawCat = function(){
      var image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);
      var cat = new Sprite(game.spriteWidth, game.spriteHeight);
      cat.image = image;
      image.draw(game.assets['sprites.png']);
      cat.frame = 4;
      cat.y = 10;
      cat.x = 10;
      cat.scaleX = 2;
      cat.scaleY = 2;
      this.addChild(cat);
      this.message.x = 40;
      this.message.y = 10;
      this.message.color = '#fff';
      this.addChild(this.message);
    };
    
    shop.drawItemsForSale = function(){
      for(var i = 0; i < game.items.length; i++){
        var image = new Surface(game.itemSpriteSheetWidth, game.spriteSheetHeight);
        var item = new Sprite(game.spriteWidth, game.spriteHeight);
        image.draw(game.assets['items.png']);
        var itemLocationX, itemLocationY;
        itemLocationX = 30 + 70*i;
        itemLocationY = 70;
        item.y = itemLocationY;
        item.x = itemLocationX;
        item.frame = i;
        item.scaleX = 2;
        item.scaleY = 2;
        item.image = image;
        this.addChild(item);
        var itemDescription = new Label(game.items[i].price + "<br>" + game.items[i].description);
        itemDescription.x = itemLocationX - 8;
        itemDescription.y = itemLocationY + 40;
        itemDescription.color = '#fff';
        this.addChild(itemDescription);
        if(i === this.itemSelected){
          var image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);
          this.itemSelector = new Sprite(game.spriteWidth, game.spriteHeight);
          image.draw(game.assets['sprites.png']);
          itemLocationX = 30 + 70*i;
          itemLocationY = 160;
          this.itemSelector.scaleX = 2;
          this.itemSelector.scaleY = 2;
          this.itemSelector.y = itemLocationY;
          this.itemSelector.x = itemLocationX;
          this.itemSelector.frame = 7;
          this.itemSelector.image = image;
          this.addChild(this.itemSelector);
        };
      };
    };
    shop.on('enter', function(){
      shoppingFunds.text = shop.shoppingFunds();
    });
    shop.on('enterframe', function() {
      setTimeout(function(){
        if (game.input.a){
          shop.attemptToBuy();
        } else if (game.input.down) {
          shop.message.text = shop.farewell;
          setTimeout(function(){
            game.popScene();
            shop.message.text = shop.greeting;
          }, 10);
        } else if (game.input.left) {
          shop.itemSelected = shop.itemSelected + game.items.length - 1;
          shop.itemSelected = shop.itemSelected % game.items.length;
          shop.itemSelector.x = 30 + 70*shop.itemSelected;
          shop.message.text = shop.greeting;
        } else if (game.input.right) {
          shop.itemSelected = (shop.itemSelected + 1) % game.items.length;
          shop.itemSelector.x = 30 + 70*shop.itemSelected;
          shop.message.text = shop.greeting;
        }
      }, 1000);
      player.showInventory(100);
      shoppingFunds.text = shop.shoppingFunds();
    });
    shop.attemptToBuy = function(){
      var itemPrice = game.items[this.itemSelected].price;
      if (player.gp < itemPrice){
        this.message.text = this.apology;
      }else{
        player.visibleItems = [];
        player.gp = player.gp - itemPrice;
        player.inventory.push(game.items[this.itemSelected].id);
        this.message.text = this.sale;
      }
    };
    
    shop.greeting = "Hi!  I'm a Cat. Meow. I sell things.";
    shop.apology = "Sorry, you don't have enough money.";
    shop.sale = "Here ya go!";
    shop.farewell = "Come again! Meow!";
    shop.message = new Label(shop.greeting);
    shop.drawCat();
    var shoppingFunds = new Label(shop.shoppingFunds());
    shoppingFunds.color = '#fff';
    shoppingFunds.y = 200;
    shoppingFunds.x = 10;
    shop.addChild(shoppingFunds);
    shop.drawItemsForSale();
    shopScene.backgroundColor = '#000';
    shopScene.addChild(shop);
  };
player.square = function() {
  return {x: Math.floor(this.x/game.spriteWidth),y: Math.floor(this.y/game.spriteHeight)};
};

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
  player.visibleItems = [];
player.itemSurface = new Surface(game.itemSpriteSheetWidth, game.spriteSheetHeight);
player.inventory = [];

player.hideInventory = function() {
  for (var i = 0; i<player.visibleItems.length; i++) {
    player.visibleItems[i].remove()
  }
  player.visibleItems = [];
}

player.showInventory = function(yOffset) {
 if(player.visibleItems.length === 0) {
   player.itemSurface.draw(game.assets['items.png']);
   for (var i = 0; i<player.inventory.length; i++) {
     var item = new Sprite(game.spriteWidth, game.spriteHeight);
     item.y = 130+yOffset;
     item.x = 30 + 70*i;
     item.frame = player.inventory[i];
     item.scaleX = 2;
     item.scaleY = 2;
     item.image = player.itemSurface;
     player.visibleItems.push(item);
     game.currentScene.addChild(item);
   }
 }
};

game.focusViewport = function() {
  var x = Math.min((game.width -16)/2 - player.x,0);
  var y = Math.min((game.height -16)/2 - player.y,0);
  x = Math.max(game.width, x+map.width) - map.width;
  y = Math.max(game.height, x+map.height) - map.height;
  game.rootScene.firstChild.x = x;
  game.rootScene.firstChild.y = y;
};

game.onload = function() {
  alert("game loadin'");
  prompt(" guard says why are you here ");
  alert(" guard says nice you may enter");
  alert("game starting")
  alert("bzzzzzzzzzzzzzzzzz")
  setPlayer();
  setMaps();
  setStage();
  setShopping();
  player.on('enterframe', function() {
    player.move(); if (game.input.a) {
      var playerFacing = player.facing();
      if(!playerFacing || !spriteRoles[playerFacing]) {
      player.displayStatus();
    }else {
      spriteRoles[playerFacing].action();
    }
    }
  });

  game.rootScene.on('enterframe', function(e) {
    game.focusViewport();
  });
  };
game.start();
;
};