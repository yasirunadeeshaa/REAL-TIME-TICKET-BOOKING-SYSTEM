package com.Ticketing.System.DataTransferObject;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequestDTO {
    private String username;
    private String email;
    private String userType; // "customer" or "vendor"
}
