
var input = document.getElementById("exampleInputPassword3");

var text = document.getElementById("text");
text.style.display = "none";
// When the user presses any key on the keyboard, run the function
input.addEventListener("keyup", function (event) {

  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});

var input2 = document.getElementById("exampleInputPassword4");
var text2 = document.getElementById("text2");
text2.style.display = "none";
// When the user presses any key on the keyboard, run the function
input2.addEventListener("keyup", function (event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    input2.style.display = "block";
    text2.style.display = "block";
  } else {
    text2.style.display = "none"
  }
});

// var input3 = document.getElementById("exampleInputPassword5");
// var text3 = document.getElementById("text3");
// text3.style.display="none";
// // When the user presses any key on the keyboard, run the function
// input3.addEventListener("keyup", function(event) {

//   // If "caps lock" is pressed, display the warning text
//   if (event.getModifierState("CapsLock")) {
//     text3.style.display = "block";
//   } else {
//     text3.style.display = "none"
//   }
// });
document.getElementById("alert-login").style.display = "none";
document.getElementById('logout').style.display = "none";
function login() {
  mail = document.getElementById("exampleInputEmail1").value;
  pswd = document.getElementById("exampleInputPassword3").value;

  console.log(mail)
  if (mail == '' && pswd == '') {
    document.getElementById("alert-login").style.display = "block";
  }
  else {
    document.getElementById("alert-login").style.display = "none";
    localStorage.setItem("mail", mail)
    // window.location.href = 'nav.html'
  }
}

var loggedUser = window.localStorage.getItem("mail")
console.log("111")
console.log(loggedUser)
const logout = document.querySelector('.logout')
if (loggedUser != null) {
  document.getElementById('login').style.display = "none";
  document.getElementById('signUp1').style.display = "none";
  //    logout.classList.add('active')
  document.getElementById('logout').style.display = "block";
}
if (loggedUser == null) {
  document.getElementById('logout').style.display = "none";
  // window.location.href='index.html'
}
document.getElementById('logout').addEventListener('click', () => {
  console.log('loggedOut')
  window.localStorage.removeItem('mail')
  window.location.href = 'index.html'
})
