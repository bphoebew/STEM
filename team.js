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
var phoebeContain = $('.phoebeContain');
var bridgetContain = $('.bridgetContain');
var containTwo = $('.containTwo');
var tracker = 0;

logo.on("click", showText);

function showText(){
  if(tracker == 0){
    tracker++;
    bridgetContain.append(`<h3>Bridget Yang</h3>`);
    bridgetContain.append(`<img class = "bioPic" src="bridget.jpg" />`);
    bridgetContain.append(`<h4>Co-Founder & Web Developer</h4>`);
    bridgetContain.append(`<p>I will be a senior in high school next year, and I'm from Los Angeles, California.I love all sciences (social and physical); I especially love sociology, psychology, chemistry, biology, and computer science!</p>`);
    bridgetContain.append(`<p><a class="emailMeB" href="mailto:bridgetyang100@gmail.com">Contact</a></p>`);
    phoebeContain.append(`<h3>Phoebe Wongphatarakul</h3>`);
    phoebeContain.append(`<img class = "bioPic" src = "phoebe.jpg" />`);
    phoebeContain.append(`<h4>Co-Founder & Web Developer</h4>`);
    phoebeContain.append(`<p>I will be a senior in high school next year, and I am from Los Angeles. I am an experienced coder, and I love to <br>run and bike. I also love science; especially computer science!</p>`);
    phoebeContain.append(`<p><a class="emailMeP" href="mailto:bphoebew@gmail.com">Contact</a></p>`);
    containTwo.append(`<h5>The Process </h5>`);
    containTwo.append(`<p class = "quest">How we came up with the idea?</p>`)
    containTwo.append(`<p> Both at Kode With Klossy and put together for the final project of making a website, we stumbled upon what idea we wanted to do for our project. Kode With Klossy was all about empowering women to become leaders in STEM, so we wanted to broaden that topic and empower women trying to pursue any STEM career. <br>We created our first website of <a class = "old" href = "https://bridget-yang.github.io/Final-Project/index.html" target="_blank">S(HE)TEM</a> in two days and have rebranded and recoded our website for the Congressional App Award</p>`);
  }else if (tracker == 1){
    tracker--;
    phoebeContain.empty();
    bridgetContain.empty();
    containTwo.empty();
  }
}
