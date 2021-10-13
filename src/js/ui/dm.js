import { renderGrid } from "@app/components/grid/grid";
import { placeToken } from "@app/components/token/token";
import { renderTimebar } from "@app/components/timebar/timebar";
import * as EL from "@app/ui/elements";

export const togglePlayPause = () => {
  EL.playPauseButton.classList.toggle("active");
  EL.playIcon.classList.toggle("active");
  EL.pauseIcon.classList.toggle("active");
};

export const dmView = () => {
  renderGrid(24, 24);
  renderTimebar();
  placeToken();
};
