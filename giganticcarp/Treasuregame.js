var startGame = function() {
  document.getElementById("map").style.display = "block";
  document.getElementById("HI").style.display = "none";
  document.getElementById("A").style.display = "none";
  
};
var endGame = function() {
  document.getElementById("map").style.display = "none";
  document.getElementById("HI").style.display = "block";
  document.getElementById("hint").style.display = "none";
  document.getElementById("A").style.display = "block";
  document.getElementById();
  
};

//Random Number Generator
var getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
};

//setting treasure cordinates
var width = 400;
var height = 400;
//target is where treasure will be hidden

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX*diffX) + (diffY * diffY));
};

//Hint function depending on distance of click from the target
var getDistanceHint = function(distance) {
  if (distance<18) {
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
    return "Ice Cold";
  } else {
    return "Freezing!";
  }
};

var clicks = 0;
$("#map").click(function (event) {
  clicks++;
  //calculate the distance
  var distance = getDistance(event, target);
  //pick the appropiate hint
  var distanceHint = getDistanceHint(distance);
  //display the hint to the player
  $("#hint").text(distanceHint);
  //alert user when click is close to the treasure
  if (distance <15) {
    alert ("Found the treasure in "+clicks+ "clicks!");
  }
});
