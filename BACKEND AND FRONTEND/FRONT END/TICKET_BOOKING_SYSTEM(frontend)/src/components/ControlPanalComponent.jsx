// import React, { useState } from "react";
// import axios from "axios";

// const ControlPanelComponent = () => {
//   const [config, setConfig] = useState({
//     maxTicketCapacity: "",
//     totalTickets: "",
//     customerTicketRetrievalRate: "",
//     customerRetrievalInterval: "",
//     vendorTicketReleaseRate: "",
//     vendorReleaseInterval: "",
//   });

//   const [systemRunning, setSystemRunning] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setConfig((prevConfig) => ({
//       ...prevConfig,
//       [name]: Number(value),
//     }));
//   };

//   const handleSubmitConfig = async () => {
//     try {
//         console.log("Submitting config:", config);
//       const response = await axios.post("http://localhost:8090/api/config/posting", config);
//       console.log("Response from server:", response);
//       alert("Configuration submitted successfully.");
//     } catch (error) {
//         console.error("Error submitting configuration:", error);
//       alert(error.response?.data?.message||error.message || "Failed to submit configuration.");
//     }
//   };

//   // const handleStartSystem = async () => {
//   //   try {
//   //     await handleSubmitConfig(); // Submit config before starting
//   //     await axios.post("http://localhost:8090/ticketsystem/start");
//   //     setSystemRunning(true);
//   //     alert("System started successfully.");
//   //   } catch (error) {
//   //     alert(error.response?.data || "Failed to start the system.");
//   //   }
//   // };
//   const handleStartSystem = async () => {
//     try {
      
//         const config = {
//           totalTickets: 100,
//           maxTicketCapacity: 500, // Add this field
//           vendorReleaseInterval: 1000, // Add this field
//           vendorTicketReleaseRate: 10,
//           customerRetrievalInterval: 1000,
//           customerTicketRetrievalRate: 5,
//         };

//         console.log("Submitting config:", config);

//         const response = await axios.post("http://localhost:8090/ticketsystem/start", config, {
//             headers: { "Content-Type": "application/json" },
//         });

//         console.log("System started successfully:", response.data);
//     } catch (error) {
//         console.error("Error starting system:", error.response?.data || error.message);
//     }
// };

//   const handleStopSystem = async () => {
//     try {
//       await axios.post("http://localhost:8090/ticketsystem/stop");
//       setSystemRunning(false);
//       alert("System stopped successfully.");
//     } catch (error) {
//       alert(error.response?.data || "Failed to stop the system.");
//     }
//   };

//   return (
//     <div className="control-panel">
//       <h3>Control Panel</h3>
//       <div>
//         <h4>Configuration</h4>
//         <input
//           type="number"
//           name="maxCapacity"
//           placeholder="Max Capacity"
//           value={config.maxCapacity}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="totalTickets"
//           placeholder="Total Tickets"
//           value={config.totalTickets}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="customerTicketRetrievalRate"
//           placeholder="Customer Ticket Retrieval Rate"
//           value={config.customerTicketRetrievalRate}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="customerRetrievalInterval"
//           placeholder="Customer Retrieval Interval (ms)"
//           value={config.customerRetrievalInterval}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="vendorTicketReleaseRate"
//           placeholder="Vendor Ticket Release Rate"
//           value={config.vendorTicketReleaseRate}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="vendorTicketReleaseInterval"
//           placeholder="Vendor Ticket Release Interval (ms)"
//           value={config.vendorTicketReleaseInterval}
//           onChange={handleInputChange}
//         />
//         <div class='startstopbtn'><button class='submit' onClick={handleSubmitConfig}>
//           Submit Configuration
//         </button></div>
//         <div class='startstopbtn'>
//         <button class='startstop' onClick={handleStartSystem} disabled={systemRunning}>
//           Start System
//         </button>
//         <button class='startstop' onClick={handleStopSystem} disabled={!systemRunning}>
//           Stop System
//         </button></div>
//       </div>
//     </div>
//   );
// };

// export default ControlPanelComponent;

import React, { useState } from "react";
import axios from "axios";

const ControlPanelComponent = () => {
  const [config, setConfig] = useState({
    totalTickets: "",
    maxTicketCapacity: "",
    vendorReleaseInterval: "",
    vendorTicketReleaseRate: "",
    customerRetrievalInterval: "",
    customerTicketRetrievalRate: "",
  });

  const [systemRunning, setSystemRunning] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value, // Store values as strings temporarily
    }));
  };

  const handleSubmitConfig = async () => {
    try {
      const formattedConfig = {
        totalTickets: parseInt(config.totalTickets, 10),
        maxTicketCapacity: parseInt(config.maxTicketCapacity, 10),
        vendorReleaseInterval: parseInt(config.vendorReleaseInterval, 10),
        vendorTicketReleaseRate: parseInt(config.vendorTicketReleaseRate, 10),
        customerRetrievalInterval: parseInt(config.customerRetrievalInterval, 10),
        customerTicketRetrievalRate: parseInt(config.customerTicketRetrievalRate, 10),
      };

      console.log("Submitting config:", formattedConfig);

      const response = await axios.post("http://localhost:8090/api/config/posting", formattedConfig);
      console.log("Response from server:", response);
      alert("Configuration submitted successfully.");
    } catch (error) {
      console.error("Error submitting configuration:", error);
      alert(error.response?.data?.message || error.message || "Failed to submit configuration.");
    }
  };

  const handleStartSystem = async () => {
    try {
      const formattedConfig = {
        totalTickets: parseInt(config.totalTickets, 10),
        maxTicketCapacity: parseInt(config.maxTicketCapacity, 10),
        vendorReleaseInterval: parseInt(config.vendorReleaseInterval, 10),
        vendorTicketReleaseRate: parseInt(config.vendorTicketReleaseRate, 10),
        customerRetrievalInterval: parseInt(config.customerRetrievalInterval, 10),
        customerTicketRetrievalRate: parseInt(config.customerTicketRetrievalRate, 10),
      };

      console.log("Starting system with config:", formattedConfig);

      const response = await axios.post("http://localhost:8090/ticketsystem/start", formattedConfig, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("System started successfully:", response.data);
      setSystemRunning(true);
      alert("System started successfully.");
    } catch (error) {
      console.error("Error starting system:", error.response?.data || error.message);
      alert(error.response?.data?.message || error.message || "Failed to start the system.");
    }
  };

  const handleStopSystem = async () => {
    try {
      await axios.post("http://localhost:8090/ticketsystem/stop");
      setSystemRunning(false);
      alert("System stopped successfully.");
    } catch (error) {
      console.error("Error stopping system:", error.response?.data || error.message);
      alert(error.response?.data?.message || error.message || "Failed to stop the system.");
    }
  };

  return (
    <div className="control-panel">
      <h3>Control Panel</h3>
      <div>
        <h4>Configuration</h4>
        <input
          type="number"
          name="maxTicketCapacity"
          placeholder="Max Ticket Capacity"
          value={config.maxTicketCapacity}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="totalTickets"
          placeholder="Total Tickets"
          value={config.totalTickets}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="customerTicketRetrievalRate"
          placeholder="Customer Ticket Retrieval Rate"
          value={config.customerTicketRetrievalRate}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="customerRetrievalInterval"
          placeholder="Customer Retrieval Interval (ms)"
          value={config.customerRetrievalInterval}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="vendorTicketReleaseRate"
          placeholder="Vendor Ticket Release Rate"
          value={config.vendorTicketReleaseRate}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="vendorReleaseInterval"
          placeholder="Vendor Ticket Release Interval (ms)"
          value={config.vendorReleaseInterval}
          onChange={handleInputChange}
        />
        <div className="startstopbtn">
          <button className="submit" onClick={handleSubmitConfig}>
            Submit Configuration
          </button>
        </div>
        <div className="startstopbtn">
          <button className="startstop" onClick={handleStartSystem} disabled={systemRunning}>
            Start System
          </button>
          <button className="startstop" onClick={handleStopSystem} disabled={!systemRunning}>
            Stop System
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanelComponent;
