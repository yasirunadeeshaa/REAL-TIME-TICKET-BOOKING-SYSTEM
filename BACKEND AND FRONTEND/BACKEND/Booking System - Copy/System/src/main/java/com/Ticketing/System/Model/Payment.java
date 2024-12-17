package com.Ticketing.System.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String paymentID;
    private Long paymentMount;
    private String paymentDescription;
}
