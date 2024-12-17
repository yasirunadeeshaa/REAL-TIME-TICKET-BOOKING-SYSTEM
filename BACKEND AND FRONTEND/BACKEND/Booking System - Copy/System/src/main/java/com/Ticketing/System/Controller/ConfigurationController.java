package com.Ticketing.System.Controller;

import com.Ticketing.System.Configuration.Configuration;
import com.Ticketing.System.Service.ConfigurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/config")
public class ConfigurationController {

    private final ConfigurationService configurationService;

    @Autowired
    public ConfigurationController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    @GetMapping("/getConfig")
    public Configuration getConfiguration() {
        return configurationService.getConfiguration();
    }

    @PostMapping("/posting")
    public String updateConfiguration(@RequestBody Configuration updatedConfig) {
        configurationService.updateConfiguration(updatedConfig);
        return "Configuration updated successfully!";
    }
}