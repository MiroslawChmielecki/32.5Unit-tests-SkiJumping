const assert = require("assert");
const PointsForStyle = require("./calculateStylePoints");

describe("Points for style", () => {
  it("should return a total number when notes are different and are total numbers", () => {
    const actual = PointsForStyle([17, 18, 19, 16, 20]);

    const expected = 54;

    assert.equal(actual, expected);
  });

  it("should return a number when notes are different and are not only total numbers", () => {
    const actual = PointsForStyle([17.5, 18, 19.5, 16.5, 20]);

    const expected = 55;

    assert.equal(actual, expected);
  });

  it("should return a number when two lowest notes are the same", () => {
    const actual = PointsForStyle([17.5, 18.5, 19.5, 17.5, 20]);

    const expected = 55.5;

    assert.equal(actual, expected);
  });

  it("should return a number when two highest notes are the same", () => {
    const actual = PointsForStyle([17, 18.5, 19.5, 18.5, 19.5]);

    const expected = 56.5;

    assert.equal(actual, expected);
  });

  it("should return a number when all notes are the same", () => {
    const actual = PointsForStyle([17.5, 17.5, 17.5, 17.5, 17.5]);

    const expected = 52.5;

    assert.equal(actual, expected);
  });
});
