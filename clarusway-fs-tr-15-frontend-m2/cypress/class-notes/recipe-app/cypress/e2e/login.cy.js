describe('login', () => {
  it('login test', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="loginHeader"]').contains("Recipe")
  })
})