describe('creates a line chart', () => {
  it('navigates to the line chart page and creates a line chart', () => {
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

  })
})