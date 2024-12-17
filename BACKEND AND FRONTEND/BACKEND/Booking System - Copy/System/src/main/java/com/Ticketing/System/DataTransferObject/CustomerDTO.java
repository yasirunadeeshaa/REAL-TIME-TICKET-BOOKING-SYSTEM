package com.Ticketing.System.DataTransferObject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data                       //all getters and setters
@AllArgsConstructor         //constructor with argument
@NoArgsConstructor          // constructor without arguments
public class CustomerDTO {

    private int CustomerID;
    private String CustomerName;
    private String CustomerEmail;
    private String CustomerPassword;

}