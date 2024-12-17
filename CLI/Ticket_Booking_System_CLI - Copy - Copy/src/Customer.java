import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

public class Customer implements Runnable {
    private final int customerId;
    private final TicketPool ticketPool;
    private final Configuration configuration;
    private static final Logger logger = LoggerUtil.getLogger(Customer.class.getName());


    public Customer(int customerId, TicketPool ticketPool, Configuration configuration) {
        this.customerId = customerId;
        this.ticketPool = ticketPool;
        this.configuration = configuration;
    }

    @Override
    public void run() {
        try { //loop to simulate continuous customer ticket purchasing behavior.
            while (true) {
                ticketPool.removeTicket(configuration.getCustomerTicketRetrievalRate());

                logger.info("Customer " + customerId + " buy a ticket");
                System.out.println("Customer " + customerId + " buy a ticket");

                // Pause for a configured interval before the next purchase.
                TimeUnit.MILLISECONDS.sleep(configuration.getCustomerRetrievalInterval());
            }
        } catch (InterruptedException e) {   //// Handle the scenario where the thread is interrupted.

            logger.info("Customer " + customerId + " interrupted.");
            System.out.println("Customer " + customerId + " interrupted.");
            Thread.currentThread().interrupt(); // Restore the interrupted status of the thread, as the InterruptedException clears it.
        }
    }
}
