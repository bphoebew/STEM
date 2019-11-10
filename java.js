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
var subButton5 = $(".submit5");
var container5 = $(".container5");
var subButton6 = $(".submit6");
var container6 = $(".container6");
var subButton7 = $(".submit7");
var container7 = $(".container7");
subButton1.on("click", showResult1);
subButton.on("click", showResult);
subButton2.on("click", showResult2);
subButton3.on("click", showResult3);
subButton4.on("click", showResult4);
subButton5.on("click", showResult5);
subButton6.on("click", showResult6);
subButton7.on("click", showResult7);

function showResult(){
  console.log("math");
  if (document.querySelector(".answer1").checked ==true){
    console.log("math2");
    container.text("");
    container.append(`<p class="jsText">Correct! It is a variable that stores your information!</p>`);
  }
  else if (document.querySelector(".answer2").checked ==true || document.querySelector(".answer32").checked == true || document.querySelector(".answer33").checked == true){
    container.text("");
    container.append(`<p class="jsText">Incorrect! It is a variable that stores your information! </p>`);
}
console.log("iffed");
}

function showResult1(){
  console.log("math");
  if (document.querySelector(".answer42").checked ==true){
    console.log("iffed2");
    container1.text("");
    container1.append(`<p class="jsText">Correct! Every array count starts with the number 0.</p>`);
  }
  else if (document.querySelector(".answer3").checked ==true || document.querySelector(".answer4").checked == true) {
    container1.text("");
    container1.append(`<p class="jsText">Incorrect! Every array count starts with the number 0. </p>`);
}
}

function showResult2(){
  console.log("math");
  if (document.querySelector(".answer5").checked ==true){
    console.log("math2");
    container2.text("");
    container2.append(`<p class="jsText">Correct! When put into loops, the code will be run over and over until you tell it to stop!</p>`);
  }
  else if (document.querySelector(".answer6").checked ==true || document.querySelector(".answer62").checked ==true){
    container2.text("");
    container2.append(`<p class="jsText">Incorrect! When put into loops, the code will be run over and over until you tell it to stop! </p>`);
}
console.log("iffed");
}

function showResult3(){
  console.log("math");
  if (document.querySelector(".answer7").checked ==true){
    console.log("math2");
    container3.text("");
    container3.append(`<p class="jsText">Correct! Turtle Programming can help you draw in Javascript</p>`);
  }
  else if (document.querySelector(".answer8").checked ==true || document.querySelector(".answer82").checked == true){
    container3.text("");
    container3.append(`<p class="jsText">Incorrect! Turtle Programming can help you draw in Javascript </p>`);
}
console.log("iffed");
}

function showResult4(){
  console.log("math");
  if (document.querySelector(".answer9").checked ==true){
    console.log("math2");
    container4.text("");
    container4.append(`<p class="jsText">Correct! Functions can define variables, have if-else statements, and repeat code!
</p>`);
  }
  else if (document.querySelector(".answer10").checked ==true || document.querySelector(".answer11").checked == true || document.querySelector(".answer12").checked == true){
    container4.text("");
    container4.append(`<p class="jsText">Incorrect! Functions can define variables, have if-else statements, and repeat code!
</p>`);
}
}
