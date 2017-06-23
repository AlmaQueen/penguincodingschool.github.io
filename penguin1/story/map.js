var map = document.getElementById("map");
var hint= document.getElementById("hint");
var family = { x:400, y:400} ;

function getDistance(event, family) {
  var dX = event.offsetX - family.x;
  var dY = event.offsetY-  family.y;
  return Math.round(Math.sqrt((dX*dX) + (dY*dY)));
}

function getHint(distance) {
  if (distance<20) {return "You found your family! Congratulations!"}
  else if (distance<40) {return "So close."}
  else if (distance<80) {return "Getting there."}
  else if (distance<150) {return "Try somewhere else."}
  else {return "Not close at all."}
}

map.addEventListener('click', function(event) {
   var distance =getDistance(event, family);
   var dhint = getHint(distance);
   hint.textContent = dhint + "You are " +distance+" pixels away.";
   console.log(dhint,distance);
})