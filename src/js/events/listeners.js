import { handleKeyPress } from "./keyboardEvents";
import { togglePlayPause } from "./loop";
import * as EL from "@app/ui/elements";
import {
  setSafeZoneToPointerStyles,
  showSafeZonePointer,
  removeSafeZonePointer,
  placeSafeZone,
} from "@app/components/safezone/safezone";

export const initListeners = () => {
  window.addEventListener("keydown", handleKeyPress);
  EL.playPauseButton.addEventListener("click", togglePlayPause);
  EL.mapContainer.addEventListener("mousemove", setSafeZoneToPointerStyles);
  EL.mapContainer.addEventListener("mouseenter", showSafeZonePointer);
  EL.mapContainer.addEventListener("mouseleave", removeSafeZonePointer);
  EL.getGridItems().forEach((item) => {
    item.addEventListener("click", placeSafeZone);
  });
};
