function createElement(text) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.textContent = text;
  return square;
}

function addElement(num) {
  const container = document.querySelector(".grid-container");
  for (let i = 0; i < num; i++) {
    container.appendChild(createElement(i));
  }
}

function removeElement(num) {
  const container = document.querySelector(".grid-container");
  for (let i = 0; i < num; i++) {
    container.removeChild(container.lastElementChild);
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

function changeGridSize(newSize) {
  changeCSS(":root", "--gridSize", newSize);

  const newTotal = Math.pow(newSize, 2);
  const oldTotal = document.querySelector(".grid-container").childElementCount;

  if (newTotal > oldTotal) {
    addElement(newTotal - oldTotal);
  } else if (newTotal < oldTotal) {
    removeElement(oldTotal - newTotal);
    console.log(`${newTotal} < ${oldTotal}`);
  }
}

addElement(Math.pow(16, 2));
// changeGridSize(18);
