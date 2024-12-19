//package com.Ticketing.System.Service;
//import com.Ticketing.System.Model.Customer;
//import com.Ticketing.System.Model.Vendor;
//import com.Ticketing.System.Repository.CustomerRepository;
//import com.Ticketing.System.Repository.VendorRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private CustomerRepository customerRepository;
//
//    @Autowired
//    private VendorRepository vendorRepository;
//
//    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//
//    public Object login(String email, String rawPassword) throws Exception {
//        // Check if the user is a Customer
//        Customer customer = customerRepository.findByCustomerEmail(email);
//        if (customer != null) {
//            if (!passwordEncoder.matches(rawPassword, customer.getCustomerPassword())) {
//                throw new Exception("Invalid Customer credentials");
//            }
//            return customer;
//        }
//
//        // Check if the user is a Vendor
//        Vendor vendor = vendorRepository.findByVendorEmail(email);
//        if (vendor != null) {
//            if (!passwordEncoder.matches(rawPassword, vendor.getVendorPassword())) {
//                throw new Exception("Invalid Vendor credentials");
//            }
//            return vendor;
//        }
//
//        throw new Exception("User not found");
//    }
//}
