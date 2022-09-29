package com.a202.girinee.repository;

import com.a202.girinee.entity.GameRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRecordRepository extends JpaRepository<GameRecord, Long> {
    GameRecord save(GameRecord gameRecord);
    List<GameRecord> findFirst7ByUserIdOrderByCreatedAtDesc(Long Id);
}