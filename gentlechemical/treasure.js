var startGame = function() {
  document.getElementById("map").style.display = "block";
}
var endGame = function() {
  document.getElementById("map").style.display = "none";
}

// Setting Treasure Coordinates
var width = 600;
var height = 600;
// target is where treasure will be hidden
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size) ;
  };

  // Setting Treasure Coordinates
  // target is where treasure will be hidden
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
  };
  
  // Click Handler - function that is called when player clicks the treasure map
  //#map refers to img tag with id="map"
  // each time there is .click on the #map, the function inside the {} will be executed
  
  //Counting the number of clicks - set var clicks = 0; then clicks++ will increment clicks
  
  var clicks = 0;
  
  $("#map").click(function (event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#hint").text(distanceHint);
    if (distance <8) {
      alert("Found the treasure in " + clicks + " clicks!");
    }
  });
  
  
  // calculate the distance between the target and click
  //event object passes built-in information about the click to the getDistance function
  //event object has property called offsetX and offsetY which
  var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX*diffX) + (diffY * diffY));
  };
  
  var getDistanceHint = function(distance) {
    if (distance<10) {
      return "Boiling Hot!";
    }else if (distance <20) {
      return "Really hot!";
    } else if (distance <40) {
      return "Kind of Hot";
    } else if (distance <80) {
      return "Warm";
    } else if (distance < 160) {
      return "Cold";
    } else if (distance <320) {
      return "Ice Cold!";
    } else {
      return "Freezing!";
    }
  };
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  