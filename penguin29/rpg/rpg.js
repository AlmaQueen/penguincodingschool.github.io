enchant();
window.onload=function() {
  var game = new Core(500,300)
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
 foregroundMap.image=game.assets['sprites.png'];
 foregroundMap.loadData(foregroundData);
}
function setStage () {
  var stage = new Group();
  stage.addChild(map);
  stage.addChild(player);
  stage.addChild(foregroundMap);
  game.rootScene.addChild(stage);
}

var player = new Sprite(game.spriteWidth, game.spriteHeight);

function setPlayer () {
player.spriteOffset = 5;
player.startingX = 6;
player.startingY = 14;
player.x = player.startingX * game.spriteWidth;
player.y = player.startingY * game.spriteHeight;
player.direction = 0;
player.walk=0;
player.frame=player.spriteOffset + player.direction;
player.image=new Surface(game.spriteSheetWidth,game.spriteSheetHeight);
player.image.draw(game.assets['sprites.png']);
}
game.onload = function() {
  alert("game loadin'");
  prompt(" guard says why are you here ");
  alert(" guard says nice you may enter");
  alert("game starting")
  alert("bzzzzzzzzzzzzzzzzz")
  setPlayer();
  setMaps();
  setStage();
};
game.start();
};