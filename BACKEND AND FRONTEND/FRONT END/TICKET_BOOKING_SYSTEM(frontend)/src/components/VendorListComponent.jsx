import React, {useState, useEffect} from 'react'
import { listvendors } from '../Services/Service'
//rafce

const VendorListComponent  = () => {

    const [vendor, setVendor] =useState([])
    useEffect(() =>{
        listvendors().then((Response)=>{
            setVendor(Response.data);
        }).catch(error =>{
            console.error(error);
        })
    },[])

  return (
    <div className='container'>
    <h2 class='listofcustomer'>LIST OF VENDORS</h2>
    <table class='table table-striped table-bordered'>
        <thead>
            <th className='text-center'>Vendor ID</th>
            <th>Vendor username</th>
            <th>Vendor email</th>
        </thead>
        <tbody>
            {
                vendor.map(vendor =>
                    <tr key={vendor.id}>
                        <td>{vendor.vendorID}</td>
                        <td>{vendor.vendorName}</td>
                        <td>{vendor.vendorEmail}</td>
                    </tr>
                )
            }
        </tbody>
    </table>

    </div>
  )
}

export default VendorListComponent
