package com.a202.girinee.repository;

import com.a202.girinee.entity.PracticeRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PracticeRecordRepository extends JpaRepository<PracticeRecord, Long> {
    PracticeRecord save(PracticeRecord practiceRecord);
    List<PracticeRecord> findByUserId(Long userId);
}