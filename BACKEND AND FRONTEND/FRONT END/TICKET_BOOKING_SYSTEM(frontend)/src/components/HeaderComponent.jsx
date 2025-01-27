//raf
import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {

    const navigate = useNavigate() ;

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
        <header className="header">
      <div className="container">
        {/* Brand Logo */}
        <div className="logo">
          <a href="/">BOOK YOUR TICKET</a>
        </div>

        {/* Navigation Menu */}
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/controlpanel">ControlPanel</a></li>
            <li><a href="/vendorlist">Vendors</a></li>
            <li><a href="/customerlist">Customers</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/venues">Venues</a></li>
            <li><a href="/addevent">Add event</a></li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>

        <div class="logbutton">
    
      <button class="login-button" onClick={handleLoginClick}>Login</button></div>

        {/* <div className="nav-buttons">
          <button class="signin" onClick={onSignIn}>Sign-In</button>
          
          <button class="signup" onClick={onSignUp}>Sign-Up</button>
        </div> */}
      </div>
    </header>
    </div>
  )
}
export default HeaderComponent

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const HeaderComponent = () => {
//     const navigate = useNavigate();
//     const [isSidebarOpen, setSidebarOpen] = useState(false);

//     const handleLoginClick = () => {
//         navigate('/login');
//     };

//     const toggleSidebar = () => {
//         setSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div>
//             <header className="header">
//                 <div className="container">
//                     {/* Brand Logo */}
//                     <div className="logo">
//                         <a href="/">BOOK YOUR TICKET</a>
//                     </div>

//                     {/* Navigation Menu */}
//                     <nav className="navbar">
//                         <ul>
//                             <li><a href="/">Home</a></li>
//                             <li><a href="/controlpanel">ControlPanel</a></li>
//                             <li><a href="/vendorlist">Vendors</a></li>
//                             <li><a href="/customerlist">Customers</a></li>
//                             <li><a href="/events">Events</a></li>
//                             <li><a href="/venues">Venues</a></li>
//                         </ul>
//                     </nav>

//                     {/* Search Bar */}
//                     <div className="search-bar">
//                         <input type="text" placeholder="Search..." />
//                         <button type="submit">Search</button>
//                     </div>

//                     {/* Login Button */}
//                     <div className="logbutton">
//                         <button className="login-button" onClick={handleLoginClick}>Login</button>
//                     </div>

//                     {/* Sidebar Toggle Button */}
//                     <button className="sidebar-toggle" onClick={toggleSidebar}>
//                         ☰
//                     </button>
//                 </div>
//             </header>

//             {/* Sidebar */}
//             <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/controlpanel">Control Panel</a></li>
//                     <li><a href="/vendorlist">Vendors</a></li>
//                     <li><a href="/customerlist">Customers</a></li>
//                     <li><a href="/events">Events</a></li>
//                     <li><a href="/venues">Venues</a></li>
//                 </ul>
//             </aside>
//         </div>
//     );
// };

// export default HeaderComponent;

// /* CSS */
// const styles = `
// .header {
//     background-color: #333;
//     color: white;
//     padding: 10px 20px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

// .container {
//     display: flex;
//     align-items: center;
//     width: 100%;
// }

// .logo a {
//     text-decoration: none;
//     color: white;
//     font-size: 1.5rem;
// }

// .navbar ul {
//     list-style: none;
//     display: flex;
//     margin: 0;
//     padding: 0;
// }

// .navbar ul li {
//     margin: 0 15px;
// }

// .navbar ul li a {
//     color: white;
//     text-decoration: none;
// }

// .search-bar {
//     display: flex;
//     align-items: center;
// }

// .search-bar input {
//     padding: 5px;
//     margin-right: 5px;
// }

// .login-button {
//     padding: 8px 15px;
//     background-color: #007bff;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }

// .sidebar-toggle {
//     font-size: 1.5rem;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
// }

// .sidebar {
//     position: fixed;
//     top: 0;
//     left: -250px;
//     width: 250px;
//     height: 100%;
//     background-color: #444;
//     color: white;
//     overflow-y: auto;
//     transition: left 0.3s ease;
//     padding-top: 20px;
// }

// .sidebar.open {
//     left: 0;
// }

// .sidebar ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
// }

// .sidebar ul li {
//     padding: 10px 20px;
// }

// .sidebar ul li a {
//     color: white;
//     text-decoration: none;
// }

// .sidebar ul li:hover {
//     background-color: #555;
// }
// `;

// export const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);