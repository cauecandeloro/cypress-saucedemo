describe('Inventory', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('should display product list', () => {
    cy.get('[data-test="inventory-item"]').should('have.length', 6);
  });

  it('should sort products by name Z to A', () => {
    cy.get('[data-test="product-sort-container"]').select('za');
    cy.get('[data-test="inventory-item-name"]').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)');
  });

  it('should sort products by name A to Z', () => {
    cy.get('[data-test="product-sort-container"]').select('az');
    cy.get('[data-test="inventory-item-name"]').first().should('have.text', 'Sauce Labs Backpack');
  });

  it('should sort products by price low to high', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.get('[data-test="inventory-item-name"]').first().should('have.text', 'Sauce Labs Onesie');
  });

  it('should sort products by price high to low', () => {
    cy.get('[data-test="product-sort-container"]').select('hilo');
    cy.get('[data-test="inventory-item-name"]').first().should('have.text', 'Sauce Labs Fleece Jacket');
  });

  it('should navigate to product detail page', () => {
    cy.get('[data-test="item-4-title-link"]').click();
    cy.url().should('include', 'inventory-item.html');
    cy.get('[data-test="inventory-item-name"]').should('be.visible');
  });

});