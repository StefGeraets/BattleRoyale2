import { handleKeyPress } from "./keyboardEvents";
import { togglePlayPause } from "./loop";
import { playPauseButton, mapContainer } from "@app/ui/elements";
import {
  setSafeZoneToPointerStyles,
  showSafeZonePointer,
  removeSafeZonePointer,
} from "@app/components/safezone/safezone";

export const initListeners = () => {
  window.addEventListener("keydown", handleKeyPress);
  playPauseButton.addEventListener("click", togglePlayPause);
  mapContainer.addEventListener("mousemove", setSafeZoneToPointerStyles);
  mapContainer.addEventListener("mouseenter", showSafeZonePointer);
  mapContainer.addEventListener("mouseleave", removeSafeZonePointer);
};
