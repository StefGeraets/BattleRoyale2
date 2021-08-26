import { resetDom } from "@app/spec/helpers";
import { renderGrid } from "./grid";

describe("renderGrid", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="map"><div id="grid"></div></div>';
  });

  afterEach(() => {
    resetDom();
  });

  it("should render grid cells by specified amount", () => {
    const gridDom = document.querySelector("#grid");
    expect(gridDom).toBeEmptyDOMElement();

    renderGrid(4, 4, gridDom);
    expect(gridDom.childElementCount).toBe(16);
    expect(gridDom.firstChild).toHaveClass("grid-item-0-0");
    expect(gridDom.lastChild).toHaveClass("grid-item-3-3");
  });
});
