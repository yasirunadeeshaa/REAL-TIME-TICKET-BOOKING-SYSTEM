package com.Ticketing.System.Controller;

import com.Ticketing.System.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private EmailService emailService;

    // Store OTPs temporarily (in-memory storage for demo purposes)
    private final Map<String, String> otpStorage = new HashMap<>();

    // Endpoint to send OTP
    @PostMapping("/sendOtp")
    public String sendOtp(@RequestBody EmailRequest emailRequest) {
        String email = emailRequest.getEmail();
        if (email == null || email.isEmpty()) {
            return "Email is required.";
        }

        // Generate OTP
        String otp = generateOtp();

        // Store OTP associated with the email
        otpStorage.put(email, otp);

        // Send OTP email
        emailService.sendOtpEmail(email, otp);

        return "OTP sent successfully to " + email;
    }

    // Endpoint to verify OTP
    @PostMapping("/verifyOtp")
    public String verifyOtp(@RequestBody OtpRequest otpRequest) {
        String email = otpRequest.getEmail();
        String providedOtp = otpRequest.getOtp();

        if (email == null || providedOtp == null) {
            return "Email and OTP are required.";
        }

        // Check if the OTP matches
        String storedOtp = otpStorage.get(email);
        if (storedOtp != null && storedOtp.equals(providedOtp)) {
            otpStorage.remove(email); // Clear OTP after successful verification
            return "OTP verified successfully!";
        }
        return "Invalid OTP.";
    }

    // Generate a 6-digit random OTP
    private String generateOtp() {
        Random rand = new Random();
        int otp = 100000 + rand.nextInt(900000);
        return String.valueOf(otp);
    }
}

class EmailRequest {
    private String email;

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

class OtpRequest {
    private String email;
    private String otp;

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }
}
