package com.a202.girinee.service;

import com.a202.girinee.dto.response.AiResponseDto;
import com.a202.girinee.dto.response.GameRecordResponseDto;
import com.a202.girinee.dto.response.PracticeRecordResponseDto;
import com.a202.girinee.entity.GameRecord;
import com.a202.girinee.entity.PracticeRecord;
import com.a202.girinee.repository.GameRecordRepository;
import com.a202.girinee.repository.PracticeRecordRepository;
import com.a202.girinee.repository.UserRepository;
import com.a202.girinee.util.FileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class RecordService {

    private final PracticeRecordRepository practiceRecordRepository;
    private final GameRecordRepository gameRecordRepository;
    private final UserRepository userRepository;

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

    public boolean postPracticeRecord(Long id, MultipartFile file, String chord) {
        // AI 서버 채점
        AiResponseDto aiResponseDto = FileUtil.postAi(file, chord);
        // AI 서버 채점 끝

        // DB 갱신
        PracticeRecord practiceRecord = practiceRecordRepository.findByUserIdAndChord(id, chord).orElse(PracticeRecord.builder()
                .chord(chord)
                .success(0)
                .failure(0)
                .user(userRepository.findById(id).get())
                .build());

        boolean result = aiResponseDto.getIsCorrect();
        if (result) {
            practiceRecord.increaseSuccess();
        } else {
            practiceRecord.increaseFailure();
        }
        practiceRecordRepository.save(practiceRecord);
        // DB 갱신

        return result;
    }

    public List<AiResponseDto> postGameRecord(Long id, MultipartFile[] files, String[] chords, String difficulty){
        // 채점
        List<AiResponseDto> list = new ArrayList<AiResponseDto>(4);
        for(int i = 0; i < 4; i++){
            list.add(FileUtil.postAi(files[i], chords[i]));
        }
        // 채점 끝

        // DB 갱신
        gameRecordRepository.save(GameRecord.builder()
                .difficulty(difficulty)
                .chord1(chords[0])
                .chord2(chords[1])
                .chord3(chords[2])
                .chord4(chords[3])
                .score1(list.get(0).getScore())
                .score2(list.get(1).getScore())
                .score3(list.get(2).getScore())
                .score4(list.get(3).getScore())
                .user(userRepository.findById(id).get())
                .build());
        // DB 갱신 끝
        return list;
    }
}
