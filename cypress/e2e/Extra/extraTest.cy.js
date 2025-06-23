describe('Extra test', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Ignore for this suite
    });
  });

  it('Opens Event calendar', () => {
    cy.visit('https://growthzonedev.com/');

    cy.get('.ribbon-content')
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click()

  });
});
