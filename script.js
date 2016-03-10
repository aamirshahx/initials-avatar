require("./style.pcss");

function createAvatar(el) {
	const colors = [
		"#626be0", "#e06277", "#b467da",
		"#e09862", "#1abc9c", "#f44336",
		"#3498db", "#673ab7", "#34495e",
		"#8bc24a", "#27ae60", "#2980b9",
		"#8e44ad", "#6c3244", "#f1c40f",
		"#2266e6", "#e74c3c", "#50e3c2",
		"#4498ae", "#f39c12", "#2c5e1c",
		"#ea1e63", "#62b6e0", "#484d9c"
	];

	let fullTitle = trim((el.getAttribute("data-fulltitle") || "").replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));
	if(fullTitle == ""){
		fullTitle = trim(el.getAttribute("data-fulltitle") || "");
	}
	let name = "";
	if(fullTitle) {
		let titleToken = fullTitle.split(" ");
		var firstChar = titleToken[0][0];
		name = isLetter(firstChar) ? firstChar.toUpperCase() : firstChar;
		if(titleToken.length > 1 && titleToken[titleToken.length - 1][0]) {
			var lastChar = titleToken[1][0];
			name += isLetter(lastChar) ? lastChar.toUpperCase() : lastChar;
		}
		el.setAttribute("data-avatar", name);
	} else {
		name = el.getAttribute("data-avatar");
		el.setAttribute("data-avatar", name || "");
	}

	name = el.getAttribute("data-avatar") || "PK";
	const idx1 = Math.abs(name[0].charCodeAt() - 64);
	const idx2 = name.length > 1 ? Math.abs(name[1].charCodeAt() - 64) : 0;
	const idx_from_alphabets = ((idx1 * (idx2)) + idx1);
	el.setAttribute("style", "background-color:" + colors[idx_from_alphabets % colors.length]);
}

const insertListener = (event) => {
	if(event.animationName == "nodeInserted")
		createAvatar(event.target);
};

const isLetter = (str) => {
	return str.length === 1 && (/[a-z]/i).test(str);
};

function trim(str) {
	if(typeof str == "string" && str && str.length)
		str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	else
		str = "";
	return str;
}

document.addEventListener("animationstart", insertListener, false);
document.addEventListener("MSAnimationStart", insertListener, false);
document.addEventListener("webkitAnimationStart", insertListener, false);
