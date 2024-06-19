const board = document.querySelector('.board');

// Get input from user related to number of cells per side of board (16 by default)
let input = document.querySelector('input');

let squaresPerSide = Number(input.value);
console.log(squaresPerSide)

// Find a way to calculate the sides of the each div to prevent overflow from parent container

// Populate board with cells
function populateBoard (squaresPerSide = 16) {
  console.log(squaresPerSide)
  let totalnbOfSquares = squaresPerSide*squaresPerSide;
  for(let i = 1; i <= totalnbOfSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");

    board.appendChild(div);
  }
}

populateBoard()

// Add hover effect to change color of divs on board

// Allow user to change colors