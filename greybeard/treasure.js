var startGame = function() {
  document.getElementById("map").style.display = "block";
}

var endGame = function() {
  document.getElementById("map").style.display = "none";
}
// Random Number Generator
var getRandomNumber = function(size) {
  return Math.floor(Math.random()*size);
};

// Setting Treasure Coordinates
var width = 1400;
var height = 1200;
// targit is where treasure will be hidden
var target ={
  x:  getRandomNumber(width) ,
  y:  getRandomNumber(height) ,
  
};

var clicks = 0;
$("#map").click (function (event){
  clicks++;
  var distance = getDistance (event, target);
  var distanceHint = getDistanceHint(distance);
  $("#hint").text(distanceHint);
  if(distance <35) {
    alert("You found the treasure in "+clicks+" clicks");
  }
});
  
var getDistance= function(event,target) {
  var diffX = event.offsetX-target.x;
  var diffY = event.offsetY-target.y;
  return Math.sqrt((diffX*diffX)+(diffY * diffY));
};

var getDistanceHint = function(distance){
  if (distance<100) {
    return "Close";
  } else {
    return "Not Close";
  }
  
};