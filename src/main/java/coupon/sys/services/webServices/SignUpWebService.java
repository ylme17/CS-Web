package coupon.sys.services.webServices;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.dao.CompanyDAO;
import coupon.sys.core.dao.CustomerDAO;
import coupon.sys.core.dao.db.CompanyDAODb;
import coupon.sys.core.dao.db.CustomerDAODb;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.SignUpFacade;

@RestController
@CrossOrigin("*")
@RequestMapping("/signup")
public class SignUpWebService {
	
	private CompanyDAO companyDAO = new CompanyDAODb();
	private CustomerDAO customerDAO = new CustomerDAODb();
	
	/**
	 * this method get facade for SignUp
	 * @param request
	 * @return @SignUpFacade
	 * @throws @CouponSystemException
	 */
	private SignUpFacade getFacade() throws CouponSystemException {
		SignUpFacade signUpFacade = new SignUpFacade(companyDAO, customerDAO);
		return signUpFacade;
	}
	
	/**
	 * this method get create company request and send it to facade
	 * @param company
	 * @return @Company
	 */
	@PostMapping(value = "/company", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCompany(@RequestBody Company company) {
		try {
			SignUpFacade signUpFacade = this.getFacade();
			signUpFacade.createCompany(company);
			return ResponseEntity.status(HttpStatus.CREATED).body(company);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get create customer request and send it to facade
	 * @param customer
	 * @return @Customer
	 */
	@PostMapping(value = "/customer", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
		try {
			SignUpFacade signUpFacade = this.getFacade();
			signUpFacade.createCustomer(customer);
			return ResponseEntity.status(HttpStatus.CREATED).body(customer);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
			
		}
	}

}
