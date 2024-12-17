import React, { useState } from "react";
import axios from "axios";

const ControlPanelComponent = () => {
  const [config, setConfig] = useState({
    maxCapacity: "",
    totalTickets: "",
    customerTicketRetrievalRate: "",
    customerRetrievalInterval: "",
    vendorTicketReleaseRate: "",
    vendorTicketReleaseInterval: "",
  });

  const [systemRunning, setSystemRunning] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: Number(value),
    }));
  };

  const handleSubmitConfig = async () => {
    try {
        console.log("Submitting config:", config);
      await axios.post("http://localhost:8081/api/config/posting", config);
      alert("Configuration submitted successfully.");
    } catch (error) {
        console.error("Error submitting configuration:", error);
      alert(error.response?.data?.message||error.message || "Failed to submit configuration.");
    }
  };

  const handleStartSystem = async () => {
    try {
      await handleSubmitConfig(); // Submit config before starting
      await axios.post("http://localhost:8081/ticketsystem/start");
      setSystemRunning(true);
      alert("System started successfully.");
    } catch (error) {
      alert(error.response?.data || "Failed to start the system.");
    }
  };

  const handleStopSystem = async () => {
    try {
      await axios.post("http://localhost:8081/ticketsystem/stop");
      setSystemRunning(false);
      alert("System stopped successfully.");
    } catch (error) {
      alert(error.response?.data || "Failed to stop the system.");
    }
  };

  return (
    <div className="control-panel">
      <h3>Control Panel</h3>
      <div>
        <h4>Configuration</h4>
        <input
          type="number"
          name="maxCapacity"
          placeholder="Max Capacity"
          value={config.maxCapacity}
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
          name="vendorTicketReleaseInterval"
          placeholder="Vendor Ticket Release Interval (ms)"
          value={config.vendorTicketReleaseInterval}
          onChange={handleInputChange}
        />
        <div class='startstopbtn'><button class='submit' onClick={handleSubmitConfig}>
          Submit Configuration
        </button></div>
        <div class='startstopbtn'>
        <button class='startstop' onClick={handleStartSystem} disabled={systemRunning}>
          Start System
        </button>
        <button class='startstop' onClick={handleStopSystem} disabled={!systemRunning}>
          Stop System
        </button></div>
      </div>
    </div>
  );
};

export default ControlPanelComponent;

//====================================================================
// import React, { useState } from "react";
// import axios from "axios";

// const ControlPanelComponent = () => {
//     // State for inputs
//     const [config, setConfig] = useState({
//         maxCapacity: "",
//         totalTickets: "",
//         customerTicketRetrievalRate: "",
//         customerRetrievalInterval: "",
//         vendorTicketReleaseRate: "",
//         vendorTicketReleaseInterval: "",
//     });

//     const [systemRunning, setSystemRunning] = useState(false);

//     // Handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setConfig((prevConfig) => ({
//             ...prevConfig,
//             [name]: value,
//         }));
//     };

//     // Submit configuration and start the system
//     const handleStartSystem = async () => {
//         try {
//             await axios.post("http://localhost:8080/ticketsystem/start", config);
//             setSystemRunning(true);
//             alert("System started successfully.");
//         } catch (error) {
//             alert(error.response?.data || "Failed to start the system.");
//         }
//     };

//     // Stop the system
//     const handleStopSystem = async () => {
//         try {
//             await axios.post("http://localhost:8080/ticketsystem/stop");
//             setSystemRunning(false);
//             alert("System stopped successfully.");
//         } catch (error) {
//             alert(error.response?.data || "Failed to stop the system.");
//         }
//     };

//     return (
//         <div className="control-panel">
//             <h3>Control Panel</h3>
//             <div>
//                 <h4>Configuration</h4>
//                 <input
//                     type="number"
//                     name="maxCapacity"
//                     placeholder="Max Capacity"
//                     value={config.maxCapacity}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="totalTickets"
//                     placeholder="Total Tickets"
//                     value={config.totalTickets}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="customerTicketRetrievalRate"
//                     placeholder="Customer Ticket Retrieval Rate"
//                     value={config.customerTicketRetrievalRate}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="customerRetrievalInterval"
//                     placeholder="Customer Retrieval Interval (ms)"
//                     value={config.customerRetrievalInterval}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="vendorTicketReleaseRate"
//                     placeholder="Vendor Ticket Release Rate"
//                     value={config.vendorTicketReleaseRate}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="vendorTicketReleaseInterval"
//                     placeholder="Vendor Ticket Release Interval (ms)"
//                     value={config.vendorTicketReleaseInterval}
//                     onChange={handleInputChange}
//                 />
//                 <button onClick={handleStartSystem} disabled={systemRunning}>
//                     Start System
//                 </button>
//                 <button onClick={handleStopSystem} disabled={!systemRunning}>
//                     Stop System
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ControlPanelComponent;

//-----------------------------------------------------------------------
// import React, { useState } from "react";
// import axios from "axios";

// const ControlPanelComponent = () => {
//     // State for inputs
//     const [config, setConfig] = useState({
//         maxCapacity: "",
//         totalTickets: "",
//         customerTicketRetrievalRate: "",
//         customerRetrievalInterval: "",
//         vendorTicketReleaseRate: "",
//         vendorTicketReleaseInterval: "",
//     });

//     const [vendorRunning, setVendorRunning] = useState(false);
//     const [customerRunning, setCustomerRunning] = useState(false);

//     // Handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setConfig((prevConfig) => ({
//             ...prevConfig,
//             [name]: value,
//         }));
//     };

//     // Submit configuration to the backend
//     const handleSubmit = async () => {
//         try {
//             await axios.post("http://localhost:8080/configure", config);
//             alert("Configuration submitted successfully.");
//         } catch (error) {
//             alert(error.response?.data || "Failed to submit configuration.");
//         }
//     };

//     // Start Vendors
//     const handleStartVendors = async () => {
//         try {
//             await axios.post("http://localhost:8080/vendors/start");
//             setVendorRunning(true);
//         } catch (error) {
//             alert(error.response?.data || "Failed to start vendors.");
//         }
//     };

//     // Stop Vendors
//     const handleStopVendors = async () => {
//         try {
//             await axios.post("http://localhost:8080/vendors/stop");
//             setVendorRunning(false);
//         } catch (error) {
//             alert(error.response?.data || "Failed to stop vendors.");
//         }
//     };

//     // Start Customers
//     const handleStartCustomers = async () => {
//         try {
//             await axios.post("http://localhost:8080/customers/start");
//             setCustomerRunning(true);
//         } catch (error) {
//             alert(error.response?.data || "Failed to start customers.");
//         }
//     };

//     // Stop Customers
//     const handleStopCustomers = async () => {
//         try {
//             await axios.post("http://localhost:8080/customers/stop");
//             setCustomerRunning(false);
//         } catch (error) {
//             alert(error.response?.data || "Failed to stop customers.");
//         }
//     };

//     return (
//         <div className="control-panel">
//             <h3>Control Panel</h3>
//             <div>
//                 <h4>Configuration</h4>
//                 <input
//                     type="number"
//                     name="maxCapacity"
//                     placeholder="Max Capacity"
//                     value={config.maxCapacity}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="totalTickets"
//                     placeholder="Total Tickets"
//                     value={config.totalTickets}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="customerTicketRetrievalRate"
//                     placeholder="Customer Ticket Retrieval Rate"
//                     value={config.customerTicketRetrievalRate}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="customerRetrievalInterval"
//                     placeholder="Customer Retrieval Interval (ms)"
//                     value={config.customerRetrievalInterval}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="vendorTicketReleaseRate"
//                     placeholder="Vendor Ticket Release Rate"
//                     value={config.vendorTicketReleaseRate}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="vendorTicketReleaseInterval"
//                     placeholder="Vendor Ticket Release Interval (ms)"
//                     value={config.vendorTicketReleaseInterval}
//                     onChange={handleInputChange}
//                 />
//                 <button onClick={handleSubmit}>Submit Configuration</button>
//             </div>

//             <div>
//                 <h4>Vendor Controls</h4>
//                 <button
//                     onClick={handleStartVendors}
//                     disabled={vendorRunning}
//                 >
//                     Start Vendors
//                 </button>
//                 <button
//                     onClick={handleStopVendors}
//                     disabled={!vendorRunning}
//                 >
//                     Stop Vendors
//                 </button>
//             </div>

//             <div>
//                 <h4>Customer Controls</h4>
//                 <button
//                     onClick={handleStartCustomers}
//                     disabled={customerRunning}
//                 >
//                     Start Customers
//                 </button>
//                 <button
//                     onClick={handleStopCustomers}
//                     disabled={!customerRunning}
//                 >
//                     Stop Customers
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ControlPanelComponent;
//----------------------------------------------------------------------------
// import React, { useState } from "react";
// import axios from "axios";

// const ControlPanelComponent = () => {
//     // State for inputs
//     const [config, setConfig] = useState({
//         maxCapacity: "",
//         totalTickets: "",
//         customerTicketRetrievalRate: "",
//         customerRetrievalInterval: "",
//         vendorTicketReleaseRate: "",
//         vendorTicketReleaseInterval: "",
//     });

//     const [systemRunning, setSystemRunning] = useState(false);

//     // Handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setConfig((prevConfig) => ({
//             ...prevConfig,
//             [name]: value,
//         }));
//     };

//     // Submit configuration to the backend
//     const handleSubmit = async () => {
//         try {
//             await axios.post("http://localhost:8080/configure", config);
//             alert("Configuration submitted successfully.");
//         } catch (error) {
//             alert(error.response?.data || "Failed to submit configuration.");
//         }
//     };

//     // Start the system
//     const handleStartSystem = async () => {
//         try {
//             await axios.post("http://localhost:8080/vendors/start");
//             await axios.post("http://localhost:8080/customers/start");
//             setSystemRunning(true);
//         } catch (error) {
//             alert(error.response?.data || "Failed to start the system.");
//         }
//     };

//     // Stop the system
//     const handleStopSystem = async () => {
//         try {
//             await axios.post("http://localhost:8080/vendors/stop");
//             await axios.post("http://localhost:8080/customers/stop");
//             setSystemRunning(false);
//         } catch (error) {
//             alert(error.response?.data || "Failed to stop the system.");
//         }
//     };

//     return (
//         <div className="control-panel">
//             <h3>Control Panel</h3>
//             <div>
//                 <h4>Configuration</h4>
//                 <input
//                     type="number"
//                     name="maxCapacity"
//                     placeholder="Max Capacity"
//                     value={config.maxCapacity}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="totalTickets"
//                     placeholder="Total Tickets"
//                     value={config.totalTickets}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="customerTicketRetrievalRate"
//                     placeholder="Customer Ticket Retrieval Rate"
//                     value={config.customerTicketRetrievalRate}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="customerRetrievalInterval"
//                     placeholder="Customer Retrieval Interval (ms)"
//                     value={config.customerRetrievalInterval}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="vendorTicketReleaseRate"
//                     placeholder="Vendor Ticket Release Rate"
//                     value={config.vendorTicketReleaseRate}
//                     onChange={handleInputChange}
//                 />
//                 <input
//                     type="number"
//                     name="vendorTicketReleaseInterval"
//                     placeholder="Vendor Ticket Release Interval (ms)"
//                     value={config.vendorTicketReleaseInterval}
//                     onChange={handleInputChange}
//                 />
//                 <button onClick={handleSubmit}>Submit Configuration</button>
//             </div>

//             <div>
//                 <h4>System Controls</h4>
//                 <button
//                     onClick={handleStartSystem}
//                     disabled={systemRunning}
//                 >
//                     Start System
//                 </button>
//                 <button
//                     onClick={handleStopSystem}
//                     disabled={!systemRunning}
//                 >
//                     Stop System
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ControlPanelComponent;

