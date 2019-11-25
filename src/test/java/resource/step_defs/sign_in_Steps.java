package resource.step_defs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import resource.page_objects.details_page_objects;
import resource.page_objects.sign_page_objects;

// step defs related to sign in scenario.
public class sign_in_Steps {
    @Then("I fill the sign in email address")
    public void iFillTheSignInEmailAddress() {
        sign_page_objects.fill_address();
    }

    @Then("I fill sign in password \"([^\"]*)\"$")
    public void iFillSignInPassword(String sign_password) {
        sign_page_objects.fill_password(sign_password);

    }

    @Then("I hit sign button")
    public void iHitSignButton() {
        sign_page_objects.click_signin_returning_user();
    }

    @When("I click on women")
    public void iClickOnWomen() {
        details_page_objects.click_women();

    }
}
