package com.a202.girinee.service;

import com.a202.girinee.dto.response.GameRecordResponseDto;
import com.a202.girinee.dto.response.PracticeRecordResponseDto;
import com.a202.girinee.entity.GameRecord;
import com.a202.girinee.entity.PracticeRecord;
import com.a202.girinee.repository.GameRecordRepository;
import com.a202.girinee.repository.PracticeRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecordService {

    private final PracticeRecordRepository practiceRecordRepository;
    private final GameRecordRepository gameRecordRepository;

    public Map<String, PracticeRecordResponseDto> getPracticeRecord(Long userId) {
        List<PracticeRecord> practiceRecords = practiceRecordRepository.findByUserId(userId);
        Map<String, PracticeRecordResponseDto> result = new HashMap<String, PracticeRecordResponseDto>();
        for (PracticeRecord practiceRecord : practiceRecords) {
            result.put(practiceRecord.getChord(),
                    PracticeRecordResponseDto.
                            builder()
                            .success(practiceRecord.getSuccess())
                            .failure(practiceRecord.getFailure())
                            .build()
            );
        }
        return result;
    }

    public List<GameRecordResponseDto> getGameRecord(Long userId) {
        List<GameRecord> gameRecords = gameRecordRepository.findFirst7ByUserIdOrderByCreatedAtDesc(userId);
        return gameRecords.stream().map(
                m -> GameRecordResponseDto
                        .builder()
                        .difficulty(m.getDifficulty())
                        .chord1(m.getChord1())
                        .chord2(m.getChord2())
                        .chord3(m.getChord3())
                        .chord4(m.getChord4())
                        .score1(m.getScore1())
                        .score2(m.getScore2())
                        .score3(m.getScore3())
                        .score4(m.getScore4())
                        .build()
        ).collect(Collectors.toList());
    }
}
