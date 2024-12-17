package com.Ticketing.System.Service;

import com.Ticketing.System.Configuration.Configuration;
import com.Ticketing.System.Model.Customer;
import com.Ticketing.System.Model.TicketPool;
import com.Ticketing.System.Model.Vendor;
import com.Ticketing.System.Utill.LoggerUtil;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Logger;

@Service
public class TicketSystemService {

    private ExecutorService executor;
    private boolean isSystemRunning = false;
    private static final Logger logger = LoggerUtil.getLogger(TicketPool.class.getName());
    String configuration_file = "config.json";
    Configuration config = new Configuration();
    Configuration loadedConfig;

//    public TicketSystemService(){
//        try {
//            config.validate();
//            config.saveToJson(configuration_file);
//            System.out.println("Configuration saved to" + configuration_file);
//            logger.info("CONFIGURATION FILE SAVED TO " + configuration_file);
//        } catch (IllegalArgumentException | IOException e) {
//            System.err.println("Error saving configuration :- " + e.getMessage());
//            logger.info("ERROR SAVING CONFIGURATION :- " + e.getMessage().toUpperCase());
//            return;
//        }
//        try {
//            loadedConfig = Configuration.loadFromJson(configuration_file);
//        } catch (IOException e) {
//            System.err.println("Error loading configuration: " + e.getMessage());
//        }
//    }
    public void startSystem(Configuration config) {
        if (isSystemRunning) {
            throw new IllegalStateException("Ticket System is already running.");
        }

        executor = Executors.newFixedThreadPool(8); // Example: 5 vendors + 3 customers
        TicketPool ticketPool = new TicketPool(config.getMaxTicketCapacity());
        ticketPool.add_total_tickets(config.getTotalTickets());

        // Start Vendor Threads
        for (int i = 1; i <= 5; i++) {
            executor.execute(new Vendor(i, ticketPool, config));
        }

        // Start Customer Threads
        for (int i = 1; i <= 3; i++) {
            executor.execute(new Customer(i, ticketPool, config));
        }

        isSystemRunning = true;
    }

    public void stopSystem() {
        if (!isSystemRunning) {
            throw new IllegalStateException("Ticket System is not running.");
        }

        executor.shutdownNow();
        isSystemRunning = false;
    }
}
