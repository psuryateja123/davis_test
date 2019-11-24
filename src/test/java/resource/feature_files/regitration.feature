@smoke
Feature: Navigating to home page and register
  Scenario Outline: : As a user I should able to register
    Given I am on the home page
    When I click on signin
    Then I Should goto registration page
    Then I should put my email
    Then I should click on create an account
    Then I fill my "<firstname>"
    Then I fill the "<lastname>"
    Then I fill password "<password>"
    Then I fill date of birth day "<day>"
    Then I fill date of birth month "<month>"
    Then I fill date of birth year "<year>"
    Then I fill address "<address>"
    Then I fill city name "<cityname>"
    Then I select state "<state>"
    Then I fill postcode "<postcode>"
    Then I fill mobile number "<mobilenumber>"
    And I click on register
    Examples:
      | firstname |lastname| password|address| cityname|state| postcode| mobilenumber|day |month|year|
      | test      |test    | test1234| address  | testcity| Alabama | 35004| 0123456789 |1|1 |1990|


    Scenario Outline: Validating user
      Given I click on my personal information
      Then I validate first name "<firstname>"
      Then I validate last name "<lastname>"
      Then I validate my email
      Then I validate day "<day>"
      Then I validate month "<month>"
      Then I validate year "<year>"
      Then I click back to your account
      Then I click on my address
      Then I check the address "<address>"
      Then I check country "<country>"
      Then I check mobile number "<mobilenumber>"
      Then I signout

      Examples:
        | firstname |lastname|day |month|year| address | country | mobilenumber |
        | test      |test    |   1|1    |1990|address  |United States |  0123456789       |




