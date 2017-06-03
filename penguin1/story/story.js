function talk() {
  var el=document.getElementById("textbox");
  var x=document.getElementById("reply");
  if (x.selectedIndex==1){
    el.textContent="Maybe.";
  }else if (x.selectedIndex==2){
  el.textContent="My name is Mr. Sean the Seagull. You can call me Sean.";
  }else if (x.selectedIndex==3){
  el.textContent="I think so. Are you the lost moose Ellie?";
  family();
}
  else  {el.textContent="You are weird. What do you mean?"}
}

function family() {
  var ele = document.getElementById("familyform");
if(ele.style.display=="none") {
ele.style.display ="block"
}else{}
}

function family1(){
  

  
}