const assert = require("assert");
const totalPoints = require("./calculateTotalPoints");

describe("Total points", () => {
  describe("Normall Hill", () => {
    it("should return number when points for gate and wind are positive", () => {
      const actual = totalPoints(
        111,
        "normalHill",
        98,
        [19, 19.5, 19, 19, 19],
        14.4,
        3.2
      );

      const expected = 160.6;

      assert.equal(actual, expected);
    });

    it("should return number when points for gate and wind are negative", () => {
      const actual = totalPoints(
        106.5,
        "normalHill",
        98,
        [18.5, 18.5, 18.5, 19, 19],
        -13.5,
        -6.4
      );

      const expected = 113.1;

      assert.equal(actual, expected);
    });

    it("should return number when points for wind are negative and for gate positive", () => {
      const actual = totalPoints(
        106,
        "normalHill",
        98,
        [18.5, 19, 18.5, 18.5, 18.5],
        -12,
        6.4
      );

      const expected = 125.9;

      assert.equal(actual, expected);
    });
  });

  describe("Big Hill", () => {
    it("should return number when points for gate and wind are positive", () => {
      const actual = totalPoints(
        134,
        "bigHill",
        120,
        [19, 20, 19.5, 19, 18.5],
        5.4,
        4.8
      );

      const expected = 152.9;

      assert.equal(actual, expected);
    });

    it("should return number when points for gate and wind are negative", () => {
      const actual = totalPoints(
        133,
        "bigHill",
        120,
        [18.5, 18.5, 19, 19, 19],
        -5.1,
        -2.5
      );

      const expected = 132.3;

      assert.equal(actual, expected);
    });

    it("should return number when points for wind are negative and for gate positive", () => {
      const actual = totalPoints(
        107.5,
        "bigHill",
        120,
        [15.5, 16.5, 16, 16, 16.5],
        -4.3,
        2
      );

      const expected = 83.7;

      assert.equal(actual, expected);
    });
  });

  describe("Mammoth Hill", () => {
    it("should return number when points for gate and wind are positive", () => {
      const actual = totalPoints(
        227.5,
        "mammothHill",
        200,
        [18, 18.5, 17.5, 18.5, 18.5],
        8.4,
        8.7
      );

      const expected = 225.1;

      assert.equal(actual, expected);
    });

    it("should return number when points for gate and wind are negative", () => {
      const actual = totalPoints(
        144,
        "mammothHill",
        200,
        [13.5, 13.5, 13.5, 14, 13.5],
        -5.6,
        -2
      );

      const expected = 85.7;

      assert.equal(actual, expected);
    });
  });
});
