package coupon.sys.core.dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.connections.ConnectionPool;
import coupon.sys.core.dao.CouponDAO;
import coupon.sys.core.exceptions.ConnectionPoolException;
import coupon.sys.core.exceptions.DbException;

/**
 * this class implements CouponDAO interface
 * 
 * @author YECHIEL.MOSHE
 * 
 */
public class CouponDAODb implements CouponDAO {

	private ConnectionPool connectionPool;

	/**
	 * this method create coupon
	 */
	@Override
	public void createCoupon(Coupon coupon) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String createCouponSql = "insert into coupon (title, start_date, end_date, amount, type, message, price, image) values(?,?,?,?,?,?,?,?)";
			PreparedStatement pst = con.prepareStatement(createCouponSql, PreparedStatement.RETURN_GENERATED_KEYS);
			pst.setString(1, coupon.getTitle());
			pst.setDate(2, new java.sql.Date(coupon.getStartDate().getTime()));
			pst.setDate(3, new java.sql.Date(coupon.getEndDate().getTime()));
			pst.setInt(4, coupon.getAmount());
			pst.setString(5, coupon.getType().name());
			pst.setString(6, coupon.getMessage());
			pst.setDouble(7, coupon.getPrice());
			pst.setString(8, coupon.getImage());
			pst.executeUpdate();

			ResultSet rs = pst.getGeneratedKeys();
			rs.next();
			coupon.setId(rs.getInt(1));
			rs.close();
			pst.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("cannot create a new coupon[title: " + coupon.getTitle() + "]");
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method remove coupon by id from coupon table
	 */
	@Override
	public void removeCoupon(Coupon coupon) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String removeCouponSql = "delete from coupon where id=" + coupon.getId();
			Statement st = con.createStatement();
			st.executeUpdate(removeCouponSql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("cannot delete coupon " + coupon.getId(), e);
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method update the coupon
	 */
	@Override
	public void updateCoupon(Coupon coupon) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String updateCouponSql = "update coupon set title=?, start_date=?, end_date=?, amount=?, type=?, message=?, price=?, image=? where id= "
					+ coupon.getId();
			PreparedStatement pst = con.prepareStatement(updateCouponSql);
			pst.setString(1, coupon.getTitle());
			pst.setDate(2, new java.sql.Date(coupon.getStartDate().getTime()));
			pst.setDate(3, new java.sql.Date(coupon.getEndDate().getTime()));
			pst.setInt(4, coupon.getAmount());
			pst.setString(5, coupon.getType().name());
			pst.setString(6, coupon.getMessage());
			pst.setDouble(7, coupon.getPrice());
			pst.setString(8, coupon.getImage());
			pst.executeUpdate();
			pst.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("unable to update coupon " + coupon.getId());
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method get coupon by id
	 */
	@Override
	public Coupon getCoupon(int id) throws DbException {
		Connection con = null;
		Coupon coupon = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String getCouponSql = "select * from coupon where id=" + id;
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getCouponSql);
			if(rs.next()) {
				coupon = new Coupon();
				coupon.setId(rs.getInt("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setType(CouponType.valueOf(rs.getString("type")));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupon.setImage(rs.getString("image"));
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
		return coupon;
	}

	/**
	 * this method get all coupons
	 */
	@Override
	public Collection<Coupon> getAllCoupon() throws DbException {
		Connection con = null;
		Collection<Coupon> coupons = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String getAllCouponsSql = "select * from coupon";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getAllCouponsSql);
			coupons = new ArrayList<>();
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getInt("id"));
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
	 * this method get coupons by type
	 */
	@Override
	public Collection<Coupon> getCouponByType(CouponType type) throws DbException {
		Connection con = null;
		Collection<Coupon> coupons = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String getCouponsByTypeSql = "select * from coupon where type='" + type.name() + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(getCouponsByTypeSql);
			coupons = new ArrayList<>();
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getInt("id"));
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
			throw new DbException("unable to get coupons");
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}
		return coupons;
	}

	/**
	 * this method remove coupons from customer-coupon table by coupon id this
	 * method help to delete coupon
	 */
	@Override
	public void removeCustomerCoupon(Coupon coupon) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String removeCustomerCouponSql = "delete from customer_coupon where coupon_id=" + coupon.getId();
			Statement st = con.createStatement();
			st.executeUpdate(removeCustomerCouponSql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("cannot delete coupon " + coupon.getId() + " from customer-coupon table");
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method remove coupons from company-coupon table by coupon id this method
	 * help to delete coupon
	 */
	@Override
	public void removeCompanyCoupon(Coupon coupon) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String removeCompanyCouponSql = "delete from company_coupon where coupon_id=" + coupon.getId();
			Statement st = con.createStatement();
			st.executeUpdate(removeCompanyCouponSql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("cannot delete coupon " + coupon.getId() + " from company-coupon table", e);
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method remove coupons by company id, this method help to delete company
	 */
	@Override
	public void removeCouponByCompany(Company company) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String removeCouponSql = "delete from coupon where coupon.id in (select company_coupon.coupon_id from company_coupon "
					+ "where company_coupon.company_id =" + company.getId() + ")";
			Statement st = con.createStatement();
			st.executeUpdate(removeCouponSql);
			st.close();
		} catch (ConnectionPoolException e) {
			System.out.println(e);
		} catch (SQLException e) {
			throw new DbException("unable to delete company coupons");
		} finally {
			if (con != null)
				connectionPool.returnConnection(con);
		}

	}

	/**
	 * this method remove coupons from customer-coupon table by company id this
	 * method help to delete company
	 */
	@Override
	public void removeCustomerCoupon(Company company) throws DbException {
		Connection con = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String removeCustomerCouponSql = "delete from customer_coupon where customer_coupon.coupon_id in (select company_coupon.coupon_id "
					+ "from company_coupon where company_coupon.coupon_id=customer_coupon.coupon_id "
					+ "and company_coupon.company_id=" + company.getId() + ")";
			Statement st = con.createStatement();
			st.executeUpdate(removeCustomerCouponSql);
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
	 * this method check if coupon exist by title to create one
	 */
	@Override
	public boolean checkIfExist(Coupon coupon) throws DbException {
		Connection con = null;
		boolean exist = false;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String checkIfExistSql = "select * from coupon where title='" + coupon.getTitle() + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(checkIfExistSql);
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
	 * this method get coupons by date inside collection
	 */
	@Override
	public Collection<Coupon> getCouponByDate(Date date) throws DbException {
		Connection con = null;
		Collection<Coupon> CouponByDate = null;
		try {
			connectionPool = ConnectionPool.getInstance();
			con = connectionPool.getConnection();
			String couponByDateSql = "select * from coupon where end_date<='" + new java.sql.Date(date.getTime()) + "'";
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(couponByDateSql);
			CouponByDate = new ArrayList<>();
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getInt("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setType(CouponType.valueOf(rs.getString("type")));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupon.setImage(rs.getString("image"));
				CouponByDate.add(coupon);
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
		return CouponByDate;
	}

}
