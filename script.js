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

// Add hover effect to change color of divs on board
// function colorCells() {
//   debugger
  // let cells = document.querySelectorAll('.cell');
  // cells.forEach(cell => {
  //   cell.addEventListener('mouseover', () => {
  //     cell.style.backgroundColor = 'black';
  //   });
  // });
// }

board.addEventListener("mouseover", e => {
  if(e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = 'black';
  }
})

// Allow user to change colors