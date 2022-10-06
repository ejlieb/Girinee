package com.a202.girinee.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class AiResponseDto implements Serializable {
    @JsonProperty("is_correct")
    private Boolean isCorrect;
    private Integer score;
}
