import "./grid.scss";

const gridContainer = document.querySelector("#grid");

const createCellElement = () => document.createElement("div");

const renderCell = (cell, x, y) =>
  (cell.className = `grid-item grid-item-${x}-${y}`);

export const renderGrid = (rows, cols) => {
  let x = 0;
  let y = 0;

  // Creates an array of total cell count
  const total = [...Array(rows * cols).keys()];

  total.map((c) => {
    y = c % cols;
    const cell = createCellElement();
    renderCell(cell, x, y);
    gridContainer.appendChild(cell);
    if (y === rows - 1) {
      x++;
    }
  });
};
