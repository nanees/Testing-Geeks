Feature: Register a new User 
- Creating two scenarios for new user regiteration function, first scenario is valid and will pass to 
the Zid Homepage and the user will be created successfully. While the second scenrio uses invalid data
to register a user

Scenario: Valid Registeration Flow  

Given Visit Register Page
Then Assert page title new user

When Fill FullName "Nanees Nabil Naguib"
And Select Country Code "+965"
And Fill Phone number "60999183"
And Fill Email "nanees.nabil@hotmail.com"
And Fill Password "nanees123"

Then Click on Next
And Assert page header

When Fill Company EN desc "CompanyNan"
And Fill Company AR desc "نانيس كو"
And Select Company Industry "كتب"
And Do you have a company before "yes"
And Click on Create User

Then Assert page title welcome page


Scenario: Invalid Registeration Flow 

Given Visit Register Page
Then Assert page title new user

When Fill FullName "Nanees Nabil Naguib"
And Select Country Code "+966"
#Using invalid phone number 
And Fill Phone number "128457630"
#using pre-used email
And Fill Email "nanees.nabil@hotmail.com"
And Fill Password "nanees123"

Then Click on Next
And Assert page header

#using pre-used company url
When Fill Company EN desc "Nancompany"
And Fill Company AR desc "نانيس كو"
And Select Company Industry "كتب"
And Do you have a company before "yes"
#using invalid discount code
And Fill Company Discount code, optional "NAN"
And Click on Create User

#assert for the last error on screen after submission
Then Assert Company URL error block