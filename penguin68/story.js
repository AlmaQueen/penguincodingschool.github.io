function question1() {
    var answer = prompt("would you like anything to drink or eat?");
    if(answer =="water") {
      var wateranswer = prompt("Sparkling or still?");
      if(wateranswer =="still water") { alert("Sure!  I will get you a water.")}
      else if (answer=="sparkling water")  {
      alert("Ok, I will get you a sparkling water!")  }
    else {alert("coming right up!")}
    }
    /*else if (answer=="no")
    alert("Ok, Are you sure?")
    else if ("yes I am sure")
    alert("Ok, nothing it is!")
    else if(answer=="nothing") {alert("Ok, Are you sure?")}
    */
    else
    {alert("Coming right up")}
    
}