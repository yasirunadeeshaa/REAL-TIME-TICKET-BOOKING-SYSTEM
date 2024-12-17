package com.Ticketing.System.Service;

import com.Ticketing.System.Configuration.Configuration;
import org.springframework.stereotype.Service;

@Service
public class ConfigurationService {

    private final Configuration configuration;

    public ConfigurationService(Configuration configuration) {
        this.configuration = configuration;
    }

    public Configuration getConfiguration() {
        return configuration;
    }

    public void updateConfiguration(Configuration updatedConfig) {
        configuration.setTotalTickets(updatedConfig.getTotalTickets());
        configuration.setMaxTicketCapacity(updatedConfig.getMaxTicketCapacity());
        configuration.setVendorReleaseInterval(updatedConfig.getVendorReleaseInterval());
        configuration.setVendorTicketReleaseRate(updatedConfig.getVendorTicketReleaseRate());
        configuration.setCustomerRetrievalInterval(updatedConfig.getCustomerRetrievalInterval());
        configuration.setCustomerTicketRetrievalRate(updatedConfig.getCustomerTicketRetrievalRate());
    }
}