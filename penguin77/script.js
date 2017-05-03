function talk() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  if (x.selectedIndex ==1) {
    el.textContent = "My name is Olivia"
  } else if (x.selectedIndex ==2) {
    el.textContent = "My name is Olivia, what is your name?";
  } else if (x.selectedIndex ==3) {
    el.textContent = "Of course! Where is your nest?";
  } else {el.textContent = "I'm not sure what you mean."}
}

<script>
function ask() {
  alert ("")
}

//ughhhhhhhhhhhhhh