package coupon.sys.core.connections;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import coupon.sys.core.exceptions.ConnectionPoolException;

/**
 * this class manage the connections - singleton
 * 
 * @author YECHIEL.MOSHE
 *
 */
public class ConnectionPool {

	private Set<Connection> connections = new HashSet<>();
	private static final int POOL_SIZE = 10;
	private static ConnectionPool instance;
	private boolean shutDown = false;
	private static final String URL = "jdbc:postgresql://ec2-79-125-4-96.eu-west-1.compute.amazonaws.com:5432/de0t8ujom6l13v";
	private static final String USERNAME = "zksauqzscsjtbr";
	private static final String PASSWORD = "6a6aec2e4e881e83c8fc1e9f4109da242a0d92994f813fc7f944c38818197bc9";

	/**
	 * construct the connection pool and add 10 connections to pool
	 * 
	 * @throws ConnectionPoolException
	 */
	private ConnectionPool() throws ConnectionPoolException {
		try {
			for (int i = 0; i < POOL_SIZE; i++) {
				Class.forName("org.postgresql.Driver").newInstance();
				Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
				connections.add(con);
			}
		} catch (Exception e) {
			throw new ConnectionPoolException("connection pool initialization error", e);
		}
	}

	/**
	 * this method initialize instance of connection pool
	 * 
	 * @return instance
	 * @throws ConnectionPoolException
	 */
	public synchronized static ConnectionPool getInstance() throws ConnectionPoolException {
		if (instance == null) {
			instance = new ConnectionPool();
		}
		return instance;
	}

	/**
	 * this method get connection from pool
	 * 
	 * @return connection
	 * @throws ConnectionPoolException
	 */
	public synchronized Connection getConnection() throws ConnectionPoolException {
		if (!shutDown) {
			while (connections.isEmpty()) {
				try {
					wait();
				} catch (InterruptedException e) {
					throw new ConnectionPoolException();
				}
			}
			Iterator<Connection> it = connections.iterator();
			Connection con = it.next();
			it.remove();
			return con;
		} else {
			throw new ConnectionPoolException("cannot get connection, connection pool closed");
		}
	}

	/**
	 * this method for return connection to the pool
	 * 
	 * @param con
	 */
	public synchronized void returnConnection(Connection con) {
		connections.add(con);
		notifyAll();
	}

	/**
	 * this method close all connections check if connections not in use and close
	 * it
	 * 
	 * @throws ConnectionPoolException
	 * @throws InterruptedException
	 */
	public synchronized void closeAllConnections() throws ConnectionPoolException, InterruptedException {
		shutDown = true;
		try {
			while (connections.size() < POOL_SIZE) {
				wait(2000);
			}
			for (Connection connection : connections) {
				connection.close();
			}
			connections.clear();
		} catch (SQLException e) {
			throw new ConnectionPoolException("connection pool shutdown error", e);
		}
	}

}
