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
var h2 = $('h2');
var map = $('#map');
var container = $('.container');
var tracker = 0;

logo.on("click", showText);

function showText(){
  if(tracker == 0){
    tracker++;
    container.append(`<h2> Resources around the United States </h2>`);
    container.append(`<div id="map" style="width: 50%; height: 500px;"></div>`);
  }else if (tracker == 1){
    tracker--;
  }
}
