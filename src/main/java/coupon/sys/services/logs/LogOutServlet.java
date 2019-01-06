package coupon.sys.services.logs;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * this class is a logout servlet for users send a logout request from the system
 * 
 * @author YECHIEL.MOSHE
 *
 */
@Controller
@CrossOrigin("*")
public class LogOutServlet {
	
	@PostMapping(value="/logout")
	public void logOut(HttpServletRequest request, HttpServletResponse response) {		
		HttpSession session = request.getSession(false);
		if(request.isRequestedSessionIdValid() && session!= null) {
			session.invalidate();
		}
		Cookie[] cookies = request.getCookies();
		for(Cookie cookie: cookies) {
			cookie.setMaxAge(0);
			cookie.setValue(null);
			cookie.setPath("/");
			response.addCookie(cookie);
		}			
	}

}
