package resource.page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import resource.locators.sign_page;
import resource.locators.registration;


import static resource.page_objects.registration.driver;


public class sign_page_objects {

    // entering email to sign in
    public static void fill_address(){
        WebElement sign_email = driver.findElement(By.id(sign_page.sign_address));
        sign_email.sendKeys(registration.currentemail);
    }

    // entering password to sign in
    public static void fill_password(String sign_password){
        WebElement password = driver.findElement(By.id(sign_page.sign_password));
        password.sendKeys(sign_password);
    }

    // click on sign in button
    public static void click_signin_returning_user(){
        WebElement sign_button = driver.findElement(By.id(sign_page.sign_button));
        sign_button.click();
    }
}
