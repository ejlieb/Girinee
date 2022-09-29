package com.a202.girinee.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "GAME_RECORD")
public class GameRecord extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userId")
    User user;

    private String difficulty;
    private String chord1;
    private Integer score1;
    private String chord2;
    private Integer score2;
    private String chord3;
    private Integer score3;
    private String chord4;
    private Integer score4;
}