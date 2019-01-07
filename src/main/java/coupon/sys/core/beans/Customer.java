package coupon.sys.core.beans;

import javax.xml.bind.annotation.XmlRootElement;

import lombok.Getter;
import lombok.Setter;

/**
 * this class for create objects of customer type
 * 
 * @author YECHIEL.MOSHE
 *
 */
@XmlRootElement
public @Getter @Setter class Customer {

	private int id;
	private String name;
	private String password;

	/**
	 * construct customer object and get id, name and password
	 * 
	 * @param id       id of customer - generated automatically from DB
	 * @param name     name of customer
	 * @param password password of customer
	 */
	public Customer(int id, String name, String password) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
	}
	
	/**
	 * construct customer object and get name and password
	 * 
	 * @param name     name of customer
	 * @param password password of customer
	 */
	public Customer(String name, String password) {
		super();
		this.name = name;
		this.password = password;
	}
	
	/**
	 * construct customer object and get id and password
	 * 
	 * @param id     id of customer
	 * @param password password of customer
	 */
	public Customer(int id, String password) {
		super();
		this.id = id;
		this.password = password;
	}

	/**
	 * construct customer object and get only id
	 * 
	 * @param id
	 */
	public Customer(int id) {
		super();
		this.id = id;
	}

	/**
	 * construct customer object and get only name
	 * 
	 * @param name
	 */
	public Customer(String name) {
		super();
		this.name = name;
	}

	/**
	 * empty constructor
	 */
	public Customer() {
	}

	/**
	 * to string method
	 */
	@Override
	public String toString() {
		return "\n Customer [id=" + id + ", name=" + name + ", password=" + password + "]";
	}

}
