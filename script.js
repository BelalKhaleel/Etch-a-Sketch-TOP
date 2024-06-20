const board = document.querySelector('.board');

// Get input from user related to number of cells per side of board (16 by default)
const input = document.querySelector('input');

// const enterButton = document.querySelector('.enter-btn');
// enterButton.addEventListener("click", () => {

// })

let squaresPerSide = Number(input.value);

// Find a way to calculate the sides of the each div to prevent overflow from parent container

// Populate board with cells
function populateBoard (squaresPerSide = 16) {
  let totalnbOfSquares = squaresPerSide*squaresPerSide;
  for(let i = 1; i <= totalnbOfSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");

    board.appendChild(div);
  }
}

populateBoard()

// Allow user to change colors
let color = 'black';
function chooseColor() {
  const chosenColor = document.querySelector('.chosen-color');
  const buttonContainer = document.querySelector('.buttons');
  
  buttonContainer.addEventListener('click', e => {
    let buttonClass = e.target.classList;

    if (buttonClass.contains('black')) {
      color = 'black';
    } else if (buttonClass.contains('chosen-color')) {
      color = chosenColor.value;
    } else if (buttonClass.contains('random-colors')) {
      color = '#' + Math.floor(Math.random()*16777215).toString(16);
    } else if (buttonClass.contains('eraser')) {
      color = 'white';
    }
    console.log(color)
  })
}

chooseColor()

// Add hover effect to change color of divs on board
// function colorCells() {
// }
let coloring = false;

board.addEventListener("click", e => {
  if (!coloring) {
    coloring = true;
  } else {
    coloring = false;
  }
  console.log(coloring);
})


board.addEventListener("mouseover", e => {
  if(coloring) {
      if(e.target.classList.contains('cell')) {
        console.log(color)
        e.target.style.backgroundColor = color;
      }
    }
})

//Reset board
const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
  let divs = document.querySelectorAll('div');
  divs.forEach(div => {
    div.style.backgroundColor = 'white';
  });
})