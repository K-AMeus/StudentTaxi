package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/Userface")
    public String userface() {
        return "Userface"; // This should match the name of your HTML file without the .html extension
    }
}
