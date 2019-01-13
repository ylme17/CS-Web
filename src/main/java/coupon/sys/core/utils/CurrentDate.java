package coupon.sys.core.utils;

import java.util.Calendar;
import java.util.Date;

/**
 * this class for current date method
 * 
 * @author YECHIEL.MOSHE
 *
 */
public class CurrentDate {

	/**
	 * this method get current date
	 * 
	 * @return date
	 */
	public static Date getCurrentDate() {
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.HOUR_OF_DAY,0);
		calendar.set(Calendar.MINUTE,0);
		calendar.set(Calendar.SECOND,0);
		calendar.set(Calendar.MILLISECOND,0);
		return calendar.getTime();
	}

}
