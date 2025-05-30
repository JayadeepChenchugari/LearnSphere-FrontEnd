import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUser, FaUserTie, FaCogs } from "react-icons/fa";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footerstyle.css';
import './About.css';


const navbarStyles = {
  backgroundColor: '#008080', // Set your desired background color
}
// ... Other imports ...

const About = ({ show }) => {
  // Define an array of team members with their details
  const teamMembers = [
   
    
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  shadow-lg fixed-top" style={navbarStyles}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo1.jpg" alt="Logo" width="50" height="50" className="me-5" />
            Study Sphere
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <FaInfoCircle /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  <FaCogs /> Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-danger rounded-pill px-3" to="/user-login">
                  <FaUser /> User Login
                </Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary rounded-pill px-3" to="/admin">
                  <FaUserTie /> Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav><br></br>
      <br></br>
      <br></br>
      



      <section className="team">
        <div className="center">
          <h1>About Me</h1>
          <h2>Myself Jayadeep Chenchugari.I disigned this project to provide the access to the courses for students.</h2>
          <h2></h2>
          <h2>Happy Learning.</h2>
        </div>

        <div className="team-content">
          {teamMembers.map((member, index) => (
            <div className="box" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <h5>{member.role}</h5>
              <div className="icons">
                <a href={member.twitterLink}>
                  <i className="ri-twitter-fill"></i>
                </a>
                <a href={member.facebookLink}>
                  <i className="ri-facebook-box-fill"></i>
                </a>
                <a href={member.instagramLink}>
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ... Footer and other content ... */}
      <footer>
        <div class="container">
          <div class="row">
            <div class="col" id="company">
              <img src="images/logo.jpg" alt="" class="logo" />
              <p>
                "My mission  is to provide accessible, high-quality, and diverse educational content to learners of all backgrounds."

              </p>
              <div class="social">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>


            <div class="col" id="services">
              <h3>Services</h3>
              <div class="links">
                <a href="#">E-learning</a>
                <a href="#">Communication and support</a>
                <a href="#">Assesments</a>
                <a href="#">Course content</a>
              </div>
            </div>

            <div class="col" id="useful-links">
              <h3>Links</h3>
              <div class="links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Our Policy</a>
                <a href="#">Help</a>
              </div>
            </div>

            <div class="col" id="contact">
              <h3>Contact</h3>
              <div class="contact-details">
                <i class="fa fa-location"></i>
                <p>Nandyal <br /> Andhra Pradesh, INDIA</p>
              </div>
              <div class="contact-details">
                <i class="fa fa-phone"></i>
                
               
                <p>PhoneNo:8919101822</p>
              </div>
            </div>
          </div><br></br>

          <p className="card-text text-black">
            Follow us on :

            <div className='justify-content-evenly'>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'black' }} />
              </a>&nbsp; &nbsp;
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }} />
              </a>&nbsp;  &nbsp;
              <a href="mailto:youremail@example.com">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'black' }} />
              </a>
            </div>
          </p>

        </div>
      </footer>

    </>
  );
};

export default About;
