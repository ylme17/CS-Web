package coupon.sys.core.facade;

import java.util.Collection;

import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.dao.CouponDAO;
import coupon.sys.core.dao.CustomerDAO;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.exceptions.DbException;
import coupon.sys.core.exceptions.ObjectAlreadyExistException;
import coupon.sys.core.exceptions.ObjectDontExistException;
import coupon.sys.core.utils.CurrentDate;

/**
 * this class implements the business logic of customer
 * 
 * @author YECHIEL.MOSHE
 *
 */
public class CustomerFacade implements ClientFacade, CustomerFacadeInterface {

	private CustomerDAO customerDAO;
	private CouponDAO couponDAO;

	/**
	 * construct the customer facade and get customer, customerDao and couponDao
	 * 
	 * @param customerDAO
	 * @param couponDAO
	 */
	public CustomerFacade(CustomerDAO customerDAO, CouponDAO couponDAO) {
		this.customerDAO = customerDAO;
		this.couponDAO = couponDAO;
	}

	/**
	 * this method for purchase coupon by customer the method check if the coupon
	 * not purchased yet by customer and if the coupon out of stock and if the
	 * coupon not expired
	 * 
	 * @param coupon
	 * @throws CouponSystemException
	 */
	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {
		Coupon coupondb = couponDAO.getCoupon(coupon.getId());
		if (coupondb != null) {
			if (customerDAO.alreadyPurchased(coupondb.getId()) == false) {
				if (coupondb.getAmount() >= 1) {
					if (CurrentDate.getCurrentDate().before(coupondb.getEndDate())) {
						customerDAO.insertCouponPurchase(coupondb.getId());
						coupondb.setAmount(coupondb.getAmount() - 1);
						couponDAO.updateCoupon(coupondb);
						System.out.println("coupon " + coupondb.getId() + " purchased");
					} else {
						throw new CouponSystemException("coupon already expired");
					}
				} else {
					throw new ObjectDontExistException("coupon is out of stock");
				}
			} else {
				throw new ObjectAlreadyExistException("you already purchased the coupon");
			}
		} else {
			throw new ObjectDontExistException("coupon not exist");
		}
	}

	/**
	 * this method get all purchased coupons for customer
	 * 
	 * @return purchased coupons
	 * @throws ObjectDontExistException
	 * @throws DbException
	 */
	public Collection<Coupon> getPurchasedCoupons() throws ObjectDontExistException, DbException {
		Collection<Coupon> purchasedCoupons = customerDAO.getCoupons();
		if (!purchasedCoupons.isEmpty()) {
			System.out.println(purchasedCoupons.toString());
			return purchasedCoupons;
		} else {
			throw new ObjectDontExistException("you haven't purchased coupons yet");
		}
	}

	/**
	 * this method get purchased coupons by type for customer
	 * 
	 * @return purchased coupons
	 * @param type coupon type from enum couponType
	 * @return purchased coupons by type
	 * @throws ObjectDontExistException
	 * @throws DbException
	 */
	public Collection<Coupon> getPurchasedCouponsByType(CouponType type)
			throws ObjectDontExistException, DbException {
		Collection<Coupon> purchasedCouponByType = customerDAO.getCouponsByType(type);
		if (!purchasedCouponByType.isEmpty()) {
			System.out.println(purchasedCouponByType.toString());
			return purchasedCouponByType;
		} else {
			throw new ObjectDontExistException("you haven't purchased coupons of type " + type);
		}
	}

	/**
	 * this method get purchased coupons by price for customer
	 * 
	 * @param price
	 * @return purchased coupons by price
	 * @throws ObjectDontExistException
	 * @throws DbException
	 */
	public Collection<Coupon> getPurchasedCouponsByPrice(double price) throws ObjectDontExistException, DbException {
		Collection<Coupon> purchasedCouponByPrice = customerDAO.getCouponsByPrice(price);
		if (!purchasedCouponByPrice.isEmpty()) {
			System.out.println(purchasedCouponByPrice.toString());
			return purchasedCouponByPrice;
		} else {
			throw new ObjectDontExistException("you haven't purchased coupons up to price " + price);
		}
	}
	
	/**
	 * this method get all coupons
	 * 
	 * @return all coupons
	 * @throws ObjectDontExistException
	 * @throws DbException
	 */
	public Collection<Coupon> getAllCoupons() throws ObjectDontExistException, DbException{
		Collection<Coupon> allCoupons = customerDAO.getAllCoupons();
		if(!allCoupons.isEmpty()) {
			System.out.println(allCoupons.toString());
			return allCoupons;
		} else {
			throw new ObjectDontExistException("there are no coupons");
		}
	}
	
	/**
	 * this method get coupons by type
	 * 
	 * @param type
	 * @return coupons by type
	 * @throws ObjectDontExistException
	 * @throws DbException
	 */
	public Collection<Coupon> getCouponsByType(CouponType type) throws ObjectDontExistException, DbException {
		Collection<Coupon> couponByType = couponDAO.getCouponByType(type);
		if (!couponByType.isEmpty()) {
			System.out.println(couponByType.toString());
			return couponByType;
		} else {
			throw new ObjectDontExistException("There are no coupons of type " + type);
		}
	}
	
	/**
	 * this method get customer info
	 * 
	 * @return customer information
	 * @throws DbException
	 */
	public Customer getCustomerInfo() throws DbException {
		Customer customerInfo = customerDAO.getCustomer();
		System.out.println(customerInfo);
		return customerInfo;
	}
	
	/**
	 * this method get coupon
	 * 
	 * @param id
	 * @return coupon
	 * @throws ObjectDontExistException
	 * @throws DbException
	 */
	public Coupon getCoupon(long id) throws DbException, ObjectDontExistException {
		Coupon coupon = couponDAO.getCoupon(id);
		if(coupon != null) {
			return coupon;
		} else {
			throw new ObjectDontExistException("coupon not exist");
		}
	}

}
