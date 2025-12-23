package com.eventopia.service;

import com.eventopia.entity.Event;
import com.eventopia.entity.Organizer;
import com.eventopia.entity.User;
import com.eventopia.repository.EventRepository;
import com.eventopia.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class EventService {

    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final QRCodeService qrCodeService;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public Event getEventOrThrow(Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + id));
    }

    @Transactional
    public Event createEvent(Event event, Long organizerId) {
        // Set organizer if provided - need to cast User to Organizer
        if (organizerId != null) {
            User user = userRepository.findById(organizerId)
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + organizerId));

            // Check if user is actually an Organizer
            if (!(user instanceof Organizer)) {
                throw new RuntimeException("User with id " + organizerId + " is not an organizer");
            }

            Organizer organizer = (Organizer) user;
            event.setOrganizer(organizer);
        }

        // Set initial values
        if (event.getCurrentAttendees() == null) {
            event.setCurrentAttendees(0);
        }

        Event savedEvent = eventRepository.save(event);

        // Generate QR code for event details
        String qrCodeBase64 = qrCodeService.generateEventDetailsQRCode(
                savedEvent.getId(),
                savedEvent.getTitle()
        );

        savedEvent.setQrCodeBase64(qrCodeBase64);
        savedEvent.setQrCodeGenerated(true);
        savedEvent.setQrCodeGeneratedAt(LocalDateTime.now());

        return eventRepository.save(savedEvent);
    }

    @Transactional
    public Event updateEvent(Long id, Event eventDetails) {
        Event event = getEventOrThrow(id);


        if (eventDetails.getTitle() != null) {
            event.setTitle(eventDetails.getTitle());
        }
        if (eventDetails.getDescription() != null) {
            event.setDescription(eventDetails.getDescription());
        }
        if (eventDetails.getEventDate() != null) {
            event.setEventDate(eventDetails.getEventDate());
        }

        if (eventDetails.getLocation() != null) {
            event.setLocation(eventDetails.getLocation());
        }
        if (eventDetails.getCategory() != null) {
            event.setCategory(eventDetails.getCategory());
        }
        if (eventDetails.getPrice() != null) {
            event.setPrice(eventDetails.getPrice());
        }
        if (eventDetails.getImageUrl() != null) {
            event.setImageUrl(eventDetails.getImageUrl());
        }


        if (eventDetails.getMaxAttendees() != null) {
            event.setMaxAttendees(eventDetails.getMaxAttendees());
        }
        if (eventDetails.getOrganizer() != null) {
            event.setOrganizer(eventDetails.getOrganizer());
        }


        if (eventDetails.getTitle() != null && !eventDetails.getTitle().equals(event.getTitle())) {
            String qrCodeBase64 = qrCodeService.generateEventDetailsQRCode(
                    event.getId(),
                    eventDetails.getTitle()
            );
            event.setQrCodeBase64(qrCodeBase64);
            event.setQrCodeGeneratedAt(LocalDateTime.now());
        }

        return eventRepository.save(event);
    }

    @Transactional
    public void deleteEvent(Long id) {
        Event event = getEventOrThrow(id);
        eventRepository.delete(event);
    }

    public String generateEventQRCode(Long eventId) {
        Event event = getEventOrThrow(eventId);

        String qrCodeBase64 = qrCodeService.generateEventDetailsQRCode(
                eventId,
                event.getTitle()
        );

        event.setQrCodeBase64(qrCodeBase64);
        event.setQrCodeGenerated(true);
        event.setQrCodeGeneratedAt(LocalDateTime.now());
        eventRepository.save(event);

        return qrCodeBase64;
    }

    public String getEventQRCode(Long eventId) {
        Event event = getEventOrThrow(eventId);


        if (event.getQrCodeBase64() == null || !event.getQrCodeGenerated()) {
            return generateEventQRCode(eventId);
        }

        return event.getQrCodeBase64();
    }

    public List<Event> getEventsByOrganizer(Long organizerId) {
        User user = userRepository.findById(organizerId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + organizerId));

        if (!(user instanceof Organizer)) {
            throw new RuntimeException("User with id " + organizerId + " is not an organizer");
        }

        Organizer organizer = (Organizer) user;
        return eventRepository.findByOrganizer(organizer);
    }


    public List<Event> getEventsByCategory(String category) {
        return eventRepository.findByCategory(category);
    }


    public List<Event> getUpcomingEvents() {
        return eventRepository.findByEventDateAfter(LocalDateTime.now());
    }

    public List<Event> getPastEvents() {
        return eventRepository.findByEventDateBefore(LocalDateTime.now());
    }

    public boolean checkEventAvailability(Long eventId) {
        Event event = getEventOrThrow(eventId);

        if (event.getMaxAttendees() == null) {
            return true;
        }
        return event.getCurrentAttendees() < event.getMaxAttendees();
    }

    public Event incrementAttendees(Long eventId) {
        Event event = getEventOrThrow(eventId);
        int current = event.getCurrentAttendees() != null ? event.getCurrentAttendees() : 0;
        event.setCurrentAttendees(current + 1);
        return eventRepository.save(event);
    }

    public Event decrementAttendees(Long eventId) {
        Event event = getEventOrThrow(eventId);
        int current = event.getCurrentAttendees() != null ? event.getCurrentAttendees() : 0;
        if (current > 0) {
            event.setCurrentAttendees(current - 1);
        }
        return eventRepository.save(event);
    }
}