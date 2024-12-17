package com.Ticketing.System.Repository;

import com.Ticketing.System.Model.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
    @Query(value = "SELECT * FROM venue WHERE venueid= ?1", nativeQuery = true)
    Venue getVenue_VenueID(Long venueID);

//        Optional<Venue> findByName(String VenueName);
//        List<Venue> findByNameIn(Set<String> names);

//@Query( ALTER TABLE venue MODIFY COLUMN venueid BIGINT AUTO_INCREMENT);
}