package com.a202.girinee.dto.response;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class AiResponseDto implements Serializable {
    private final Boolean isCorrect;
    private final Integer score;
}
