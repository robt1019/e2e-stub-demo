describe('slow-information-renderer', () => {
  beforeEach(() => cy.visit('/'));

  it('should display an interesting fact when the button is clicked', () => {
    cy.get('#interestingFactButton').click();
    cy.wait(10000);
    cy.get('#interestingFact');
  });
});
