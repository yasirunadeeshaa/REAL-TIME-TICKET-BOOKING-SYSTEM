package com.Ticketing.System.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_ID", nullable = false)
    private Long eventID;
    @Column(name = "event_type", nullable = false)
    private String eventType;
    @Column(name = "event_name", nullable = false)
    private String eventName;
    @Column(name = "event_description", nullable = false)
    private String eventDescription;
    @Column(name = "event_time_duration", nullable = false)
    private String eventTimeDuration;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "event_venue",
            joinColumns = @JoinColumn(name = "event_ID"),
            inverseJoinColumns = @JoinColumn(name="venue_ID")
    )

    private Set<Venue> venues;// = new HashSet<>();

    public Set<Venue> getVenues() {
        return venues;
    }

    public void setVenues(Set<Venue> venues) {
        this.venues = venues;
    }
}