package com.Ticketing.System.Controller;

import com.Ticketing.System.DataTransferObject.CustomerDTO;
import com.Ticketing.System.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "api/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;    //create new userservice object

    //get added user
    @GetMapping("/getcustomer")
    public List<CustomerDTO> getCustomer() {
        return customerService.getCustomers();
    }

    //add user
    @PostMapping("/addcustomer")
    public String addCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.saveCustomer(customerDTO);
    }

    //updateuser
    @PutMapping("/updatecustomer")
    public String updateCustomer(@RequestBody CustomerDTO customerDTO) {
        return customerService.updateCustomer(customerDTO);
    }

    //delete user
    @DeleteMapping("/deletecustomer/{customerID}")
    public String deleteCustomer(@PathVariable Integer customerID) {
        return customerService.deleteCustomer(customerID);
    }

}