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
    container.append(`<p class="jsText">Correct! In 2015-2016, only 2.9% of bachelor degrees in STEM belonged to African American women.</p>`);
  }
  else if (document.querySelector(".answer2").checked ==true){
    container.text("");
    container.append(`<p class="jsText">Incorrect! In 2015-2016, only 2.9% of bachelor degrees in STEM belonged to African American women. </p>`);
}
console.log("iffed");
}

function showResult1(){
  console.log("math");
  if (document.querySelector(".answer4").checked ==true){
    console.log("iffed2");
    container1.text("");
    container1.append(`<p class="jsText">Correct! In 2015-2016, only 5.0% of bachelor degrees in STEM belonged to Asian women.</p>`);
  }
  else if (document.querySelector(".answer3").checked ==true) {
    container1.text("");
    container1.append(`<p class="jsText">Incorrect! In 2015-2016, only 5.0% of bachelor degrees in STEM belonged to Asian women. </p>`);
}
}

function showResult2(){
  console.log("math");
  if (document.querySelector(".answer6").checked ==true){
    console.log("math2");
    container2.text("");
    container2.append(`<p class="jsText">Correct! Women in the United States made up less than 1/4 of those employed in STEM occupations in 2015.</p>`);
  }
  else if (document.querySelector(".answer5").checked ==true){
    container2.text("");
    container2.append(`<p class="jsText">Incorrect! Women in the United States made up less than 1/4 of those employed in STEM occupations in 2015. </p>`);
}
console.log("iffed");
}

function showResult3(){
  console.log("math");
  if (document.querySelector(".answer7").checked ==true){
    console.log("math2");
    container3.text("");
    container3.append(`<p class="jsText">Correct! In 2015, only 1.8% of science and engineering employees in the United States were Latinas.</p>`);
  }
  else if (document.querySelector(".answer8").checked ==true){
    container3.text("");
    container3.append(`<p class="jsText">Incorrect! In 2015, only 1.8% of science and engineering employees in the United States were Latinas. </p>`);
}
console.log("iffed");
}

function showResult4(){
  console.log("math");
  if (document.querySelector(".answer9").checked ==true){
    console.log("math2");
    container4.text("");
    container4.append(`<p class="jsText">Incorrect! Women accounted for only 12.4% of engineers in Australia’s labor force in 2016.
</p>`);
  }
  else if (document.querySelector(".answer10").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Incorrect! Women accounted for only 12.4% of engineers in Australia’s labor force in 2016.
</p>`);
}else if (document.querySelector(".answer11").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Correct! Women accounted for only 12.4% of engineers in Australia’s labor force in 2016.
</p>`);
}
}

function showResult5(){
  console.log("math");
  if (document.querySelector(".answer12").checked ==true){
    console.log("math2");
    container5.text("");
    container5.append(`<p class="jsText">Incorrect! Women in Australia made up only 27% of the STEM workforce across all sectors in 2016.
</p>`);
  }else if (document.querySelector(".answer13").checked ==true){
    container5.text("");
    container5.append(`<p class="jsText">Incorrect! Women in Australia made up only 27% of the STEM workforce across all sectors in 2016.
</p>`);
}else if (document.querySelector(".answer14").checked ==true){
    container5.text("");
    container5.append(`<p class="jsText">Correct! Women in Australia made up only 27% of the STEM workforce across all sectors in 2016.
</p>`);
}
}

function showResult6(){
  console.log("math");
  if (document.querySelector(".answer15").checked ==true){
    console.log("math2");
    container6.text("");
    container6.append(`<p class="jsText">Correct! Only 1/7 civil, mechanical, electrical, and chemical engineers are women in Canada.
</p>`);
}else if (document.querySelector(".answer16").checked ==true){
    container6.text("");
    container6.append(`<p class="jsText">Incorrect! Only 1/7 civil, mechanical, electrical, and chemical engineers are women in Canada.
</p>`);
}else if (document.querySelector(".answer17").checked ==true){
    container6.text("");
    container6.append(`<p class="jsText">Incorrect! Only 1/7 civil, mechanical, electrical, and chemical engineers are women in Canada.
</p>`);
}
}

function showResult7(){
  console.log("math");
  if (document.querySelector(".answer18").checked ==true){
    console.log("math2");
    container7.text("");
    container7.append(`<p class="jsText">Incorrect! Only 8.9% of aerospace engineers are women.
</p>`);
}else if (document.querySelector(".answer19").checked ==true){
    container7.text("");
    container7.append(`<p class="jsText">Correct! Only 8.9% of aerospace engineers are women.
</p>`);
}else if (document.querySelector(".answer20").checked ==true){
    container7.text("");
    container7.append(`<p class="jsText">Incorrect! Only 8.9% of aerospace engineers are women.
</p>`);
}
}
