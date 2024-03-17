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

test('saveChart should save a new chart and loadAllSavedCharts should load it', () => {
    const chart = { id: '1', data: [10, 20, 30] };
    saveChart(chart);
    const charts = loadAllSavedCharts();
    expect(charts).toEqual([chart]);
});

test('saveChart should overwrite an existing chart at specified index', () => {
    const chart1 = { id: '1', data: [10, 20, 30] };
    const chart2 = { id: '2', data: [40, 50, 60] };
    saveChart(chart1);
    saveChart(chart2, 0); // Overwrite chart at index 0
    const charts = loadAllSavedCharts();
    expect(charts).toEqual([chart2]);
});

test('loadSavedChart should load a specific chart by index', () => {
    const chart = { id: '1', data: [10, 20, 30] };
    saveChart(chart);
    const loadedChart = loadSavedChart(0);
    expect(loadedChart).toEqual(chart);
});

test('updateCurrentChartData should update and loadCurrentChartData should load the current chart data', () => {
    const currentChartData = { type: 'bar', data: [1, 2, 3] };
    updateCurrentChartData(currentChartData);
    const loadedData = loadCurrentChartData();
    expect(loadedData).toEqual(currentChartData);
});
