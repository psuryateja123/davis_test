package resource.utils;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

// random mail generator using timestamp at the beginning
public class email_generator {
    public static String getCurrentDateTimeMS() {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("yyMMddhhmmssMs");
        String datetime = ft.format(dNow);
        String email = datetime + "@test.com";
        return email;
    }
}
