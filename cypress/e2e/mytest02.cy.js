describe("My First Test", () => {
  it("verify title-positive", () => {
    cy.visit("https://facebook.com");
    cy.title().should("eq", "Facebook – log in or sign up");
  });

  it("verify title-Negative ", () => {
    cy.visit("https://facebook.com");
    cy.title().should("eq", "Facebook");
  });
});
