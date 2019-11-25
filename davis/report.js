$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login_and_purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Login and purchase",
  "description": "",
  "id": "login-and-purchase",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login-and-purchase;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill the sign in email address",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I fill sign in password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I hit sign button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on women",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select dress with title \"\u003cdresstitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I add dress to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the dress title \"\u003cdresstitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-and-purchase;login;",
  "rows": [
    {
      "cells": [
        "password",
        "dresstitle"
      ],
      "line": 16,
      "id": "login-and-purchase;login;;1"
    },
    {
      "cells": [
        "test1234",
        "Faded Short Sleeve T-shirts"
      ],
      "line": 17,
      "id": "login-and-purchase;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Login",
  "description": "",
  "id": "login-and-purchase;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill the sign in email address",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I fill sign in password \"test1234\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I hit sign button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on women",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select dress with title \"Faded Short Sleeve T-shirts\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I add dress to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the dress title \"Faded Short Sleeve T-shirts\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registration_steps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 5290525422,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iClickOnSignin()"
});
formatter.result({
  "duration": 1551482638,
  "status": "passed"
});
formatter.match({
  "location": "sign_in_Steps.iFillTheSignInEmailAddress()"
});
formatter.result({
  "duration": 208203778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 25
    }
  ],
  "location": "sign_in_Steps.iFillSignInPassword(String)"
});
formatter.result({
  "duration": 86003371,
  "status": "passed"
});
formatter.match({
  "location": "sign_in_Steps.iHitSignButton()"
});
formatter.result({
  "duration": 779229917,
  "status": "passed"
});
formatter.match({
  "location": "sign_in_Steps.iClickOnWomen()"
});
formatter.result({
  "duration": 1904082887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Faded Short Sleeve T-shirts",
      "offset": 27
    }
  ],
  "location": "selection_Steps.iSelectDressWithTitle(String)"
});
formatter.result({
  "duration": 1175023245,
  "status": "passed"
});
formatter.match({
  "location": "selection_Steps.iAddDressToCart()"
});
formatter.result({
  "duration": 202149724,
  "status": "passed"
});
formatter.match({
  "location": "selection_Steps.iClickOnCheckout()"
});
formatter.result({
  "duration": 2115636037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Faded Short Sleeve T-shirts",
      "offset": 26
    }
  ],
  "location": "selection_Steps.iVerifyTheDressTitle(String)"
});
formatter.result({
  "duration": 17800332,
  "status": "passed"
});
formatter.uri("regitration.feature");
formatter.feature({
  "line": 2,
  "name": "Navigating to home page and register",
  "description": "",
  "id": "navigating-to-home-page-and-register",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": As a user I should able to register",
  "description": "",
  "id": "navigating-to-home-page-and-register;:-as-a-user-i-should-able-to-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Should goto registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should put my email",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should click on create an account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I fill my \"\u003cfirstname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I fill the \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I fill password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I fill date of birth day \"\u003cday\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I fill date of birth month \"\u003cmonth\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I fill date of birth year \"\u003cyear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I fill address \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I fill city name \"\u003ccityname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select state \"\u003cstate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I fill postcode \"\u003cpostcode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I fill mobile number \"\u003cmobilenumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on register",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "navigating-to-home-page-and-register;:-as-a-user-i-should-able-to-register;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "password",
        "address",
        "cityname",
        "state",
        "postcode",
        "mobilenumber",
        "day",
        "month",
        "year"
      ],
      "line": 22,
      "id": "navigating-to-home-page-and-register;:-as-a-user-i-should-able-to-register;;1"
    },
    {
      "cells": [
        "test",
        "test",
        "test1234",
        "address",
        "testcity",
        "Alabama",
        "35004",
        "0123456789",
        "1",
        "1",
        "1990"
      ],
      "line": 23,
      "id": "navigating-to-home-page-and-register;:-as-a-user-i-should-able-to-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": ": As a user I should able to register",
  "description": "",
  "id": "navigating-to-home-page-and-register;:-as-a-user-i-should-able-to-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Should goto registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should put my email",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should click on create an account",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I fill my \"test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I fill the \"test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I fill password \"test1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I fill date of birth day \"1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I fill date of birth month \"1\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I fill date of birth year \"1990\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I fill address \"address\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I fill city name \"testcity\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select state \"Alabama\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I fill postcode \"35004\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I fill mobile number \"0123456789\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on register",
  "keyword": "And "
});
formatter.match({
  "location": "registration_steps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 1327963511,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iClickOnSignin()"
});
formatter.result({
  "duration": 1598937978,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iShouldGotoRegistrationPage()"
});
formatter.result({
  "duration": 8524680,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iShouldPutMyEmail()"
});
formatter.result({
  "duration": 143271058,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iShouldClickOnCreateAnAccount()"
});
formatter.result({
  "duration": 111474501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 11
    }
  ],
  "location": "registration_steps.iFillMyFirstname(String)"
});
formatter.result({
  "duration": 1727730989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    }
  ],
  "location": "registration_steps.iFillThe(String)"
});
formatter.result({
  "duration": 80248215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 17
    }
  ],
  "location": "registration_steps.iFillPasswordPassword(String)"
});
formatter.result({
  "duration": 108386606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "registration_steps.iFillDateOfBirthDay(int)"
});
formatter.result({
  "duration": 108453011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "registration_steps.iFillDateOfBirthMonth(int)"
});
formatter.result({
  "duration": 121836325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1990",
      "offset": 27
    }
  ],
  "location": "registration_steps.iFillDateOfBirthYear(int)"
});
formatter.result({
  "duration": 172128934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 16
    }
  ],
  "location": "registration_steps.iFillAddress(String)"
});
formatter.result({
  "duration": 111047766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcity",
      "offset": 18
    }
  ],
  "location": "registration_steps.iFillCityName(String)"
});
formatter.result({
  "duration": 108860289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alabama",
      "offset": 16
    }
  ],
  "location": "registration_steps.iState(String)"
});
formatter.result({
  "duration": 91301129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35004",
      "offset": 17
    }
  ],
  "location": "registration_steps.iFillPostcode(String)"
});
formatter.result({
  "duration": 83194466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 22
    }
  ],
  "location": "registration_steps.iFillMobileNumber(String)"
});
formatter.result({
  "duration": 115040532,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iClickOnRegister()"
});
formatter.result({
  "duration": 1377656663,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Validating user",
  "description": "",
  "id": "navigating-to-home-page-and-register;validating-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I click on my personal information",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I validate first name \"\u003cfirstname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I validate last name \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I validate my email",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I validate day \"\u003cday\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I validate month \"\u003cmonth\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I validate year \"\u003cyear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click back to your account",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on my address",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I check the address \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I check country \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I check mobile number \"\u003cmobilenumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I signout",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "navigating-to-home-page-and-register;validating-user;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "day",
        "month",
        "year",
        "address",
        "country",
        "mobilenumber"
      ],
      "line": 42,
      "id": "navigating-to-home-page-and-register;validating-user;;1"
    },
    {
      "cells": [
        "test",
        "test",
        "1",
        "1",
        "1990",
        "address",
        "United States",
        "0123456789"
      ],
      "line": 43,
      "id": "navigating-to-home-page-and-register;validating-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Validating user",
  "description": "",
  "id": "navigating-to-home-page-and-register;validating-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I click on my personal information",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I validate first name \"test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I validate last name \"test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I validate my email",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I validate day \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I validate month \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I validate year \"1990\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click back to your account",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on my address",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I check the address \"address\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I check country \"United States\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I check mobile number \"0123456789\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I signout",
  "keyword": "Then "
});
formatter.match({
  "location": "registration_steps.iClickOnMyPersonalInformation()"
});
formatter.result({
  "duration": 990891715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "registration_steps.iValidateFirstName(String)"
});
formatter.result({
  "duration": 28072717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 22
    }
  ],
  "location": "registration_steps.iValidateLastName(String)"
});
formatter.result({
  "duration": 20605091,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iValidateMyEmail()"
});
formatter.result({
  "duration": 21721701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "registration_steps.iValidateDay(String)"
});
formatter.result({
  "duration": 22919658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "registration_steps.iValidateMonth(String)"
});
formatter.result({
  "duration": 17946499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1990",
      "offset": 17
    }
  ],
  "location": "registration_steps.iValidateYear(String)"
});
formatter.result({
  "duration": 17133739,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iClickBackToYourAccount()"
});
formatter.result({
  "duration": 913922304,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iClickOnMyAddress()"
});
formatter.result({
  "duration": 905981788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address",
      "offset": 21
    }
  ],
  "location": "registration_steps.iCheckTheAddress(String)"
});
formatter.result({
  "duration": 37851781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 17
    }
  ],
  "location": "registration_steps.iCheckTheCountry(String)"
});
formatter.result({
  "duration": 41141145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 23
    }
  ],
  "location": "registration_steps.iCheckTheMobileNumber(String)"
});
formatter.result({
  "duration": 23720530,
  "status": "passed"
});
formatter.match({
  "location": "registration_steps.iSignout()"
});
formatter.result({
  "duration": 1524096150,
  "status": "passed"
});
});