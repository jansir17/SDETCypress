describe("HTTP Request", () => {
  it("GET Request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("POST", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "Testing POST request",
        body: "This is post call",
        userID: 1,
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it("PUT", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "Test-POST -UPDATED",
        body: "This is put call",
        userId: 1,
        id: 1,
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("Delete", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200);
  });
});
