package coupon.sys.core.beans;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import lombok.Getter;
import lombok.Setter;

/**
 * this class for create objects of coupon type
 * 
 * @author YECHIEL.MOSHE
 *
 */
@XmlRootElement
public @Getter @Setter class Coupon {

	private int id;
	private String title;
	private Date startDate;
	private Date endDate;
	private int amount;
	private CouponType type;
	private String message;
	private double price;
	private String image;

	/**
	 * construct coupon object and get id, title, start date, end date, amount,
	 * type, message, price and image
	 * 
	 * @param id        id of coupon - generated automatically from DB
	 * @param title     name of coupon
	 * @param startDate the date the coupon started
	 * @param endDate   the date the coupon expire
	 * @param amount    the amount of coupon
	 * @param type      coupon type
	 * @param message   describe the coupon
	 * @param price     coupon price
	 * @param image     image of the item
	 */
	public Coupon(int id, String title, Date startDate, Date endDate, int amount, CouponType type, String message,
			double price, String image) {
		super();
		this.id = id;
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.type = type;
		this.message = message;
		this.price = price;
		this.image = image;
	}
	
	/**
	 * construct coupon object and get title, start date, end date, amount,
	 * type, message, price and image
	 * 
	 * @param title     name of coupon
	 * @param startDate the date the coupon started
	 * @param endDate   the date the coupon expire
	 * @param amount    the amount of coupon
	 * @param type      coupon type
	 * @param message   describe the coupon
	 * @param price     coupon price
	 * @param image     image of the item
	 */
	public Coupon(String title, Date startDate, Date endDate, int amount, CouponType type, String message,
			double price, String image) {
		super();
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.type = type;
		this.message = message;
		this.price = price;
		this.image = image;
	}

	/**
	 * empty constructor
	 */
	public Coupon() {
	}

	/**
	 * construct coupon object and get only id
	 * 
	 * @param id
	 */
	public Coupon(int id) {
		super();
		this.id = id;
	}

	/**
	 * construct coupon object and get only name
	 * 
	 * @param title
	 */
	public Coupon(String title) {
		super();
		this.title = title;
	}

	/**
	 * construct coupon object and get id, end-date and price
	 * 
	 * @param endDate
	 * @param price
	 */
	public Coupon(int id, Date endDate, double price) {
		super();
		this.id = id;
		this.endDate = endDate;
		this.price = price;
	}

	/**
	 * to string method
	 */
	@Override
	public String toString() {
		return "\n Coupon [id=" + id + ", title=" + title + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", amount=" + amount + ", type=" + type + ", message=" + message + ", price=" + price + ", image="
				+ image + "]";
	}

}
