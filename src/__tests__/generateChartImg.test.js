const generateChartImg = require('../lib/generateChartImg'); // Adjust the path as necessary

test('generateChartImg returns a URL for the generated chart image', async () => {
  // Note: This test will make a real API request and may be flaky. Use with caution.
  const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }];
  const type = 'line';
  const xLabel = 'X';
  const yLabel = 'Y';
  const title = 'Test Chart';
  const color = 'red';

  const imageUrl = await generateChartImg(type, data, xLabel, yLabel, title, color);
  expect(imageUrl).toContain('blob:nodedata:');
});