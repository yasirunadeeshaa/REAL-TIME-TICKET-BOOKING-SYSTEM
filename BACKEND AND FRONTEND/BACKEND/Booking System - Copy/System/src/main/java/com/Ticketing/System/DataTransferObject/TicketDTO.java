package com.Ticketing.System.DataTransferObject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketDTO {
    private Long ticketID;
    private int ticketNumber;
    private String ticketName;
    private String ticketType;
    private String ticketStatus;
    private double ticketPrice;
}
