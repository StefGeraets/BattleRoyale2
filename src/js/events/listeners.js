import { handleKeyPress } from "./keyboardEvents";
import { togglePlayPause } from "./loop";
import { playPauseButton } from "@app/ui/elements";

export const initListeners = () => {
  window.addEventListener("keydown", handleKeyPress);
  playPauseButton.addEventListener("click", togglePlayPause);
};
