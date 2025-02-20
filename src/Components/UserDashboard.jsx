import React, { useState } from 'react';
import Sidebar from './Sidebar.js';
import { SidebarData } from './SidebarData';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const cardData = [
  {
    title: "Soft Skills",
    description: "Soft skills encompass interpersonal skills, communication abilities, adaptability, problem-solving, teamwork, and emotional intelligence.",
    image: "images/2.jpg",
    rating: 4,
  },
  {
    title: "Data Science and Analytics",
    description: "Data science and analytics involve extracting insights from data through statistical analysis, machine learning, and data visualization to inform data-driven decision-making.",
    image: "images/seo.png",
    rating: 3, // Add a rating for the course
  },
  {
    title: "E-Commerce",
    description: "An online marketplace enabling the buying and selling of goods and services over the internet.",
    image: "images/6.jpg",
    rating: 2, // Add a rating for the course
  },

  {
    title: "Sales and Marketing",
    description: "Sales and marketing involve promoting and selling products or services through strategic communication, market research, advertising, and relationship-building to drive business growth.",
    image: "images/ui-ux.png",
    rating: 4, // Add a rating for the course
  },
  {
    title: "Cybersecurity",
    description: "Cybersecurity is the practice of protecting systems, networks, and data from digital threats and attacks to ensure confidentiality, integrity, and availability.",
    image: "images/3.jpg",
    rating: 2, // Add a rating for the course
  },
  {
    title: "Financial Management",
    description: "Financial Management involves optimizing the allocation of resources to maximize financial efficiency and achieve business goals.",
    image: "images/4.jpg",
    rating: 5, // Add a rating for the course
  },

  {
    title: "Graphic Design",
    description: "Graphic design is the art of visually communicating ideas and messages through creative use of imagery, typography, and layout to engage and inform audiences.",
    image: "images/5.jpg",
    rating: 5, // Add a rating for the course
  },
  {
    title: "Natural Language Processing",
    description: "Natural Language Processing (NLP) is a field of Artificial Intelligence (AI) that enables machines to understand, interpret, and generate human language. It combines linguistics, computer science, and machine learning to bridge the gap between human communication and machine understanding.",
    image: "data:image/jpeg;base64,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",
    rating: 2, // Add a rating for the course
  },
  {
    title: "Machine Learning",
    description: "Machine Learning (ML) is a subset of Artificial Intelligence (AI) that enables systems to learn from data and make decisions without explicit programming. It involves building mathematical models that improve automatically with experience.",
    image: "data:image/jpeg;base64,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",
    rating: 5, // Add a rating for the course
  },

  {
    title: "Deep Learning",
    description: "Deep Learning (DL) is a subset of Machine Learning that focuses on artificial neural networks with multiple layers (deep neural networks) to automatically learn patterns from large amounts of data. It is widely used in image processing, natural language processing, and complex decision-making tasks.",
    image: "data:image/jpeg;base64,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",
    rating: 5, // Add a rating for the course
  },

  // Add more card data as needed
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardItemStyle = {
    margin: '10px',
    padding: '10px',
    width: '300px',
  };

  return (
    <div className="dashboard-container">
      <Sidebar sidebarData={SidebarData} />
      <div className="container mt-5">
        <div className="d-flex justify-content-center search-bar">
          <input
            type="text"
            placeholder="Search ....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control search-input"
          />
          <div className="input-group-append">
            <span className="input-group-text search-icon">
              <FaSearch className="search-icon" style={{ fontSize: "20px" }} />
            </span>
          </div>
        </div><br></br>
        <div style={cardStyle}>
          {cardData
            .filter((card) =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((card, index) => (
              <div key={index} className="card" style={cardItemStyle}>
                <Link to="/view-courses">
                  <div className="card-content">
                    <img src={card.image} alt={card.title} className="card-image" /><br></br>

                  </div>
                </Link><br></br>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-description">{card.description}</p>
                <div className="star-rating">
                  {getStarRating(card.rating)}
                </div>  
              </div>

            ))}
        </div>
      </div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col" id="company">
              <img src="images/logo.png" alt="" class="logo" />
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
                <p>PhoneNo:1234567890</p>
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

    </div>
  );
};
const getStarRating = (rating) => {
  const starStyle = {
    color: '#4CAF50', // Green color for filled stars
  };

  const emptyStarStyle = {
    color: '#fff', // White color for empty stars
  };

  const filledStars = (
    <span style={starStyle}>
      {'★'.repeat(Math.floor(rating))} {/* Filled stars */}
    </span>
  );

  const halfStar = rating % 1 !== 0 ? <span style={starStyle}>★</span> : null; // Half star for non-integer ratings

  const emptyStars = (
    <span style={emptyStarStyle}>
      {'☆'.repeat(5 - Math.ceil(rating))} {/* Empty stars */}
    </span>
  );

  return (
    <span>
      {filledStars}
      {halfStar}
      {emptyStars}
    </span>
  );
};



export default Dashboard;
