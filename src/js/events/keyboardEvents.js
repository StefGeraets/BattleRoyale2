import { UP, RIGHT, DOWN, LEFT } from "@app/data/constants";
import { moveToken } from "@app/components/token/token";
import { togglePlayPause } from "@app/events/loop";

export const handleKeyPress = (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      moveToken(UP);
      break;
    case "ArrowRight":
    case "KeyD":
      moveToken(RIGHT);
      break;
    case "ArrowDown":
    case "KeyS":
      moveToken(DOWN);
      break;
    case "ArrowLeft":
    case "KeyA":
      moveToken(LEFT);
      break;
    case "KeyP":
    case "Space": // Spacebar
      togglePlayPause();
      break;
    default:
      break;
  }
};
