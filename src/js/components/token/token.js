import "./token.scss";

import { token, grid } from "@app/data/state";

const getGridCell = (x, y) => document.querySelector(`.grid-item-${x}-${y}`);
const appendToken = (target) => target.appendChild(token.element);

export const placeToken = () => {
  appendToken(getGridCell(0, 0));
};

export const setTokenPosition = (direction) => {
  switch (direction) {
    case "up":
      if (token.position.y !== 0) token.position.y--;
      break;
    case "right":
      if (token.position.x !== grid.cols - 1) token.position.x++;
      break;
    case "down":
      if (token.position.y !== grid.rows - 1) token.position.y++;
      break;
    case "left":
      if (token.position.x !== 0) token.position.x--;
      break;
    default:
      break;
  }
};

export const moveToken = (direction) => {
  setTokenPosition(direction);
  appendToken(getGridCell(token.position.x, token.position.y));
};
