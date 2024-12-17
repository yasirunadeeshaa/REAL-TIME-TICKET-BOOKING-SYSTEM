import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const FooterComponent = () => {
  return (
    <div>
      <footer>
        <div class="footer-content">
        <div class="footer-section about">
          <h2>About Us</h2>
          <p>
            Your Company is a leader in providing exceptional products and services. 
            We aim to deliver the best experience to our customers worldwide.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email :- yasiru.20232389@iit.ac.lk</p>
          <p>Phone :- 0762873746</p>
          <p>Address: 123 Business St,Kollupitiya, Sri Lanka</p>
        </div>
        </div>

        <div class="social">
          <h4>Follow Us</h4>
          <div class="socialicons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        

        </div>

        <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved. | Terms of Service | Privacy Policy</p>
      </div>

      </footer>
    </div>
  )
}

export default FooterComponent
