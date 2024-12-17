package com.Ticketing.System.Controller;

import com.Ticketing.System.Configuration.Configuration;
import com.Ticketing.System.Service.TicketSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/ticketsystem")
public class TicketSystemController {

    @Autowired
    private TicketSystemService ticketSystemService;

    @PostMapping("/start")
    public ResponseEntity<?> startSystem(@RequestBody Configuration config) {
        try {
            config.validate();
            ticketSystemService.startSystem(config);
            return ResponseEntity.ok(Map.of("message", "Ticket System Started Successfully!"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/stop")
    public ResponseEntity<?> stopSystem() {
        try {
            ticketSystemService.stopSystem();
            return ResponseEntity.ok(Map.of("message", "Ticket System Stopped Successfully!"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "Failed to stop the Ticket System: " + e.getMessage()));
        }
    }
}