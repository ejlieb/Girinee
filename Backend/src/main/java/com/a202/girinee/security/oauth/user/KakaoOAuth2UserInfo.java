package com.a202.girinee.security.oauth.user;

import lombok.extern.log4j.Log4j2;

import java.util.Map;

@Log4j2
public class KakaoOAuth2UserInfo extends OAuth2UserInfo {

    public KakaoOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
        log.info("attributes: " + attributes);
    }

    @Override
    public Long getId() {
        return (Long) attributes.get("id");
    }

    @Override
    public String getNickname() {
        return (String) ((Map<String, Object>) attributes.get("properties")).get("nickname");
    }

    @Override
    public String getImageUrl() {
        return (String) ((Map<String, Object>) attributes.get("properties")).get("profile_image");
    }
}
