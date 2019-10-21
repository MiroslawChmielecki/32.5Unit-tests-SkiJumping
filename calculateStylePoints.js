const calculateStylePoints = styleNotes => {
  const minNote = Math.min(...styleNotes);
  const maxNote = Math.max(...styleNotes);
  const sum = styleNotes.reduce((a, b) => a + b, 0);
  return sum - minNote - maxNote;
};

module.exports = calculateStylePoints;
