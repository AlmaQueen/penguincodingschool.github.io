function talk() {
  var el = document.getElementById("textbox") ;
  var x = document.getElementById("reply") ;
  if (x.selectedIndex ==1) {
    el.textContent = "hi!";
  }else if (x.selectedIndex ==2) {
    el.textContent = "the dragons call me the wise one";
  } else  if (x.selectedIndex ==3) {
    el.textContent = "this is a very safe place"
  } else if  (x.selectedIndex ==4) {
    el.textContent = "Thorn the evil dragon is taking over the dragon kingdom, and this is the only safe place to fly over";
    purpledragon();
  
  } else {}
  
  
}

function purpledragon() {
  
  var ele = document.getElementById("purpledragon1") ;
  if(ele.style.display =="none") {
    ele.style.display =="block";
  } else {}
}