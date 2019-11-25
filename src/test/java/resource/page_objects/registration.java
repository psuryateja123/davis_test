package resource.page_objects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import resource.utils.Env;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.testng.AssertJUnit.assertEquals;


// page objects ofr registration page
public class registration {
    public static WebDriver driver = new ChromeDriver();
    public String product;

    // navigating to home page
    public static void home_page_navigation(){
        driver.navigate().to(Env.homeURL);
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        String newBaseURL = Env.homeURL;
        String currentURL = driver.getCurrentUrl();
        try{
            Assert.assertEquals(newBaseURL, currentURL);
        }
        catch(Exception e){
            driver.get(newBaseURL);
        }
    }

    // selecting signin button
    public static void signin_button()  {
        WebElement element = driver.findElement(By.className(resource.locators.registration.signin_button));
        element.click();
    }

    // selecting and entering email
    public static void click_email(){
        WebElement element = driver.findElement(By.id(resource.locators.registration.email_address));
       // email_element.click();
        element.sendKeys(resource.locators.registration.currentemail);
    }

    // checking the current page
    public static void check_registration_page(){
        String actualTitle = driver.getTitle();
        String expectedTitle = "Login - My Store";
        assertEquals(expectedTitle,actualTitle);
    }

    // click on submit button
    public static void click_on_submit(){
        WebElement element = driver.findElement(By.id(resource.locators.registration.create_button));
        element.click();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    // Selecting Mr title
    public static void mr_selection(){
        WebElement radio_button = driver.findElement(By.id(resource.locators.registration.mr_selection_radio));
        radio_button.click();
    }

    // selecting and entering First name
    public static void filling_first_name(String firstname){
        WebElement element = driver.findElement(By.id(resource.locators.registration.first_name));
        element.sendKeys(firstname);
    }

    // selecting and entering last name
    public static void filling_last_name(String lastname){
        WebElement element = driver.findElement(By.id(resource.locators.registration.last_name));
        element.sendKeys(lastname);
    }

    // selecting and entering password
    public static void filling_password(String password){
        WebElement element = driver.findElement(By.id(resource.locators.registration.password));
        element.sendKeys(password);
    }

    // selecting and entering Address line 1
    public static void filling_address(String address){
        WebElement element = driver.findElement(By.id(resource.locators.registration.address1));
        element.sendKeys(address);
    }

    // Selecting and entering City name
    public static void filling_city_name(String city_name){
        WebElement element = driver.findElement(By.id(resource.locators.registration.city_name));
        element.sendKeys(city_name);
    }

    // Selecting and entering Postcode
    public static void filling_postcode(String postcode){
        WebElement element = driver.findElement(By.id(resource.locators.registration.post_code));
        element.sendKeys(postcode);
    }

    // Selecting and entering mobile number
    public static void filling_mobile_number(String mobile_number){
        WebElement element = driver.findElement(By.id(resource.locators.registration.mobile_number));
        element.sendKeys(mobile_number);
    }

    // Selecting the State
    public static void selecting_state(String state){
        Select dropdown_state = new Select(driver.findElement(By.id(resource.locators.registration.state_id)));
        dropdown_state.selectByVisibleText(state);
    }

    // Selecting the day
    public static void filling_day(int day){
        Select dropdown = new Select(driver.findElement(By.id(resource.locators.registration.day)));
        dropdown.selectByValue(String.valueOf(day));
    }

    // selecting the month
    public static void filling_month(int month){
        Select dropdown = new Select(driver.findElement(By.id(resource.locators.registration.month)));
        dropdown.selectByValue(String.valueOf(month));
    }

    // selecting the year
    public static void filling_year(int year){
        Select dropdown = new Select(driver.findElement(By.id(resource.locators.registration.year)));
        dropdown.selectByValue(String.valueOf(year));
    }

    // clicking on registration
    public static void click_on_register(){
        WebElement register_click = driver.findElement(By.id(resource.locators.registration.register));
        register_click.click();
    }

    // clicking on personal details
    public static void click_on_personal_details() {
        WebElement personal_details = driver.findElement(By.className(resource.locators.registration.personal_details));
        personal_details.click();
    }

    // Checking the first name with respect to the already entered
    public static void check_first_name(String first_name) {
        String found_first_name = driver.findElement(By.id(resource.locators.registration.registered_first_name)).getAttribute("value");
        System.out.println(found_first_name);
        assertEquals(first_name, found_first_name);
    }

    // Checking the last name with respect to the already entered
    public static void check_last_name(String last_name) {
        String found_last_name = driver.findElement(By.id(resource.locators.registration.registered_last_name)).getAttribute("value");
        System.out.println(found_last_name);
        assertEquals(last_name, found_last_name);
    }

    // checking the email with respect to the already entered mail
    public static void check_email() {
        String found_email = driver.findElement(By.id(resource.locators.registration.registered_email)).getAttribute("value");
        System.out.println(found_email);
        assertEquals(resource.locators.registration.currentemail, found_email);
    }

    // checking the day of date of birth with respect to the already entered day of date of birth
    public static void check_date_day(String date_day) {
        String found_date_day = driver.findElement(By.id(resource.locators.registration.registered_day)).getAttribute("value");
        assertEquals(date_day, found_date_day);
    }

    // checking the month of date of birth with respect to the already entered month of date of birth
    public static void check_date_month(String date_month) {
        String found_date_month = driver.findElement(By.id(resource.locators.registration.registered_month)).getAttribute("value");
        assertEquals(date_month, found_date_month);
    }

    // checking the year of date of birth with respect to the already entered year of date of birth
    public static void check_date_year(String date_year) {
        String found_date_year = driver.findElement(By.id(resource.locators.registration.registered_year)).getAttribute("value");
        assertEquals(date_year, found_date_year);
    }

    // click on sign out button
    public static void click_on_sign_out(){
        WebElement click_sign_out = driver.findElement(By.className(resource.locators.registration.sign_out_button));
        click_sign_out.click();
    }

    // click on back to account button
    public static void click_back_to_account(){
        WebElement click_back = driver.findElement(By.xpath(resource.locators.registration.back_to_account));
        click_back.click();
    }

    // click on my address field
    public static void click_on_my_address(){
        WebElement my_account = driver.findElement(By.className(resource.locators.registration.my_address));
        my_account.click();
    }

    // checking the address line 1
    public static void check_address(String address){
        String check_address = driver.findElement(By.className(resource.locators.registration.check_address)).getText();
        assertEquals(check_address, address);
    }

    // checking the country
    public static void check_country(String country){
        String check_country = driver.findElement(By.xpath(resource.locators.registration.check_country)).getText();
        assertEquals(check_country, country);
    }

    // checking the mobile number
    public static void check_mobile(String mobilenumber){
        String check_mobile_number = driver.findElement(By.className(resource.locators.registration.check_mobile)).getText();
        assertEquals(check_mobile_number, mobilenumber);
    }
}