package com.a202.girinee.service;

import com.a202.girinee.dto.response.UserResponseDto;
import com.a202.girinee.entity.User;
import com.a202.girinee.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserResponseDto findUserInfo(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalStateException("not found user"));
        return UserResponseDto.builder()
                .nickname(user.getNickname())
                .img(user.getImg())
                .role(user.getRole())
                .build();
    }

    public void logout(Long id){
        userRepository.deleteRefreshTokenById(id);
    }
}