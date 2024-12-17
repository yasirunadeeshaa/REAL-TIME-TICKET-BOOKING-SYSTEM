package com.Ticketing.System.Repository;

import com.Ticketing.System.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface EventRepository extends JpaRepository<Event, Long> {
    Event findEventByEventName(String eventName);
    Event findEventByEventID(Long eventID);
    Event findEventByEventType(String eventType);

    @Query("SELECT e FROM Event e JOIN FETCH e.venues WHERE e.eventID = :eventID")
    Optional<Event> findEventByIdWithVenues(@Param("eventID") Long eventID);

}