package com.eventopia.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "organizers")
@DiscriminatorValue("ORGANIZER")
@PrimaryKeyJoinColumn(name = "user_id")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Organizer extends User {

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(name = "contact_number", nullable = false)
    private String contactNumber;

    @Column(name = "website")
    private String website;

    @Column(name = "bio", columnDefinition = "TEXT")
    private String bio;

    @Column(name = "verified", nullable = false)
    @Builder.Default
    private boolean verified = false;

    @Column(name = "verification_date")
    private LocalDateTime verificationDate;

    @OneToMany(mappedBy = "organizer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Event> events = new ArrayList<>();
}