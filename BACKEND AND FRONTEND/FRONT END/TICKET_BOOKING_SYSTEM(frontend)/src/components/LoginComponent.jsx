import React, { useState } from "react";
import { addCustomer, addVendor } from "../Services/LogingService";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState("customer");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const handleUserTypeChange = (e) => setUserType(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    //const userData = { customerName:username, customerEmail:email, customerPassword:password };
    const userData = isSignUp
  ? userType === "customer"
    ? {
        customerName: username, // For Customer
        customerEmail: email,
        customerPassword: password,
      }
    : {
        vendorName: username, // For Vendor
        vendorEmail: email,
        vendorPassword: password,
      }
  : null;
    try {
      if (isSignUp) {
        if (userType === "customer") {
          await addCustomer(userData);
          alert("Customer registration successful");
          navigate("/customerlist"); // Redirect after success
        } else if (userType === "vendor") {
          await addVendor(userData);
          alert("Vendor registration successful");
          navigate("/vendorlist"); // Redirect after success
        }
      } else {
        alert("Sign-In functionality is not implemented yet.");
        // Login Logic
        // const loginData = { email, password };
        // const response = await axios.post("http://localhost:8081/api/auth/login", loginData);

        // // Handle success
        // const { token, userType } = response.data; // Assuming the backend returns a token and userType
        // localStorage.setItem("authToken", token); // Save the token in local storage for authentication
        // alert("Login successful!");
      }
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to register user. Please try again.");
    }
  };

  return (
    <div className="log-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {isSignUp && (
          <div className="form-group">
            <label htmlFor="userType">I am a:</label>
            <select id="userType" value={userType} onChange={handleUserTypeChange}>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
        )}

        <button type="submit" className="submit-btn">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <p className="toggle-link" onClick={toggleSignUp}>
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

export default LoginComponent;
