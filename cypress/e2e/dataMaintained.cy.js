describe('Tests that data is maintained between chart types.', () => {
  it('data is maintained.', () => {
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
  })
})