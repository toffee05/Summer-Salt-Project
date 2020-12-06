var navToggled = 0;

function toggleNav() {
  if (navToggled == 0) {
    openNav();
    navToggled = 1;
  } else {
    closeNav();
    navToggled = 0;
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "18%";
  document.getElementById("main").style.marginLeft = "18%";
  document.getElementById("abContent").style.width = "64%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("abContent").style.width = "70%";
}