describe('Rick Astley YouTube Search', () => {
  it('Searches and clicks the official "Never Gonna Give You Up" video', () => {
    cy.visit('https://www.youtube.com');

    // Wait for the search input to appear and type the search term
    cy.get('.ytSearchboxComponentInput').should('be.visible').type('never gonna give you up{enter}');

    // Wait for results to load and click the correct video
    cy.get('ytd-video-renderer', { timeout: 10000 })
      .contains('Rick Astley - Never Gonna Give You Up (Official Video)')
      .click();
  });
});
