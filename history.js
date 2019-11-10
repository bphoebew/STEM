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
var containerTwo = $('.containerTwo');
var mission = $('h3');
var state = $('p');
var adaContain = $('.adaContain');
var katContain = $('.katContain');
var hedyContain = $('.hedyContain');
var graceContain = $('.graceContain');
var tracker = 0;

logo.on("click", showText);

function showText(){
  if(tracker == 0){
    tracker++;
    adaContain.append(`<h3>Ada Lovelace</h3>`);
    adaContain.append(`<img class = "bioPic" src="adaLovelace.jpg" />`);
    katContain.append(`<h3>Katherine Johnson</h3>`);
    katContain.append(`<img class = "bioPic" src = "katherine.jpg" />`);
    hedyContain.append(`<h3>Hedy Lamarr</h3>`);
    hedyContain.append(`<img class = "bioPic" src = "hedy.jpg" />`);
    graceContain.append(`<h3>Grace Hopper</h3>`);
    graceContain.append(`<img class = "bioPic" src = "grace.jpeg" />`)
  }else if (tracker == 1){
    tracker--;
    adaContain.empty();
    katContain.empty();
    graceContain.empty();
    hedyContain.empty();
  }
}
