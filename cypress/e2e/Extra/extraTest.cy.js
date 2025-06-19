describe('YouTube Rick Astley Search', () => {
  it('searches and clicks the Rick Astley video', () => {
    // Go to YouTube
    cy.visit('https://www.youtube.com')

    // Accept cookies if the popup appears (optional)
    cy.get('button').contains(/accept/i).click({ force: true }).should('not.exist').catch(() => {})

    // Type search term and press enter
    cy.get('input#search').type('never gonna give you up{enter}')

    // Wait for results and click the Rick Astley video link
    cy.contains('a#video-title', /rick astley/i)
      .first()
      .click()

    // Verify URL contains the video id (optional)
    cy.url().should('include', 'dQw4w9WgXcQ')
  })
})
