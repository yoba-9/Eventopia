package com.eventopia.repository;

import com.eventopia.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByEventId(Long eventId);
    List<Feedback> findByUserId(Long userId);
    List<Feedback> findByEventIdAndUserId(Long eventId, Long userId);
    List<Feedback> findByRating(Integer rating);
}