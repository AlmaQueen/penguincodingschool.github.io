var startGame = function() {
  document.getElementById("map").style.display = "block";
};

var endGame = function() {
  document.getElementById("map").style.display = "none";
};
// Random Number Generator
var getRandomNumber = function(size) {
     return Math.floor(Math.random() * size);
};
// Setting Treasure Coordinates
var width = 400;
var height = 400;
// target is where treasure will be hidden
var target = {
     x: getRandomNumber(width),
     y: getRandomNumber(height)
};
var clicks = 0;

$("#map").click(function (event)  {
  clicks++;
  //calculate the distance
  var distance = getDistance(event, target);
  //pick thne appropriate hint
  var distanceHint = getDistanceHint(distance);
  $("#hint").text(distanceHint);
  if (distance<24) {
    alert("Found the treasure in" + clicks +" clicks");
  }
});

var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX*diffX)+(diffY*diffY));
};
  
var getDistanceHint = function(distance){
 if (distance<10) {
   return "Boiling hot!";
 } else if (distance<80) {
   return "Very hot";
 } else if (distance<160) {
   return "Kinda hot";
 } else {
  return "Cold";
 }
};