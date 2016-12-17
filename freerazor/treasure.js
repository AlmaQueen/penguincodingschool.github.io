var startgame = function() {
  document.getElementById("map").style.display = "block";
}
var endgame = function() {
  document.getElementById("map").style.display= "none";
}

//Random Number Generator
var getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
};

//Setting Treasure Coordinates
var width = 400;
var height = 400;
// target is where treasure will be hidden
var target = {
  x: getRandomNumber(width),
 y: getRandomNumber (height),
}

// Click Handler - function that is called when player cliks the treasure map
//#map refers to img tag with id="map"
// each time there is .click on the #map, the function inside the {} will be executed

//Counting the number of clicks - set var clicks = 0; then clicks++ will increment clicks

var clicks = 0;

$("#map").click(function (event) {
  clicks++;
  //calculate the distance
  var distance = getDistance(event, target);
  //pick the appropriate hint
  var distanceHint = getDistanceHint(distance);
  //display the hint of player
  $("#hint").text(distanceHint);
   //alert user when click is close to treasure if distance <8) {
  if(distance <8) {
    alert("Found the treasure in "+clicks + " clicks!");
  }
});

var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX*diffX) + (diffY * diffY))
};

var getDistanceHint=function(distance) {
  if (distance <10) {
return "MUCH BURNING!"
} else if (distance <20) {
  return "Such Boiling";
} else if (distance <40) {
  return "Much Hot";
} else if (distance <80) {
  return "Such Warm"
} else if (distance <160) {
  return "Much Cold"
} else if (distance <320) {
  return "Such Freezing"
} else {
  return "Much Frozen!";
}
};