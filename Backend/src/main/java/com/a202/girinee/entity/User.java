package com.a202.girinee.entity;

import com.a202.girinee.common.AuthProvider;
import com.a202.girinee.common.UserRole;
import lombok.*;

import javax.persistence.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "user")
public class User extends BaseEntity{

    @Id
    private Long id;

    private String nickname;

    private String img;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    private String refreshToken;

    @Enumerated(EnumType.STRING)
    private AuthProvider authProvider;
}