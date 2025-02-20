import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './services.css'; // Import the CSS file
import { FaHome, FaInfoCircle, FaUser, FaUserTie, FaCogs } from "react-icons/fa";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footerstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
  const courses = [

    {
      id: 1,
      title: 'Web Development',
      description: 'Master the art of building responsive and dynamic websites.',
      imageUrl: 'https://5.imimg.com/data5/SR/IE/NF/SELLER-41353032/php-javascript-react-node-js-500x500.png',
    },
    {
      id: 2,
      title: 'Graphic Design',
      description: 'Explore creative design concepts using industry-standard software.',
      imageUrl: 'https://images.shiksha.com/mediadata/images/articles/1727952706phpexYyzb.jpeg',
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Dive into data analysis, machine learning, and big data technologies.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoUq0qtuM5DhCAVDyylugLRnzxg4hHCF05g&usqp=CAU',
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      imageUrl: 'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg',
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Learn SEO, SEM, social media, and email marketing strategies.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwbyY_YQQvZyIsVJ5yhk8uCw1_FL0fuMQ6A&usqp=CAU',
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Create seamless user experiences and visually appealing interfaces.',
      imageUrl: 'https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg',
    },
    {
      id: 7,
      title: 'Cybersecurity',
      description: 'Protect systems, networks, and data from cyber threats and attacks.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6I60wYTxbzndgr6JxG5V74tKCgXXr4ModFg&usqp=CAU',
    },
    {
      id: 8,
      title: 'Cloud Computing',
      description: 'Explore cloud platforms, services, and deployment strategies.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBIv7duO72Znaa_SpmpqV3Jz_L5nbYZToh8A&usqp=CAU',
    },
    {
      id: 9,
      title: 'Game Development',
      description: 'Design and develop interactive games for various platforms.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSrdR0sTBIyESBmkQvMwmpbQzdifhlWhs9w&usqp=CAU',
    },
    {
      id: 10,
      title: 'Artificial Intelligence',
      description: 'Study AI algorithms, machine learning, and deep learning techniques.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UB6ji3eVlR--4KruNaEXUX_Pr1XIpK2GMw&usqp=CAU',
    },

  ];
  
    // Define your desired background color and other styles
    const navbarStyles = {
      backgroundColor: '#008080', // Set your desired background color
    }

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/user-login');
  };

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top" style={navbarStyles}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo1.jpg" alt="Logo" width="50" height="50" className="me-5" />
            Study Sphere
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
      <br></br>
      <br></br>

      <div className="container mt-5">
        <h2 className="text-center  mb-4">Our Courses</h2>
        <div className="card-container">
          {courses.map((course) => (
            <div key={course.id} className="card">
              <img src={course.imageUrl} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <button className="learn-more-button" onClick={handleLearnMoreClick}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default Services;

