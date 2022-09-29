package com.a202.girinee.controller;

import com.a202.girinee.dto.response.GameRecordResponseDto;
import com.a202.girinee.dto.response.PracticeRecordResponseDto;
import com.a202.girinee.security.CustomUserDetails;
import com.a202.girinee.service.RecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/record")
public class RecordController {

    private final RecordService recordService;

    @GetMapping("/practice")
    @PreAuthorize("hasRole('USER')")
    public Map<String, PracticeRecordResponseDto> getPracticeRecord(@AuthenticationPrincipal CustomUserDetails user){
        return recordService.getPracticeRecord(user.getId());
    }

    @GetMapping("/game")
    @PreAuthorize("hasRole('USER')")
    public List<GameRecordResponseDto> getGameRecord(@AuthenticationPrincipal CustomUserDetails user){
        return recordService.getGameRecord(user.getId());
    }
}
