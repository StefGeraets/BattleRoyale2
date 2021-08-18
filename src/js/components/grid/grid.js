import "./grid.scss";

const gridContainer = document.querySelector("#grid");

const renderCell = (x, y) => {
  let cell = document.createElement("div");
  cell.className = `grid-item grid-item-${x}-${y}`;

  return cell;
};

export const renderGrid = (rows, cols) => {
  let x = 0;
  let y = 0;

  // Creates an array of total cell count
  const total = [...Array(rows * cols).keys()];

  total.map((c) => {
    y = c % cols;
    gridContainer.appendChild(renderCell(x, y));
    if (y === rows - 1) {
      x++;
    }
  });
};
