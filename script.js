const BOARD_SIDE = 550;

const board = document.querySelector(".board");

const enterButton = document.querySelector(".enter-btn");

const buttonContainer = document.querySelector(".buttons");

const blackButton = document.querySelector(".black");

const randomColors = document.querySelector(".random-colors");

const eraser = document.querySelector(".eraser");

const resetButton = document.querySelector(".reset");

let userInput = document.querySelector("#nb-of-cells");

let cellsPerSide;

let cells = document.querySelectorAll(".cell");

let color = "black";

let coloring = false;

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

(function chooseColor() {

  const chosenColor = document.querySelector(".chosen-color");

  buttonContainer.addEventListener("click", (e) => {
    let buttonClass = e.target.classList;

    if (buttonClass.contains("black")) {
      color = "black";
      blackButton.style.backgroundColor = "black";
      blackButton.style.color = "white";
      eraser.style.backgroundColor = "";
      randomColors.style.backgroundColor = "";

    } else if (buttonClass.contains("chosen-color")) {
      color = chosenColor.value;
      console.log(color);
      blackButton.style.backgroundColor = "";
      blackButton.style.color = "";
      eraser.style.backgroundColor = "";
      randomColors.style.backgroundColor = "";

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
})();

function handleClick(e) {

  randomColors.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  blackButton.style.backgroundColor = "";
  blackButton.style.color = "";
  eraser.style.backgroundColor = "";

  e.stopPropagation();

  function handleMouseOver() {
    console.log(coloring);
    if (!coloring) {
      color = "white";
    } else {
      color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  }

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", handleMouseOver);
  });

  buttonContainer.addEventListener("click", (e) => {
    if (!e.target.classList.contains("random-colors")) {
      cells.forEach((cell) => {
        cell.removeEventListener("mouseover", handleMouseOver);
      });
    }
  });

}

randomColors.addEventListener("click", handleClick);

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

  cells = document.querySelectorAll(".cell");

});

board.addEventListener("click", (e) => {

  if (e.target.classList.contains("cell")) {

    if (!coloring) {
      coloring = true;
    } else {
      coloring = false;
    }

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

  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });

});
