package com.eventopia.controller;

import com.eventopia.entity.Event;
import com.eventopia.dto.QRCodeResponse;
import com.eventopia.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @GetMapping("/{id}")
    public Object getEventById(@PathVariable Long id) {
        return eventService.getEventById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(
            @RequestBody Event event,
            @RequestParam(required = false) Long organizerId) {
        Event createdEvent = eventService.createEvent(event, organizerId);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(
            @PathVariable Long id,
            @RequestBody Event eventDetails) {
        Event updatedEvent = eventService.updateEvent(id, eventDetails);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/qrcode")
    public ResponseEntity<QRCodeResponse> getEventQRCode(@PathVariable Long id) {
        String qrCodeBase64 = eventService.getEventQRCode(id);
        Event event = eventService.getEventOrThrow(id);

        QRCodeResponse response = new QRCodeResponse(
                qrCodeBase64,
                "Event QR code retrieved successfully",
                "Event: " + event.getTitle()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/generate-qrcode")
    public ResponseEntity<QRCodeResponse> generateEventQRCode(@PathVariable Long id) {
        String qrCodeBase64 = eventService.generateEventQRCode(id);

        QRCodeResponse response = new QRCodeResponse(
                qrCodeBase64,
                "Event QR code generated successfully",
                "Event ID: " + id
        );

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/qrcode/download")
    public ResponseEntity<byte[]> downloadEventQRCode(@PathVariable Long id) {
        String qrCodeBase64 = eventService.getEventQRCode(id);

        byte[] qrCodeBytes = java.util.Base64.getDecoder().decode(qrCodeBase64);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG);
        headers.setContentDispositionFormData("attachment", "event-qrcode.png");

        return new ResponseEntity<>(qrCodeBytes, headers, HttpStatus.OK);
    }

    @GetMapping("/organizer/{organizerId}")
    public ResponseEntity<List<Event>> getEventsByOrganizer(@PathVariable Long organizerId) {
        List<Event> events = eventService.getEventsByOrganizer(organizerId);
        return ResponseEntity.ok(events);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Event>> getEventsByCategory(@PathVariable String category) {
        List<Event> events = eventService.getEventsByCategory(category);
        return ResponseEntity.ok(events);
    }

    @GetMapping("/upcoming")
    public ResponseEntity<List<Event>> getUpcomingEvents() {
        List<Event> events = eventService.getUpcomingEvents();
        return ResponseEntity.ok(events);
    }

    @GetMapping("/past")
    public ResponseEntity<List<Event>> getPastEvents() {
        List<Event> events = eventService.getPastEvents();
        return ResponseEntity.ok(events);
    }

    @GetMapping("/{id}/availability")
    public ResponseEntity<Boolean> checkEventAvailability(@PathVariable Long id) {
        boolean isAvailable = eventService.checkEventAvailability(id);
        return ResponseEntity.ok(isAvailable);
    }
}
