package com.Ticketing.System;


import com.Ticketing.System.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

//@SpringBootApplication
//public class EmailTestApplication {
//
//    @Autowired
//    private EmailService emailService;
//
//    public static void main(String[] args) {
//        SpringApplication.run(EmailTestApplication.class, args);
//    }
//
//    @EventListener(ApplicationReadyEvent.class)
//    public void sendTestEmail() {
//        emailService.sendOtpEmail("test@example.com", "123456");
//        System.out.println("Test email sent!");
//    }
//}
