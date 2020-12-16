var spriteToggled = 0;

function toggleSprite() {
	if (spriteToggled == 0) {
		openSprite();
		spriteToggled = 1;
	} else {
		closeSprite();
		spriteToggled = 0;
	}
}

function openSprite() {
	document.getElementById("sprite").style.maxHeight = "200px";
	document.getElementById("sprite").style.borderRadius = "0 0 30px 30px";
	document.getElementById("spriteSubCont").style.borderRadius = "0 0 30px 30px";
	document.getElementById("openbtnSprite").style.borderRadius = "0 0 0 0";
}

function closeSprite() {
	document.getElementById("sprite").style.maxHeight = "0";
	document.getElementById("sprite").style.borderRadius = "15px 0 30px 30px";
	document.getElementById("spriteSubCont").style.borderRadius = "15px 0 30px 30px";
	document.getElementById("openbtnSprite").style.borderRadius = "0 0 0 15px";
}