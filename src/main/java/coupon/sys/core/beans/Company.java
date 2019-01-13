package coupon.sys.core.beans;

import javax.xml.bind.annotation.XmlRootElement;

import lombok.Getter;
import lombok.Setter;

/**
 * this class for create objects of company type
 * 
 * @author YECHIEL.MOSHE
 *
 */
@XmlRootElement
public @Getter @Setter class Company {

	private int id;
	private String name;
	private String password;
	private String email;

	/**
	 * construct company object and get id, name, password and email
	 * 
	 * @param id       id of company - generated automatically from DB
	 * @param name     name of company
	 * @param password password of company for client login
	 * @param email    email of company
	 */
	public Company(int id, String name, String password, String email) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.email = email;
	}
	
	/**
	 * construct company object and get name, password and email
	 * 
	 * @param name     name of company
	 * @param password password of company for client login
	 * @param email    email of company
	 */
	public Company(String name, String password, String email) {
		super();
		this.name = name;
		this.password = password;
		this.email = email;
	}
	
	/**
	 * construct company object and get id, password and email
	 * 
	 * @param id     id of company
	 * @param password password of company for client login
	 * @param email    email of company
	 */
	public Company(int id, String password, String email) {
		super();
		this.id = id;
		this.password = password;
		this.email = email;
	}

	/**
	 * empty constructor
	 */
	public Company() {
	}

	/**
	 * construct company object and get only name
	 * 
	 * @param name name of the company
	 */
	public Company(String name) {
		setName(name);
	}

	/**
	 * construct company object and get only id
	 * 
	 * @param id company id
	 */
	public Company(int id) {
		setId(id);
	}

	/**
	 * to string method
	 */
	@Override
	public String toString() {
		return "\n Company [id=" + id + ", name=" + name + ", password=" + password + ", email=" + email + "]";
	}

}
