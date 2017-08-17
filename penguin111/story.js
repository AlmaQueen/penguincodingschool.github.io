function cattalk() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  if (x.selectedIndex===1) {
    el.textContent = "Fell from your cage? Then how come you're so far from it? WAIT! Are you... escaping?";
    cat();
    cat2();
  }
  else if (x.selectedIndex===2) {
    el.textContent = "Oh I wouldn't do that. Our owner would never forgive me if I did!"
    
  }
  else if (x.selectedIndex===3) {
    el.textContent = "Well... I can get you as far as the cat door from here."
  }
  else if (x.selectedIndex===4) {
    el.textContent = "Huh? Where? I don't see anything."
  }
  
  function cat() {
    var ele = document.getElementById("catform");
    if (ele.style.display=="block")
    {ele.style.display = "none";}
  }
  
  function cat2() {
    var ele2 = document.getElementById("catform2");
    if (ele2.style.display=="none")
    {ele2.style.display = "block";}
  }
  
  function cat3() {
    var ele3 = document.getElementById("catform3");
    if (ele3.style.display=="none")
    {ele3.style.display = "block";}
  }
  
}
  
  
  function cattalk2() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply2");
  if (x.selectedIndex===1) {
    el.textContent = "";
  }
  else if (x.selectedIndex===2) {
    el.textContent = "Oh I wouldn't do that. Our owner would never forgive me if I did!"
    
  }
  else if (x.selectedIndex===3) {
    el.textContent = "Well... I can get you as far as the cat door from here."
  }
  else if (x.selectedIndex===4) {
    el.textContent = "Huh? Where? I don't see anything."
  }