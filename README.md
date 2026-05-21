# E2E Testing - Sauce Demo (Cypress)

E2E test suite for the [Sauce Demo](https://www.saucedemo.com) web application using Cypress.

---

## About the Project

Sauce Demo is a web e-commerce application built for testing purposes. This project covers the main user flows with automated end-to-end tests, running on Chrome via GitHub Actions on every push.

## Tech Stack

- [Cypress](https://www.cypress.io/) — E2E testing framework
- JavaScript
- GitHub Actions — CI/CD pipeline

## Test Coverage

| Module | Scenarios |
|---|---|
| Login | Valid credentials, invalid credentials, empty fields |
| Inventory | Display product list, sort by name A-Z, sort by name Z-A, sort by price low to high, sort by price high to low, navigate to product detail |
| Cart | Add product, remove product, cart badge update, add multiple products |
| Checkout | Complete checkout, empty first name, empty last name, empty postal code, order summary |
| Logout | Logout successfully, should not access inventory after logout |

## Project Structure

    cypress-saucedemo/
    ├── cypress/
    │   ├── e2e/
    │   │   ├── login.cy.js
    │   │   ├── inventory.cy.js
    │   │   ├── cart.cy.js
    │   │   ├── checkout.cy.js
    │   │   └── logout.cy.js
    │   ├── fixtures/
    │   └── support/
    ├── .github/
    │   └── workflows/
    │       └── cypress.yml
    ├── cypress.config.js
    └── package.json

## How to Run Locally

**Prerequisites:** Node.js 24+

```bash
# Clone the repository
git clone https://github.com/cauecandeloro/cypress-saucedemo.git
cd cypress-saucedemo

# Install dependencies
npm install

# Open Cypress interactive mode
npx cypress open

# Run all tests headless
npx cypress run
```

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions on Chrome.
