const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let normalHill = (distance - kPoint) * 2;
  let bigHill = (distance - kPoint) * 1.8;
  let mammothHill = (distance - kPoint) * 1.2;

  switch (hillSize) {
    case "normalHill":
      return (60 * 10 + normalHill * 10) / 10;
    case "bigHill":
      return (60 * 10 + bigHill * 10) / 10;
    case "mammothHill":
      return (120 * 10 + mammothHill * 10) / 10;
    default:
      return "Incorrect type of hill";
  }
};

module.exports = calculateDistancePoints;
