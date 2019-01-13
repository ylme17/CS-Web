package coupon.sys.services;

import java.sql.SQLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class CouponSystemTomcatApplication extends SpringBootServletInitializer {
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(CouponSystemTomcatApplication.class);
	}

	public static void main(String[] args) throws SQLException {
		SpringApplication.run(CouponSystemTomcatApplication.class, args);
		
	}
}

