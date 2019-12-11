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
    container.append(`<p class="jsText">Correct! The amygdala processes your emotions.</p>`);
  }
  else if (document.querySelector(".answer2").checked ==true){
    container.text("");
    container.append(`<p class="jsText">Incorrect! The hypothalamus maintains your body's internal balance.</p>`);
}
console.log("iffed");
}

function showResult1(){
  console.log("math");
  if (document.querySelector(".answer3").checked ==true){
    console.log("iffed2");
    container1.text("");
    container1.append(`<p class="jsText">Correct! The hippocampus is the part of the brain that forms memories.</p>`);
  }
  else if (document.querySelector(".answer4").checked ==true) {
    container1.text("");
    container1.append(`<p class="jsText">Incorrect! The amygdala processes your emotions. </p>`);
}
}

function showResult2(){
  console.log("math");
  if (document.querySelector(".answer6").checked ==true){
    console.log("math2");
    container2.text("");
    container2.append(`<p class="jsText">Correct! The temporal lobe is where language recognition takes place & auditory input is processed.</p>`);
  }
  else if (document.querySelector(".answer5").checked ==true){
    container2.text("");
    container2.append(`<p class="jsText">Incorrect! The occipital lobe is where VISUAL information is processed. </p>`);
}
console.log("iffed");
}

function showResult3(){
  console.log("math");
  if (document.querySelector(".answer7").checked ==true){
    console.log("math2");
    container3.text("");
    container3.append(`<p class="jsText">Correct! Neurons are the basic working units of the brain.</p>`);
  }
  else if (document.querySelector(".answer8").checked ==true){
    container3.text("");
    container3.append(`<p class="jsText">Incorrect! Dendrites are the branches on the soma that receive information from other neurons. </p>`);
}
console.log("iffed");
}

function showResult4(){
  console.log("math");
  if (document.querySelector(".answer9").checked ==true){
    console.log("math2");
    container4.text("");
    container4.append(`<p class="jsText">Incorrect! Nodes of Ranvier are gaps in the myelin sheath that allow for ions (charged molecules) to diffuse in & out of the neuron, speeding up impulses.
</p>`);
  }
  else if (document.querySelector(".answer10").checked ==true){
    container4.text("");
    container4.append(`<p class="jsText">Correct! The myelin sheath insulates the axon, allowing electrical impulses to be transmitted quickly.
</p>`);
}
}

function showResult5(){
  console.log("math");
  if (document.querySelector(".answer12").checked ==true){
    console.log("math2");
    container5.text("");
    container5.append(`<p class="jsText">Incorrect! The nucleus holds genetic information and is located in the body of the neuron.
</p>`);
}else if (document.querySelector(".answer11").checked ==true){
    container5.text("");
    container5.append(`<p class="jsText">Correct! Soma is a fancier term for "cell body."
</p>`);
}
}
