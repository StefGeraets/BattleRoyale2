import "./safezone.scss";
import { mapContainer, gridItems, safeZonePlacer } from "@app/ui/elements";
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
  gridItems.forEach((item) => {
    item.classList.remove(SAFE_ZONE_CLASS);
  });
};

export const placeSafeZone = (gridItem) => {
  clearSafeZones();
  gridItem.classList.add(SAFE_ZONE_CLASS);
};
