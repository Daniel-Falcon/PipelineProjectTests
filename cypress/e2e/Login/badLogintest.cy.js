describe('Growthzone Login', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Ignore for this suite
    });
  });
  it('Login with invalid credentials', () => {
    cy.visit('https://growthzonedev.com/');
    cy.get('#check-user-name-field')
      .type('micronet\\daniel.falcon');

    cy.get('input[type="submit"][value="Next"]')
      .click();

    cy.get('input[name="Password"]')
      .type('ABC123');

    cy.get('#sign-up-button')
      .click();

  });
});