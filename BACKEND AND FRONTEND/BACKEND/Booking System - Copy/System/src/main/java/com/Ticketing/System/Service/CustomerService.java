package com.Ticketing.System.Service;

import com.Ticketing.System.DataTransferObject.CustomerDTO;
import com.Ticketing.System.Model.Customer;
import com.Ticketing.System.Repository.CustomerRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;      // create new userreposi

    @Autowired
    private ModelMapper modelMapper;

    public List<CustomerDTO> getCustomers(){
        List<Customer> customerList = customerRepository.findAll();
        return modelMapper.map(customerList, new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    public String saveCustomer(CustomerDTO customerDTO) {
        customerRepository.save(modelMapper.map(customerDTO, Customer.class));
        return "customer saved successfully";
    }

    public boolean validateCustomer(String username, String email) {
        return customerRepository.existsByCustomerNameAndCustomerEmail(username, email);
    }

    public String updateCustomer(CustomerDTO customerDTO) {
        customerRepository.save(modelMapper.map(customerDTO, Customer.class));
        return "customer updated successfully";
    }

    public String deleteCustomer(Integer customerID) {
        customerRepository.deleteById(customerID);
        return "customer deleted successfully";
    }

    public CustomerDTO getCustomerByCustomerId(Integer customerid) {
        Customer customer = customerRepository.getCustomerByCustomerID(customerid);
        return modelMapper.map(customer, CustomerDTO.class);
    }

}