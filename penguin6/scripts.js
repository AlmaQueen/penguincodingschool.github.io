var age = prompt("How many years old are you?");
if (age<13){
  alert("You can watch PG movies and PG 13 movies if you have parental guidance.");
} else if (age>13){
  alert("You can watch PG and PG 13 movies!");
} else{
  alert("You can watch all movies!");
}

var images = ["http://www.ci.lewiston.me.us/images/pages/N541/SNOW.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d6/Field-with-snow-champ-enneige.jpg", "johnwelchent.com/files/7013/9542/5054/snow.jpg","https://s-media-cache-ak0.pinimg.com/736x/52/e1/79/52e179acb88d549255db5a012612ef39.jpg" ];
var counter =0;

function next() {
  var slider = document.getElementById("slider");
  counter++;
  if(counter>=images.length) {
    counter=0;
  }
      slider.src=images[counter];
}
function prev() {
    counter--;
  if(counter<0) {
    counter=images.length-1;
  }
      slider.src=images[counter];
}
