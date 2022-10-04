package com.a202.girinee.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class AiResponseDto implements Serializable {
    private Boolean isCorrect;
    private Integer score;
}
