/**
 * @jest-environment jsdom
 */

require("@testing-library/jest-dom")

const localStorageMock = (() => {
    let store = {};
    return {
      getItem: function(key) {
        return store[key] || null;
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      }
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});

const {
    saveChart,
    loadAllSavedCharts,
    loadSavedChart,
    updateCurrentChartData,
    loadCurrentChartData
} = require('../lib/chartStorage'); // Adjust the path as necessary

beforeEach(() => {
    // Clear our mock localStorage before each test
    window.localStorage.clear();
});

test('saveChart should save a new chart at the end', () => {
  const chart1 = { id: '1', data: [20, 30] };
  const chart2 = { id: '2', data: [50, 60] };
  saveChart(chart1);
  saveChart(chart2);
  const chart = loadSavedChart(1);
  expect(chart).toEqual(chart2);
});

test('saveChart should overwrite an existing chart at specified index', () => {
  const chart1 = { id: '1', data: [20, 30] };
  const chart2 = { id: '2', data: [50, 60] };
  saveChart(chart1);
  saveChart(chart2, 0);
  const charts = loadAllSavedCharts();
  expect(charts).toEqual([chart2]);
});

test('loadAllSavedChart should return all saved charts', () => {
  const charts = [{ id: '1', data: [20, 30] }, { id: '2', data: [50, 60] }];
  const chart1 = { id: '1', data: [20, 30] };
  const chart2 = { id: '2', data: [50, 60] };
  saveChart(chart1);
  saveChart(chart2);
  const allCharts = loadAllSavedCharts();
  expect(allCharts).toEqual(charts);
});

test('loadSavedChart should load a specific chart by index', () => {
  const chart1 = { id: '1', data: [20, 30] };
  const chart2 = { id: '2', data: [50, 60] };
  saveChart(chart1);
  saveChart(chart2);
  const loadedChart = loadSavedChart(0);
  expect(loadedChart).toEqual(chart1);
});

test('updateCurrentChartData should update and loadCurrentChartData should load the current chart data', () => {
  const currentChartData = { type: 'bar', data: [2, 3] };
  updateCurrentChartData(currentChartData);
  const loadedData = loadCurrentChartData();
  expect(loadedData).toEqual(currentChartData);
});
