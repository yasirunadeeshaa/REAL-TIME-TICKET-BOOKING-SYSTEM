package com.Ticketing.System.Model;

import com.Ticketing.System.Configuration.Configuration;
import com.Ticketing.System.Utill.LoggerUtil;
import jakarta.persistence.*;
import lombok.*;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

@Entity
@Getter
@Setter
@Table(name = "vendor")
public class Vendor implements Runnable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int vendorId;
    @Column(name = "vendor_name", nullable = false)
    private String vendorName;
    @Column(name = "vendor_password", nullable = false)
    private String vendorPassword;
    @Column(name = "vendor_email", unique = true, nullable = false)
    private String vendorEmail;
    @Transient
    private final TicketPool ticketPool;
    @Transient
    public Configuration configuration;

    private static final Logger logger = LoggerUtil.getLogger(Vendor.class.getName());

    public Vendor() {
        this.ticketPool = null;
        this.configuration = null;
    }
    public Vendor(int vendorId, TicketPool ticketPool, Configuration configuration) {
        this.vendorId = vendorId;
        this.ticketPool = ticketPool;
        this.configuration = configuration;
    }

    @Override
    public void run() {
        try {
            while (true) {
                ticketPool.addTickets(configuration.getVendorTicketReleaseRate(),configuration.getTotalTickets());
                logger.info("Vendor " + vendorId + " added " + configuration.getVendorTicketReleaseRate() + " tickets.");
                System.out.println("Vendor " + vendorId + " added " + configuration.getVendorTicketReleaseRate() + " tickets.");
                TimeUnit.MILLISECONDS.sleep(configuration.getVendorReleaseInterval());
                //Thread.sleep(configuration.getVendorReleaseInterval());
            }
        } catch (InterruptedException e) {
            logger.info("Vendor " + vendorId + " interrupted.");
            System.out.println("Vendor " + vendorId + " interrupted.");
            Thread.currentThread().interrupt();
        }
    }
}