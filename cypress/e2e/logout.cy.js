describe('Logout', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('should logout successfully', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });

  it('should not access inventory after logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.get('#user-name').should('be.visible');
  });

});