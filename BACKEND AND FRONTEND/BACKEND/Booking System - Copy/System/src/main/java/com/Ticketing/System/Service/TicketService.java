package com.Ticketing.System.Service;

import com.Ticketing.System.DataTransferObject.TicketDTO;
import com.Ticketing.System.Model.Ticket;
import com.Ticketing.System.Repository.TicketRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<TicketDTO> getAllTickets() {
        List<Ticket> ticketList = ticketRepository.findAll();
        return modelMapper.map(ticketList, new TypeToken<List<TicketDTO>>(){}.getType());
    }
    public TicketDTO getTicketByTicketId(Long ticketID) {

        //ticketRepository.deleteById(ticketID);
        //return modelMapper.map(ticketRepository.findById(ticketID).get(), TicketDTO.class);
        Ticket ticket = ticketRepository.getTicketBy_TicketId(ticketID);
        return modelMapper.map(ticket, TicketDTO.class);
//        if (ticket == null) {throw new RuntimeException("Product not found with ID: " + ticketId);}
//        else {return modelMapper.map(ticket, TicketDTO.class);}
    }
    public TicketDTO saveTicket(TicketDTO ticketDTO) {
        ticketRepository.save(modelMapper.map(ticketDTO, Ticket.class));
        return ticketDTO;
    }
//public List<TicketDTO> saveTicket(List<TicketDTO> ticketDTOs) {
//    List<Ticket> tickets = ticketDTOs.stream()
//            .map(ticketDTO -> modelMapper.map(ticketDTO, Ticket.class))
//            .collect(Collectors.toList());
//    ticketRepository.saveAll(tickets);
//    return ticketDTOs;
//}

    public TicketDTO updateTicket(TicketDTO ticketDTO) {
        ticketRepository.save(modelMapper.map(ticketDTO, Ticket.class));
        return ticketDTO;

    }
    public String deleteTicket(Long ticketID) {
        ticketRepository.deleteById(ticketID);
        return "Ticket deleted";
    }

}