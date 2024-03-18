const generateChartImg = require('../lib/generateChartImg'); 

test('generateChartImg returns a URL for the generated chart image', async () => {
  const type = 'line';
  const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }];
  const xLabel = 'X';
  const yLabel = 'Y';
  const title = 'Test Chart';
  const color = 'orange';

  const imageUrl = await generateChartImg(type, data, xLabel, yLabel, title, color);
  expect(imageUrl).toContain('blob:nodedata:');
});