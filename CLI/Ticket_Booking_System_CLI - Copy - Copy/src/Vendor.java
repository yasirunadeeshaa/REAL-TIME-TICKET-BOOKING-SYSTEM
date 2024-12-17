import java.io.Serializable;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

public class Vendor implements Runnable {
    public int vendorId;  // uniqe identifier
    private final TicketPool ticketPool;
    public Configuration configuration;
    private static final Logger logger = LoggerUtil.getLogger(Vendor.class.getName());


    public Vendor(int vendorId, TicketPool ticketPool, Configuration configuration) {
        this.vendorId = vendorId;
        this.ticketPool = ticketPool;
        this.configuration = configuration;
    }

    @Override
    public void run() {
        try {
            while (true) {
                ticketPool.addTickets(configuration.getVendorTicketReleaseRate(), configuration.getTotalTickets());

                logger.info("Vendor " + vendorId + " added " + configuration.getVendorTicketReleaseRate() + " tickets.");
                System.out.println("Vendor " + vendorId + " added " + configuration.getVendorTicketReleaseRate() + " tickets.");

                // Pause for a configured interval before the next purchase.
                TimeUnit.MILLISECONDS.sleep(configuration.getVendorReleaseInterval());
            }
        } catch (InterruptedException e) {  // Handle the scenario where the thread is interrupted.
            logger.info("Vendor " + vendorId + " interrupted.");
            System.out.println("Vendor " + vendorId + " interrupted.");

            // Restore the interrupted status of the thread, as the InterruptedException clears it.
            Thread.currentThread().interrupt();
        }
    }
}
