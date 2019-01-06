package coupon.sys.services.webServices;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.ClientFacade;
import coupon.sys.core.facade.CustomerFacade;

/**
 * in this class all web service methods for customer user
 * 
 * @author YECHIEL.MOSHE
 *
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/customer")
public class CustomerWebService {
	
	/**
	 * this method get facade for customer from the session
	 * @param request
	 * @return @CustomerFacade
	 * @throws @CouponSystemException
	 */
	private ClientFacade getFacade(HttpServletRequest request) throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) request.getSession().getAttribute("CustomerFacade");
		return customerFacade;
	}
	
	/**
	 * this method get purchase coupon request and send it to facade
	 * @param id
	 * @param request
	 * @return purchased
	 */
	@PostMapping(value = "/coupon", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> purchaseCoupon(@RequestBody Coupon coupon, HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			customerFacade.purchaseCoupon(new Coupon(coupon.getId()));
			return ResponseEntity.status(HttpStatus.OK).body("coupon " + coupon.getId() + " purchased");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getPurchasedCoupons request and send it to facade
	 * @param request
	 * @return @coupon
	 */
	@GetMapping(value = "/coupon/purchased", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getPurchasedCoupons(HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> coupons = customerFacade.getPurchasedCoupons();
			return ResponseEntity.status(HttpStatus.OK).body(coupons);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getPurchasedCouponsByType request and send it to facade
	 * @param type
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/purchased/type={type}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getPurchasedCouponsByType(@PathVariable("type") CouponType type, HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> coupons = customerFacade.getPurchasedCouponsByType(type);
			return ResponseEntity.status(HttpStatus.OK).body(coupons);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getPurchasedCouponsByPrice request and send it to facade
	 * @param price
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/purchased/price={price}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getPurchasedCouponsByPrice(@PathVariable("price") double price, HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> coupons = customerFacade.getPurchasedCouponsByPrice(price);
			return ResponseEntity.status(HttpStatus.OK).body(coupons);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get customer information request and send it to facade
	 * @param request
	 * @return @Customer
	 */
	@GetMapping(value = "/info", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCustomerInfo(HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Customer customer = customerFacade.getCustomerInfo();
			return ResponseEntity.status(HttpStatus.OK).body(customer);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getAllCoupons request and send it to facade
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllCoupons(HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> coupons = customerFacade.getAllCoupons();
			return ResponseEntity.status(HttpStatus.OK).body(coupons);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getAllCouponsByType request and send it to facade
	 * @param type
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/all/type={type}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCouponsByType(@PathVariable("type") CouponType type, HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> couponsByType = customerFacade.getCouponsByType(type);
			return ResponseEntity.status(HttpStatus.OK).body(couponsByType);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getCoupon by id request and send it to facade
	 * @param id
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCoupon(@PathVariable("id") long id, HttpServletRequest request) {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getFacade(request);
			if(customerFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Coupon coupon = customerFacade.getCoupon(id);
			return ResponseEntity.status(HttpStatus.OK).body(coupon);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

}
