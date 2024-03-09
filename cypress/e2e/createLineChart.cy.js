describe('creates a line chart', () => {
  it('navigates to the line chart page and creates a line chart', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Line" }).click()

    cy.findByRole("textbox", { name: "Chart title"}).type("Line Test")

    cy.findByRole("textbox", { name: "X label"}).type("Years")

    cy.findByRole("textbox", { name: "Y label"}).type("Number")

    cy.findByRole("spinbutton", { name: "X"}).type("2")

    cy.findByRole("spinbutton", { name: "Y"}).type("3")

    cy.findByRole("button", { name: "+"}).click()

    cy.findByRole("button", { name: "Generate chart"}).click()

  })
})