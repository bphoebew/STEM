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
subButton1.on("click", showResult1);
subButton.on("click", showResult);
subButton2.on("click", showResult2);
subButton3.on("click", showResult3);
subButton4.on("click", showResult4);

function showResult(){
  console.log("math");
  if (document.querySelector(".answer1").checked ==true){
    console.log("math2");
    container.text("");
    container.append(`<p class="jsText">Correct!</p>`);
  }
  else if (document.querySelector(".answer2").checked ==true){
    container.text("");
    container.append(`<p class="jsText">Incorrect!</p>`);
}
else if (document.querySelector(".answer3").checked ==true){
  container.text("");
  container.append(`<p class="jsText">Incorrect!</p>`);
}
}

function showResult1(){
  console.log("math");
  if (document.querySelector(".answer4").checked ==true){
    console.log("iffed2");
    container1.text("");
    container1.append(`<p class="jsText">Correct!</p>`);
  }
  else if (document.querySelector(".answer5").checked ==true) {
    container1.text("");
    container1.append(`<p class="jsText">Incorrect!</p>`);
}
}

function showResult2(){
  console.log("math");
  if (document.querySelector(".answer6").checked ==true){
    console.log("math2");
    container2.text("");
    container2.append(`<p class="jsText">Incorrect!</p>`);
  }
  else if (document.querySelector(".answer7").checked ==true){
    container2.text("");
    container2.append(`<p class="jsText">Correct!</p>`);
}
console.log("iffed");
}

function showResult3(){
  console.log("math");
  if (document.querySelector(".answer8").checked ==true){
    console.log("math2");
    container3.text("");
    container3.append(`<p class="jsText">Correct!</p>`);
  }
  else if (document.querySelector(".answer9").checked ==true){
    container3.text("");
    container3.append(`<p class="jsText">Incorrect!</p>`);
}
console.log("iffed");
}

function showResult4(){
  console.log("math");
  if (document.querySelector(".answer10").checked ==true){
    console.log("math2");
    container4.text("");
    container4.append(`<p class="jsText">Correct!
</p>`);
  }
  else if (document.querySelector(".answer11").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Incorrect!
</p>`);
}
}
