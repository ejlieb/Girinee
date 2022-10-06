package com.a202.girinee.controller;

import com.a202.girinee.dto.response.AiResponseDto;
import com.a202.girinee.dto.response.GameRecordResponseDto;
import com.a202.girinee.dto.response.PracticeRecordResponseDto;
import com.a202.girinee.security.CustomUserDetails;
import com.a202.girinee.service.RecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/record")
public class RecordController {

    private final RecordService recordService;

    @GetMapping("/practice")
    @PreAuthorize("hasRole('USER')")
    public Map<String, PracticeRecordResponseDto> getPracticeRecord(@AuthenticationPrincipal CustomUserDetails user) {
        return recordService.getPracticeRecord(user.getId());
    }

    @GetMapping("/game")
    @PreAuthorize("hasRole('USER')")
    public List<GameRecordResponseDto> getGameRecord(@AuthenticationPrincipal CustomUserDetails user) {
        return recordService.getGameRecord(user.getId());
    }

    @PostMapping("/practice")
    @PreAuthorize("hasRole('USER')")
    public Boolean postPracticeRecord(@AuthenticationPrincipal CustomUserDetails user, @RequestParam("file") MultipartFile file, @RequestParam("chord") String chord) {
        return recordService.postPracticeRecord(user.getId(), file, chord);
    }

    @PostMapping("/game")
    @PreAuthorize("hasRole('USER')")
    public List<AiResponseDto> postGameRecord(@AuthenticationPrincipal CustomUserDetails user, @RequestParam("files") MultipartFile[] files, @RequestParam("chords") String[] chords, @RequestParam("difficulty") String difficulty){
        return recordService.postGameRecord(user.getId(), files, chords, difficulty);
    }
}
