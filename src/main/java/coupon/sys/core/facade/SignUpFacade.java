package coupon.sys.core.facade;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.dao.CompanyDAO;
import coupon.sys.core.dao.CustomerDAO;
import coupon.sys.core.exceptions.DbException;
import coupon.sys.core.exceptions.ObjectAlreadyExistException;

public class SignUpFacade {
	
	private CompanyDAO companyDAO;
	private CustomerDAO customerDAO;
	
	/**
	 * construct the SignUp facade and get companyDao and customerDao
	 * 
	 * @param companyDAO
	 * @param customerDAO
	 */
	public SignUpFacade(CompanyDAO companyDAO, CustomerDAO customerDAO) {
		this.companyDAO = companyDAO;
		this.customerDAO = customerDAO;
	}
	
	/**
	 * this method create company 
	 * check if company or customer with same name exist
	 * 
	 * @param company
	 * @throws ObjectAlreadyExistException
	 * @throws DbException
	 */
	public void createCompany(Company company) throws ObjectAlreadyExistException, DbException {
		if (companyDAO.checkIfExist(company) == false && customerDAO.checkIfExist(company) == false) {
			if(company.getPassword().length()>=5) {
				if(company.getPassword().length()<=8) {
					companyDAO.createCompany(company);
					System.out.println("company created, id:" + company.getId() + " name:" + company.getName());
				} else {
					throw new DbException("company not created, password too long");
				}
			} else {
				throw new DbException("company not created, password too short");
			}
		} else {
			throw new ObjectAlreadyExistException(company.getName() + " already exist");
		}
	}
	
	/**
	 * this method create customer
	 * check if customer or company with same name exist
	 * 
	 * @param customer
	 * @throws ObjectAlreadyExistException
	 * @throws DbException
	 */
	public void createCustomer(Customer customer) throws ObjectAlreadyExistException, DbException {
		if (customerDAO.checkIfExist(customer) == false && companyDAO.checkIfExist(customer) == false) {
			if(customer.getPassword().length()>=5) {
				if(customer.getPassword().length()<=8) {
					customerDAO.createCustomer(customer);
					System.out.println("customer created, id:" + customer.getId() + " name:" + customer.getName());
				} else {
					throw new DbException("customer not created, password too long");
				}
			} else {
				throw new DbException("customer not created, password too short");
			}
		} else {
			throw new ObjectAlreadyExistException(customer.getName() + " already exist");
		}
	}

}
