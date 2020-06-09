# Testing Geeks Assessment Task 2  

Creating a testing automation framework for Zid website following the Behaviour Development Driven approach. I chose to use the visual studio code for Cypress/Javascript including the cucumber library for Gherkin feature files, step definition classes & Page Object Models.

## Running the tests

- Open the command line and type below command to run the test feature file headlessly

```bash 
cd /project/path
npx cypress run --spec "cypress/integration/examples/**" 
```
- Type below command to run the test feature file from browser

```bash 
cd /project/path
npx cypress run --spec "cypress/integration/examples/register.feature" --headed --no-exit