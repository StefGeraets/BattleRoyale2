import { renderGrid } from "@app/components/grid/grid";
import { placeToken } from "@app/components/token/token";

const playPauseButton = document.getElementById("playPause");
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");

export const togglePlayPause = () => {
  playPauseButton.classList.toggle("active");
  playIcon.classList.toggle("active");
  pauseIcon.classList.toggle("active");
};

export const dmView = () => {
  renderGrid(24, 24);
  placeToken();
};
