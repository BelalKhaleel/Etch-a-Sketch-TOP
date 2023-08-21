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
    border: solid 1px lightgray;
    border-style: dotted;
    `;
  }
}

let isMouseDown = false;

function startColoring() {
  isMouseDown = true;
}

function stopColoring() {
  isMouseDown = false;
}

function colorSquares(event) {
  if (isMouseDown && event.target.classList.contains('content')) {
    event.target.style.background = 'black';
  }
}

document.addEventListener('mousedown', startColoring);
document.addEventListener('mouseup', stopColoring);
document.addEventListener('mousemove', colorSquares);

generateSquares(16);
