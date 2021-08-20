import "./token.scss";

import { token, grid } from "@app/data/state";

const getFirstGridCell = () => document.querySelector(".grid-item");

export const placeToken = () => {
  getFirstGridCell().appendChild(token.element);
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
  let gridItem = document.querySelector(
    `.grid-item-${token.position.x}-${token.position.y}`
  );
  gridItem.appendChild(token.element);
};
