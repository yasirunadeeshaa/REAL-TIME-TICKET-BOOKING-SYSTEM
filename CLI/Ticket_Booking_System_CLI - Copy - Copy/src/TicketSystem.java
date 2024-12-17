import java.io.IOException;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Logger;


public class TicketSystem {
    private static final Logger logger = LoggerUtil.getLogger(Vendor.class.getName());

    public static void main(String[] args) throws IOException {

        String configuration_file = "config.json";
        Scanner scanner = new Scanner(System.in);
        Configuration config = new Configuration();

        System.out.println("*********************************************");
        System.out.println("*** REAL TIME EVENT TICKET BOOKING SYSTEM ***");
        System.out.println("*********************************************");

        int totalTickets = validateInput(scanner,          "   * Enter total number of tickets :-");
        int vendorReleaseRate = validateInput(scanner,     "   * Enter vendor release rate     :-");
        int customerRetrievalRate = validateInput(scanner, "   * Enter customer retrieval rate :-");

        config.setCustomerRetrievalInterval(1000);
        config.setVendorReleaseInterval(1000);
        config.setMaxTicketCapacity(500);
        config.setCustomerTicketRetrievalRate(customerRetrievalRate);
        config.setVendorTicketReleaseRate(vendorReleaseRate);
        config.setTotalTickets(totalTickets);

        System.out.println("* MAXIMUM TICKET CAPACITY   :- " + config.getMaxTicketCapacity());
        System.out.println("* TOTAL TICKETS             :- " + totalTickets);
        System.out.println("* VENDOR RELEASE RATE       :- " + vendorReleaseRate);
        System.out.println("* VENDOR RELEASE INTERVAL   :- "+ config.getVendorReleaseInterval());
        System.out.println("* CUSTOMER RETRIEVAL RATE   :- " + customerRetrievalRate);
        System.out.println("* CUSTOMER RELEASE INTERVAL :- " + config.getCustomerRetrievalInterval());

        scanner.close();

        // Save configuration to JSON file
        try {
            config.validate();
            config.saveToJson(configuration_file);
            config.saveConfigToTextFile("configurationtext_file");
            System.out.println("Configuration saved to" + configuration_file);
            logger.info("CONFIGURATION FILE SAVED TO " + configuration_file);
        } catch (IllegalArgumentException | IOException e) {
            System.err.println("Error saving configuration :- " + e.getMessage());
            logger.info("ERROR SAVING CONFIGURATION :- " + e.getMessage().toUpperCase());
            return;
        }

        TicketPool ticketPool = new TicketPool(config.getMaxTicketCapacity());
        ticketPool.add_total_tickets(config.getTotalTickets());

        // Load configuration and start the system
        try {
            Configuration loadedConfig = Configuration.loadFromJson(configuration_file);
            runSystem(ticketPool, loadedConfig);
        } catch (IOException e) {
            System.err.println("Error loading configuration: " + e.getMessage());
        }
    }
    private static void runSystem(TicketPool ticketPool, Configuration config) {
        System.out.println("***************  Starting the ticketing system !!!! **************");
        System.out.println("** Ticket pool initialize with "+ config.getTotalTickets()+" tickets . Ticket pool max capacity is :- "+ config.getMaxTicketCapacity() );

        ExecutorService executor = Executors.newFixedThreadPool(8); // 5 vendors + 3 customers
        try{
            // Start Vendor Threads
            for (int i = 1; i <= 5; i++) {
                executor.execute(new Vendor(i, ticketPool, config));
            }

            // Start Customer Threads
            for (int i = 1; i <= 3; i++) {
                executor.execute(new Customer(i, ticketPool, config));
            }
            // Add a shutdown hook to clean up resources when the program is terminated.
            Runtime.getRuntime().addShutdownHook(new Thread(() -> {
                System.out.println("Shutting down the system...");
                logger.info("SHUTTING DOWN THE SYSTEM...");
                executor.shutdownNow(); // stop all the threads
            }));
            System.out.println("Ticket system is running");
            logger.info("TICKET SYSTEM IS RUNNING");
        }
        catch (Exception e){
            System.err.println("Error running the system: " + e.getMessage());
            logger.info("ERROR RUNNING THE SYSTEM :- " + e.getMessage().toUpperCase());
        }
    }

    private static int validateInput(Scanner scanner, String prompt) {
        int validInput = 0;
        boolean isValid = false;

        while (!isValid) {
            System.out.print(prompt); // Display the input prompt.
            try {
                validInput = scanner.nextInt(); // Read input
                if (validInput < 0) {          // Validate positive integers
                    throw new IllegalArgumentException("Input must be a non-negative integer.");
                }
                isValid = true; // Exit the loop if valid
            } catch (IllegalArgumentException e) { // Handle invalid inputs
                System.out.println("Error: " + e.getMessage());
                logger.info(e.getMessage().toUpperCase());
                scanner.nextLine();
            } catch (Exception e) { // Handle invalid data types
                System.out.println("Error: Please enter a valid integer.");
                logger.info("INVALID INTEGER ENTERED....!");
                scanner.nextLine();
            }
        }
        return validInput;
    }
}
