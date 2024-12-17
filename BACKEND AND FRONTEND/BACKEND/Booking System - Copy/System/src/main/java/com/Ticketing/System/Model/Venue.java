package com.Ticketing.System.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vendor_ID", nullable = false)
    private Long venueID;
    @Column(name = "venue_name", nullable = false)
    private String VenueName;
    @Column(name = "venue_address", nullable = false)
    private String VenueAddress;
    @Column(name = "venue_city", nullable = false)
    private String venueCity;
    @Column(name = "venue_capacity", nullable = false)
    private int capacity;

    @ManyToMany(mappedBy = "venues", fetch = FetchType.EAGER)
    private List<Event> events;// = new HashSet<>();
//    //private List<Ticket> tickets;


    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public Long getVenueID() {
        return venueID;
    }

    public void setVenueID(Long venueID) {
        this.venueID = venueID;
    }

    public String getVenueName() {
        return VenueName;
    }

    public void setVenueName(String venueName) {
        VenueName = venueName;
    }
}