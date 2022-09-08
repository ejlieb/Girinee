package com.a202.girinee.security.oauth.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@ToString
public abstract class OAuth2UserInfo {
    protected Map<String, Object> attributes;

    public abstract Long getId();
    public abstract String getNickname();
    public abstract String getImageUrl();
}
