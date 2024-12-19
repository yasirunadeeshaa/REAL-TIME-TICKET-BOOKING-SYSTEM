import axios from "axios";

const API_BASE_URL = "http://localhost:8090"; // Update this to match your backend URL

export const addCustomer = (customer) => {
  return axios.post(`${API_BASE_URL}/api/customer/addcustomer`, customer, {
    headers: { "Content-Type": "application/json" },
  });
};

export const addVendor = (vendor) => {
  return axios.post(`${API_BASE_URL}/api/vendor/addvendor`, vendor, {
    headers: { "Content-Type": "application/json" },
  });
};
