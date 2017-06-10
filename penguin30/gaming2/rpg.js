enchant();
window.onload=function() {
var game = new Core(300,300);
  game.keybind(32,'a');
  game.spriteSheetWidth = 256;
  game.spriteSheetHeight = 16;
  game.itemSpriteSheetWidth = 64;
  game.fps = 15;
  game.spriteWidth=16;
  game.spriteHeight=16;
  game.preload(['sprites.png', 'items.png']);
  game.items=[
    {price:1000, description: "Big Knife", id:0},
    {price:5000, description: "Dragon Paw", id:1},
    {price:150, description: "Ice Magic", id:2},
    {price:50, description: "Chess Set", id:3}]
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
      if (foregroundData[i][j] == 2 || foregroundData[i][j] == 4 ||foregroundData[i][j] == 15 ||foregroundData[i][j] === 0 || foregroundData[i][j]==3) {
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
  player.name = "Knight of Shining Armor";
  player.charClass = "Rockhopper";
  player.exp = 0;
  player.level=1;
  player.gold = 100;
  player.hp = 100;
  player.maxHp =100;
  player.statusLabel= new Label("");
  player.attack=10;
}

player.displayStatus = function() {
  player.statusLabel.width = game.width;
  player.statusLabel.height = 170;
  player.statusLabel.x = undefined;
  player.statusLabel.y = undefined;
  player.statusLabel.color = "white";
  player.statusLabel.backgroundColor = "black";
  
  player.statusLabel.text =
  "--" + player.name + " the " + player.charClass+
  "<br>--HP: "+player.hp + "/" + player.maxHp +
  "<br>--Exp: "+player.exp +
  "<br>--Level: "+player.level+
  "<br>--Gold: "+player.gold+
  "<br>--Inventory: <br>"+
  player.showInventory(0);
};

//NEW
player.clearStatus = function () {
  player.statusLabel.text = " ";
  player.statusLabel.height = 0;
  player.hideInventory();
}

//NEW NPC functions
var npc = {
  say: function(message) {
    player.statusLabel.height=12;
    player.statusLabel.text = message;
  },
};

var greeter = {
  action: function() {
    npc.say("hello you look awful");
  }
};


var shopScene=new Scene();
var cat = {
  action:function(){
    console.log("hello");
    game.pushScene(shopScene)
}
};

var battleScene= new Scene();
var dude={
  maxHp: 20,
  hp:20,
  sprite:15,
  attack:5,
  exp:3,
  gp:5,
  action: function() {
    player.currentEnemy= this;
    game.pushScene(battleScene);
  }
}

var spriteRoles = [,,greeter,,cat,,,,,,,,,,,dude];

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
     var  item = new Sprite(game.spriteWidth, game.spriteHeight);
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






//BATTLE CODING STARTS HERE


var setBattle = function(){
  //BASIC SETUP for a SCENE
  battleScene.backgroundColor = "black";
  var battle = new Group();
  battle.menu = new Label();
  battle.menu.x = 20;
  battle.menu.y = 170;
  battle.menu.color = "white";
  battle.activeAction = 0;
  //LABEL FOR PLAYER STATUS IN BATTLE SCENE
  battle.getPlayerStatus = function(){
    return "HP: " + player.hp + "<br>MP: "+player.mp;};
  battle.playerStatus = new Label(battle.getPlayerStatus());
  battle.playerStatus.color = "white";
  battle.playerStatus.x = 200;
  battle.playerStatus.y = 120;
  //ACTUAL BATTLE DETAILS
  battle.hitStrength = function(hit){
    return Math.round((Math.random()+.5)*hit);}
  //WINNING A BATTLE
  battle.won = function() {
    battle.over =true;
    player.exp += player.currentEnemy.exp;
    player.gold += player.currentEnemy.gold;
    player.currentEnemy.hp = player.currentEnemy.maxHp;
    player.statusLabel.text = "You won the battle!<br>"+"You gained "+player.currentEnemy.exp + " experience points and "+player.currentEnemy.gold+" gold.";
    player.statusLabel.height =45;
    //erase the dude from map
  };
  //LOSING A BATTLE
  battle.lost = function() {
    battle.over = true;
    player.hp = player.maxHp;
    player.mp = player.maxMp;
    player.gold = Math.round(player.gold/2);
    player.statusLabel.text = "You lost."
    player.statusLabel.height = 12;
  }
  //ATTACK SEQUENCE
  battle.playerAttack = function(){
    var currentEnemy = player.currentEnemy;
    var playerHit = battle.hitStrength(player.attack)
    currentEnemy.hp = currentEnemy.hp - playerHit;
    battle.menu.text = "Your hit did "+playerHit+" damage!"
    if(currentEnemy.hp<=0){
      battle.won();
    }
  };
  battle.enemyAttack = function() {
    var currentEnemy = player.currentEnemy;
    var enemyHit = battle.hitStrength(currentEnemy.attack);
    player.hp = player.hp - enemyHit;
    battle.menu.text = "Your took "+enemyHit+" damage!"
    if(player.hp<=0){
      battle.lost();
    }
  };
  battle.actions = [
    {name: "Fight", action:function(){
    battle.wait = true;
    battle.playerAttack();
    setTimeout(function(){
      if(!battle.over){
        battle.enemyAttack();
      };
      if(!battle.over){
        setTimeout(function(){
          battle.menu.text = battle.listActions();
          battle.wait = false;
        },1000)
      } else {
        setTimeout(function(){
          battle.menu.text = "";
          game.popScene();
        },1000)
      };
    },1000);
  }},
  
  
    {name: "Magic", action:function(){
      for(var i=0;i<player.inventory.length; i++) {
        if(player.inventory[i]==2){
          var magic= true;
        }
      }
      if(magic){
      battle.wait = true;
      battle.magicAttack();
      setTimeout(function(){
        if(!battle.over){
          battle.enemyAttack();
        }
      if(!battle.over){
      setTimeout(function(){
        battle.menu.text = battle.listActions();
        battle.wait = false;
      },1000)
    }
      else{
        setTimeout(function(){
          battle.menu.text="";
          game.popScene();
        },1000)
      };
    },1000);
    }
  else{battle.menu.text="You don't have any magic spells.";}
}},


    {name: "Run Away", action:function(){
      game.pause();
      player.statusLabel.text = "You chicken!";
      player.statusLabel.height = 12;
      battle.menu.text = "";
      game.popScene();
    }},
  ];
  battle.magicAttack=function(){
    var currentEnemy= player.currentEnemy;
    var playerHit= battle.hitStrength(player.attack)*2;
    currentEnemy.hp=currentEnemy.hp - playerHit;
    battle.menu.text="Your hit did "+playerHit+" damage to your opponent! The enemy is at "+currentEnemy.hp+".";
    if(currentEnemy.hp<=0){
      battle.won();
    }
  };
  //BATTLE LIST ACTIONS
  battle.listActions = function(){
    battle.optionText = [];
    for(var i = 0; i<battle.actions.length;i++){
      if(i === battle.activeAction) {
        battle.optionText[i] = "> "+battle.actions[i].name;
      } else {
        battle.optionText[i] = battle.actions[i].name;
      }
    }
    return battle.optionText.join("<br>");
  };
  battle.addFighters = function(){
    var image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);
    image.draw(game.assets['sprites.png']);
    battle.player = new Sprite(game.spriteWidth, game.spriteHeight);
    battle.player.image = image;
    battle.player.frame = 7;
    battle.player.x = 150;
    battle.player.y = 120;
    battle.player.scaleX = 2;
    battle.player.scaleY = 2;
    battle.enemy = new Sprite(game.spriteWidth,game.spriteHeight);
    battle.enemy.image = image;
    battle.enemy.x = 150;
    battle.enemy.y = 70;
    battle.enemy.scaleX = 2;
    battle.enemy.scaleY = 2;
    battle.addChild(battle.enemy);
  };
  battle.addFighters();
  //Battle Scene Enter
  
  battleScene.on('enter', function() {
    battle.over = false;
    battle.wait = true;
    battle.menu.text = "";
    battle.enemy.frame = player.currentEnemy.sprite;
    setTimeout(function(){
      battle.menu.text = battle.listActions();
      battle.wait = false;
    },500);
  });
  battleScene.on('enterframe',function() {
    if(!battle.wait){
      if(game.input.a){
        battle.actions[battle.activeAction].action();
      } else if (game.input.down){
        battle.activeAction = (battle.activeAction+1)% battle.actions.length;
        battle.menu.text = battle.listActions();
      } else if (game.input.up){
        battle.activeAction = (battle.activeAction-1+battle.actions.length)%battle.actions.length;
        battle.menu.text = battle.listActions();
      } battle.playerStatus.text = battle.getPlayerStatus();
    }
  });
  battleScene.on('exit',function(){
    setTimeout(function(){
      battle.menu.text="";
      battle.activeAction = 0;
      battle.playerStatus.text=battle.getPlayerStatus();
      game.resume();
    },1000);
  });
  battle.addChild(battle.playerStatus);
  battle.addChild(battle.menu);
  battle.addChild(battle.player);
  battleScene.addChild(battle);
};

var setShopping = function(){
    var shop = new Group();
    shop.itemSelected = 0;
    shop.shoppingFunds = function(){
      return "Gold: " + player.gold;
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
      if (player.gold < itemPrice){
        this.message.text = this.apology;
      }else{
        player.visibleItems = [];
        player.gold = player.gold - itemPrice;
        player.inventory.push(game.items[this.itemSelected].id);
        this.message.text = this.sale;
      }
      game.keyunbind(32);
      game.keybind(32,'a');
    };
    
    
    //Greeting
    shop.greeting = "Hi!  I'm a Cat. I sell things. WHat would you like?";
    shop.apology = "Sorry, you don't have enough money.";
    shop.sale = "Here you go! Anything else?";
    shop.farewell = "Come again! I might find other great things to sell...";
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
////GAME ONLOAD
game.onload = function() {
  setPlayer();
  setMaps();
  setStage();
  setShopping();
  setBattle();
    player.on('enterframe', function() {
    player.move();
    if (game.input.a) {
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

};