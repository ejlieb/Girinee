package com.a202.girinee.dto.response;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link com.a202.girinee.entity.GameRecord} entity
 */
@Data
@Builder
public class GameRecordResponseDto implements Serializable {
    private final String difficulty;
    private final String chord1;
    private final Integer score1;
    private final String chord2;
    private final Integer score2;
    private final String chord3;
    private final Integer score3;
    private final String chord4;
    private final Integer score4;
}