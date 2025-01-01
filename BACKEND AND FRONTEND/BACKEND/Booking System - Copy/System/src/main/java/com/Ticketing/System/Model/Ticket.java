package com.Ticketing.System.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_ID", nullable = false)
    public Long ticketID;

    @Column(name = "ticket_number", nullable = false)
    private int ticketNumber;
    @Column(name = "ticket_name", nullable = false)
    private String ticketName;
    @Column(name = "ticket_type", nullable = false)
    private String ticketType;
    @Column(name = "ticket_status", nullable = false)
    private String ticketStatus;
    @Column(name = "ticket_price", nullable = false)
    private double ticketPrice;



    public Ticket(int ticketNumber, String ticketName, String ticketType, String ticketStatus, double ticketPrice) {

        this.ticketNumber = ticketNumber;
        this.ticketName = ticketName;
        this.ticketType = ticketType;
        this.ticketStatus = ticketStatus;
        this.ticketPrice = ticketPrice;
    }
}