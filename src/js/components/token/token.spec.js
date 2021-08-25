import { token, grid } from "@app/data/state";
import { placeToken, moveToken } from "@app/components/token/token";
import { UP, RIGHT, DOWN, LEFT } from "@app/data/constants";

const resetDom = () => (document.body.innerHTML = ``);
const resetGrid = () => {
  grid.rows = 24;
  grid.cols = 24;
  return grid;
};

const generateSmallGrid = () =>
  (document.body.innerHTML = `<div id="grid">
    <div class="grid-item-0-0"></div>
    <div class="grid-item-0-1"></div>
    <div class="grid-item-0-2"></div>
    <div class="grid-item-1-0"></div>
    <div class="grid-item-1-1"></div>
    <div class="grid-item-1-2"></div>
    <div class="grid-item-2-0"></div>
    <div class="grid-item-2-1"></div>
    <div class="grid-item-2-2"></div>
  </div>`);

const setGridSize = () => {
  grid.rows = 3;
  grid.cols = 3;
  return grid;
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

describe("moveToken", () => {
  beforeEach(() => {
    generateSmallGrid();
    setGridSize();
  });
  afterEach(() => {
    resetDom();
    resetGrid();
  });

  it("should move token in all directions", () => {
    const gridItem1a = document.querySelector(".grid-item-0-0");
    const gridItem1b = document.querySelector(".grid-item-0-1");
    const gridItem2a = document.querySelector(".grid-item-1-0");
    const gridItem2b = document.querySelector(".grid-item-1-1");
    gridItem1a.appendChild(token.element);

    expect(gridItem1a.firstChild).toBeTruthy();

    moveToken(RIGHT);
    expect(gridItem1a.firstChild).toBeFalsy();
    expect(gridItem1b.firstChild).toBeTruthy();

    moveToken(DOWN);
    expect(gridItem1b.firstChild).toBeFalsy();
    expect(gridItem2b.firstChild).toBeTruthy();

    moveToken(LEFT);
    expect(gridItem2b.firstChild).toBeFalsy();
    expect(gridItem2a.firstChild).toBeTruthy();

    moveToken(UP);
    expect(gridItem2a.firstChild).toBeFalsy();
    expect(gridItem1a.firstChild).toBeTruthy();
  });

  it("should not move token beyond grid", () => {
    const gridItemTopLeft = document.querySelector(".grid-item-0-0");
    const gridItemTopRight = document.querySelector(".grid-item-0-2");
    const gridItemBottomRight = document.querySelector(".grid-item-2-2");
    const gridItemBottomLeft = document.querySelector(".grid-item-2-0");
    gridItemTopLeft.appendChild(token.element);

    expect(gridItemTopLeft.firstChild).toBeTruthy();

    moveToken(RIGHT);
    moveToken(RIGHT);
    expect(gridItemTopRight.firstChild).toBeTruthy();
    moveToken(RIGHT);
    expect(gridItemTopRight.firstChild).toBeTruthy();

    moveToken(DOWN);
    moveToken(DOWN);
    expect(gridItemBottomRight.firstChild).toBeTruthy();
    moveToken(DOWN);
    expect(gridItemBottomRight.firstChild).toBeTruthy();

    moveToken(LEFT);
    moveToken(LEFT);
    expect(gridItemBottomLeft.firstChild).toBeTruthy();
    moveToken(LEFT);
    expect(gridItemBottomLeft.firstChild).toBeTruthy();

    moveToken(UP);
    moveToken(UP);
    expect(gridItemTopLeft.firstChild).toBeTruthy();
    moveToken(UP);
    expect(gridItemTopLeft.firstChild).toBeTruthy();
  });
});
