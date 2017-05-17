function talk() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  if (x.selectedIndex ==1) {
    el.textContent = "Hello, my name is Warrior.";
  } else if (x.selectedIndex ==2) {
    el.textContent = "Of course there are more wild cats. I just went out to hunt which you do on your own.";
  } else if (x.selectedIndex ==3) {
    el.textContent = "Okay but what kind of home do you want?";
    help();
  } else if (x.selectedIndes ==4) {
    el.textContent = "I'm sorry but our camp is full."
}
}

function help() {
  var ele = document.getElementById("helpform");
  if(ele.style.display =="none") {
    ele.style.display ="block"
  } else {}
}
function helpzippy() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  var ele = document.getElementById("helpform");
  var help = prompt("I want to live with:");
  el.textContent = "I saw some "+help+"! They are this way!";
  ele.style.display = "none";
  x.style.display = "none";
}