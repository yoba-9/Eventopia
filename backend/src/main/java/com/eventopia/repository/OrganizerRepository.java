package com.eventopia.repository;

import com.eventopia.entity.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface OrganizerRepository extends JpaRepository<Organizer, Long> {
    Optional<Organizer> findByEmail(String email);
    List<Organizer> findByVerified(boolean verified);
    List<Organizer> findByCompanyNameContainingIgnoreCase(String companyName);
}