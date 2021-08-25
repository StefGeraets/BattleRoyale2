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
    expect(gridDom).toBe(gridDom);

    renderGrid(gridDom, 4, 4);
    expect(gridDom.childElementCount).toBe(16);
    expect(gridDom.firstChild.classList.contains("grid-item-0-0")).toBe(true);
    expect(gridDom.lastChild.classList.contains("grid-item-3-3")).toBe(true);
  });
});
