const board = document.querySelector(".board");
const enterButton = document.querySelector(".enter-btn");
const buttonContainer = document.querySelector(".buttons");
const blackButton = document.querySelector(".black");
const randomColors = document.querySelector(".random-colors");
const eraser = document.querySelector(".eraser");
const resetButton = document.querySelector(".reset");
const chosenColor = document.querySelector(".chosen-color");

let color = "black";
let coloring = false;

function populateBoard(cellsPerSide = 16) {
  // Actual width of board
  const boardSide = 550;

  for (let i = 1; i <= cellsPerSide ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellSideLength = boardSide / cellsPerSide;
    const cellSidePercentage = (cellSideLength * 100) / boardSide;
    cell.style.width = cell.style.height = `${cellSidePercentage}%`;
    board.appendChild(cell);
  }
}

populateBoard();

function selectRandomColor() {
  if (!coloring) {
    color = "white";
  } else {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}

chosenColor.addEventListener("change", (e) => color = e.target.value);

buttonContainer.addEventListener("click", (e) => {
  let buttonClass = e.target.classList;

  if (!buttonClass.contains("random-colors")) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.removeEventListener("mouseover", selectRandomColor);
    });
  }

  if (buttonClass.contains("black")) {
    color = "black";
    blackButton.style.backgroundColor = "black";
    blackButton.style.color = "white";
    eraser.style.backgroundColor = "";
    randomColors.style.backgroundColor = "";
  } else if (buttonClass.contains("chosen-color")) {
    blackButton.style.backgroundColor = "";
    blackButton.style.color = "";
    eraser.style.backgroundColor = "";
    randomColors.style.backgroundColor = "";
  } else if (buttonClass.contains("random-colors")) {
    randomColors.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
    blackButton.style.backgroundColor = "";
    blackButton.style.color = "";
    eraser.style.backgroundColor = "";
    e.stopPropagation();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", selectRandomColor);
    });
  } else if (buttonClass.contains("eraser")) {
    color = "white";
    eraser.style.backgroundColor = "white";
    blackButton.style.backgroundColor = "";
    blackButton.style.color = "";
    randomColors.style.backgroundColor = "";
  } else {
    eraser.style.backgroundColor = "";
    blackButton.style.backgroundColor = "";
    blackButton.style.color = "";
    randomColors.style.backgroundColor = "";
  }
});

enterButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  if (cells) {
    cells.forEach((cell) => board.removeChild(cell));
  }
  populateBoard(document.querySelector("#nb-of-cells").value);
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell")) {
    coloring = !coloring;
  }
});

board.addEventListener("mouseover", (e) => {
  if (coloring) {
    if (e.target.classList.contains("cell")) {
      e.target.style.backgroundColor = color;
    }
  }
});

resetButton.addEventListener("click", () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
