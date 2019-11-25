package resource.step_defs;

import cucumber.api.java.en.Then;
import resource.page_objects.registration;
import resource.page_objects.selection_page_objects;

// step defs related to selecting a dress
public class selection_Steps {
    @Then("I select dress with title \"([^\"]*)\"$")
    public void iSelectDressWithTitle(String arg0) {
        selection_page_objects.selecting_dress(arg0);
    }

    @Then("I add dress to cart")
    public void iAddDressToCart() {
        selection_page_objects.adding_cart();
    }

    @Then("I verify the dress title \"([^\"]*)\"$")
    public void iVerifyTheDressTitle(String dress_description) {
        selection_page_objects.check_dress_description(dress_description);
    }

    @Then("I click on checkout")
    public void iClickOnCheckout() {
        selection_page_objects.proceed_to_checkout();
    }
}
