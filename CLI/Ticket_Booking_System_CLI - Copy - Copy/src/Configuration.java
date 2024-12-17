import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.Logger;

public class Configuration {

    private int totalTickets;
    private int maxTicketCapacity;
    private int vendorReleaseInterval;
    private int vendorTicketReleaseRate;
    private int customerRetrievalInterval;
    private int customerTicketRetrievalRate;
    private static final Logger logger = LoggerUtil.getLogger(Configuration.class.getName());


    //getters
    public int getMaxTicketCapacity() {
        return maxTicketCapacity;
    }
    public int getTotalTickets() { return totalTickets; }
    public int getVendorTicketReleaseRate() { return vendorTicketReleaseRate; }
    public int getCustomerRetrievalInterval() { return customerRetrievalInterval; }
    public int getCustomerTicketRetrievalRate() {
        return customerTicketRetrievalRate;
    }
    public int getVendorReleaseInterval() {
        return vendorReleaseInterval;
    }


    //setters
    public void setCustomerRetrievalInterval(int customerRetrievalInterval) {
        this.customerRetrievalInterval = customerRetrievalInterval;
    }
    public void setMaxTicketCapacity(int maxTicketCapacity) {
        this.maxTicketCapacity = maxTicketCapacity;
    }
    public void setTotalTickets(int totalTickets) {
        this.totalTickets = totalTickets;
    }
    public void setVendorReleaseInterval(int vendorReleaseInterval) {
        this.vendorReleaseInterval = vendorReleaseInterval;
    }
    public void setCustomerTicketRetrievalRate(int customerTicketRetrievalRate) {
        this.customerTicketRetrievalRate = customerTicketRetrievalRate;
    }
    public void setVendorTicketReleaseRate(int vendorTicketReleaseRate) {
        this.vendorTicketReleaseRate = vendorTicketReleaseRate;
    }

    @Override
    public String toString() {
        return "Configuration {" +
                "totalTickets=" + totalTickets +
                ", maxTicketCapacity=" + maxTicketCapacity +
                ", vendorReleaseInterval=" + vendorReleaseInterval +
                ", vendorTicketReleaseRate=" + vendorTicketReleaseRate +
                ", customerRetrievalInterval=" + customerRetrievalInterval +
                ", customerTicketRetrievalRate=" + customerTicketRetrievalRate +
                '}';
    }

    // Save configuration to JSON file
    public void saveToJson(String filename) throws IOException {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        try (FileWriter writer = new FileWriter(filename)) {
            gson.toJson(this, writer);
        }
    }
    // Load configuration from JSON file
    public static Configuration loadFromJson(String filename) throws IOException {
        Gson gson = new Gson();
        try (FileReader reader = new FileReader(filename)) {
            return gson.fromJson(reader, Configuration.class);
        }
    }
    //save configuration to text file
    public void saveConfigToTextFile(String filename) throws IOException {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(filename));

            try {
                writer.write("TotalNumberofTickets=" + this.totalTickets);
                writer.newLine();
                writer.write("TicketReleaseRate=" + this.getVendorTicketReleaseRate());
                writer.newLine();
                writer.write("CustomerRetrievalInterval=" + this.getCustomerRetrievalInterval());
                writer.newLine();
                writer.write("MaximumTicketCapacity=" + this.maxTicketCapacity);
                logger.info("Configuration saved to text file: " + filename);
            } catch (Throwable var6) {
                try {
                    writer.close();
                } catch (Throwable var5) {
                    var6.addSuppressed(var5);
                }throw var6;
            }
            writer.close();
        } catch (IOException var7) {
            logger.info("Error saving config to text file: " + var7.getMessage());
            throw var7;
        }
    }


    // Validate configuration values
    public void validate() {
        if (totalTickets <= 0 || maxTicketCapacity <= 0 || vendorTicketReleaseRate <= 0 || customerTicketRetrievalRate<=0) {
            throw new IllegalArgumentException("Configuration values must be positive integers.");
        }
        if (maxTicketCapacity < totalTickets) {
            throw new IllegalArgumentException("Max ticket capacity cannot exceed total tickets.");
        }
    }
}