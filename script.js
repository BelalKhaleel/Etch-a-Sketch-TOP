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

function generateNewGrid() {
    let gridSquares = +prompt('Please enter number of squares per side for the new grid' , '16');
    if (gridSquares < 16 || gridSquares > 100) {
      alert('Number of squares per side must be between 16 and 100!');
    }
    let divs = document.querySelectorAll('.content');
    divs.forEach(div => {
      div.remove();
    });
    generateSquares(gridSquares);
}

const btn = document.querySelector('.choose-nb-squares');
btn.addEventListener('click', generateNewGrid);

const resetbtn = document.querySelector('.reset');
resetbtn.addEventListener('click', () => {
  let divs = document.querySelectorAll('.content');
  divs.forEach(div => {
    div.style.background = 'white';
  });
})

document.addEventListener('mousedown', startColoring);
document.addEventListener('mouseup', stopColoring);
document.addEventListener('mousemove', colorSquares);

generateSquares(16);
