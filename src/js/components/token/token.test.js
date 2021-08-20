import { token, grid } from "@app/data/state";
import { setTokenPosition } from "@app/components/token/token";

const resetState = () => {
  token.position.x = 0;
  token.position.y = 0;
};

describe.only("setTokenPosition", () => {
  afterEach(() => {
    resetState();
  });

  describe("do change position", () => {
    it("when moving up", () => {
      token.position.y = 2;
      expect(token.position.y).toBe(2);

      setTokenPosition("up");
      expect(token.position.y).toBe(1);

      setTokenPosition("up");
      expect(token.position.y).toBe(0);
    });

    it("when moving right", () => {
      expect(token.position.x).toBe(0);

      setTokenPosition("right");
      expect(token.position.x).toBe(1);
    });

    it("when moving down", () => {
      expect(token.position.y).toBe(0);

      setTokenPosition("down");
      expect(token.position.y).toBe(1);
    });

    it("when moving left", () => {
      token.position.x = 1;
      expect(token.position.x).toBe(1);

      setTokenPosition("left");
      expect(token.position.x).toBe(0);
    });
  });

  describe("does not change position at the edge of the grid", () => {
    it("when moving up", () => {
      token.position.y = 1;
      expect(token.position.y).toBe(1);

      setTokenPosition("up");
      expect(token.position.y).toBe(0);

      setTokenPosition("up");
      expect(token.position.y).toBe(0);
    });

    it("when moving right", () => {
      token.position.x = grid.rows - 2;
      expect(token.position.x).toBe(22);

      setTokenPosition("right");
      expect(token.position.x).toBe(23);

      setTokenPosition("right");
      expect(token.position.x).toBe(23);
    });

    it("when moving down", () => {
      token.position.y = grid.cols - 2;
      expect(token.position.y).toBe(22);

      setTokenPosition("down");
      expect(token.position.y).toBe(23);

      setTokenPosition("down");
      expect(token.position.y).toBe(23);
    });

    it("when moving left", () => {
      token.position.x = 1;
      expect(token.position.x).toBe(1);

      setTokenPosition("left");
      expect(token.position.x).toBe(0);

      setTokenPosition("left");
      expect(token.position.x).toBe(0);
    });
  });
});
