
console.log("Function load now")
var i = 0;
var txt = 'Welcome to Realbidz..';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function welcome() {
  if (i < txt.length) {
    document.getElementById("Welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(welcome, speed);
  }
  else {
    var element = document.getElementById("Welcome");
    var span = document.createElement("span");
    // Set the innerHTML of the span element

    span.innerHTML = ".";

    // Add the span element to the existing element
    element.appendChild(span);
    setInterval(function () {
      if (element.length > txt) {
        // var lastDot = dots[dots.length - 1];
        span.style.visibility = span.style.visibility === "hidden" ? "visible" : "hidden";
      }
      else {
        span.style.visibility = span.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 500);
  }
}

function changecity() {
  document.getElementById('inputArea').style.pointerEvents = 'All';
  document.getElementById('search').style.pointerEvents = 'All';
}
function city() {
  a = document.getElementById("inputCity").value;
  b = document.getElementById("inputArea").value;
  c = document.getElementById("inputType").value;
  d = document.getElementById("inputCategory").value;
  e = document.getElementById("inputPrice").value;
  window.localStorage.setItem("City",a)
  window.localStorage.setItem("Area",b)
  window.localStorage.setItem("Type",c)
  window.localStorage.setItem("Category",d)

  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  console.log(e.charAt(2))
  ans = ''
  for (let i in e) {
    if (e[i] == ' ') {
      continue;
    }
    else if (e[i] == 'L' || e[i] == 'a' || e[i] == 'c') {
      new_e = 'Lac'
      continue;
    }
    else if (e[i] == 'C' || e[i] == 'r') {
      new_e = 'Cr'
      continue;
    }
    if (e[i] == parseInt(e[i])) {
      ans += e[i]
    }
  }
  window.localStorage.setItem("Price",ans)
  console.log(ans)
  const cls = document.getElementsByClassName("address1");
  for (let i = 0; i < cls.length; i++) {
    let text = ''
    if (b != "Area/Village") {
      text += b;
    }

    if (a != "Any") {
      if (b != "Area/Village") {
        text = text + " , " + a;
      }
      else {
        text += a;
      }
    }
    cls[i].innerHTML = text;
  }

  const projectname = document.getElementById("project");

  if (a != "Any") {
    projectname.innerHTML = "Upcoming Projects In " + a;
  }

  else {
    projectname.innerHTML = "Upcoming Projects In Gujarat ";
  }
  const property = document.getElementById("properties");

  if (a != 'Any') {
    property.innerHTML = "Properties In " + a;
  }


  image1 = "Images/Change_house_1.jpg";
  image2 = "Images/Change_house_2.jpg"
  image3 = "Images/Change_house_3.jpg"
  image4 = "Images/house2_01.webp"
  document.getElementById("img1").src = image1
  document.getElementById("img2").src = image2
  document.getElementById("img3").src = image3
  document.getElementById("img4").src = image4
  sessionStorage.setItem("image1", image1);
  h3_image = "Images/house3_01.jpg"
  h3_image2 = "Images/house3_02.jpg"
  h3_image3 = "Images/house3_03.jpg"
  h3_image4 = "Images/house3_04.jpg"
  sessionStorage.setItem("image2", h3_image)
  sessionStorage.setItem("image3", h3_image2)
  sessionStorage.setItem("image4", h3_image3)
  sessionStorage.setItem("image04", h3_image4)

  if (e != 'Budget') {
    if (new_e == 'Lac') {
      document.getElementById("price1").innerHTML = parseInt(ans) - 5 + new_e
      document.getElementById("price2").innerHTML = parseInt(ans) + 5 + new_e
      document.getElementById("price3").innerHTML = parseInt(ans) - 4 + new_e
      document.getElementById("price4").innerHTML = parseInt(ans) + 2 + new_e
    }
    else {
      document.getElementById("price1").innerHTML = parseInt(ans) - 0.05 + 'Lac'
      document.getElementById("price2").innerHTML = parseInt(ans) + 0.5 + new_e
      document.getElementById("price3").innerHTML = parseInt(ans) - 0.04 + 'Lac'
      document.getElementById("price4").innerHTML = parseInt(ans) + 0.2 + new_e
    }
  }
}
function login1() {
  document.getElementById("login-page").style.display = "block";
  console.log("CSC")
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mail = localStorage.getItem("email");
console.log(mail)
document.getElementById('project1').addEventListener('click', () => {
  // console.log('loggedOut')

  if (mail == null) {
    //window.location.href = 'index.html#staticBackdrop';
    $('#staticBackdrop').modal('show');
  }
  else {
    // $('#staticBackdrop').modal('show');
    window.location.href = 'house1.html'
  }

})