const container = document.getElementById("grid-container");

function paint(e) {
  let cellCollor = e.target.style.backgroundColor;

  if (cellCollor == "") {
    let randomColor = getRandomColor();
    e.target.style.backgroundColor = randomColor;
    e.target.style.webkitFilter = "brightness(1)";
    e.target.value = 1;
  } else {
    let brightnessValue = e.target.value;

    if (brightnessValue > 0) {
      e.target.value -= 0.1;
      e.target.style.webkitFilter = `brightness(${e.target.value})`;
    }
  }
}

function getRandomColor() {
  let randomColor = `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
  return randomColor;
}

function getRandomNumber() {
  return Math.random() * 255;
}

function makeRows(rows, cols) {

  //we first reset the existing grid by deleting every cell.
  container.querySelectorAll(".grid-item").forEach(e => e.remove());

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", paint)
  };
};

makeRows(16,16);

//control function, reset and resize grid

const button = document.getElementById("reset-btn");

function resetGrid() {
  let size = prompt("Please enter size between 2 and 64");
  if (isNaN(size)) resetGrid();
  if (size < 2 || size > 64) resetGrid();

  makeRows(size, size);
}

button.addEventListener("click", resetGrid)