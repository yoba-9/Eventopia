package com.eventopia.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/test")
public class TestController {
    @GetMapping("/health")
    public String healthCheck() {
        return "SUCCESS - Application is running! Database connection successful.";
    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Eventopia Backend!";
    }
}