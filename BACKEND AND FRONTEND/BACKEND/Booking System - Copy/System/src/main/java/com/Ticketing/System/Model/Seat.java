package com.Ticketing.System.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="seat")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seat_ID", nullable = false)
    private Long seatID;
    @Column(name = "seat_number", nullable = false)
    private int seatNumber;
    @Column(name = "seat_type", nullable = false)
    private String seatType;
}

