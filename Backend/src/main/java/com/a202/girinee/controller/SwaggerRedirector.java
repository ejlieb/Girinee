package com.a202.girinee.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
public class SwaggerRedirector {

    @GetMapping
    public String swagger(){
        return "redirect:/swagger-ui/index.html";
    }
}
