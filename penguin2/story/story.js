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
  } else if  (x.selectedIndex ==5) {
    el.textContent = "i will tell you my name if you tell me yours first";
    purpledragon();
  } else {}
}

function purpledragon() {
  var ele = document.getElementById("purpledragon1") ;
  if (ele.style.display ==="none") {
    ele.style.display ="block";
  } else {}
}

function purpledragon2() {
  var ele = document.getElementById("purpledragon2") ;
  if (ele.style.display ==="none") {
    ele.style.display ="block";
  } else {}
}

function purpledragonform() {
   var el = document.getElementById("textbox");
   var ele = document.getElementById("purpledragon1");
   var ele2 = document.getElementById("purpledragon2");
   var name = prompt("My name is: ");
   el.textContent = "Hello "+name + ". My name is glinia. Do you want to come to my cave? it is not safe to talk here.";
   purpledragon2();
   ele.style.display = "none";
     
  if(ele2.style.display =="none") {
    ele2.style.display ="block";
  } else {}
}

function cavetalk() {
  var el = document.getElementById("textbox") ;
  var x = document.getElementById("reply") ;
  if (x.selectedIndex ==1) {
    el.textContent = "thank you!i think.";
  }else if (x.selectedIndex ==2) {
    el.textContent = "That is gladim. A lot of dragons come to my cave to seek refuge.";
  } else  if (x.selectedIndex ==3) {
    el.textContent = "yes. it is not the best place ot live, but it is hidden so thorn and his dragons can not find it."
  } else if  (x.selectedIndex ==4) {
    el.textContent = "yes. i  have grown accustomed to it as the other dragons have. i would rather sleep here than sleep on the dungeon floor.";
  } else if  (x.selectedIndex ==5) {
    el.textContent = "i will tell you once we get deep enough in the cave.";
    purpledragon();
  } else {}
}


