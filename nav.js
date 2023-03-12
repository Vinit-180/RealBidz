
var input = document.getElementById("exampleInputPassword3");

var text = document.getElementById("text");
text.style.display="none";
// When the user presses any key on the keyboard, run the function
input.addEventListener("keyup", function(event) {

  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});

var input2 = document.getElementById("exampleInputPassword4");
var text2 = document.getElementById("text2");
text2.style.display="none";
// When the user presses any key on the keyboard, run the function
input2.addEventListener("keyup", function(event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    input2.style.display="block";
    text2.style.display = "block";
  } else {
    text2.style.display = "none"
  }
});

var input3 = document.getElementById("exampleInputPassword5");
var text3 = document.getElementById("text3");
text3.style.display="none";
// When the user presses any key on the keyboard, run the function
input3.addEventListener("keyup", function(event) {

  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    text3.style.display = "block";
  } else {
    text3.style.display = "none"
  }
});
