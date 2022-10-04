package com.a202.girinee.repository;

import com.a202.girinee.entity.PracticeRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PracticeRecordRepository extends JpaRepository<PracticeRecord, Long> {
    PracticeRecord save(PracticeRecord practiceRecord);
    List<PracticeRecord> findByUserId(Long userId);
    Optional<PracticeRecord> findByUserIdAndChord(Long userId, String chord);
}