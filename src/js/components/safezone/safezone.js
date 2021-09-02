import "./safezone.scss";
import { mapContainer, getGridItems, safeZonePlacer } from "@app/ui/elements";
import { SAFE_ZONE_CLASS } from "@app/data/constants";

export const setSafeZoneToPointerStyles = (event) => {
  mapContainer.style.setProperty("--mouse-x", event.pageX + "px");
  mapContainer.style.setProperty("--mouse-y", event.pageY + "px");
};

export const showSafeZonePointer = () => {
  safeZonePlacer.classList.add("active");
};

export const removeSafeZonePointer = () => {
  safeZonePlacer.classList.remove("active");
};

const clearSafeZones = () => {
  getGridItems().forEach((item) => {
    item.classList.remove(SAFE_ZONE_CLASS);
  });
};

const setSafeZone = (gridItem) => {
  gridItem.target.classList.add(SAFE_ZONE_CLASS);
};

export const safeZonePlacement = (gridItem) => {
  clearSafeZones();
  setSafeZone(gridItem);
};

export const setSafeZoneWidth = (width) => {
  mapContainer.style.setProperty("--safe-zone-width", width);
};
