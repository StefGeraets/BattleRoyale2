import { time } from "@app/data/state";
import * as UI from "@app/ui/dm";

const fpsEl = document.querySelector("#fps");

let fps, secondsPassed, oldTimestamp;

const calculateFps = (timestamp) => {
  secondsPassed = (timestamp - oldTimestamp) / 1000;
  oldTimestamp = timestamp;
  fps = Math.round(1 / secondsPassed);
  return fps;
};

const loop = (timestamp) => {
  fpsEl.textContent = `${calculateFps(timestamp)} fps`;

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
