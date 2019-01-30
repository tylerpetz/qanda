// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Application Renders', () => {
    cy.visit('/')
    cy.contains('h1', 'Questionaire Builder')
  })
})
