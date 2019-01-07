package coupon.sys.core.dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.connections.ConnectionPool;
import coupon.sys.core.dao.CompanyDAO;
import coupon.sys.core.exceptions.ConnectionPoolException;
import coupon.sys.core.exceptions.DbException;

/**
 * this class implements CompanyDAO interface
 * 
 * @author YECHIEL.MOSHE
 * 
 */
public class CompanyDAODb implements CompanyDAO {

	private Company loggedInCompany;
	private ConnectionPool connectionPool;

	/**
	 * this method create a company
	 */
	@Override
	public void createCompany(Company company) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String createCompanySql = "insert into company (company_name, password, email) values(?,?,?)";
			PreparedStatement pst = con.prepareStatement(createCompanySql, PreparedStatement.RETURN_GENERATED_KEYS);
			pst.setString(1, company.getName());
			pst.setString(2, company.getPassword());
			pst.setString(3, company.getEmail());
			pst.executeUpdate();

			ResultSet rs = pst.getGeneratedKeys();
			rs.next();
			company.setId(rs.getLong(1));
			rs.close();
			pst.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("cannot create new company[name: " + company.getName() + "]");
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method remove the company
	 */
	@Override
	public void removeCompany(Company company) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String removeCompanySql = "DELETE FROM company WHERE id=" + company.getId();
			Statement st = con.createStatement();
			st.executeUpdate(removeCompanySql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("cannot delete company " + company.toString());
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method update the company
	 */
	@Override
	public void updateCompany(Company company) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String updateCompanySql = "update company set company_name='" + company.getName() + "', password='"
					+ company.getPassword() + "', email='" + company.getEmail() + "' where id= " + company.getId();
			Statement st = con.createStatement();
			st.execute(updateCompanySql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("cannot update company " + company.toString(), e);
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method get specific company by id
	 */
	@Override
	public Company getCompany(long id) throws DbException {
		Connection con = null;
		Company company = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String getCompanySql = "select * from company where id=" + id;
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getCompanySql);
			if(rs.next()) {
				company = new Company();
				company.setId(rs.getLong("id"));
				company.setName(rs.getString("company_name"));
				company.setPassword(rs.getString("password"));
				company.setEmail(rs.getString("email"));
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return company;
	}
	
	/**
	 * this method get the logged in company by id
	 */
	@Override
	public Company getCompany() throws DbException {
		Connection con = null;
		Company company = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String getCompanySql = "select * from company where id=" + loggedInCompany.getId();
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getCompanySql);
			company = new Company();
			rs.next();
			company.setId(rs.getLong("id"));
			company.setName(rs.getString("company_name"));
			company.setPassword(rs.getString("password"));
			company.setEmail(rs.getString("email"));
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return company;
	}

	/**
	 * this method get all companies
	 */
	@Override
	public Collection<Company> getAllCompanies() throws DbException {
		Connection con = null;
		Collection<Company> companies = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String getAllCompaniesSql = "select * from company";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getAllCompaniesSql);
			companies = new ArrayList<Company>();
			while (rs.next()) {
				Company company = new Company();
				company.setId(rs.getLong("id"));
				company.setName(rs.getString("company_name"));
				company.setPassword(rs.getString("password"));
				company.setEmail(rs.getString("email"));
				companies.add(company);
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return companies;
	}

	/**
	 * this method get all coupons by company
	 */
	@Override
	public Collection<Coupon> getCoupons() throws DbException {
		Connection con = null;
		ArrayList<Coupon> coupons = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			coupons = new ArrayList<Coupon>();
			String getCouponsSql = "select * from coupon inner join company_coupon on id=company_coupon.coupon_id "
					+ "where company_coupon.company_id=" + loggedInCompany.getId();
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getCouponsSql);
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getLong("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setType(CouponType.valueOf(rs.getString("type")));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupon.setImage(rs.getString("image"));
				coupons.add(coupon);
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return coupons;
	}

	/**
	 * this method use to login for company client
	 */
	@Override
	public boolean login(String name, String password) throws DbException {
		Connection con = null;
		boolean loginSuccess = false;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String loginSql = "select * from company where company_name='" + name + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(loginSql);
			if (rs.next()) {
				if (rs.getString("password").equals(password)) {
					loginSuccess = true;
					loggedInCompany=new Company(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getString(4));
				}
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return loginSuccess;
	}

	/**
	 * this method check if company exist in db
	 */
	@Override
	public boolean checkIfExist(Company company) throws DbException {
		Connection con = null;
		boolean exist = false;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String checkSql = "select * from company where company_name='" + company.getName() + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(checkSql);
			if (rs.next()) {
				exist = true;
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return exist;
	}

	/**
	 * this method check if company exist in db with same name of customer
	 */
	@Override
	public boolean checkIfExist(Customer customer) throws DbException {
		Connection con = null;
		boolean exist = false;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String checkSql = "select * from company where company_name='" + customer.getName() + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(checkSql);
			if (rs.next()) {
				exist = true;
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return exist;
	}

	/**
	 * this method remove the coupon from company-coupon table
	 */
	@Override
	public void removeCompanyCoupon(Company company) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String removeCompanySql = "delete from company_coupon where company_id=" + company.getId();
			Statement st = con.createStatement();
			st.executeUpdate(removeCompanySql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("unable to delete from company-coupon company id: " + company.getId());
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method insert coupon to company-coupon table when coupon created
	 */
	@Override
	public void insertCouponCreation(long couponId) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String insertCouponSql = "insert into company_coupon (company_id, coupon_id) values(" + loggedInCompany.getId() + ", "
					+ couponId + ")";
			Statement st = con.createStatement();
			st.execute(insertCouponSql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method check if coupon belong to specific company
	 */
	@Override
	public boolean couponBelongComapny(long couponId) throws DbException {
		Connection con = null;
		boolean belong = false;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String couponBelongsSql = "select * from company_coupon where company_id=" + loggedInCompany.getId() + " and coupon_id="
					+ couponId;
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(couponBelongsSql);
			if (rs.next()) {
				belong = true;
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return belong;
	}

	/**
	 * this method get the coupon by type and company
	 */
	@Override
	public Collection<Coupon> getCouponByType(CouponType type) throws DbException {
		Connection con = null;
		ArrayList<Coupon> coupons = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String getCouponsByTypeSql = "select coupon.* from coupon, company_coupon where company_coupon.coupon_id=coupon.id "
					+ "and company_coupon.company_id=" + loggedInCompany.getId() + " and coupon.type='" + type.name() + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getCouponsByTypeSql);
			coupons = new ArrayList<Coupon>();
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getLong("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setType(CouponType.valueOf(rs.getString("type")));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupon.setImage(rs.getString("image"));
				coupons.add(coupon);
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return coupons;
	}

	/**
	 * this method get coupons per company by price inside collection
	 */
	@Override
	public Collection<Coupon> getCouponsByPrice(double Price) throws DbException {
		Connection con = null;
		Collection<Coupon> couponByPrice = new ArrayList<>();
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String couponByPriceSql = "select coupon.* from coupon, company_coupon where company_coupon.coupon_id=coupon.id "
					+ "and company_coupon.company_id=" + loggedInCompany.getId() + " and coupon.price<=" + Price;
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(couponByPriceSql);
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getLong("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setType(CouponType.valueOf(rs.getString("type")));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupon.setImage(rs.getString("image"));
				couponByPrice.add(coupon);
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return couponByPrice;
	}

	/**
	 * this method get coupons by date for company inside collection
	 */
	@Override
	public Collection<Coupon> getCouponsByStartDate(Date date) throws DbException {
		Connection con = null;
		Collection<Coupon> CouponsByDate = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String couponByDateSql = "select coupon.* from company_coupon, coupon where company_coupon.coupon_id=coupon.id "
					+ "and company_coupon.company_id=" + loggedInCompany.getId() + " and coupon.start_date<='"
					+ new java.sql.Date(date.getTime()) + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(couponByDateSql);
			CouponsByDate = new HashSet<>();
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getLong("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setType(CouponType.valueOf(rs.getString("type")));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupon.setImage(rs.getString("image"));
				CouponsByDate.add(coupon);
			}
			rs.close();
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException();
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return CouponsByDate;
	}

}
