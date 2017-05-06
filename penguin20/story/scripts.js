function AlienTalk(){
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  var dead = document.getElementById("gameover")
  if (x.selectedIndex===0){
    el.textContent = "*Licks Lips*"
    
  } else if (x.selectedIndex===1){
    el.textContent = "We are viruses... FROM MARS! We viruses aim too take over the universe! Mwahahahahahaha!";
  } else if (x.selectedIndex===2){
    el.textContent = "WHAT?!? Us, Help you? Never. Instead will will virusify you and you will help us take over the universe! ZzZzZzZAP!;
    dead.textContent="Virusified";
} else {}
}