package coupon.sys.services.webServices;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

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
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.ClientFacade;
import coupon.sys.core.facade.CompanyFacade;

/**
 * in this class all web service methods for company user
 * 
 * @author YECHIEL.MOSHE
 *
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/company")
public class CompanyWebService {

	/**
	 * this method get facade for company from the session
	 * @param request
	 * @return @CompanyFacade
	 * @throws @CouponSystemException
	 */
	private ClientFacade getFacade(HttpServletRequest request) throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) request.getSession().getAttribute("CompanyFacade");
		return companyFacade;
	}

	/**
	 * this method get create coupon request and send it to facade
	 * @param coupon
	 * @param request
	 * @return @Coupon
	 */
	@PostMapping(value = "/coupon", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCoupon(@RequestBody Coupon coupon, HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			companyFacade.createCoupon(coupon);
			return ResponseEntity.status(HttpStatus.CREATED).body(coupon);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get remove coupon request and send it to facade
	 * @param id
	 * @param request
	 * @return deleted
	 */
	@DeleteMapping(value = "/coupon/{id}")
	public ResponseEntity<String> removeCoupon(@PathVariable("id") long id, HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			companyFacade.removeCoupon(new Coupon(id));
			return ResponseEntity.status(HttpStatus.OK).body("coupon " + id + " deleted");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get update coupon request and send it to facade
	 * @param coupon
	 * @param id
	 * @param request
	 * @return @Coupon
	 */
	@PutMapping(value = "/coupon/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateCoupon(@RequestBody Coupon coupon, @PathVariable("id") long id, HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			companyFacade.updateCoupon(new Coupon(id, coupon.getEndDate(), coupon.getPrice()));
			return ResponseEntity.status(HttpStatus.OK).body(coupon);
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
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Coupon coupon = companyFacade.getCoupon(id);
			return ResponseEntity.status(HttpStatus.OK).body(coupon);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * this method get getAllCoupons request and send it to facade
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllCoupons(HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> coupons = companyFacade.getAllCoupons();
			return ResponseEntity.status(HttpStatus.OK).body(coupons);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getCouponsByType request and send it to facade
	 * @param type
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/search/type={type}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCouponsByType(@PathVariable("type") CouponType type, HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> couponsByType = companyFacade.getCouponByType(type);
			return ResponseEntity.status(HttpStatus.OK).body(couponsByType);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	/**
	 * this method get company information request and send it to facade
	 * @param request
	 * @return @Company
	 */
	@GetMapping(value = "/info", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCompanyInfo(HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Company company = companyFacade.getCompanyInfo();
			return ResponseEntity.status(HttpStatus.OK).body(company);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getCouponsByPrice request and send it to facade
	 * @param price
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/search/price={price}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCouponsByPrice(@PathVariable("price") double price, HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			Collection<Coupon> couponsByPrice = companyFacade.getCouponByPrice(price);
			return ResponseEntity.status(HttpStatus.OK).body(couponsByPrice);
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * this method get getCouponsByDate request and send it to facade
	 * @param strDate
	 * @param request
	 * @return @Coupon
	 */
	@GetMapping(value = "/coupon/search/date={date}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCouponsByStartDate(@PathVariable("date") String strDate, HttpServletRequest request) {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getFacade(request);
			if(companyFacade==null) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).contentType(MediaType.TEXT_PLAIN).body("your session timed out, please log in again");
			}
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date date = sdf.parse(strDate);
			Collection<Coupon> couponsByStartDate = companyFacade.getCouponByStartDate(date);
			return ResponseEntity.status(HttpStatus.OK).body(couponsByStartDate);
		} catch (ParseException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body("please insert date");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

}
