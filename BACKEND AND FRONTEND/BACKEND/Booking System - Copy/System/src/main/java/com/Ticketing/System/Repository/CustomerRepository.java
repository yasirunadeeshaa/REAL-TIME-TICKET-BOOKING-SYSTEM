package com.Ticketing.System.Repository;

import com.Ticketing.System.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query(value = "select * FROM user WHERE user_ID=?1", nativeQuery = true)
    Customer getCustomerByCustomerID(int userID);
    boolean existsByCustomerNameAndCustomerEmail(String customerName, String customerEmail);
    Customer findByCustomerEmail(String email);
}
