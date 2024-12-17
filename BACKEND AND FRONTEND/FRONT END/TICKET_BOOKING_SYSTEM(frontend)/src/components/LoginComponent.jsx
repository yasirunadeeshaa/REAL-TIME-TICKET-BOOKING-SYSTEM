// import React from 'react'
// import { useState } from 'react';
// import { adduser } from '../Services/CustomerLoginService';
// import { useNavigate } from 'react-router-dom';

// function LoginComponent() {

//     const [isSignUp, setIsSignUp] = useState(false);
//     const [userType, setUserType] = useState('customer');
// //   const [formData, setFormData] = useState({username: '',email: '',password: '',});

//     const toggleSignUp = () => setIsSignUp(!isSignUp);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({...formData,[name]: value,
// //     });
// //   };

//   const handleUserTypeChange = (e) => setUserType(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!username || !email || !password) {
//       alert('Please fill out all fields.');
//       return;
//     }
//     const user=(isSignUp ? 'Sign-Up Data' : 'Sign-In Data', { userType, username,email,password});
//     console.log(user)
//     alert(`${isSignUp ? 'Sign-Up' : 'Sign-In'} Successful`);
//   };


// //---------//-------------------------------------------------

//     const navigator = useNavigate();

//     const [username,setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword]=useState('');

//     function handleusername(e){setUsername(e.target.value);}
//     function handleemail(e){setEmail(e.target.value);}
//     function handlePassword(e){setPassword(e.target.value);}

//     function saveUser(e){
//         // adduser(handleSubmit(user)).then((response)=>{
//         //     console.log(response.data);
//         //     navigator('/list')
//         // })
//         e.preventDefault();

//     const userData = { username, email, password };
//     if (userType === 'customer') {
//         addCustomer(userData)
//             .then((response) => {
//                 console.log('Customer added:', response.data);
//                 alert('Customer registration successful');
//                 navigator('/customerlist'); // Redirect after success
//             })
//             .catch((error) => {
//                 console.error('Error adding customer:', error);
//                 alert('Failed to register customer');
//             });
//     } else if (userType === 'vendor') {
//         addVendor(userData)
//             .then((response) => {
//                 console.log('Vendor added:', response.data);
//                 alert('Vendor registration successful');
//                 navigator('/vendorlist'); // Redirect after success
//             })
//             .catch((error) => {
//                 console.error('Error adding vendor:', error);
//                 alert('Failed to register vendor');
//             });
//     }
//     }
// //-----------------------------------
// //-----------------------------------

//   return (
//     <div className="log-container">
//       <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={handleusername}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleemail}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handlePassword}
//             required
//           />
//         </div>

//         {isSignUp && (
//           <div className="form-group">
//             <label htmlFor="userType">I am a:</label>
//             <select id="userType" value={userType} onChange={handleUserTypeChange}>
//               <option value="customer">Customer</option>
//               <option value="vendor">Vendor</option>
//             </select>
//           </div>
//         )}

//         <button type="submit" className="submit-btn">
//           {isSignUp ? 'Sign Up' : 'Sign In'}
//         </button>
//       </form>
//       <p className="toggle-link" onClick={toggleSignUp}>
//         {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
//       </p>
//     </div>
//   )
// }

// export default LoginComponent
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
