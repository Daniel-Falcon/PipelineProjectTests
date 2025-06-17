describe('Rick Astley - Never Gonna Give You Up', () => {
  it('opens the official video on YouTube', () => {
    // Visit the YouTube video URL
    cy.visit('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

    // Verify that the video title contains expected text
    cy.get('h1.title').should('contain.text', 'Never Gonna Give You Up');
  });
});
