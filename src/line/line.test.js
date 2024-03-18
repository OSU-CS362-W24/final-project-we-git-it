/**
* @jest-environment jsdom
*/

require("@testing-library/jest-dom")
const domTesting = require("@testing-library/dom")
const userEvent = require("@testing-library/user-event").default
const fs = require("fs")

function initDomFromFiles(htmlPath, jsPath) {
    const html = fs.readFileSync(htmlPath, 'utf8')
    document.open()
    document.write(html)
    document.close()

    jest.isolateModules(function () {
        require(jsPath)
    })
}

beforeEach(() => {
    window.localStorage.clear()
  });
  
test("Verify adding values functions properly", async function () {
    initDomFromFiles(
        `${__dirname}/line.html`,
        `${__dirname}/line.js`
    )

    let x = domTesting.getAllByLabelText(document, "X")[0];
    let y = domTesting.getAllByLabelText(document, "Y")[0];
    const plus = domTesting.getByText(document, "+");

    await userEvent.click(x);
    await userEvent.type(x, "17");
    await userEvent.click(y);
    await userEvent.type(y, "2");
    
    await userEvent.click(plus)

    expect(x).toHaveValue(17)
    expect(y).toHaveValue(2)

    x = domTesting.getAllByLabelText(document, "X")[1];
    y = domTesting.getAllByLabelText(document, "Y")[1];

    expect(x).toBeEmptyDOMElement()
    expect(y).toBeEmptyDOMElement()

    await userEvent.click(x);
    await userEvent.type(x, "5");
    await userEvent.click(y);
    await userEvent.type(y, "21");
    
    await userEvent.click(plus)

    expect(x).toHaveValue(5)
    expect(y).toHaveValue(21)
    
    x = domTesting.getAllByLabelText(document, "X")[2];
    y = domTesting.getAllByLabelText(document, "Y")[2];

    expect(x).toBeEmptyDOMElement()
    expect(y).toBeEmptyDOMElement()

    await userEvent.click(x);
    await userEvent.type(x, "55");
    await userEvent.click(y);
    await userEvent.type(y, "123");
    
    await userEvent.click(plus)

    expect(x).toHaveValue(55)
    expect(y).toHaveValue(123)

    x = domTesting.getAllByLabelText(document, "X")[3];
    y = domTesting.getAllByLabelText(document, "Y")[3];

    expect(x).toBeEmptyDOMElement()
    expect(y).toBeEmptyDOMElement()
    
})



test("Alerts displayed for missing chart data", async function () {
    initDomFromFiles(
        `${__dirname}/line.html`,
        `${__dirname}/line.js`
    )
    const generate = domTesting.getByText(document, "Generate chart");
    const spy = jest.spyOn(window, "alert")
    spy.mockImplementation(function () {})

    await userEvent.click(generate)

    expect(spy).toHaveBeenCalled()

    const alertString = spy.mock.calls[0][0];
    expect(alertString).toBe("Error: No data specified!");

    spy.mockRestore()

})



test("Clear chart data works", async function () {
    initDomFromFiles(
        `${__dirname}/line.html`,
        `${__dirname}/line.js`
    )
    const xLabel = domTesting.getByLabelText(document, "X label");
    const yLabel = domTesting.getByLabelText(document, "Y label");
   
    await userEvent.click(xLabel);
    await userEvent.type(xLabel, "x label string!");

    await userEvent.click(yLabel);
    await userEvent.type(yLabel, "y label string!");

    const chartTitle = domTesting.getByLabelText(document, "Chart title");
   
    await userEvent.click(chartTitle);
    await userEvent.type(chartTitle, "title of chart");

    let x = domTesting.getAllByLabelText(document, "X")[0];
    let y = domTesting.getAllByLabelText(document, "Y")[0];
    const plus = domTesting.getByText(document, "+");

    await userEvent.click(x);
    await userEvent.type(x, "17");
    await userEvent.click(y);
    await userEvent.type(y, "2");
    
    await userEvent.click(plus)

    x = domTesting.getAllByLabelText(document, "X")[1];
    y = domTesting.getAllByLabelText(document, "Y")[1];

    await userEvent.click(x);
    await userEvent.type(x, "5");
    await userEvent.click(y);
    await userEvent.type(y, "21");
    
    await userEvent.click(plus)
    
    x = domTesting.getAllByLabelText(document, "X")[2];
    y = domTesting.getAllByLabelText(document, "Y")[2];

    await userEvent.click(x);
    await userEvent.type(x, "55");
    await userEvent.click(y);
    await userEvent.type(y, "123");
    
    await userEvent.click(plus)


    const clear = domTesting.getByText(document, "Clear chart data");
    
    await userEvent.click(clear);


    x = domTesting.getAllByLabelText(document, "X")[0];
    y = domTesting.getAllByLabelText(document, "Y")[0];

    
    expect(x).toBeEmptyDOMElement()
    expect(y).toBeEmptyDOMElement()

    expect(xLabel).toBeEmptyDOMElement()
    expect(yLabel).toBeEmptyDOMElement()

    expect(chartTitle).toBeEmptyDOMElement()

})


test("Data correctly sent to chart generation function", async function () {
    initDomFromFiles(
        `${__dirname}/line.html`,
        `${__dirname}/line.js`
    )

    jest.mock("../lib/generateChartImg.js")

    const generateChartImgSpy = require("../lib/generateChartImg.js")
    
    const generate = domTesting.getByText(document, "Generate chart");

    // generateChartImgSpy.mockImplementation(() => {});
    const spy = jest.spyOn(generateChartImgSpy);

    await userEvent.click(generate);


    expect(spy).toHaveBeenCalled()

    const alertString = spy.mock.calls[0][0];
    expect(alertString).toBe("Error: No data specified!");

    spy.mockRestore()

})


