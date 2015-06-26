function makeGridlines(x, y, color) {
	if (color == "") {
		color = "#000000";
	}
	for (var i = 1; i != x + 1; i++) {
		var line = document.createElement("div");
		line.style.top = String((1/(x + 1)) * i * 100) + "vh";
		line.style.background = color;
		line.classList.add("horizontalgridline");
		document.body.appendChild(line);
	}
	for (var i = 1; i != y + 1; i++) {
		var line = document.createElement("div");
		line.style.left = String((1/(y + 1)) * i * 100) + "vw";
		line.style.background = color;
		line.classList.add("verticalgridline");
		document.body.appendChild(line);
	}
}
