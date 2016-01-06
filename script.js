require("./style.pcss");

function createAvatar(el){
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

  const fullTitle = el.getAttribute("data-fulltitle") || "";
  let name = "";
  if (fullTitle) {
      let titleToken = fullTitle.split(" ");
      name = (titleToken[0][0]).toUpperCase();
      if(titleToken.length > 1){ 
        name += (titleToken[1][0]).toUpperCase();
      }
      el.setAttribute("data-avatar", name);
  }

  name =  el.getAttribute("data-avatar") || "PK";
  const idx1 = Math.abs(name[0].charCodeAt()-64);
  const idx2 = name.length>1 ? Math.abs(name[1].charCodeAt()-64) : 0;
  const idx_from_alphabets = ((idx1*(idx2))+idx1);
  el.setAttribute("style", "background-color:" + colors[idx_from_alphabets % colors.length]);
}

const insertListener = (event) => {
	if (event.animationName == "nodeInserted")  
    createAvatar(event.target);
};

document.addEventListener("animationstart", insertListener, false);
document.addEventListener("MSAnimationStart", insertListener, false);
document.addEventListener("webkitAnimationStart", insertListener, false);
