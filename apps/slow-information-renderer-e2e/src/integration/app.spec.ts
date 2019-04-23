describe('slow-information-renderer', () => {
  before(() => cy.visit('/'));

  it('should display an interesting fact when the button is clicked', () => {
    cy.get('#interestingFactButton').click();
    cy.wait(10000);
    cy.get('#interestingFact');
  });

  it('should show a show more info button if the fact is especially interesting to give user more info', () => {
    cy.get('#showMoreInfoButton').click();
    cy.get('#furtherInformation');
  });
});
