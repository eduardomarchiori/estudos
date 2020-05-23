describe("My First Test", () => {
  it("Ao clicar em criar post deve ser redirecionado para /posts/novo", () => {
    cy.visit("/posts");
    cy.get("[data-testid=create-post]").click();
    cy.url().should("include", "/posts/novo");
  });
  it("Ao clicar em posts deve ser redirecionado para /posts", () => {
    cy.visit("/posts/novo");
    cy.get("[data-testid=posts]").click();
    cy.url().should("include", "/posts");
  });
});
