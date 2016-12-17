var startgame = function() {
  document.getElementById("map").style.display = "block";
};
var endgame = function() {
  document.getElementById("map").style.display = "none";
  var clicks = 0;
};
// Random Number Generator
var getRandomNumber = function(size) {
  return Math.floor(Math.random() *size);
};
// Setting Treasure Coordinates
var width = 1000;
var height = 700;
// target is where treasure will be hidden
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

var clicks = 0;



var getDistance = function(event, target) {
  var diffiX = event.offsetX - target.x;
  var diffiY = event.offsetY - target.y;
  return Math.sqrt((diffiX*diffiX) + (diffiY*diffiY)) ;
};

var getDistanceHint = function(distance) {
  if (distance <10) {
    return "Boiling Hot!";
  } else if (distance <20) {
    return "Really Hot";
  } else if (distance <40) {
    return "Kind of Hot";
  } else if (distance <80) {
    return "Warm";
  } else if (distance <160) {
    return "Cold";
  } else if (distance <320) {
    return "Ice cold";
  } else {
    return "Freezing!";
  }
};

$("#map").click(function (event) {
  clicks++;
  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);
  $("#hint").text(distanceHint);
  if (distance <8) {
    alert("Found the treasure in "+clicks + " clicks!");
  }
});