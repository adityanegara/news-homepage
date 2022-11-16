import elipsisOnText from "./elipsisOnText";

describe("elipsisOnText", () => {
  it("Should be able to return an elipsis if the text length is too long", () => {
    expect(elipsisOnText("123456789", 3)).toEqual("123...");
  });
  it("Should be able to return the text if the text length isnt too long", () => {
    expect(elipsisOnText("12345", 10)).toEqual("12345");
  });
});
