package coupon.sys.services.logs;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import coupon.sys.core.couponSystem.CouponSystem;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.AdminFacadeInterface;
import coupon.sys.core.facade.ClientFacade;
import coupon.sys.core.facade.CompanyFacadeInterface;
import coupon.sys.core.facade.CustomerFacadeInterface;

/**
 * this class is a login servlet for users to log in the system
 * 
 * @author YECHIEL.MOSHE
 *
 */
@Controller
@CrossOrigin("*")
public class LoginServlet {
	
	@PostMapping(value="/login")
	public String login(@RequestParam String name, @RequestParam String password, HttpServletRequest request) throws CouponSystemException {

		try {
			ClientFacade clientFacade = CouponSystem.getInstance().login(name, password);
			
			if (clientFacade == null)
			{
				return "redirect:https://coupon-system-course-project.herokuapp.com/login.html";
			}
			
			if(clientFacade instanceof AdminFacadeInterface) {
				request.getSession().setAttribute("AdminFacade", clientFacade);
				return "redirect:https://coupon-system-course-project.herokuapp.com/admin/index.html";
			} else if(clientFacade instanceof CompanyFacadeInterface) {
				request.getSession().setAttribute("CompanyFacade", clientFacade);
				return "redirect:https://coupon-system-course-project.herokuapp.com/company/index.html";
			} else if(clientFacade instanceof CustomerFacadeInterface) {
				request.getSession().setAttribute("CustomerFacade", clientFacade);
				return "redirect:https://coupon-system-course-project.herokuapp.com/customer/index.html";
			}
			return "redirect:https://coupon-system-course-project.herokuapp.com/login.html";

		} catch (CouponSystemException e) {
			return "redirect:https://coupon-system-course-project.herokuapp.com/login.html";
		}
		
	}
	
}
