package coupon.sys.services.filters;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * this class config the filters
 * 
 * @author YECHIEL.MOSHE
 * 
 */
@Configuration
public class AppConfig {

	 @Bean
	 public FilterRegistrationBean <AdminFilter> filterRegistrationBeanAdmin() {
	  FilterRegistrationBean <AdminFilter> registrationBean = new FilterRegistrationBean<AdminFilter>();
	  registrationBean.setFilter(new AdminFilter());
	  registrationBean.addUrlPatterns("/admin/*");
	  return registrationBean;
	 }
	 
	 @Bean
	 public FilterRegistrationBean <CompanyFilter> filterRegistrationBeanCompany() {
		 FilterRegistrationBean <CompanyFilter> registrationBean = new FilterRegistrationBean<CompanyFilter>();
		 registrationBean.setFilter(new CompanyFilter());
		 registrationBean.addUrlPatterns("/company/*");
		 return registrationBean;
	 }
	 
	 @Bean
	 public FilterRegistrationBean <CustomerFilter> filterRegistrationBeanCustomer() {
		 FilterRegistrationBean <CustomerFilter> registrationBean = new FilterRegistrationBean<CustomerFilter>();
		 registrationBean.setFilter(new CustomerFilter());
		 registrationBean.addUrlPatterns("/customer/*");
		 return registrationBean;
	 }
}
