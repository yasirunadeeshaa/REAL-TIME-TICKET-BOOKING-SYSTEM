package com.Ticketing.System.Controller;

import com.Ticketing.System.DataTransferObject.EventDTO;
import com.Ticketing.System.Exception.ResourceNotFoundException;
import com.Ticketing.System.Model.Event;
import com.Ticketing.System.Model.Venue;
import com.Ticketing.System.Service.EventService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping(value="api/event/")
public class EventController {
    @Autowired
    private EventService eventService;
    private Logger log;

    @GetMapping("getevents")
    public List<EventDTO> getEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("{eventID}")
    public ResponseEntity<EventDTO> getEvent(@PathVariable("eventID") Long eventID) throws ResourceNotFoundException {
        log.info("EventID: " + eventID);
        EventDTO eventDTO = eventService.getEventByEventId(eventID);
        return ResponseEntity.ok(eventDTO);
    }

    @GetMapping("getevent/name/{eventName}")
    public ResponseEntity<EventDTO> getEventByName(@PathVariable("eventName") String eventName) {
        EventDTO eventDTO = eventService.getEventByEventName(eventName);
        return ResponseEntity.ok(eventDTO);
    }

    @GetMapping("getevent/type/{eventType}")
    public ResponseEntity<EventDTO> getEventByType(@PathVariable("eventType") String eventType) {
        EventDTO eventDTO = eventService.getEventByEventType(eventType);
        return ResponseEntity.ok(eventDTO);
    }

    @GetMapping("geteventwithvenues/{eventID}")
    public ResponseEntity<EventDTO> getEventByIdWithVenues(@PathVariable Long eventID) {
        EventDTO eventDTO = eventService.getEventWithVenues(eventID);
        return ResponseEntity.ok(eventDTO);
    }

//    @GetMapping("{eventID}/venues")
//    public ResponseEntity<Set<Venue>> getVenuesForEvent(@PathVariable("eventID") Long eventID) {
//        log.info("EventID: " + eventID);
//        Set<Venue> venues = eventService.getVenuesForEvent(eventID);
////        if (venues.isEmpty()) {
////            return ResponseEntity.notFound().build();
////        }
//        return ResponseEntity.ok(venues);
//    }

    @PostMapping("addevent")
    public ResponseEntity<Event> addevent(@RequestBody Event event) {
        Event eventsSave = eventService.addEvent(event);
        return ResponseEntity.ok(eventsSave);
    }
    //========================================
    @PostMapping("addeventwithvenueid")
    public ResponseEntity<Event> addEventWithVenuesID(@RequestBody EventDTO eventDTO) {
        Event event = eventService.addEventWithVenuesID(eventDTO);
        return ResponseEntity.ok(event);
    }
    //=================================
//    @PostMapping("addeventwithvenuename")
//    public ResponseEntity<Event> addEventWithVenuesName(@RequestBody EventDTO eventDTO) {
//        Event event = eventService.addEventWithVenuesName(eventDTO);
//        return ResponseEntity.ok(event);
//    }

    @PutMapping("updateevent")
    public EventDTO updateEvent(@RequestBody EventDTO eventDTO) {
        return eventService.updateEvent(eventDTO);
    }

    @DeleteMapping("deleteevent/{eventID}")
    public String deleteEvent(@PathVariable("eventID") Long eventID) {
        return eventService.deleteEventByEventId(eventID);
    }

    //ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
//    @PostMapping("addeventt")
//    public ResponseEntity<Event> addEvent(@RequestBody Event event) {
//        Event savedEvent = eventRepository.save(event);
//        return ResponseEntity.ok(savedEvent);}
//    @PutMapping("/{eventId}/addVenue/{venueId}")
//    public ResponseEntity<Event> addVenueToEvent(@PathVariable Long eventId, @PathVariable Long venueId) {
//        Event event = eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found"));
//        Venue venue = venueRepository.findById(venueId).orElseThrow(() -> new RuntimeException("Venue not found"));
//        event.getVenues().add(venue);
//        Event updatedEvent = eventRepository.save(event);
//        return ResponseEntity.ok(updatedEvent);
//    }

}
