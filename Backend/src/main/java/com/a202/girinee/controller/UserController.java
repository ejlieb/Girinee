package com.a202.girinee.controller;


import com.a202.girinee.dto.response.UserResponseDto;
import com.a202.girinee.security.CustomUserDetails;
import com.a202.girinee.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public UserResponseDto getUserInfo(@AuthenticationPrincipal CustomUserDetails user) {
        return userService.findUserInfo(user.getId());
    }

    @GetMapping("/logout")
    @PreAuthorize("hasRole('USER')")
    public void logout(@AuthenticationPrincipal CustomUserDetails user) {
        userService.logout(user.getId());
    }
}
