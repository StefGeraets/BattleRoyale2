import { handleKeyPress } from "./keyboardEvents";
import { togglePlayPause } from "./loop";
import * as EL from "@app/ui/elements";
import {
  setSafeZoneToPointerStyles,
  showSafeZonePointer,
  removeSafeZonePointer,
  safeZonePlacement,
} from "@app/components/safezone/safezone";

const buttonListeners = () => {
  EL.playPauseButton.addEventListener("click", togglePlayPause);
};

const keyboardListeners = () => {
  window.addEventListener("keydown", handleKeyPress);
};

const safeZoneListeners = () => {
  EL.mapContainer.addEventListener("mouseenter", showSafeZonePointer);
  EL.mapContainer.addEventListener("mousemove", setSafeZoneToPointerStyles);
  EL.mapContainer.addEventListener("mouseleave", removeSafeZonePointer);
  EL.getGridItems().forEach((item) => {
    item.addEventListener("click", safeZonePlacement);
  });
};

export const initListeners = () => {
  keyboardListeners();
  buttonListeners();
  safeZoneListeners();
};
