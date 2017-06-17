function newtext() {
  var el = document.getElementById("textbox");
  //var el1 = document.getElementById("textbox1");
  var el11= document.getElementById("choices");
  var el2 = document.getElementById("choices2");
  el.textContent ="Cool! Do you want to go to school with me? I promise that it will be fun!";
  //el1.textContent = "";
  el11.style.display="none";
  if(el2.style.display==="none") {
    el2.style.display="block";
  }
}