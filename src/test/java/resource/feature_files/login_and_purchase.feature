@smoke
Feature: Login and purchase
  Scenario Outline: Login
    Given I am on the home page
    When I click on signin
    Then I fill the sign in email address
    Then I fill sign in password "<password>"
    Then I hit sign button
    When I click on women
    Then I select dress with title "<dresstitle>"
    Then I add dress to cart
    Then I click on checkout
    Then I verify the dress title "<dresstitle>"
    Examples:

    |password | dresstitle |
    |test1234 |Faded Short Sleeve T-shirts|


