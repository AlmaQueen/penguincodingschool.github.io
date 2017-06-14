function talk() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  if (x.selectedIndex ==1) {
    el.textContent = "My name is Olivia"
  } else if (x.selectedIndex ==2) {
    el.textContent = "My name is Olivia, what is your name?";
  } else if (x.selectedIndex ==3) {
    el.textContent = "Of course! Where is your nest? I'm Olivia, by the way.";
    tree();
  } else {el.textContent = "I'm not sure what you mean."}
}

function tree() {
  var ele = document.getElementById("map");
  if(ele.style.display =="none") {
    ele.style.display ="block"
  } else {}
}

var trees = {x: 632, y: 200};
var map = document.getElementById("map");
var hint = document.getElementById("hint");

function mapFind(event, tree) {
  var dX = event.offsetX - tree.x;
  var dY = event.offsetY - tree.y;
  return Math.round(Math.sqrt((dX*dX) + (dY*dY)));
}

function getHint(distance) {
  if (distance<20) {return "You found your tree!"}
  else if (distance <40) {return "Very Hot!"}
  else if (distance <80) {return "Hot!"}
  else if (distance <120) {return "Warm"}
  else if (distance <160) {return "Cold"}
  else {return "Freezing!"}
}

map.addEventListener('click', function(event) {
  var distance = mapFind(event, trees);
  var dhint = getHint(distance);
  hint.textContent = dhint + "  You are " + distance + " pixels away.";
  if (distance<20) {
    escape();
  }
})

function escape() {
  var ele = document.getElementById("escapebutton");
  if(ele.style.display == "none") {
    ele.style.display="block"
  }
  
}

//ughhhhhhhhhhhhhh