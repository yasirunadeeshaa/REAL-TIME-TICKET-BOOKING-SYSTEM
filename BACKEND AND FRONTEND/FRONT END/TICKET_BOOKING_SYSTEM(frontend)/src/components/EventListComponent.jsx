import React, {useState, useEffect} from 'react'
import { listevents } from '../Services/Service'
//rafce

const EventListComponent  = () => {

    const [events, setEvents] =useState([])
    useEffect(() =>{
        listevents().then((Response)=>{
            setEvents(Response.data);
        }).catch(error =>{
            console.error(error);
        })
    },[])

  return (
    <div className='container'>
    <h2 class='listofcustomer'>LIST OF EVENTS</h2>
    <table class='table table-striped table-bordered'>
        <thead>
            <th className='text-center'>Event ID</th>
            <th>Event type</th>
            <th>Event name</th>
            <th>Event description</th>
            <th>Event time Duration</th>
        </thead>
        <tbody>
            {
                events.map(event =>
                    <tr key={event.id}>
                        <td>{event.eventID}</td>
                        <td>{event.eventType}</td>
                        <td>{event.eventName}</td>
                        <td>{event.eventDescription}</td>
                        <td>{event.eventTimeDuration}</td>
                    </tr>
                )
            }
        </tbody>
    </table>

    </div>
  )
}

export default EventListComponent
