const container = document.getElementById("grid-container");

function makeRows(rows, cols) {

//we first reset the existing grid by deleting every cell.
  container.querySelectorAll(".grid-item").forEach(e => e.remove());

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};