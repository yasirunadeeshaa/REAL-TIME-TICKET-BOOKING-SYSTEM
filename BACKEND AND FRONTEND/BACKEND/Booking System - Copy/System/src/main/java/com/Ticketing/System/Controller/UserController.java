//package com.Ticketing.System.Controller;
//import com.Ticketing.System.Model.Customer;
//import com.Ticketing.System.Model.Vendor;
//import com.Ticketing.System.Service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/user")
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
//        try {
//            Object user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
//
//            if (user instanceof Customer) {
//                return ResponseEntity.ok(new LoginResponse("Customer login successful", "customer", user));
//            } else if (user instanceof Vendor) {
//                return ResponseEntity.ok(new LoginResponse("Vendor login successful", "vendor", user));
//            } else {
//                return ResponseEntity.status(401).body(new LoginResponse("Invalid user type", null, null));
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(401).body(new LoginResponse(e.getMessage(), null, null));
//        }
//    }
//
//    // Inner classes for request and response
//    public static class LoginRequest {
//        private String email;
//        private String password;
//
//        // Getters and setters
//        public String getEmail() {
//            return email;
//        }
//
//        public void setEmail(String email) {
//            this.email = email;
//        }
//
//        public String getPassword() {
//            return password;
//        }
//
//        public void setPassword(String password) {
//            this.password = password;
//        }
//    }
//
//    public static class LoginResponse {
//        private String message;
//        private String userType;
//        private Object user;
//
//        // Constructor
//        public LoginResponse(String message, String userType, Object user) {
//            this.message = message;
//            this.userType = userType;
//            this.user = user;
//        }
//
//        // Getters and setters
//        public String getMessage() {
//            return message;
//        }
//
//        public void setMessage(String message) {
//            this.message = message;
//        }
//
//        public String getUserType() {
//            return userType;
//        }
//
//        public void setUserType(String userType) {
//            this.userType = userType;
//        }
//
//        public Object getUser() {
//            return user;
//        }
//
//        public void setUser(Object user) {
//            this.user = user;
//        }
//    }
//}
