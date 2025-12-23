import java.sql.*;
public class TestMySQL {
    public static void main(String[] args) {
        // Try multiple URL formats
        String[] urls = {
            "jdbc:mysql://localhost:3306/eventopia_db?allowPublicKeyRetrieval=true",
            "jdbc:mysql://localhost:3306/eventopia_db?useSSL=false&allowPublicKeyRetrieval=true",
            "jdbc:mysql://localhost:3306/eventopia_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC"
        };
        String user = "root";
        String password = "Eventopia123";
        System.out.println("Testing MySQL connection...");
        for (String url : urls) {
            try {
                System.out.println("Testing URL: " + url);
                Connection conn = DriverManager.getConnection(url, user, password);
                System.out.println("SUCCESS! Connected to database: " + conn.getCatalog());
                conn.close();
                System.exit(0);
            } catch (Exception e) {
                System.out.println("Failed: " + e.getMessage());
            }
        }
        System.out.println("All connection attempts failed!");
    }
}