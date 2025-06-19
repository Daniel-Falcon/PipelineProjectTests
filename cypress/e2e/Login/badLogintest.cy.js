describe('Growthzone Login', () => {
  it('Login with invalid credentials', () => {
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