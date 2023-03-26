describe("XPathLocators", () => {
  it("Checking Length", () => {
    cy.visit("https://jansir17.github.io/mehrab.github.io/");
    cy.xpath("//span[normalize-space()='about']").click();
  });
});
