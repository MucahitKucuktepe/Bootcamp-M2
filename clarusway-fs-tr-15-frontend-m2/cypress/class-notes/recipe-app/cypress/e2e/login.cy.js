describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1200, 1200);
  })
  it('login test', () => {
    cy.get('[data-test="loginHeader"]').contains('Recipe')
    cy.get('[data-test="loginName"]').should('be.visible').type("asp")
    cy.get('[data-test="loginPassword"]').should('be.visible').type("Clarusway7")
    cy.get('[data-test="loginSbmt"]').should('be.visible').click({ force: true })
    cy.url().should('include', '/home')
  })

})