package com.a202.girinee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GirineeApplication {

    public static void main(String[] args) {
        SpringApplication.run(GirineeApplication.class, args);
    }

}
