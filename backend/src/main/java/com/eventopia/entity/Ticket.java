package com.eventopia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "tickets")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String ticketCode;

    @Column(name = "purchase_date", nullable = false)
    private LocalDateTime purchaseDate;

    @Column(nullable = false)
    private Double price;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TicketStatus status;

    @Column(name = "qr_code_url")
    private String qrCodeUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    @PrePersist
    protected void onCreate() {
        purchaseDate = LocalDateTime.now();
        ticketCode = generateTicketCode();
        status = TicketStatus.ACTIVE;
    }

    private String generateTicketCode() {
        return "TICK-" + System.currentTimeMillis() + "-" + (int)(Math.random() * 1000);
    }

    public enum TicketStatus {
        ACTIVE,
        USED,
        CANCELLED,
        REFUNDED
    }
}