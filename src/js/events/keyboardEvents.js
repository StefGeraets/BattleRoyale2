import { UP, RIGHT, DOWN, LEFT } from "@app/data/constants";
import { moveToken } from "@app/components/token/token";
import { togglePlayPause } from "@app/events/loop";

export const handleKeyPress = (event) => {
  switch (event.code) {
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
    case "p":
    case "Space": // Spacebar
      togglePlayPause();
      break;
    default:
      break;
  }
};
