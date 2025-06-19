describe('Growthzone Login', () => {
  it('Login with valid credentials', () => {
    cy.get('#check-user-name-field')
      .type('micronet\\daniel.falcon');

    cy.get('input[type="submit"][value="Next"]')
      .click();

    cy.get('input[name="Password"]')
      .type('Exael1349!');

    cy.get('#sign-up-button')
      .click();

  });
});
