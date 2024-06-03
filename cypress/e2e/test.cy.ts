describe('Cart App', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Nx Store', () => {
    cy.contains('Nx Store');
  });
});
