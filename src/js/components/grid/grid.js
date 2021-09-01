import "./grid.scss";
import { gridContainer } from "@app/ui/elements";

const createCellElement = () => document.createElement("div");
// Creates an array of total cell count
const calculateCellAmount = (rows, cols) => [...Array(rows * cols).keys()];
const renderCell = (cell, x, y) =>
  (cell.className = `grid-item grid-item-${x}-${y}`);

export const renderGrid = (rows, cols, element = gridContainer) => {
  let x = 0;
  let y = 0;

  calculateCellAmount(rows, cols).map((c) => {
    y = c % cols;
    const cell = createCellElement();
    renderCell(cell, x, y);
    element.appendChild(cell);
    if (y === rows - 1) {
      x++;
    }
  });
};
