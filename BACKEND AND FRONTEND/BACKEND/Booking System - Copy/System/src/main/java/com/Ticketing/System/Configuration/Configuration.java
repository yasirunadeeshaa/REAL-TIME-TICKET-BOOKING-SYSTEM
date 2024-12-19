package com.Ticketing.System.Configuration;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

@Component
@Table(name = "configuration")
public class Configuration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int totalTickets;
    private int maxTicketCapacity;
    private int vendorReleaseInterval;
    private int vendorTicketReleaseRate;
    private int customerRetrievalInterval;
    private int customerTicketRetrievalRate;

//    public Configuration(int totalTickets, int maxTicketCapacity, int vendorReleaseInterval,int vendorTicketReleaseRate,int customerRetrievalInterval,int customerTicketRetrievalRate) {
//        this.totalTickets = totalTickets;
//        this.maxTicketCapacity=maxTicketCapacity;
//        this.vendorReleaseInterval=vendorReleaseInterval;
//        this.vendorTicketReleaseRate=vendorTicketReleaseRate;
//        this.customerRetrievalInterval=customerRetrievalInterval;
//        this.customerTicketRetrievalRate=customerTicketRetrievalRate;
//    }

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

    public Long getId() {
        return id;
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

    public void setId(Long id) {
        this.id = id;
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