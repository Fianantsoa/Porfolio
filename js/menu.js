function visible() {
    var menu = document.getElementById("myMenu");
	var buttonMenu = menu.style.display;
    if (buttonMenu == "none"){
		menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
