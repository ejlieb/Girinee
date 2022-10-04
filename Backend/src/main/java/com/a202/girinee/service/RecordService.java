package com.a202.girinee.service;

import com.a202.girinee.dto.response.AiResponseDto;
import com.a202.girinee.dto.response.GameRecordResponseDto;
import com.a202.girinee.dto.response.PracticeRecordResponseDto;
import com.a202.girinee.entity.GameRecord;
import com.a202.girinee.entity.PracticeRecord;
import com.a202.girinee.repository.GameRecordRepository;
import com.a202.girinee.repository.PracticeRecordRepository;
import com.a202.girinee.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
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
    @Value("${python.url.game}")
    private String gameUrl;
    @Value("${python.url.practice}")
    private String practiceUrl;

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
        char[] chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();
        StringBuilder fileName = new StringBuilder();
        for (int i = 0; i < 20; i++) {
            fileName.append(chars[(int) (Math.random() * chars.length)]);
        }
        String uploadPath = File.separator + "Sound" + File.separator + fileName + ".wav";

        try {
            Path path = Paths.get(uploadPath);
            file.transferTo(path);
        } catch (Exception e) {
            e.printStackTrace();
        }

        // AI 서버 채점

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("wav_path", uploadPath);
        body.add("answer", chord);

        log.info(body.keySet());
        log.info(body.values());

        HttpEntity<?> requestMessage = new HttpEntity<>(body, httpHeaders);

        log.info(requestMessage.toString());
        ResponseEntity<AiResponseDto> response = restTemplate.postForEntity(practiceUrl, requestMessage, AiResponseDto.class);
        log.info(response.getStatusCode());
        log.info(response.getBody());


        PracticeRecord practiceRecord = practiceRecordRepository.findByUserIdAndChord(id, chord).orElse(PracticeRecord.builder()
                .chord(chord)
                .success(0)
                .failure(0)
                .user(userRepository.findById(id).get())
                .build());

        boolean result = response.getBody().getIsCorrect();

        if(result){
            practiceRecord.increaseSuccess();
        } else{
            practiceRecord.increaseFailure();
        }

        practiceRecordRepository.save(practiceRecord);

        // AI 서버 채점 끝

        // 파일 삭제

        File deleteFile = new File(uploadPath);
        deleteFile.delete();

        // 파일 삭제 끝

        return result;
    }
}
