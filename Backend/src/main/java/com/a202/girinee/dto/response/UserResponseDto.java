package com.a202.girinee.dto.response;

import com.a202.girinee.common.UserRole;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link com.a202.girinee.entity.User} entity
 */
@Data
@Builder
public class UserResponseDto implements Serializable {
    private final String nickname;
    private final String img;
    private final UserRole role;
}