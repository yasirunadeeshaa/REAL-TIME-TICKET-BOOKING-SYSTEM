package com.Ticketing.System.Controller;

import com.Ticketing.System.DataTransferObject.TicketDTO;
import com.Ticketing.System.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/ticket/")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping("gettickets")
    public List<TicketDTO> getAllTickets() {
        return ticketService.getAllTickets();
    }
    @GetMapping("getticket/{ticketId}")
    public TicketDTO getTicketBy_TicketId(@PathVariable Long ticketId) {
        return ticketService.getTicketByTicketId(ticketId);
    }
    @PostMapping("addticket")
    public TicketDTO addTicket(@RequestBody TicketDTO ticketDTO) {
        return ticketService.saveTicket(ticketDTO);
    }
//@PostMapping("addtickets")
//public List<TicketDTO> addTickets(@RequestBody List<TicketDTO> ticketDTOs) {
//    return ticketService.saveTicket(ticketDTOs);
//}


    @PutMapping("updateticket")
    public TicketDTO updateTicket(@RequestBody TicketDTO ticketDTO) {
        return ticketService.updateTicket(ticketDTO);
    }
    @DeleteMapping("deleteticket/{ticketId}")
    public String deleteTicket(@PathVariable Long ticketId) {
        return ticketService.deleteTicket(ticketId);
    }
}