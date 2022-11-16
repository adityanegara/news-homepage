import zeroBeforeNumber from "./zeroBeforeNumber";

describe("zeroBeforeNumber", () => {
  it("Should return a 0 followed by number if the parameter is less than 10", () => {
    expect(zeroBeforeNumber(9)).toEqual("09");
  });
  it("Should return the number if the parameter is more than 9", () => {
    expect(zeroBeforeNumber(10)).toEqual("10");
  });
});
