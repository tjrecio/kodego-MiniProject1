// sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  } else {
      navbar.classList.remove("sticky");
  }
}

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// toggle open-close topic accordions
let openButton = document.querySelector("#openAllSubtopics");
let closeButton = document.querySelector("#closeAllSubtopics");

openButton.onclick = function(){
    for(i = 0; i < 8; i++){
    document.getElementsByClassName("panel")[i].style.display = "block";
    }
}

closeButton.onclick = function(){
    for(i = 0; i < 8; i++){
        document.getElementsByClassName("panel")[i].style.display = "none";
    }
}
