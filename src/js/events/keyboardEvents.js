import { UP, RIGHT, DOWN, LEFT } from "@app/data/constants";
import { moveToken } from "@app/components/token/token";

export const handleKeyPress = (event) => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      moveToken(UP);
      break;
    case "ArrowRight":
    case "d":
      moveToken(RIGHT);
      break;
    case "ArrowDown":
    case "s":
      moveToken(DOWN);
      break;
    case "ArrowLeft":
    case "a":
      moveToken(LEFT);
      break;
    default:
      break;
  }
};
