import { time } from "@app/data/state";
import * as UI from "@app/ui/dm";
import { fpsDebugContainer } from "@app/ui/elements";

let fps, secondsPassed, oldTimestamp;

const calculateFps = (timestamp) => {
  secondsPassed = (timestamp - oldTimestamp) / 1000;
  oldTimestamp = timestamp;
  fps = Math.round(1 / secondsPassed);
  return fps;
};

const loop = (timestamp) => {
  fpsDebugContainer.textContent = `${calculateFps(timestamp)} fps`;

  if (time.isPaused) {
    requestAnimationFrame(loop);
  }
};

export const togglePlayPause = () => {
  time.isPaused = !time.isPaused;

  UI.togglePlayPause();

  if (time.isPaused) {
    requestAnimationFrame(loop);
  }
};
