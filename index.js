function openNav() {
  document.getElementById("otherCovering").style.width = "80%";
  document.getElementById("mySidenav").style.width = "50%";
  document.getElementById("mySidenav").style.borderBottomRightRadius = "50%";
  document.getElementById("mySidenav").style.borderTopRightRadius = "50%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("otherCovering").style.width = "0";
}

var logo = $('.logo');
var container = $('.container');
var mission = $('h3');
var state = $('p');
var tracker = 0;

logo.on("click", showText);

function showText(){
  if(tracker == 0){
    tracker++;
    container.append(`<h3>Our Mission</h3>`);
    container.append(`<p>The fields of science, technology, engineering, and mathematics are primarily dominated by males. We hope to change this by making STEM seem less exclusive and intimidating to girls by giving them access to numerous resources and encouraging them to help bridge the gender gap in STEM.</p>`);
  }else if (tracker == 1){
    tracker--;
    container.empty();
  }
}
