function question1() {
    var answer = prompt("What would you like to drink or eat?");
    if(answer =="water") {
      var wateranswer = prompt("Sparkling or still?");
      if(wateranswer =="still water") { alert("Sure!  I will get you a water.")}
      else if (answer=="sparkling water")  {
      alert("Ok, I will get you a sparkling water!")  }
    else {alert("coming right up!")}
    }
    /*elif (answer=="no")
    alert("Ok, Are you sure?")
    elif ("yes I am sure")
    alert("Ok, nothing it is!")
    elif(answer=="nothing") {alert("Ok, Are you sure?")}
    */
    else
    {alert("Coming right up")}
    
}

elif