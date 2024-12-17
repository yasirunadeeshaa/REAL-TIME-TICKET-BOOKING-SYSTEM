import React, { useEffect, useState } from "react";
import axios from "axios";

const TicketDisplayComponent = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get("http://localhost:8080/tickets/available");
                setTickets(response.data);
            } catch (error) {
                console.error("Failed to fetch tickets.", error);
            }
        };

        const interval = setInterval(fetchTickets, 2000); // Poll every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>Available Tickets</h3>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>Ticket ID: {ticket.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default TicketDisplayComponent;
