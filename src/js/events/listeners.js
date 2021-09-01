import { handleKeyPress } from "./keyboardEvents";
import { togglePlayPause } from "./loop";

const playPauseButton = document.getElementById("playPause");

export const initListeners = () => {
  window.addEventListener("keydown", handleKeyPress);
  playPauseButton.addEventListener("click", togglePlayPause);
};
