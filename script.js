const BOARD_SIDE = 550;

const board = document.querySelector(".board");

// Get input from user related to number of cells per side of board (16 by default)
let userInput = document.querySelector("#nb-of-cells");

let cellsPerSide;

let cells = document.querySelectorAll(".cell");

const enterButton = document.querySelector(".enter-btn");
enterButton.addEventListener("click", () => {
  if (!userInput) {
    cellsPerSide = 16;
  }
  cellsPerSide = userInput.value;
  if (cells) {
    cells.forEach((cell) => {
      board.removeChild(cell);
    });
  }
  populateBoard();
  cells = document.querySelectorAll(".cell")
});

// Populate board with cells
function populateBoard() {
  let totalNumOfcells = cellsPerSide * cellsPerSide;
  for (let i = 1; i <= totalNumOfcells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellSideLength = BOARD_SIDE / cellsPerSide;
    const cellSidePercentage = (cellSideLength * 100) / BOARD_SIDE;
    cell.style.width = `${cellSidePercentage}%`;
    cell.style.height = `${cellSidePercentage}%`;

    board.appendChild(cell);
  }
}

const randomColors = document.querySelector('.random-colors');

function handleClick(e) {

  e.stopPropagation();

  function handleMouseOver() {
    console.log(coloring)
    if (!coloring) {
      color = 'white';
    } else {
      color = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
  }
  cells.forEach(cell => {
    cell.addEventListener('mouseover', handleMouseOver)
  });

  buttonContainer.addEventListener('click', e => {
    if (!(e.target.classList.contains('random-colors'))) {
      cells.forEach(cell => {
        cell.removeEventListener('mouseover', handleMouseOver);
      })
    }
  })
}

randomColors.addEventListener('click', handleClick)

// Allow user to change colors
let color = "black";

const buttonContainer = document.querySelector(".buttons");
function chooseColor() {
  const chosenColor = document.querySelector(".chosen-color");

  buttonContainer.addEventListener("click", (e) => {
    
    let buttonClass = e.target.classList;
    // debugger
    if (buttonClass.contains("black")) {
      color = "black";
    } else if (buttonClass.contains("chosen-color")) {
      color = chosenColor.value;
      console.log(color);
      } else if (buttonClass.contains("eraser")) {
        color = "white";
      }
    });
}
  console.log(color);

chooseColor();

// Add hover effect to change color of divs on board
// function colorCells() {
// }
let coloring = false;

board.addEventListener("click", e => {
  if (e.target.classList.contains("cell")) {
    if (!coloring) {
      coloring = true;
    } else {
      coloring = false;
    }
  }
  console.log(coloring);
});

board.addEventListener("mouseover", e => {
  if (coloring) {
    if (e.target.classList.contains("cell")) {
      console.log(color);
      e.target.style.backgroundColor = color;
    }
  }
});

//Reset board
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
