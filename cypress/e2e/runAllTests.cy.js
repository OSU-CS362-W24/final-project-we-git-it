describe('Runs all the tests.', () => {
  it('createLineChart', () => {
    cy.visit('/')

    // Clicks on the Line link on the header bar of the site
    cy.findByRole("link", { name: "Line" }).click()

    // Creates a line chart by inputting a title, labels, and values
    cy.findByRole("textbox", { name: "Chart title"}).type("Line Test")

    cy.findByRole("textbox", { name: "X label"}).type("Years")

    cy.findByRole("textbox", { name: "Y label"}).type("Number")

    cy.findByRole("spinbutton", { name: "X"}).type("1")

    cy.findByRole("spinbutton", { name: "Y"}).type("2")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(1).type("2")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(1).type("4")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(2).type("3")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(2).type("6")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(3).type("4")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(3).type("8")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(4).type("5")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(4).type("10")
  
    cy.findByRole("button", { name: "Generate chart"}).click()

    // Checks that the chart exists
    cy.get("img").should("exist")
  });

  it('dataMaintained', () => {
    cy.visit('/')

    // Clicks on the Line link on the header bar of the site
    cy.findByRole("link", { name: "Line" }).click()

    // Fills in information for chart
    cy.findByRole("textbox", { name: "Chart title"}).type("Maintained")

    cy.findByRole("textbox", { name: "X label"}).type("Length")

    cy.findByRole("textbox", { name: "Y label"}).type("Height")

    cy.findByRole("spinbutton", { name: "X"}).type("1")

    cy.findByRole("spinbutton", { name: "Y"}).type("2")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(1).type("2")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(1).type("4")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(2).type("3")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(2).type("6")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(3).type("4")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(3).type("8")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(4).type("5")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(4).type("10")

    // Clicks on the Scatter link on the header bar of the site
    cy.findByRole("link", { name: "Scatter" }).click()

    // Assert and check if the inputs have remained after the page change
    cy.findByRole("textbox", { name: "Chart title" }).should("have.value", "Maintained");

    cy.findByRole("textbox", { name: "X label" }).should("have.value", "Length");

    cy.findByRole("textbox", { name: "Y label" }).should("have.value", "Height");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(0).should("have.value", "1");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(0).should("have.value", "2");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(1).should("have.value", "2");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(1).should("have.value", "4");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(2).should("have.value", "3");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(2).should("have.value", "6");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(3).should("have.value", "4");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(3).should("have.value", "8");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(4).should("have.value", "5");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(4).should("have.value", "10");

    // Clicks on the Bar link on the header bar of the site
    cy.findByRole("link", { name: "Bar" }).click()

    // Assert and check if the inputs have remained after the page change
    cy.findByRole("textbox", { name: "Chart title" }).should("have.value", "Maintained");

    cy.findByRole("textbox", { name: "X label" }).should("have.value", "Length");

    cy.findByRole("textbox", { name: "Y label" }).should("have.value", "Height");

    cy.findAllByRole("textbox", { name: "X" }).eq(0).should("have.value", "1");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(0).should("have.value", "2");

    cy.findAllByRole("textbox", { name: "X" }).eq(1).should("have.value", "2");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(1).should("have.value", "4");

    cy.findAllByRole("textbox", { name: "X" }).eq(2).should("have.value", "3");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(2).should("have.value", "6");

    cy.findAllByRole("textbox", { name: "X" }).eq(3).should("have.value", "4");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(3).should("have.value", "8");

    cy.findAllByRole("textbox", { name: "X" }).eq(4).should("have.value", "5");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(4).should("have.value", "10");

    // Clicks on the Line link on the header bar of the site
    cy.findByRole("link", { name: "Line" }).click()

    // Assert and check if the inputs have remained after the page change
    cy.findByRole("textbox", { name: "Chart title" }).should("have.value", "Maintained");

    cy.findByRole("textbox", { name: "X label" }).should("have.value", "Length");

    cy.findByRole("textbox", { name: "Y label" }).should("have.value", "Height");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(0).should("have.value", "1");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(0).should("have.value", "2");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(1).should("have.value", "2");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(1).should("have.value", "4");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(2).should("have.value", "3");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(2).should("have.value", "6");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(3).should("have.value", "4");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(3).should("have.value", "8");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(4).should("have.value", "5");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(4).should("have.value", "10");
  });

  it('saveChart', () => {
    cy.visit('/')

    // Clicks on the Line link on the header bar of the site
    cy.findByRole("link", { name: "Line" }).click()

    // Creates a line chart by inputting a title, labels, and values
    cy.findByRole("textbox", { name: "Chart title"}).type("Save Test")

    cy.findByRole("textbox", { name: "X label"}).type("Years")

    cy.findByRole("textbox", { name: "Y label"}).type("Number")

    cy.findByRole("spinbutton", { name: "X"}).type("1")

    cy.findByRole("spinbutton", { name: "Y"}).type("2")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(1).type("2")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(1).type("4")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(2).type("3")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(2).type("6")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(3).type("4")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(3).type("8")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(4).type("5")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(4).type("10")
  
    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("button", { name: "Save chart" }).click()

    // Clicks on the Gallery link on the header bar of the site
    cy.findByRole("link", { name: "Gallery" }).click()

    // Finds the name of the created chart in the gallery to prove it has been saved
    cy.findByText("Save Test").should("exist")
  });

  it('clickOnSaved', () => {
    cy.visit('/')

    // Clicks on the Line link on the header bar of the site
    cy.findByRole("link", { name: "Line" }).click()

    // Creates a line chart by inputting a title, labels, and values
    cy.findByRole("textbox", { name: "Chart title"}).type("Click On Saved Test")

    cy.findByRole("textbox", { name: "X label"}).type("Years")

    cy.findByRole("textbox", { name: "Y label"}).type("Number")

    cy.findByRole("spinbutton", { name: "X"}).type("1")

    cy.findByRole("spinbutton", { name: "Y"}).type("2")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(1).type("2")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(1).type("4")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(2).type("3")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(2).type("6")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(3).type("4")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(3).type("8")

    cy.findByRole("button", { name: "+"}).click()

    cy.findAllByRole("spinbutton", { name: "X"}).eq(4).type("5")

    cy.findAllByRole("spinbutton", { name: "Y"}).eq(4).type("10")
  
    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("button", { name: "Save chart" }).click()

    // Clicks on the Gallery link on the header bar of the site
    cy.findByRole("link", { name: "Gallery" }).click()

    // Clicks on the saved chart and reopens it for editing
    cy.findByText("Click On Saved Test").click()

    // Assert and check if the inputs have remained after the page change
    cy.findByRole("textbox", { name: "Chart title" }).should("have.value", "Click On Saved Test");

    cy.findByRole("textbox", { name: "X label" }).should("have.value", "Years");

    cy.findByRole("textbox", { name: "Y label" }).should("have.value", "Number");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(0).should("have.value", "1");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(0).should("have.value", "2");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(1).should("have.value", "2");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(1).should("have.value", "4");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(2).should("have.value", "3");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(2).should("have.value", "6");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(3).should("have.value", "4");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(3).should("have.value", "8");

    cy.findAllByRole("spinbutton", { name: "X" }).eq(4).should("have.value", "5");

    cy.findAllByRole("spinbutton", { name: "Y" }).eq(4).should("have.value", "10");

    // Checks that the chart exists
    cy.get("img").should("exist")

    // Check to see if in the right builder
    cy.findByText("Line Chart Builder").should("exist")
  });
})