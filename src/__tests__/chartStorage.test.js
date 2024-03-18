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
} = require('../lib/chartStorage');

beforeEach(() => {
    // Clear our mock localStorage before each test
    window.localStorage.clear();
});

test('saveChart should save a new chart at the end', () => {
  const chart1 = {type: 'line', data: [{x:130, y: 60}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  const chart2 = {type: 'scatter', data: [{x:10, y: 620}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  saveChart(chart1);
  saveChart(chart2);
  const chart = loadSavedChart(1);
  expect(chart).toEqual(chart2);
});

test('saveChart should overwrite an existing chart at specified index', () => {
  const chart1 = {type: 'line', data: [{x:10, y: 60}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  const chart2 = {type: 'bar', data: [{x:103, y: 602}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  saveChart(chart1);
  saveChart(chart2, 0);
  const charts = loadAllSavedCharts();
  expect(charts).toEqual([chart2]);
});

test('loadAllSavedChart should return all saved charts', () => {
  const charts = [{type: 'bar', data: [{x:20, y: 30}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'},
   {type: 'line', data: [{x:10, y: 60}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'}];

  const chart1 = {type: 'bar', data: [{x:20, y: 30}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  const chart2 = {type: 'line', data: [{x:10, y: 60}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  saveChart(chart1);
  saveChart(chart2);
  const allCharts = loadAllSavedCharts();
  expect(allCharts).toEqual(charts);
});

test('loadSavedChart should load a specific chart by index', () => {
  const chart1 = {type: 'scatter', data: [{x:210, y: 604}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  const chart2 = {type: 'line', data: [{x:130, y: 620}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'}
  saveChart(chart1);
  saveChart(chart2);
  const loadedChart = loadSavedChart(0);
  expect(loadedChart).toEqual(chart1);
});

test('updateCurrentChartData should update and loadCurrentChartData should load the current chart data', () => {
  const currentChartData = {type: 'line', data: [{x:910, y: 260}], xLabel: 'testx', yLabel: 'testy', title: 'testChart', color: 'orange'};
  updateCurrentChartData(currentChartData);
  const loadedData = loadCurrentChartData();
  expect(loadedData).toEqual(currentChartData);
});
