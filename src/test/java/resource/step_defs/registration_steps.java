package resource.step_defs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import resource.page_objects.registration;
import resource.utils.email_generator;

import static resource.utils.RunTest.driver;

// step defs for registation feature file

public class registration_steps {
    @Given("I am on the home page")
    public void iAmOnTheHomePage() {
    registration.home_page_navigation();
    }

    @When("I click on signin")
    public void iClickOnSignin() {
        registration.signin_button();
    }

    @Then("I should put my email")
    public void iShouldPutMyEmail() {
        registration.click_email();
    }

    @Then("I should click on create an account")
    public void iShouldClickOnCreateAnAccount() {
        registration.click_on_submit();
    }

    @Then("I Should goto registration page")
    public void iShouldGotoRegistrationPage() {
        registration.check_registration_page();
    }

    @Then("I enter select the title")
    public void iEnterSelectTheTitle() {
        registration.mr_selection();
    }

    @Then("^I fill my \"([^\"]*)\"$")
    public void iFillMyFirstname(String arg1) {
        registration.filling_first_name(arg1);
    }

    @Then("^I fill the \"([^\"]*)\"$")
    public void iFillThe(String arg0) {
        registration.filling_last_name(arg0);
    }

    @Then("I fill password \"([^\"]*)\"$")
    public void iFillPasswordPassword(String arg1) {
        registration.filling_password(arg1);
    }

    @Then("I fill address \"([^\"]*)\"$")
    public void iFillAddress(String arg0) {
        registration.filling_address(arg0);
    }

    @Then("I fill city name \"([^\"]*)\"$")
    public void iFillCityName(String arg0) {
        registration.filling_city_name(arg0);
    }

    @Then("I fill postcode \"([^\"]*)\"$")
    public void iFillPostcode(String arg0) {
        registration.filling_postcode(arg0);
    }

    @Then("I fill mobile number \"([^\"]*)\"$")
    public void iFillMobileNumber(String arg0) {
        registration.filling_mobile_number(arg0);
    }

    @Then("I select state \"([^\"]*)\"$")
    public void iState(String arg0) {
        registration.selecting_state(arg0);
    }

    @Then("I fill date of birth day \"([^\"]*)\"$")
    public void iFillDateOfBirthDay(int num1) {
        registration.filling_day(num1);
    }

    @Then("I fill date of birth month \"([^\"]*)\"$")
    public void iFillDateOfBirthMonth(int arg0) {
        registration.filling_month(arg0);
    }

    @Then("I fill date of birth year \"([^\"]*)\"$")
    public void iFillDateOfBirthYear(int arg0) {
        registration.filling_year(arg0);
    }

    @And("I click on register")
    public void iClickOnRegister() {
        registration.click_on_register();
    }

    @Given("I click on my personal information")
    public void iClickOnMyPersonalInformation() {
        registration.click_on_personal_details();
    }

    @Then("I validate first name \"([^\"]*)\"$")
    public void iValidateFirstName(String arg0) {
        registration.check_first_name(arg0);

    }

    @Then("I validate last name \"([^\"]*)\"$")
    public void iValidateLastName(String arg0) {
        registration.check_last_name(arg0);

    }

    @Then("I validate my email")
    public void iValidateMyEmail() {
        registration.check_email();
    }

    @Then("I validate day \"([^\"]*)\"$")
    public void iValidateDay(String arg0) {
        registration.check_date_day(arg0);
    }

    @Then("I validate month \"([^\"]*)\"$")
    public void iValidateMonth(String arg0) {
        registration.check_date_month(arg0);

    }

    @Then("I validate year \"([^\"]*)\"$")
    public void iValidateYear(String arg0) {
        registration.check_date_year(arg0);

    }

    @Then("I signout")
    public void iSignout() {
        registration.click_on_sign_out();
    }

    @Then("I click back to your account")
    public void iClickBackToYourAccount() {
        registration.click_back_to_account();
    }

    @Then("I click on my address")
    public void iClickOnMyAddress() {
        registration.click_on_my_address();
    }

    @Then("I check the address \"([^\"]*)\"$")
    public void iCheckTheAddress(String arg0) {
        registration.check_address(arg0);
    }

    @Then("I check country \"([^\"]*)\"$")
    public void iCheckTheCountry(String arg0) {
        registration.check_country(arg0);
    }

    @Then("I check mobile number \"([^\"]*)\"$")
    public void iCheckTheMobileNumber(String arg0) {
        registration.check_mobile(arg0);
    }
}
