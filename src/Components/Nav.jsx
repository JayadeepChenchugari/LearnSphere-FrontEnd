import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUser, FaUserTie, FaCogs } from "react-icons/fa";
import './services.css'; // Import the CSS file

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footerstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Define your desired background color and other styles
const navbarStyles = {
    backgroundColor: '#008080', // Set your desired background color
}

function Nav() {
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
            </nav>

            <div className="container-fluid py-5 my-4 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 shadow p-3 mb-5 bg-body rounded">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/slide1.jpg" className="d-block w-100 img-fluid" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/slide2.jpg" className="d-block w-100 img-fluid" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/slide3.jpg" className="d-block w-100 img-fluid" alt="Third slide" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col" id="company">
                            <img src="images/logo.jpg" alt="" class="logo" />
                            <p>
                                "Our mission at Learn Hub is to provide accessible, high-quality, and diverse educational content to learners of all backgrounds."

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
                                
                                <p>Nandyal <br /> Andhra Pradesh, India</p>

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
}


export default Nav;