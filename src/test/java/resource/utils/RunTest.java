package resource.utils;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

/**
 * Created by surya on 24/11/2019.
 */


@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:davis","json:target/davis.json"},
        tags = {"@smoke"},
        glue = {"resource.step_defs" },
        features = {"resource.feature_files"})


// local config, test to run locally
public class RunTest {
    public static WebDriver driver;
    static boolean ci = false;
    @BeforeClass
    public static void start() {
        System.out.println("Starting browser ...... " + Env.browser);
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setBrowserName("Chrome");
        System.out.println("Checking the home page is shown......");
    }

    @AfterClass
    @After
    public static void stop()
    {
        driver.close();
        driver.quit();
    }

}
