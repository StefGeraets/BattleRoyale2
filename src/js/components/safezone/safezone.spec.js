import { resetDom, render3x3Grid } from "@app/spec/helpers";
import { safeZonePlacement } from "./safezone";
import { SAFE_ZONE_CLASS } from "@app/data/constants";

describe("safeZone", () => {
  describe.only("safeZonePlacement", () => {
    beforeEach(() => {
      render3x3Grid();
    });

    afterEach(() => {
      resetDom();
    });

    it("should set class on clicked item", () => {
      const gridItem = document.querySelector(".grid-item-1-1");
      // Mock event object passed through with mouse click
      const event = {
        target: gridItem,
      };

      expect(gridItem).not.toHaveClass(SAFE_ZONE_CLASS);
      safeZonePlacement(event);
      expect(gridItem).toHaveClass(SAFE_ZONE_CLASS);
    });

    it("should remove all other safezone classes", () => {
      const gridItem1 = document.querySelector(".grid-item-1-1");
      const gridItem2 = document.querySelector(".grid-item-1-2");
      // Mock event object passed through with mouse click
      const event = {
        target: gridItem1,
      };

      expect(gridItem1).not.toHaveClass(SAFE_ZONE_CLASS);
      safeZonePlacement(event);
      expect(gridItem1).toHaveClass(SAFE_ZONE_CLASS);
      expect(gridItem2).not.toHaveClass(SAFE_ZONE_CLASS);

      event.target = gridItem2;
      safeZonePlacement(event);
      expect(gridItem2).toHaveClass(SAFE_ZONE_CLASS);
      expect(gridItem1).not.toHaveClass(SAFE_ZONE_CLASS);
    });
  });
});
