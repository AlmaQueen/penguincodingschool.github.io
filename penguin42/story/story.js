function talk() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  if (x.selectedIndex===1) {
    el.textContent = "hello to you too";
  } else if (x.selectedIndex==2) {
    el.textContent = "I'm Batman, of course.";
  } else if (x.selectedIndex==3) {
    el.textContent = "I'm wearing my pajamas";
  } else if (x.selectedIndex==4) {
    el.textContent = "Who is your mother?";
    mother();
  } else { el.textContent = "I don't know what you mean"}
}

function mothername() {
  var x = document.getElementById("reply");
  var el = document.getElementById("textbox");
  var ele = document.getElementById("motherform");
  var elem = document.getElementById("motherform1")
  var mother = prompt("My mother's name is: ")
  el.textContent = "I know where "+ mother+" is! She is trying out for a TV show in Hollywood";
  elem.style.display = "block";
  ele.style.display="none";
  x.style.display="none";
}

function mother() {
  var ele = document.getElementById("motherform");
  if(ele.style.display=="none") {
    ele.style.display = "block";
  } else {}
}


//NEW for class 4
function harrytalk() {
  var el = document.getElementById("textbox");
  var x = document.getElementById("reply");
  if (x.selectedIndex===1) {
    el.textContent = "hello to you too";
  } else if (x.selectedIndex==2) {
    el.textContent = "I'm Harry. Harry Potter.";
  } else if (x.selectedIndex==3) {
    el.textContent = "I go to Hogwarts";
  } else if (x.selectedIndex==4) {
    el.textContent = "I'll answer you if you answer my question first.";
    harry();
  } else { el.textContent = "I don't know what you mean"}
}

function harryname() {
  var x = document.getElementById("reply");
  var el = document.getElementById("textbox");
  var ele = document.getElementById("harryform")
  var elem = document.getElementById("harryform1")
  var password = prompt("Who is Harry Potter's friend?:");
  if (password =="Batman") {
    el.textContent = "Correct! I think I saw your mother at the beach."
    elem.style.display = "block"
    ele.style.display="none";
  x.style.display="none";
  } else {el.textContent = "Sorry, try again"}
}

function harry() {
  var ele = document.getElementById("harryform");
  if(ele.style.display=="none") {
    ele.style.display = "block";
  } else {}
}

