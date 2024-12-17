package com.Ticketing.System.Model;

import com.Ticketing.System.Utill.LoggerUtil;

import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.logging.Logger;

public class TicketPool {

    private final LinkedList<Ticket> tickets;
    private final int maxCapacity;
    private int ticketIdCounter = 0;

    public static final Object lock = new Object();
    public Vendor vendor;
    public  Ticket ticket;
    private LocalDateTime createdAt;
    private static final Logger logger = LoggerUtil.getLogger(TicketPool.class.getName());
// Timestamp when the ticket was created

    public TicketPool(int maxCapacity) {
        //this.tickets = Collections.synchronizedList(new ArrayList<>());
        this.maxCapacity = maxCapacity;
        this.tickets=new LinkedList<Ticket>();
    }
    public synchronized void add_total_tickets(int total){
        for (int j = 0; j <total; j++) {
            ticketIdCounter++;
            tickets.add(new Ticket(ticketIdCounter,"Movie ticket","VIP","available",5.55));
        }
    }
    public synchronized void addTickets(int count , int totalticket) throws InterruptedException {

        while (tickets.size() + count >= maxCapacity) {  // Check if adding the new tickets would exceed the maximum capacity.
            logger.info("Warning !!!! Ticket pool reached maximum capacity. Please waiting...");
            System.out.println("Warning !!!! Ticket pool reached maximum capacity. Please waiting...");
            lock.wait();  // Wait until notified.
        }
        for (int i = 0; i < count; i++) { // Add the tickets to the pool.till count = customer ticket  retrival rate
            ticketIdCounter++;
            tickets.add(new Ticket(ticketIdCounter,"Movie ticket","VIP","available",5.55));

        }
        logger.info("ADDED NUMBER OF TICKETS :-  " + count + " TICKETS. NOW POOL SIZE :- " + tickets.size());
        System.out.println("Added number of tickets :- " + count + " TICKETS. NOW POOL SIZE :- " + tickets.size());
        notifyAll();  // Notify all waiting threads that tickets have been added.
    }
public synchronized void removeTicket(int retrivalrate) throws InterruptedException {

    if (tickets.size() >= retrivalrate) { // Check if there are enough tickets in pool to buy
        for (int i = 0; i < retrivalrate; i++) {
            Ticket ticket = tickets.removeFirst();  // Remove tickets from the pool
            logger.info("TICKET REMOVED :- " + ticket + ". Available number of tickets :- " + tickets.size());
            System.out.println("TICKET REMOVED :- " + ticket + ". Available number of tickets :- " + tickets.size());
        }
    }
    else if (retrivalrate<tickets.size()) {
        System.out.println("Not enough tickets available. Current pool size: " + tickets.size());
        logger.info("Not enough tickets available. Current pool size: " + tickets.size());
        lock.wait();
    }
    else if (tickets.isEmpty()) { //if ticket poo is empty
        logger.info("Sorry !!!! No tickets available. Please Waiting...");
        System.out.println("Sorry !!!! No tickets available. Please Waiting...");
        lock.wait();
    }
    notifyAll();


}
}