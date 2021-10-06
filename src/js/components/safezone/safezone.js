import "./safezone.scss";
import { mapContainer, safeZonePlacer } from "@app/ui/elements";
import { SAFE_ZONE_CLASS, ACTIVE_CLASS } from "@app/data/constants";

export const setSafeZoneToPointerStyles = (event) => {
  mapContainer.style.setProperty("--mouse-x", event.pageX + "px");
  mapContainer.style.setProperty("--mouse-y", event.pageY + "px");
};

export const showSafeZonePointer = () => {
  safeZonePlacer.classList.add(ACTIVE_CLASS);
};

export const removeSafeZonePointer = () => {
  safeZonePlacer.classList.remove(ACTIVE_CLASS);
};

let selectedItem;
const clearSafeZones = (gridItem) => {
  if (selectedItem) {
    selectedItem.classList.remove(SAFE_ZONE_CLASS);
  }
  selectedItem = gridItem.target;
};

const setSafeZone = (gridItem) => {
  gridItem.target.classList.add(SAFE_ZONE_CLASS);
};

export const safeZonePlacement = (gridItem) => {
  clearSafeZones(gridItem);
  setSafeZone(gridItem);
};

export const setSafeZoneWidth = (width) => {
  mapContainer.style.setProperty("--safe-zone-width", width);
};
