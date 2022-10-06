package com.a202.girinee.dto.response;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link com.a202.girinee.entity.PracticeRecord} entity
 */
@Data
@Builder
public class PracticeRecordResponseDto implements Serializable {
    private final Integer success;
    private final Integer failure;
}