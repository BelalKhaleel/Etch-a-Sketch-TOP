function generateSquares(num) {
  let totalSquares = num * num;
  let container = document.querySelector(".container");

  for (let i = 0; i < totalSquares; i++) {
    let content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
    content.style.cssText = `
    width: ${100 / num}%; 
    height: ${100 / num}%;
    background: white; 
    border: solid 1px black;
    border-style: dotted;
    `;
  }
}

generateSquares(16);
