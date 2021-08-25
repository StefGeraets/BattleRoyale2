import { token, grid } from "@app/data/state";
import { resetDom } from "@app/spec/helpers";
import { placeToken, moveToken } from "./token";
import { UP, RIGHT, DOWN, LEFT } from "@app/data/constants";

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

    expect(gridItem1a).toContainElement(token.element);

    moveToken(RIGHT);
    expect(gridItem1a).toBeEmptyDOMElement();
    expect(gridItem1b).toContainElement(token.element);

    moveToken(DOWN);
    expect(gridItem1b).toBeEmptyDOMElement();
    expect(gridItem2b).toContainElement(token.element);

    moveToken(LEFT);
    expect(gridItem2b).toBeEmptyDOMElement();
    expect(gridItem2a).toContainElement(token.element);

    moveToken(UP);
    expect(gridItem2a).toBeEmptyDOMElement();
    expect(gridItem1a).toContainElement(token.element);
  });

  it("should not move token beyond grid", () => {
    const gridItemTopLeft = document.querySelector(".grid-item-0-0");
    const gridItemTopRight = document.querySelector(".grid-item-0-2");
    const gridItemBottomRight = document.querySelector(".grid-item-2-2");
    const gridItemBottomLeft = document.querySelector(".grid-item-2-0");
    gridItemTopLeft.appendChild(token.element);

    expect(gridItemTopLeft).toContainElement(token.element);

    moveToken(RIGHT);
    moveToken(RIGHT);
    expect(gridItemTopRight).toContainElement(token.element);
    moveToken(RIGHT);
    expect(gridItemTopRight).toContainElement(token.element);

    moveToken(DOWN);
    moveToken(DOWN);
    expect(gridItemBottomRight).toContainElement(token.element);
    moveToken(DOWN);
    expect(gridItemBottomRight).toContainElement(token.element);

    moveToken(LEFT);
    moveToken(LEFT);
    expect(gridItemBottomLeft).toContainElement(token.element);
    moveToken(LEFT);
    expect(gridItemBottomLeft).toContainElement(token.element);

    moveToken(UP);
    moveToken(UP);
    expect(gridItemTopLeft).toContainElement(token.element);
    moveToken(UP);
    expect(gridItemTopLeft).toContainElement(token.element);
  });
});
