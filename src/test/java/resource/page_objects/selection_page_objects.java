package resource.page_objects;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import resource.locators.selection_page;

import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import static org.testng.AssertJUnit.assertEquals;
import static resource.page_objects.registration.driver;

// page objects related to Dress selection page

public class selection_page_objects {
    public static void selecting_dress(String dresstitle){
        WebElement dress_selection = driver.findElement(By.cssSelector("img[title=\""+ dresstitle+"\"]"));
        dress_selection.click();
    }

    // clicking on checkout button
    public static void adding_cart(){
        driver.switchTo().frame(0);
        driver.findElement(By.id(selection_page.checkout_button)).click();

    }

    // click on proceed to checkout
    public static void proceed_to_checkout(){
        WebDriverWait wait2 = new WebDriverWait(driver, 10);
        WebElement el = wait2.until(ExpectedConditions.elementToBeClickable(By.xpath(selection_page.proceed_to_checkout)));
        ((JavascriptExecutor)driver).executeScript("arguments[0].click()", el);

    }

    // asserting the description of dress in the basket with respect to the previous selected dress
    public static void check_dress_description(String dress_description){
        List<WebElement> list = driver.findElements(By.xpath(selection_page.dress_description));
        for (WebElement element : list) {
            String link = element.getAttribute("href");
            System.out.println("test");
            assertEquals(element.getText(), dress_description);
        }
    }
}
