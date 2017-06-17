function AlienTalk(){
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  var dead = document.getElementById("gameover")
  if (x.selectedIndex===0){
    el.textContent = "*Licks Lips*"
    
  } else if (x.selectedIndex===1){
    el.textContent = "We are viruses... FROM MARS! We viruses aim too take over the universe! Mwahahahahahaha!";
  } else if (x.selectedIndex===2){
    alert ("WHAT?!? Us, Help you? Never. Instead will will virusify you and you will help us take over the universe! ZzZzZzZAP!");
    window.location="hell.html"
    dead.textContent="Virusified";
} else if (x.selectedIndex===3){
  alert("nice try. ZzZzZzZAP!");
  window.location="hell.html"
}else if (x.selectedIndex===4) {
  window.location="hell.html"
}
}

var hate = document.getElementById("hate")
var middle = document.getElementById("middle");
var cool = document.getElementById("cool");


middle.style.marginTop = Math.random() * 80 + "vh";
middle.style.marginLeft = Math.random() * 80 + "vw";
hate.style.marginTop = Math.random() * 80 + "vh";
hate.style.marginLeft = Math.random() * 80 + "vw";
cool.style.marginTop = Math.random() * 80 + "vh";
cool.style.marginLeft = Math.random() * 80 + "vw";


function squished() {
  alert("You get on the train to San Fransico but get squished");
  window.location = "hell.html"
}