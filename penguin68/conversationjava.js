<head>
  <link href = "story.css" rel="stylesheet">
</head>
  <body id="">
  ..
  </body>
  <img src="traveler.png" id="duke" class="align-left" >
  <p id="textbox" class="align-left" >
  What would you like to ask duke?
  </p>
  <img src="traveler.png"..
  <form>
  <select id="reply" onchange="talk () ">
  <option> -- pick your option -- </option>
  <option>Where are you traveling to?</option>
  <option>What time is it?</option>
  <option>Who are you?</option>
  <option>Where do you live?</option>
  </select>
  </form>
  <script src="conversationjava.js"></script>
  
  function talk() {
    var el = document.getElementById("textbox");
    var x = document.getElementById("reply")
    if (x.selectedIndent ==1){
      el.textContent = "I am taking a vacation to Switzerland";
    }else if (x.selectedIndent ==2){
      el.textContent = "Don't worry about the time, the plane takes off in 2 hours.  I have plentey of time on my hands";
    } else if (x.selectedIndent ==3){
      el.textContent = "I am a man named Duke";
    } else if (x.selectedIndent ==4){
      el.textContent = "My mom told me not to tell strangers my address!  Stranger danger!";

      
      
    }
