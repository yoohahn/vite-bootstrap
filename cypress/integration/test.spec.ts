import viteConf from "../fixtures/vite.json";

describe("Simple test", () => {
  it("Should be able to go to vite page", () => {
    const getBtn = () => cy.get('[data-testid="btn"]');
    cy.visit(viteConf.url);
    getBtn().should("be.visible");
    getBtn().should("have.text", "count is: 0");
    getBtn().click();
    getBtn().should("have.text", "count is: 2");
  });
});
