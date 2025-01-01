package com.Ticketing.System.Model;

import com.Ticketing.System.Configuration.Configuration;
import com.Ticketing.System.Utill.LoggerUtil;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;


@Entity
@Getter
@Setter
@Table(name = "customer") // Optional: Define the table name in the database
public class Customer implements Runnable , Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int customerID;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(name = "customer_email", unique = true, nullable = false)
    private String customerEmail;

    @Column(name = "customer_password", nullable = false)
    private String customerPassword;

    @Transient // Not persisted in the database
    private final TicketPool ticketPool;

    @Transient // Not persisted in the database
    private final Configuration configuration;

    private static final Logger logger = LoggerUtil.getLogger(Customer.class.getName());

    // Add default constructor for JPA
    public Customer() {
        this.ticketPool = null;
        this.configuration = null;
    }

    public Customer(int customerId, TicketPool ticketPool, Configuration configuration) {
        this.customerID = customerId;
        this.ticketPool = ticketPool;
        this.configuration = configuration;
    }

//    public String getCustomerPassword() {
//        return customerPassword;
//    }
//
//    public void setCustomerPassword(String customerPassword) {
//        this.customerPassword = customerPassword;
//    }

    @Override
    public void run() {
        try {
            while (true) {
                ticketPool.removeTicket(configuration.getCustomerTicketRetrievalRate());
                logger.info("Customer " + customerID + "buy "+configuration.getCustomerTicketRetrievalRate()+" tickets ");
                System.out.println("Customer " + customerID + " buy " +configuration.getCustomerTicketRetrievalRate()+ " tickets ");
                TimeUnit.MILLISECONDS.sleep(configuration.getCustomerRetrievalInterval());
            }
        } catch (InterruptedException e) {
            logger.info("Customer " + customerID + " interrupted.");
            System.out.println("Customer " + customerID + " interrupted.");
            Thread.currentThread().interrupt();
        }
    }

}