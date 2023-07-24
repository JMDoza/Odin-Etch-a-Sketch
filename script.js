function createElement(text) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.textContent = text;
  return square;
}

function addElement() {
  const container = document.querySelector(".grid-container");
  for (let i = 0; i < 256; i++) {
    container.appendChild(createElement(i));
  }
}
function changeCSS(element, styleName, style) {
  // Getting the stylesheet
  const stylesheet = document.styleSheets[0];
  let elementRules;

  // looping through all its rules and getting your rule
  for (let i = 0; i < stylesheet.cssRules.length; i++) {
    console.log(stylesheet.cssRules[i].selectorText);
    if (stylesheet.cssRules[i].selectorText === element)
      elementRules = stylesheet.cssRules[i];
  }

  // modifying the rule in the stylesheet
  elementRules.style.setProperty(styleName, style);
}

addElement();
// changeCSS(":root", "--gridSize", 20);
