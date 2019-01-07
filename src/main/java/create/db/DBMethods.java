package create.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/**
 * this class create DB
 * 
 * @author YECHIEL.MOSHE
 *
 */
public class DBMethods {

	private static final String URL = "jdbc:postgresql://" + "ec2-79-125-4-96.eu-west-1.compute.amazonaws.com\r\n:5432"
			+ "/de0t8ujom6l13v";
	private static final String DRIVER = "org.postgresql.Driver";
	private static final String USERNAME = "zksauqzscsjtbr";
	private static final String PASSWORD = "6a6aec2e4e881e83c8fc1e9f4109da242a0d92994f813fc7f944c38818197bc9";
	
	/**
	 * this method creates tables for DB
	 */
	public static void createTables() {
		Connection con = null;
		try {
			Class.forName(DRIVER).newInstance();
			con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			Statement stmt = con.createStatement();

			String CompanyTable = "CREATE TABLE company(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, company_name VARCHAR(255), "
					+ "password VARCHAR(255), email VARCHAR(255))";
			stmt.execute(CompanyTable);
//			CREATE TABLE company(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, company_name VARCHAR(255), password VARCHAR(255), email VARCHAR(255));

			String CustomerTable = "CREATE TABLE customer(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, customer_name VARCHAR(255), "
					+ "password VARCHAR(255))";
			stmt.execute(CustomerTable);
//			CREATE TABLE customer(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, customer_name VARCHAR(255), password VARCHAR(255));

			String CouponTable = "CREATE TABLE coupon(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title VARCHAR(255), start_date DATE, "
					+ "end_date DATE, amount INTEGER, type VARCHAR(50), message VARCHAR(255), price DOUBLE, image VARCHAR(255))";
			stmt.execute(CouponTable);
//			CREATE TABLE coupon(id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, title VARCHAR(255), start_date DATE, end_date DATE, amount INTEGER, type VARCHAR(50), message VARCHAR(255), price DOUBLE, image VARCHAR(255));

			String CustomerCouponTable = "CREATE TABLE customer_coupon(customer_id BIGINT, coupon_id BIGINT, "
					+ "PRIMARY KEY(customer_id, coupon_id))";
			stmt.execute(CustomerCouponTable);
//			CREATE TABLE customer_coupon(customer_id BIGINT, coupon_id BIGINT, PRIMARY KEY(customer_id, coupon_id));

			String CompanyCouponTable = "CREATE TABLE company_coupon(company_id BIGINT, coupon_id BIGINT, "
					+ "PRIMARY KEY(company_id, coupon_id))";
			stmt.execute(CompanyCouponTable);
//			CREATE TABLE company_coupon(company_id BIGINT, coupon_id BIGINT, PRIMARY KEY(company_id, coupon_id));

			System.out.println("tables created");
		} catch (Exception e) {
			System.out.println("tables not created");
		}
	}
	
	/**
	 * this method delete all tables from DB
	 */
	public static void dropAllTables() {
		Connection con = null;
		try {
			Class.forName(DRIVER).newInstance();
			con = DriverManager.getConnection(URL, USERNAME, PASSWORD);

			Statement st = con.createStatement();

			String dropCompanyTableSql = "DROP TABLE company";
			st.execute(dropCompanyTableSql);

			String dropCustomerTableSql = "DROP TABLE customer";
			st.execute(dropCustomerTableSql);

			String dropCouponTableSql = "DROP TABLE coupon";
			st.execute(dropCouponTableSql);

			String dropCompanyCouponTableSql = "DROP TABLE company_coupon";
			st.execute(dropCompanyCouponTableSql);

			String dropCustomerCouponTableSql = "DROP TABLE customer_coupon";
			st.execute(dropCustomerCouponTableSql);

			st.close();
			System.out.println("tables deleted");
		} catch (Exception e) {
			System.out.println("tables not deleted - " + e);
		}

	}

}
