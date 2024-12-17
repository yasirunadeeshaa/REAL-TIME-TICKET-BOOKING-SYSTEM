package com.Ticketing.System.DataTransferObject;

import com.Ticketing.System.Model.Event;
import lombok.*;

import java.util.Set;

@Data

@AllArgsConstructor
@NoArgsConstructor
public class VenueDTO {
    private Long venueID;
    private String VenueName;
    private String VenueAddress;
    private String venueCity;
    private int capacity;

    private Set<Event> events;

    public Set<Event> getEvents() {
        return events;
    }

    public void setEvents(Set<Event> events) {
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
