const assert = require("assert");
const PointsForDistance = require("./calculateDistancePoints");

describe("Points for distance", () => {
  describe("Normall Hill", () => {
    it("should return number when jump is longer than K point", () => {
      const actual = PointsForDistance(103, "normalHill", 90);

      const expected = 86;

      assert.equal(actual, expected);
    });

    it("should return number when jump is shorter than K point", () => {
      const actual = PointsForDistance(80.5, "normalHill", 90);

      const expected = 41;

      assert.equal(actual, expected);
    });

    it("should return number when jump is equal than K point", () => {
      const actual = PointsForDistance(90, "normalHill", 90);

      const expected = 60;

      assert.equal(actual, expected);
    });
  });

  describe("Big Hill", () => {
    it("should return number when jump is longer than K point", () => {
      const actual = PointsForDistance(142, "bigHill", 120);

      const expected = 99.6;

      assert.equal(actual, expected);
    });

    it("should return number when jump is shorter than K point", () => {
      const actual = PointsForDistance(90.5, "bigHill", 120);

      const expected = 6.9;

      assert.equal(actual, expected);
    });

    it("should return number when jump is equal than K point", () => {
      const actual = PointsForDistance(120, "bigHill", 120);

      const expected = 60;

      assert.equal(actual, expected);
    });
  });

  describe("Mammoth Hill", () => {
    it("should return number when jump is longer than K point", () => {
      const actual = PointsForDistance(223.5, "mammothHill", 200);

      const expected = 148.2;

      assert.equal(actual, expected);
    });

    it("should return number when jump is shorter than K point", () => {
      const actual = PointsForDistance(185.5, "mammothHill", 200);

      const expected = 102.6;

      assert.equal(actual, expected);
    });

    it("should return number when jump is equal than K point", () => {
      const actual = PointsForDistance(200, "mammothHill", 200);

      const expected = 120;

      assert.equal(actual, expected);
    });
  });
});
