import React from "react";
import { Link } from "react-router-dom";
//import './CourseContent.css';
import { SidebarData } from './SidebarData';
import Sidebar from './Sidebar.js';
import SubMenu from './SubMenu';

const CourseContext = () => {
  return (
    <div>
            <Sidebar sidebarData={SidebarData} />
    
    <div className="container mt-5">
          </div>
      <div className="row">
        <div className="col-md-2">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
            <a className="navbar-brand" href="#">Course Content</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#introduction">Introduction</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#oha">Video Content</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#categories">Assessment</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="col-md-9">
          <div id="introduction" className="mt-5 p-3 bg-light">
            <h2>Introduction</h2>
            <p>
              Java is a programming language and computing platform that can be used to create applications for many devices. It is a popular choice for developers to create mobile apps, enterprise software, and web applications. 
            </p>
          </div>

          <div id="oha" className="mt-5 p-3 bg-primary text-light">
            <h4>For Video click below</h4>
            <p>
              <Link to="/Video">
                <button className="btn btn-primary " style={{ backgroundColor: 'black' }}>Videos</button>
              </Link>
            </p>
          </div>

          <div id="categories" className="mt-5 p-3 bg-warning">
            <h4>To take the Assessment click below</h4>
            <Link to="/test">
              <button className="btn btn-primary " style={{ backgroundColor: 'black' }}>Take Test</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContext;