describe('slow-information-renderer', () => {
  before(() => cy.visit('/'));

  it('should display an interesting fact when the button is clicked', () => {
    cy.get('#interestingFactButton').click();
    cy.get('#interestingFact');
  });

  it('should show a show more info button if the fact is especially interesting to give user more info', () => {
    /**
     * Tell our stub at run time to return the most interesting fact
     */
    cy.window().then(win => {
      win['stubSlowInfoService'].returnInterestingFact();
    });

    cy.get('#interestingFactButton').click();
    cy.get('#interestingFact');

    cy.get('#showMoreInfoButton').click();
    cy.get('#furtherInformation');
  });
});
