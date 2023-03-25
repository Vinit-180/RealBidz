
document.getElementById("alert-login").style.display = "none";
document.getElementById('logout').style.display = "none";

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
    // input2.style.display = "block";
    text2.style.display = "block";
  } else {
    text2.style.display = "none"
  }
});

var input3 = document.getElementById("exampleInputPassword5");
var text3 = document.getElementById("text3");
text3.style.display = "none";
// When the user presses any key on the keyboard, run the function
input3.addEventListener("keyup", function (event) {
  console.log("function loading")
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    // input3.style.display="block";
    text3.style.display = "block";
  } else {
    text3.style.display = "none"
  }
});

function login() {
  mail = document.getElementById("exampleInputEmail1").value;
  pswd = document.getElementById("exampleInputPassword3").value;
  console.log(mail)
  if (mail == '' && pswd == '') {
    document.getElementById("alert-login").style.display = "block";
    alert("Enter Email id");
  }
  else {
    mail1 = localStorage.getItem("mail");
    pswd1 = localStorage.getItem("pswd");
    if (mail1 != mail && pswd != pswd1) {
      alert("PASSWORD AND EMAIL ARE NOT MATCHED");
    }
    else {
      document.getElementById("alert-login").style.display = "none";
    }
    // localStorage.setItem("mail", mail)
    // window.location.href = 'nav.html'
  }
}

var loggedUser = localStorage.getItem("email")
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
  window.localStorage.removeItem('email')
  window.location.href = 'index.html'
})
function valid()
{
  fname = document.forms["f1"]["fname"].value;
  lname = document.forms["f1"]["lname"].value;
  email = document.forms["f1"]["exampleInputEmail2"].value;
  f=1
  pat = /\W/;
  // obj = document.getElementById("fname").value;
  // obj2 = document.getElementById("lname").value;
  if (pat.test(fname)) {
    alert("Username should not have any special character");
    f=0
  }
  if(pat.test(lname))
  {
    alert("Username should not have any special character");
    f=0
  }
  pat2=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(!pat2.test(email))
  {
    alert("Email id not perfect")
    f=0
  }
  pat3=/^\d{10}$/
  number = document.forms["f1"]["phone"].value;
  if(!pat3.test(number))
  {
      alert("Mobile Number not perfect")
      f=0
  }
  if(f==1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function validate() {
  f = 1
  fname = document.forms["f1"]["fname"].value;
  lname = document.forms["f1"]["lname"].value;
  email = document.forms["f1"]["exampleInputEmail2"].value;
  number = document.forms["f1"]["phone"].value;
  pswd1 = document.forms["f1"]["exampleInputPassword4"].value;
  pswd2 = document.forms["f1"]["exampleInputPassword5"].value;
  if (fname.length == 0) {
    alert("Enter fname")
    f = 0
  }
  else if (lname.length == 0) {
    alert("Enter lname")
    f = 0
  }
  else if (email.length == 0) {
    alert("Enter email id")
    f = 0
  }
  else if (number.length == 0) {
    alert("Enter Mobile NUmber")
    f = 0
  }
  else if (pswd1.length == 0 || pswd2.length == 0) {
    alert("Enter password");
    f = 0
  }
  if (pswd1 != pswd2) {
    alert("Both PASSWORDS ARE MUST BE SAME");
    f = 0
  }
  f=valid()
  if (f == 1) {
    localStorage.setItem("email", email)
    localStorage.setItem("password", pswd2)
    window.location.href = 'index.html'
  }
}