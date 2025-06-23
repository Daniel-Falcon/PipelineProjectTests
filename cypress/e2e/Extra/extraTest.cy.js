describe('Extra test', () => {
  it('Opens Event calendar', () => {
    cy.visit('https://growthzonedev.com/');

    cy.get('.ribbon-content')
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click()

  });
});
