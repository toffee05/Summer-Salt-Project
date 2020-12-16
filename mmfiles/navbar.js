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
	document.getElementById("mySidebar").style.width = "22%";
	document.getElementById("main").style.marginLeft = "22%";
	document.getElementById("line").style.width = "18vw";
	document.getElementById("line2").style.width = "18vw";
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	document.getElementById("line").style.width = "26vw";
	document.getElementById("line2").style.width = "26vw";
}