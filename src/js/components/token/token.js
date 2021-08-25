import "./token.scss";

import { token, grid } from "@app/data/state";
import { UP, RIGHT, DOWN, LEFT } from "@app/data/constants";

const getGridCell = (x, y) => document.querySelector(`.grid-item-${y}-${x}`);
const appendToken = (target) => target.appendChild(token.element);

const setTokenPosition = (tokenPosition) => {
  let position = { ...tokenPosition };

  return (direction) => {
    switch (direction) {
      case UP:
        if (position.y !== 0) position.y--;
        break;
      case RIGHT:
        if (position.x !== grid.cols - 1) position.x++;
        break;
      case DOWN:
        if (position.y !== grid.rows - 1) position.y++;
        break;
      case LEFT:
        if (position.x !== 0) position.x--;
        break;
      default:
        break;
    }

    return position;
  };
};

const moveDirection = setTokenPosition(token.position);

export const placeToken = () => {
  appendToken(getGridCell(0, 0));
};

export const moveToken = (direction) => {
  const position = moveDirection(direction);
  appendToken(getGridCell(position.x, position.y));
};
