function talk() {
  var el = document.getElementById("textbox1");
  var x = document.getElementById("reply");
  if (x.selectedIndex == 1) {
    el.textContent = "Hello to you too!";
  } else if (x.selectedIndex == 2) {
    el.textContent = "Nowhere. I don't have a base.";
  } else if (x.selectedIndex == 3) {
    el.textContent = "The mighty barbarian king!";
  } else if (x.selectedIndex == 4) {
    el.textContent = "No, but if you come with me, we can explore and maybe find your base!";
  }
  
}