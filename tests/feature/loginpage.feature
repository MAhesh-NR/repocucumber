Feature: The login page of adactin website
Scenario: To test the login page using valid credientials
Given user navigates to the adactin website
When the user enters the userName
And the user enters the password
And the user clicks the login button
Then user navigates to the Search Hotel page

Scenario Outline: To test the login page using invalid credientials
Given user navigates to the adactin website
When user enters the invalid "<userName>" and invalid "<password>" and "<Result>" clicks the login button
Then user gets the error message


Examples:
|userName||password||Result|
|Trends234||Trends2224||fail|
|Trend24||Trend789||fail|
|The||Wrong||fail|

