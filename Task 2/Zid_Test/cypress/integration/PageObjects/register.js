/// <reference types="cypress"/>

class RegisterPage {

// Go to URL 
visit ()
{
    cy.visit("https://web.zid.sa/register")
}

// Type Full Name
fillFullName (value)
{
    const field = cy.get("#name")
    field.clear()
    field.type(value)
    return this 
}

// Select Country Code
selectcc (value)
{
    const field = cy.get(".dropdown-menu").contains(value).click({force: true})
   
    return this
}

// Type Phone Number
fillPhnum (value)
{
    const field = cy.get("#mobile")
    field.clear()
    field.type(value)
    return this
}

// Type Email 
fillEmail (value)
{
    const field = cy.get("#registration_email")
    field.clear()
    field.type(value)
    return this
}

// Type Password
fillPassword (value)
{
    const field = cy.get("#registration_password")
    field.clear()
    field.type(value)
    return this
}

// Click on Next button
ClkNext ()
{
    const button = cy.get(".next-tab-btn").should('have.class', 'btn next-tab-btn')
    button.click()
}


// Type Company URL in EN 
fillCoen (value)
{
    const field = cy.get("#store_username")
    field.clear()
    field.type(value)
    return this
}

// Type Company Name in AR
fillCoar (value)
{
    const field = cy.get("#store_name")
    field.clear()
    field.type(value)
    return this
}

// Select the Country Industry
selectindstry (value)
{
    const field = cy.get("#store_category_id")
    field.select(value)
    return this
}

// Select from Checkbox Is it start-up company
selectchbx (value)
{
    if(value == "yes")
    {
        cy.get("#started_business_before_registration_yes").check()
    }
    else
    {
        cy.get("#started_business_before_registration_no").check()
    }
}

// Type Discount Code if available
filldscntco (value)
{
    const field = cy.get("#registration_discount_code")
    field.clear()
    field.type(value)
    return this
}

// Click on button to Create a New User
ClkCreateUser ()
{
    const button = cy.get(".login-btn").should('have.class', 'btn btn-primary login-btn')
    button.click()
}

}

// Exporting class 
export default RegisterPage