
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEventComponent = () => {
  const [event, setEvent] = useState({
    eventType: '',
    eventName: '',
    eventDescription: '',
    eventLearnMore:'',
    eventTimeDuration: ''
    
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8090/api/event/addevent', event);
      if (response.status === 200) {
        alert('Event added successfully!');
        navigate('/events'); // Redirect to the event list page
      }
    } catch (err) {
      console.error(err);
      setError('Failed to add the event. Please try again.');
    }
  };

  return (
    <div className="glass-card">
      <h2 className="text-center">Add New Event</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Type</label>
          <input
            type="text"
            className="form-control"
            name="eventType"
            value={event.eventType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            className="form-control"
            name="eventName"
            value={event.eventName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Description</label>
          <textarea
            className="form-control"
            name="eventDescription"
            value={event.eventDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Link For Learn More About Event</label>
          <textarea
            className="form-control"
            name="eventLearnMore"
            value={event.eventLearnMore}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Time Duration</label>
          <input
            type="text"
            className="form-control"
            name="eventTimeDuration"
            value={event.eventTimeDuration}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="addeventbtn">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventComponent;