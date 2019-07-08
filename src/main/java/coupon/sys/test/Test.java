package coupon.sys.test;

import java.sql.SQLException;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.couponSystem.CouponSystem;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.AdminFacade;
import coupon.sys.core.facade.CompanyFacade;
import coupon.sys.core.facade.CustomerFacade;
import coupon.sys.core.utils.CurrentDate;
import create.db.DBMethods;

/**
 * this class generate DB with all companies, customers and coupons every restart
 * 
 * @author YECHIEL.MOSHE
 *
 */
public class Test {
	
	public static void startProj() throws SQLException {
		try {
			Company teva = new Company("teva", "123456", "teva@email");
			Company checkpoint = new Company("checkpoint", "123456", "checkpoint@email");
			Company zim = new Company("zim", "123456", "zim@email");
			Company shufersal = new Company("shufersal", "123456", "shufersal@email");
			Company isracard = new Company("isracard", "123456", "isracard@email");
			
			Customer david = new Customer("david", "123456");
			Customer yossi = new Customer("yossi", "123456");
			Customer avi = new Customer("avi", "123456");
			Customer john = new Customer("john", "123456");
			Customer chaim = new Customer("chaim", "123456");
			
			Date today = CurrentDate.getCurrentDate();
			Date date1 = new GregorianCalendar(2022, Calendar.MARCH, 30).getTime();
			Date date2 = new GregorianCalendar(2022, Calendar.JANUARY, 30).getTime();
			Date date3 = new GregorianCalendar(2022, Calendar.MAY, 15).getTime();
			Date date4 = new GregorianCalendar(2022, Calendar.FEBRUARY, 30).getTime();
			Date date5 = new GregorianCalendar(2022, Calendar.JULY, 10).getTime();
			Date date6 = new GregorianCalendar(2022, Calendar.FEBRUARY, 17).getTime();
			Date date7 = new GregorianCalendar(2023, Calendar.MARCH, 25).getTime();
			Date date8 = new GregorianCalendar(2023, Calendar.OCTOBER, 1).getTime();
			Date date9 = new GregorianCalendar(2023, Calendar.MARCH, 12).getTime();
			Date date10 = new GregorianCalendar(2023, Calendar.FEBRUARY, 25).getTime();
			Date date11 = new GregorianCalendar(2023, Calendar.AUGUST, 18).getTime();
			
			Coupon breakfast = new Coupon("breakfast", today, date1, 50, CouponType.RESTURANTS, "breakfast and coffee", 15, "http://www.cbc.ca/inthekitchen/assets_c/2013/10/Steak'nEggs26-thumb-596x350-329015.jpg");
			Coupon microwave = new Coupon("microwave", today, date2, 30, CouponType.ELECTRICITY, "powerful microwave", 150, "https://hnsfpau.imgix.net/5/images/detailed/40/NN-SF574SQPQ-1.jpg?fit=fill&bg=0FFF&w=785&h=523&auto=format,compress");
			Coupon dishwasher = new Coupon("dishwasher", today, date3, 40, CouponType.ELECTRICITY, "stop do dishes", 400, "https://5.imimg.com/data5/AW/EF/MY-6236374/dishwasher-machine-500x500.jpg");
			Coupon weekendVacationInEilat = new Coupon("weekend vacation in Eilat", today, date4, 100, CouponType.TRAVELLING, "two nights in hotel including breakfast and dinner and pool", 500, "https://media.groo.co.il/_media/media/18382/199886.jpg");
			Coupon TV = new Coupon("TV", today, date5, 350, CouponType.ELECTRICITY, "smart TV 4K 55 inch", 500, "https://media.groo.co.il/_media/media/15841/178620.jpg");
			Coupon Spa = new Coupon("Spa", today, date6, 50, CouponType.HEALTH, "one day of spa for couple with lunch", 80, "https://media.groo.co.il/_media/media/9718/155624.jpg");
			Coupon laundryMachine = new Coupon("laundry machine", today, date7, 300, CouponType.ELECTRICITY, "laundry machine front door 8 kg", 500, "https://media.groo.co.il/_media/media/4796/209211.jpg");
			Coupon Gym = new Coupon("Gym", today, date8, 250, CouponType.SPORTS, "Experience the BEST Gym", 40, "https://media-cdn.tripadvisor.com/media/photo-w/06/d8/0d/0b/the-gym-maui.jpg");
			Coupon Quadcopter = new Coupon("Quadcopter", today, date9, 300, CouponType.ELECTRICITY, "HD camera, controlled by your smartphone", 150, "https://media.groo.co.il/_media/media/13477/163073_790_486.jpg");
			Coupon barcelona = new Coupon("barcelona", today, date10, 100, CouponType.TRAVELLING, "includes flights, 5 nights in hotel, breakfasts", 500, "https://media.groo.co.il/_media/media/23345/234227.jpg");
			Coupon vacuumCleaner = new Coupon("vacuum cleaner", today, date11, 200, CouponType.ELECTRICITY, "very strong vacuum cleaner", 150, "https://media.groo.co.il/_media/media/14658/182851.jpg");
			
//			DBMethods.dropAllTables();
			DBMethods.createTables();
			System.out.println("======================================");
			System.out.println();
			
			CouponSystem couponSystem = CouponSystem.getInstance();
			AdminFacade adminFacade = (AdminFacade) couponSystem.login("admin", "1234");
			
			adminFacade.createCompany(teva);
			adminFacade.createCompany(checkpoint);
			adminFacade.createCompany(zim);
			adminFacade.createCompany(shufersal);
			adminFacade.createCompany(isracard);
			System.out.println("==================companies created====================");
			System.out.println();
			
			adminFacade.createCustomer(david);
			adminFacade.createCustomer(yossi);
			adminFacade.createCustomer(avi);
			adminFacade.createCustomer(john);
			adminFacade.createCustomer(chaim);
			System.out.println("===================customers created===================");
			System.out.println();
			
			CompanyFacade tevaFacade = (CompanyFacade) couponSystem.login(teva.getName(), teva.getPassword());
			tevaFacade.createCoupon(breakfast);
			tevaFacade.createCoupon(microwave);
			tevaFacade.createCoupon(dishwasher);
			
			CompanyFacade checkpointFacade = (CompanyFacade) couponSystem.login(checkpoint.getName(), checkpoint.getPassword());
			checkpointFacade.createCoupon(weekendVacationInEilat);
			checkpointFacade.createCoupon(TV);
			checkpointFacade.createCoupon(Spa);
			
			CompanyFacade zimFacade = (CompanyFacade) couponSystem.login(zim.getName(), zim.getPassword());
			zimFacade.createCoupon(laundryMachine);
			zimFacade.createCoupon(Gym);
			zimFacade.createCoupon(Quadcopter);
			
			CompanyFacade shufersalFacade = (CompanyFacade) couponSystem.login(shufersal.getName(), shufersal.getPassword());
			shufersalFacade.createCoupon(barcelona);
			shufersalFacade.createCoupon(vacuumCleaner);
			System.out.println("===================coupons created===================");
			System.out.println();
			
			CustomerFacade davidFacade = (CustomerFacade) couponSystem.login(david.getName(), david.getPassword());
			davidFacade.purchaseCoupon(breakfast);
			davidFacade.purchaseCoupon(microwave);
			davidFacade.purchaseCoupon(Spa);
			davidFacade.purchaseCoupon(Gym);
			davidFacade.purchaseCoupon(weekendVacationInEilat);
			
			CustomerFacade yossiFacade = (CustomerFacade) couponSystem.login(yossi.getName(), yossi.getPassword());
			yossiFacade.purchaseCoupon(microwave);
			yossiFacade.purchaseCoupon(dishwasher);
			yossiFacade.purchaseCoupon(barcelona);
			yossiFacade.purchaseCoupon(weekendVacationInEilat);
			yossiFacade.purchaseCoupon(vacuumCleaner);
			
			CustomerFacade aviFacade = (CustomerFacade) couponSystem.login(avi.getName(), avi.getPassword());
			aviFacade.purchaseCoupon(breakfast);
			aviFacade.purchaseCoupon(weekendVacationInEilat);
			aviFacade.purchaseCoupon(Gym);
			aviFacade.purchaseCoupon(Quadcopter);
			aviFacade.purchaseCoupon(TV);
			
			CustomerFacade johnFacade = (CustomerFacade) couponSystem.login(john.getName(), john.getPassword());
			johnFacade.purchaseCoupon(Quadcopter);
			johnFacade.purchaseCoupon(barcelona);
			johnFacade.purchaseCoupon(Spa);
			johnFacade.purchaseCoupon(dishwasher);
			johnFacade.purchaseCoupon(breakfast);
			System.out.println("===================coupons purchased===================");
		} catch (CouponSystemException e) {
			System.out.println(e.getMessage());
		}
		
	}

}
