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