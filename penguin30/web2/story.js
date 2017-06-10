//Before school with Mom
function BeforeSchool(){
  var el=document.getElementById("textbox");
  var x=document.getElementById("reply");
  if(x.selectedIndex==1) {
    el.textContent="Good Morning, Sierra.";
  }
  else if(x.selectedIndex==2) {
    el.textContent="I packed you your favorite type of bagel to eat on the bus, if that's OK with you. It's getting late. It's already 7:20. The bus comes in ten minutes.";
  }
  else if(x.selectedIndex==3) {
    el.textContent="For Lunch...Yeah, here's your lunch box.";
  }
  else if(x.selectedIndex==4) {
    el.textContent="What did you say, Sierra? You were going to skip school, when you've been telling me for two weeks that you have your Science Final today? Get on the bus, we'll talk later";
    SchoolBus();
  }
  else{
    el.textContext="What did you say, Sierra?";
  }
}

function SchoolBus(){
  var ele=document.getElementById("SchoolBus");
  if(ele.style.display=="none"){
    ele.style.display="block";
  }
  else{}
}

//Talking with Liv at the Concert Entrance
function ConcertEntrance(){
  var el=document.getElementById("textbox");
  var x=document.getElementById("reply");
  if(x.selectedIndex==1) {
    el.textContent="This is going to be great. You're welcome";
  }
  else if(x.selectedIndex==2) {
    el.textContent="I just got the tickets I could find online. We should be in the first few rows.";
  }
  else if(x.selectedIndex==3) {
    el.textContent="We're going to be fine. I think my parents know.";
  }
  else if(x.selectedIndex==4) {
    el.textContent="What did you say, Sierra? You were going to skip school, when you've been telling me for two weeks that you have your Science Final today? Get on the bus, we'll talk later";
    SchoolBus();
  }
  else{
    el.textContext="What did you say, Sierra?";
  }
}

function Entrance(){
  var ele=document.getElementById("SchoolBus");
  if(ele.style.display=="none"){
    ele.style.display="block";
  }
  else{}
}