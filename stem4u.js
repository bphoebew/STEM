console.log("linked");
var subButton = $(".submit");
var container = $(".container");

subButton.on("click", showResult);

function showResult(){
  console.log("math");
  if (document.querySelector(".sci").checked ==true || document.querySelector(".math").checked == true){
    container.text("");
    container.append(`<p>You would be a great fit for STEM!</p>`);
   container.append(`<img class="dead" src = penguin.gif>`)
}else if(document.querySelector(".eng").checked ==true || document.querySelector(".hist") == true || document.querySelector(".art") == true){
    container.text("");
    container.append(`<p class="dead">Even though science and math aren't your favorite subjects, you would still be a great fit for a STEM career! People in STEM incorporate history, English, art, PE, and many other subjects into their work. </p>`);
   container.append(`<img class="dead" src = giphy.gif>`)
}
}
