package com.a202.girinee.security.oauth;

import com.a202.girinee.common.AuthProvider;
import com.a202.girinee.common.UserRole;
import com.a202.girinee.entity.User;
import com.a202.girinee.exception.OAuthProcessingException;
import com.a202.girinee.repository.UserRepository;
import com.a202.girinee.security.CustomUserDetails;
import com.a202.girinee.security.oauth.user.OAuth2UserInfo;
import com.a202.girinee.security.oauth.user.OAuth2UserInfoFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Log4j2
@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        return process(oAuth2UserRequest, oAuth2User);
    }

    private OAuth2User process(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User){
        AuthProvider authProvider = AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId().toUpperCase());
        OAuth2UserInfo userInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(authProvider, oAuth2User.getAttributes());

        Optional<User> userOptional = userRepository.findById(userInfo.getId());
        User user;

        if(userOptional.isPresent()) {
            user = userOptional.get();
            if(authProvider != user.getAuthProvider()){
                throw new OAuthProcessingException("Wrong Match Auth Provider");
            }
        } else{
            user = createUser(userInfo, authProvider);
        }
        return CustomUserDetails.create(user, oAuth2User.getAttributes());
    }

    private User createUser(OAuth2UserInfo userInfo, AuthProvider authProvider){
        User user = User.builder()
                .id(userInfo.getId())
                .nickname(userInfo.getNickname())
                .img(userInfo.getImageUrl())
                .role(UserRole.USER)
                .authProvider(authProvider)
                .build();
        return userRepository.save(user);
    }
}
