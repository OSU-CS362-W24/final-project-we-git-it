describe('Creates and saves a chart then checks the gallery link to see if it is present.', () => {
  it('Creates and saves and chart and verifies it exists in the gallery', () => {
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
  })
})