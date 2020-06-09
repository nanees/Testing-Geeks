import { When, Then } from "cypress-cucumber-preprocessor/steps";
import RegisterPage from "../integration/PageObjects/register";

const rp = new RegisterPage()

When('Visit Register Page', () => { 
    rp.visit()
});

Then('Assert page title new user', () => { 
    cy.title().should('be.equal', 'Zid | إنشاء حساب')
});

When('Fill FullName {string}', (fullname) => {
rp.fillFullName(fullname)
});

When('Select Country Code {string}', (cc) => {
    rp.selectcc(cc)
});

When('Fill Phone number {string}', (phnum) => {
    rp.fillPhnum(phnum)
});

When('Fill Email {string}', (email) => {
    rp.fillEmail(email)
});

When('Fill Password {string}', (pass) => {
    rp.fillPassword(pass)
});

When('Click on Next', () => { 
    rp.ClkNext()
});


Then('Assert page header', () => { 
    cy.get('.login-header').should('have.html', 'سجل في خطوتين')
});

When('Fill Company EN desc {string}', (desc) => {
    rp.fillCoen(desc)
});

When('Fill Company AR desc {string}', (desc) => {
    rp.fillCoar(desc)
});

When('Select Company Industry {string}', (desc) => {
    rp.selectindstry(desc)
});

When('Do you have a company before {string}', (desc) => {
    rp.selectchbx(desc)
});

When('Fill Company Discount code, optional {string}', (desc) => {
    rp.filldscntco(desc)
});

When('Click on Create User', () => { 
    rp.ClkCreateUser()
});

Then('Assert page title welcome page', () => { 
    cy.title().should('be.equal', 'Zid | Homepage')
});

Then('Assert Company URL error block', () => {
    cy.get('.help-block').should('contain.html', 'رابط المتجر غير متوفر')
});