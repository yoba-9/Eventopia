package com.eventopia.repository;

import com.eventopia.entity.Event;
import com.eventopia.entity.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByOrganizer(Organizer organizer);
    List<Event> findByEventDateAfter(LocalDateTime date);
    List<Event> findByEventDateBefore(LocalDateTime date);
     List<Event> findByCategory(String category);
}