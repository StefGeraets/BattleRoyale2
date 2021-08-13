import sum from "../src/js/sum";

describe("sum", () => {
  it("should sum 2 numbers together", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it("should not accept strings", () => {
    expect(sum("a", "b")).toBeUndefined();
  });
});
