function witchtalk() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  if(x.selectedIndex==1) {
    el.textContent = "You look like someone we could test our potions on!";
  } else if(x.selectedIndex==2) {
    el.textContent = "Only if you let us eat you!";
  }else if(x.selectedIndex==3) {
    el.textContent = "You're in the middle of the Sahara desert!";
  }
}

