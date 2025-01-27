import React, { useState } from "react";
import { addCustomer, addVendor } from "../Services/LogingService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginComponent() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null); // Track user selection
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const handleUserTypeSelection = (type) => setSelectedUserType(type); // Set customer or vendor
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || (isSignUp && !password)) {
      alert("Please fill out all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format. Please enter a valid email.");
    return;
  }

    const userData = isSignUp
      ? selectedUserType === "customer"
        ? {
            customerName: username,
            customerEmail: email,
            customerPassword: password,
          }
        : {
            vendorName: username,
            vendorEmail: email,
            vendorPassword: password,
          }
      : { username, email, userType: selectedUserType }; // Only username and email for Sign-In

    try {
      if (isSignUp) {
        // Sign-Up Logic
        if (selectedUserType === "customer") {
          await addCustomer(userData);
          alert("Customer registration successful");
          navigate("/customerlist");
        } else if (selectedUserType === "vendor") {
          await addVendor(userData);
          alert("Vendor registration successful");
          navigate("/vendorlist");
        }
      } else {
        // Sign-In Logic
        const endpoint =
          selectedUserType === "customer"
            ? "http://localhost:8090/api/customer/validate"
            : "http://localhost:8090/api/vendor/validate";

        const response = await axios.post(endpoint, userData);

        if (response.data) {
          alert("Login successful!");
          navigate("/");
        } else {
          alert("Invalid username or email. Please try again.");
        }
        // const { token, userType } = response.data;
//         // localStorage.setItem("authToken", token);

//         // alert("Login successful!");
//         // if (userType === "customer") {
//         //   navigate("/customer-dashboard");
//         // } else if (userType === "vendor") {
//         //   navigate("/vendor-dashboard");
//         // }
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      alert("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="log-container">
      
      {!selectedUserType ? (
        <div class="user-type-selection">
          <h2>Select Your Role</h2>

          <button className="role-btn"
            onClick={() => handleUserTypeSelection("customer")}>
            I am a Customer</button>

          <button className="role-btn"
            onClick={() => handleUserTypeSelection("vendor")}>
            I am a Vendor</button>

        </div>
    
      ) : (
        <>
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

            {isSignUp && (
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
            )}

            <button type="submit" className="submit-btn">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="toggle-link" onClick={toggleSignUp}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </p>
          {/* <button
//             className="back-btn"
//             onClick={() => setSelectedUserType(null)} // Reset selection
//           >
//             Back
//           </button> */}
        </>
      )}
    </div>
  );
}

export default LoginComponent;

// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google"; // Import GoogleLogin
// import axios from "axios";

// function LoginComponent() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();

//   const handleGoogleLogin = async (response) => {
//     const { credential } = response;
//     try {
//       const loginResponse = await axios.post("http://localhost:8090/api/auth/google", {
//         credential, // Google token
//       });

//       if (loginResponse.data.success) {
//         alert("Google login successful!");
//         navigate("/dashboard");
//       } else {
//         alert("Failed to login with Google.");
//       }
//     } catch (error) {
//       console.error("Google login error:", error);
//       alert("An error occurred during Google login.");
//     }
//   };

//   // Send OTP to user's email
//   const sendOtp = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       alert("Please enter a valid email.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8090/api/auth/sendOtp", { email });

//       if (response.data.success) {
//         alert("OTP sent to your email.");
//         // Here you can ask user to input the OTP they receive
//       } else {
//         alert("Failed to send OTP.");
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Error sending OTP. Please try again.");
//     }
//   };

//   // Verify OTP and login
//   const verifyOtp = async (e) => {
//     e.preventDefault();

//     if (!otp) {
//       alert("Please enter OTP.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8090/api/auth/verifyOtp", { otp });

//       if (response.data.success) {
//         alert("OTP verified successfully!");
//         navigate("/dashboard");
//       } else {
//         alert("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       alert("Error verifying OTP. Please try again.");
//     }
//   };

//   return (
//     <div className="log-container">
//       <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
//       {!isSignUp && (
//         <div>
//           <GoogleLogin onSuccess={handleGoogleLogin} onError={(error) => console.log(error)} />
//         </div>
//       )}

//       <form onSubmit={sendOtp}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">
//           Send OTP
//         </button>
//       </form>

//       {otp && (
//         <form onSubmit={verifyOtp}>
//           <div className="form-group">
//             <label htmlFor="otp">OTP:</label>
//             <input
//               type="text"
//               id="otp"
//               name="otp"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn">
//             Verify OTP
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default LoginComponent;
