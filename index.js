
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
function city() {
    a = document.getElementById("inputCity").value;
    b = document.getElementById("inputArea").value;
    c = document.getElementById("inputType").value;
    d = document.getElementById("inputCategory").value;
    e = document.getElementById("inputPrice").value;

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)

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
      projectname.innerHTML = "Popular Projects In " + a;
    }

    else {
      projectname.innerHTML = "Popular Projects In Gujarat ";
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
    sessionStorage.setItem("image1",image1);
    h3_image="Images/house3_01.jpg"
    h3_image2="Images/house3_02.jpg"
    h3_image3="Images/house3_03.jpg"
    h3_image4="Images/house3_04.jpg"
    sessionStorage.setItem("image2",h3_image)
    sessionStorage.setItem("image3",h3_image2)
    sessionStorage.setItem("image4",h3_image3)
    sessionStorage.setItem("image04",h3_image4)

    if(e!='Budget')
    {
      document.getElementById("price1").innerHTML=e
      document.getElementById("price2").innerHTML=e
      document.getElementById("price3").innerHTML=e
      document.getElementById("price4").innerHTML=e
    }
}
function login1() {
  document.getElementById("login-page").style.display = "block";
  console.log("CSC")
}

