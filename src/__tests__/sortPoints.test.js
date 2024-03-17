const sortPoints = require('../lib/sortPoints');

test('sortPoints should correctly sort an array of points by ascending X value', () => {
  const points = [
    {x: 3, y: 1},
    {x: 1, y: 123},
    {x: 2, y: 15}
  ];
  const sortedPoints = sortPoints(points);
  const expectedPoints = [
    {x: 1, y: 123},
    {x: 2, y: 15},
    {x: 3, y: 1}
  ];
  expect(sortedPoints).toEqual(expectedPoints);
});

test('sortPoints should handle an array with a single point', () => {
  const singlePoint = [{x: 5, y: 15}];
  const sortedSinglePoint = sortPoints(singlePoint);
  expect(sortedSinglePoint).toEqual(singlePoint);
});

test('sortPoints should not alter an already sorted array', () => {
  const sortedArray = [
    {x: 1, y: 5},
    {x: 2, y: 10},
    {x: 3, y: 8}
  ];
  const sortedArrayResult = sortPoints(sortedArray);
  expect(sortedArrayResult).toEqual(sortedArray);
});

test('sortPoints should correctly sort points with negative X values', () => {
  const pointsWithNegatives = [
    {x: -3, y: 9},
    {x: 0, y: 12},
    {x: -1, y: 7}
  ];
  const sortedPointsWithNegatives = sortPoints(pointsWithNegatives);
  const expectedPointsWithNegatives = [
    {x: -3, y: 9},
    {x: -1, y: 7},
    {x: 0, y: 12}
  ];
  expect(sortedPointsWithNegatives).toEqual(expectedPointsWithNegatives);
});
