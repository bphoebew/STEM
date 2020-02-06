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
console.log("linked");
var subButton = $(".submit");
var container = $(".container");
var subButton1 = $(".submit1");
var container1 = $(".container1");
var subButton2 = $(".submit2");
var container2 = $(".container2");
var subButton3 = $(".submit3");
var container3 = $(".container3");
var subButton4 = $(".submit4");
var container4 = $(".container4");
var submitScore = $(".submitScore");
// var subButton5 = $(".submit5");
var container5 = $(".container5");
// var subButton6 = $(".submit6");
// var container6 = $(".container6");
// var subButton7 = $(".submit7");
// var container7 = $(".container7");
var score = 0;
subButton1.on("click", showResult1);
subButton.on("click", showResult);
subButton2.on("click", showResult2);
subButton3.on("click", showResult3);
subButton4.on("click", showResult4);
submitScore.on("click", showScore);
// subButton5.on("click", showResult5);
// subButton6.on("click", showResult6);
// subButton7.on("click", showResult7);

function showResult(){
  console.log("math");
  if (document.querySelector(".answer1").checked ==true){
    container.text("");
    container.append(`<p class="jsText">Incorrect! CSS is just the "makeup" behind the website. You do not need CSS to create a website, HTML is the backbone of the website!</p>`);
  }
  else if (document.querySelector(".answer2").checked ==true){
    container.text("");
    container.append(`<p class="jsText">Incorrect! Java can be used in websites, but is not the most important element. HTML is the code that used for each website!</p>`);
}
  else if (document.querySelector(".answer12").checked ==true){
  container.text("");
  container.append(`<p class="jsText">Incorrect! You can't use Python in website development. HTML is the code that used for each website!</p>`);
}
else if (document.querySelector(".answer22").checked ==true){
container.text("");
score++;
container.append(`<p class="jsText">Correct! HTML is the code used for every website! <br><br> Cool Fact: inspect a page by right clicking in Google Chrome on a web page to find HTML Code!</p>`);
}
}

function showResult1(){
  if (document.querySelector(".answer4").checked ==true){
    container1.text("");
    container1.append(`<p class="jsText">Incorrect! Mars is currently being explored by NASA</p>`);
  }
  else if (document.querySelector(".answer3").checked ==true) {
    container1.text("");
    container1.append(`<p class="jsText">Incorrect! Mars is currently being explored by NASA</p>`);
}  else if (document.querySelector(".answer43").checked ==true) {
    container1.text("");
    score++;
    container1.append(`<p class="jsText">Correct! Mars is currently being explored by NASA</p>`);
} else if (document.querySelector(".answer34").checked ==true) {
  container1.text("");
  container1.append(`<p class="jsText">Incorrect! Mars is currently being explored by NASA</p>`);
}
}

function showResult2(){
  console.log("math");
  if (document.querySelector(".answer5").checked ==true){
    container2.text("");
    score++;
    container2.append(`<p class="jsText">Correct! A catapult can be used to launch something without explosives. <br><br> Check out our "DIY Projects" page to learn how to make one!</p>`);
  }
  else if (document.querySelector(".answer6").checked ==true){
    container2.text("");
    container2.append(`<p class="jsText">Incorrect! A catapult can be used to launch something without explosives. <br><br> Check out our "DIY Projects" page to learn how to make one! </p>`);
}
else if (document.querySelector(".answer56").checked ==true){
  container2.text("");
  container2.append(`<p class="jsText">Incorrect! A catapult can be used to launch something without explosives. <br><br> Check out our "DIY Projects" page to learn how to make one! </p>`);
}
else if (document.querySelector(".answer65").checked ==true){
  container2.text("");
  container2.append(`<p class="jsText">Incorrect! A catapult can be used to launch something without explosives. <br><br> Check out our "DIY Projects" page to learn how to make one! </p>`);
}
}

function showResult3(){
  if (document.querySelector(".answer7").checked ==true){
    container3.text("");
    container3.append(`<p class="jsText">Incorrect! Weathering describes the breaking down or dissolving of rocks and minerals on the surface of the Earth.</p>`);
  }
  else if (document.querySelector(".answer8").checked ==true){
    container3.text("");
    container3.append(`<p class="jsText">Incorrect! Weathering describes the breaking down or dissolving of rocks and minerals on the surface of the Earth.</p>`);
}
else if (document.querySelector(".answer78").checked ==true){
  container3.text("");
  score++;
  container3.append(`<p class="jsText">Correct! Weathering describes the breaking down or dissolving of rocks and minerals on the surface of the Earth.</p>`);
}
else if (document.querySelector(".answer87").checked ==true){
  container3.text("");
  container3.append(`<p class="jsText">Incorrect! Weathering describes the breaking down or dissolving of rocks and minerals on the surface of the Earth.</p>`);
}
}

function showResult4(){
  if (document.querySelector(".answer9").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Incorrect! The atomic number exists for each element on the Periodic Table! The right answer is atomic name, which doesn't exist!</p>`);
  }
  else if (document.querySelector(".answer10").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Incorrect! The atomic mass exists for each element on the Periodic Table! The right answer is atomic name, which doesn't exist!</p>`);
}else if (document.querySelector(".answer11").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Incorrect! The chemical symbol exists for each element on the Periodic Table! The right answer is atomic name, which doesn't exist!</p>`);
}else if (document.querySelector(".answer100").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Correct! The atomic name is not a real thing!</p>`);
    score++;
}
}

function showScore(){
  if (score == 0){
    container5.append(`<p class = "scoreTotal"> You got a score of zero. Try again later! </p>`);
  }else if (score == 1){
    container5.append(`<p class = "scoreTotal"> You got a score of one. Try again later! </p>`);
  }else if (score == 2){
    container5.append(`<p class = "scoreTotal"> You got a score of two. Try again later! </p>`);
  }else if (score == 3){
    container5.append(`<p class = "scoreTotal"> You got a score of three. Good job, you know some of your STEM stuff! </p>`);
  }else if (score == 4){
    container5.append(`<p class = "scoreTotal"> You got a score of four. Good job! Almost perfect! </p>`);
  }else if (score == 5){
    container5.append(`<p class = "scoreTotal"> You got a score of five. You're a STEM genius! </p>`);
  }
}
