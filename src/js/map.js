const gridContainer = document.querySelector("#grid");

export const renderGrid = (rows, cols) => {
  let x = 0;
  let y = 0;

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");

    y = c % cols;

    gridContainer.appendChild(cell).className =
      "grid-item grid-item-" + x + "-" + y;

    if (y === rows - 1) {
      x++;
    }
  }
};
