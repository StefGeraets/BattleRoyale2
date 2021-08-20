import { token, grid } from "@app/data/state";
import { placeToken, setTokenPosition } from "@app/components/token/token";
import { UP, RIGHT, DOWN, LEFT } from "@app/data/constants";

const resetState = () => {
  token.position.x = 0;
  token.position.y = 0;
};

describe("placeToken", () => {
  it("should place the token", () => {
    document.body.innerHTML = `<div class="grid-item-0-0"></div>`;
    const gridItem = document.querySelector(".grid-item-0-0");

    expect(gridItem.firstChild).toBeFalsy();

    placeToken();
    expect(gridItem.firstChild).toBeTruthy();
  });
});

describe.only("setTokenPosition", () => {
  afterEach(() => {
    resetState();
  });

  describe("do change position", () => {
    it("when moving up", () => {
      token.position.y = 1;
      expect(token.position.y).toBe(1);

      setTokenPosition(UP);
      expect(token.position.y).toBe(0);
    });

    it("when moving right", () => {
      expect(token.position.x).toBe(0);

      setTokenPosition(RIGHT);
      expect(token.position.x).toBe(1);
    });

    it("when moving down", () => {
      expect(token.position.y).toBe(0);

      setTokenPosition(DOWN);
      expect(token.position.y).toBe(1);
    });

    it("when moving left", () => {
      token.position.x = 1;
      expect(token.position.x).toBe(1);

      setTokenPosition(LEFT);
      expect(token.position.x).toBe(0);
    });
  });

  describe("does not change position at the edge of the grid", () => {
    it("when moving up", () => {
      token.position.y = 1;
      expect(token.position.y).toBe(1);

      setTokenPosition(UP);
      expect(token.position.y).toBe(0);

      setTokenPosition(UP);
      expect(token.position.y).toBe(0);
    });

    it("when moving right", () => {
      token.position.x = grid.rows - 2;
      expect(token.position.x).toBe(22);

      setTokenPosition(RIGHT);
      expect(token.position.x).toBe(23);

      setTokenPosition(RIGHT);
      expect(token.position.x).toBe(23);
    });

    it("when moving down", () => {
      token.position.y = grid.cols - 2;
      expect(token.position.y).toBe(22);

      setTokenPosition(DOWN);
      expect(token.position.y).toBe(23);

      setTokenPosition(DOWN);
      expect(token.position.y).toBe(23);
    });

    it("when moving left", () => {
      token.position.x = 1;
      expect(token.position.x).toBe(1);

      setTokenPosition(LEFT);
      expect(token.position.x).toBe(0);

      setTokenPosition(LEFT);
      expect(token.position.x).toBe(0);
    });
  });
});
