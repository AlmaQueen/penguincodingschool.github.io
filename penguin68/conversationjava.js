
  
  function talk() {
    var el = document.getElementById("textbox");
    var x = document.getElementById("reply")
    if (x.selectedIndex ==1){
      el.textContent = "I am taking a vacation to Switzerland";
    }else if (x.selectedIndex ==2){
      el.textContent = "Don't worry about the time, the plane takes off in 2 hours.  I have plentey of time on my hands";
    } else if (x.selectedIndex ==3){
      el.textContent = "I am a man named Duke";
    } else if (x.selectedIndex ==4){
      el.textContent = "My mom told me not to tell strangers my address!  Stranger danger!";

    }
      
    }
