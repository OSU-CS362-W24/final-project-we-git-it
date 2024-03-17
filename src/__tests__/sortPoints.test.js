const sortPoints = require('../lib/sortPoints'); // Adjust the path as necessary

test('sortPoints should correctly sort an array of points by ascending X value', () => {
  const points = [
    { x: 3, y: 10 },
    { x: 1, y: 4 },
    { x: 2, y: 8 }
  ];
  const sortedPoints = sortPoints(points);
  const expectedPoints = [
    { x: 1, y: 4 },
    { x: 2, y: 8 },
    { x: 3, y: 10 }
  ];
  expect(sortedPoints).toEqual(expectedPoints);
  // Additionally, check if the original array reference is maintained
  expect(sortedPoints).toBe(points);
});

test('sortPoints should handle an array with a single point', () => {
  const singlePoint = [{ x: 5, y: 15 }];
  const sortedSinglePoint = sortPoints(singlePoint);
  expect(sortedSinglePoint).toEqual(singlePoint);
  expect(sortedSinglePoint).toBe(singlePoint);
});

test('sortPoints should not alter an already sorted array', () => {
  const sortedArray = [
    { x: 1, y: 5 },
    { x: 2, y: 10 },
    { x: 3, y: 15 }
  ];
  const sortedArrayResult = sortPoints(sortedArray);
  expect(sortedArrayResult).toEqual(sortedArray);
  expect(sortedArrayResult).toBe(sortedArray);
});

test('sortPoints should correctly sort points with negative X values', () => {
  const pointsWithNegatives = [
    { x: -3, y: 9 },
    { x: 0, y: 12 },
    { x: -1, y: 7 }
  ];
  const sortedPointsWithNegatives = sortPoints(pointsWithNegatives);
  const expectedPointsWithNegatives = [
    { x: -3, y: 9 },
    { x: -1, y: 7 },
    { x: 0, y: 12 }
  ];
  expect(sortedPointsWithNegatives).toEqual(expectedPointsWithNegatives);
  // Note: The expected order in the comment seems to be a mistake as it does not sort by ascending X values. Correcting it in the assertion:
  expect(sortedPointsWithNegatives).toEqual([
    { x: -3, y: 9 },
    { x: -1, y: 7 },
    { x: 0, y: 12 }
  ]);
  expect(sortedPointsWithNegatives).toBe(pointsWithNegatives);
});
