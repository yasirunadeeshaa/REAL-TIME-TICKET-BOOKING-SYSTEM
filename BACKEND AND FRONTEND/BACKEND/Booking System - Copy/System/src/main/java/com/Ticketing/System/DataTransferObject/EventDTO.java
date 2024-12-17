package com.Ticketing.System.DataTransferObject;

import com.Ticketing.System.Model.Venue;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EventDTO {
    private Long eventID;
    private String eventType;
    private String eventName;
    private String eventDescription;
    private String eventTimeDuration;

    private List<Venue> venues;

    public List<Venue> getVenues() {
        return venues;
    }

    public void setVenues(List<Venue> venues) {
        this.venues = venues;
    }
}
