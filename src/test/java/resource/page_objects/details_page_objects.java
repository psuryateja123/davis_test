package resource.page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import resource.locators.selection_page;

import static resource.page_objects.registration.driver;

// details page objects
public class details_page_objects {

    // object for selecting category
    public static void click_women(){
        WebElement women_tab = driver.findElement(By.xpath(selection_page.women));
        women_tab.click();
    }

}
