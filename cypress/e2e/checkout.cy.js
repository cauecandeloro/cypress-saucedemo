describe('Checkout', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
  });

  it('should complete checkout with valid information', () => {
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
  });

  it('should not proceed with empty first name', () => {
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should not proceed with empty last name', () => {
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should not proceed with empty postal code', () => {
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('should display order summary before finishing', () => {
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="inventory-item"]').should('have.length', 1);
    cy.get('[data-test="total-label"]').should('be.visible');
  });

});