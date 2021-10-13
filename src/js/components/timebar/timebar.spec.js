const { resetDom } = require("@app/spec/helpers");
const { renderTimebar } = require("./timebar");

describe("renderTimebar", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="timebar"><div id="timer"></div></div>';
  });
  afterEach(() => {
    resetDom();
  });

  it("Should render timebar with specific timeblock heights", () => {
    const timebar = document.querySelector("#timebar");
    expect(timebar.childElementCount).toBe(1);
    renderTimebar(timebar);
    expect(timebar.childElementCount).toBe(10);
    expect(timebar.firstChild.id).toBe("timer");
    expect(timebar.lastChild).toHaveStyle("height: 13%;");
  });
});
