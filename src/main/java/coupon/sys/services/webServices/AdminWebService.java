package coupon.sys.services.webServices;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.AdminFacade;
import coupon.sys.core.facade.ClientFacade;

/**
 * in this class all web service methods for admin user
 * 
 * @author YECHIEL.MOSHE
 *
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminWebService {

	/**
	 * this method get facade for admin from the session
	 * @param request
	 * @return @AdminFacade
	 * @throws @CouponSystemException
	 */
	private ClientFacade getFacade(HttpServletRequest request) throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) request.getSession().getAttribute("AdminFacade");
		return adminFacade;
	}
	
	/**
	 * this method get create company request and send it to facade
	 * @param company
	 * @param request
	 * @return @Company
	 */
	@PostMapping(value = "/company", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCompany(@RequestBody Company company, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			adminFacade.createCompany(company);
			return ResponseEntity.status(HttpStatus.CREATED).body(company);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get remove company request and send it to facade
	 * @param id
	 * @param request
	 * @return deleted
	 */
	@DeleteMapping(value = "/company/{id}")
	public ResponseEntity<String> removeCompany(@PathVariable("id") long id, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			adminFacade.removeCompany(new Company(id));
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN).body("company " + id + " deleted");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get update company request and send it to facade
	 * @param company
	 * @param id
	 * @param request
	 * @return @Company
	 */
	@PutMapping(value = "/company/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCompany(@RequestBody Company company, @PathVariable("id") long id, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			adminFacade.updateCompany(new Company(id, company.getPassword(), company.getEmail()));
			return ResponseEntity.status(HttpStatus.OK).body(company);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get getAllCompanies request and send it to facade
	 * @param request
	 * @return @Company
	 */
	@GetMapping(value = "/company", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllCompanies(HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Company> companies = adminFacade.getAllCompanies();
			return ResponseEntity.status(HttpStatus.OK).body(companies);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get getCompany by id request and send it to facade
	 * @param id
	 * @param request
	 * @return @Company
	 */
	@GetMapping(value = "/company/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCompany(@PathVariable("id") long id, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Company company = adminFacade.getCompany(id);
			return ResponseEntity.status(HttpStatus.OK).body(company);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get create customer request and send it to facade
	 * @param customer
	 * @param request
	 * @return @Customer
	 */
	@PostMapping(value = "/customer", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCustomer(@RequestBody Customer customer, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			adminFacade.createCustomer(customer);
			return ResponseEntity.status(HttpStatus.CREATED).body(customer);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
			
		}
	}

	/**
	 * this method get remove customer request and send it to facade
	 * @param id
	 * @param request
	 * @return deleted
	 */
	@DeleteMapping(value = "/customer/{id}")
	public ResponseEntity<String> removeCustomer(@PathVariable("id") long id, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			adminFacade.removeCustomer(new Customer(id));
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN).body("customer "+id+" deleted");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get update customer request and send it to facade
	 * @param customer
	 * @param id
	 * @param request
	 * @return @Customer
	 */
	@PutMapping(value = "/customer/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCustomer(@RequestBody Customer customer, @PathVariable("id")long id, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			adminFacade.updateCustomer(new Customer(id, customer.getPassword()));
			return ResponseEntity.status(HttpStatus.OK).body(customer);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get getAllCustomers request and send it to facade
	 * @param request
	 * @return @Customer
	 */
	@GetMapping(value = "/customer", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllCustomers(HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Customer> customers = adminFacade.getAllCustomers();
			return ResponseEntity.status(HttpStatus.OK).body(customers);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get getCustomer by id request and send it to facade
	 * @param id
	 * @param request
	 * @return @Customer
	 */
	@GetMapping(value = "/customer/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCustomer(@PathVariable("id") long id, HttpServletRequest request) {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getFacade(request);
			if(adminFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Customer customer = adminFacade.getCustomer(id);
			return ResponseEntity.status(HttpStatus.OK).body(customer);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

}
