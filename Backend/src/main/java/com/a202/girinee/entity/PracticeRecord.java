package com.a202.girinee.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "PRACTICE_RECORD")
public class PracticeRecord extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    private String chord;
    private Integer success;
    private Integer failure;

    public void increaseSuccess(){
        success++;
    }

    public void increaseFailure(){
        failure++;
    }
}