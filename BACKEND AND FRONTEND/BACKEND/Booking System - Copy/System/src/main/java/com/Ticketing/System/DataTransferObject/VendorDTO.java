package com.Ticketing.System.DataTransferObject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor     //constructor with argument
@NoArgsConstructor     // constructor without arguments
@Data                  //all getters and setters
public class VendorDTO {

    private int vendorID;
    private String vendorName;
    private String vendorPassword;
    private String vendorEmail;
}
