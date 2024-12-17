import React, {useState, useEffect} from 'react'
import { listcostomers } from '../Services/Service'
//rafce

const ListCustomerComponent  = () => {

    const [customer, setCustomer] =useState([])
    useEffect(() =>{
        listcostomers().then((Response)=>{
            setCustomer(Response.data);
        }).catch(error =>{
            console.error(error);
        })
    },[])

  return (
    <div className='container'>
    <h2 class='listofcustomer'>LIST OF CUSTOMERS</h2>
    <table class='table table-striped table-bordered'>
        <thead>
            <th className='text-center'>Customer ID</th>
            <th>Customer username</th>
            <th>customer email</th>
        </thead>
        <tbody>
            {
                customer.map(customer =>
                    <tr key={customer.id}>
                        <td>{customer.customerID}</td>
                        <td>{customer.customerName}</td>
                        <td>{customer.customerEmail}</td>
                    </tr>
                )
            }
        </tbody>
    </table>

    </div>
  )
}

export default ListCustomerComponent
