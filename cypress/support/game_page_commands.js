// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('logInGamePage', (password, email, domain, domain2) => {
    cy.get('input[placeholder="Choose Password"]').clear().type(password)
    cy.get('input[placeholder="Your email"]').clear().type(email)
    cy.get('input[placeholder="Domain"]').clear().type(domain)
    cy.get('div.dropdown__field').click()
    cy.get('div.dropdown__list').contains(domain2).click()
    cy.get('.checkbox__box').click()
});

Cypress.Commands.add('goToGamePage', () => {
    cy.get('a.start__link').click()
    cy.get('div.game.view').should('exist')
});