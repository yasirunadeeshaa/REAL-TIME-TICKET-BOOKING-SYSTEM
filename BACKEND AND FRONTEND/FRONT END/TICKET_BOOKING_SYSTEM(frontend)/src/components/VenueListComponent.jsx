import React, {useState, useEffect} from 'react'
import { listvenues } from '../Services/Service'
//rafce

const VenueListComponent  = () => {

    const [customer, setVenues] =useState([])
    useEffect(() =>{
        listvenues().then((Response)=>{
            setVenues(Response.data);
        }).catch(error =>{
            console.error(error);
        })
    },[])

  return (
    <div className='container'>
    <h2 class='listofcustomer'>LIST OF VENUES</h2>
    <table class='table table-striped table-bordered'>
        <thead>
            <th className='text-center'>Venue ID</th>
            <th>Venue name</th>
            <th>Venue addresss</th>
            <th>Venue city</th>
            <th>Venue capacity</th>
        </thead>
        <tbody>
            {
                customer.map(venue =>
                    <tr key={venue.id}>
                        <td>{venue.venueID}</td>
                        <td>{venue.venueName}</td>
                        <td>{venue.venueAddress}</td>
                        <td>{venue.venueCity}</td>
                        <td>{venue.capacity}</td>
                    </tr>
                )
            }
        </tbody>
    </table>

    </div>
  )
}

export default VenueListComponent
