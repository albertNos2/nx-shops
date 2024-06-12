import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: './e2e-ci/cypress/support/e2e.ts',
    specPattern: './e2e-ci/cypress/e2e/**/*.cy.ts',
  },
});
