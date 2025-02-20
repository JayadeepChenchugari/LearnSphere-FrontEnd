import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGraduationCap, FaRupeeSign, FaInfoCircle } from "react-icons/fa";


import "./CourseList.css";
import Sidebar from './Sidebar.js'; // Replace with the actual path to your Sidebar component.
import { SidebarData } from './SidebarData'; // Replace with the actual path to your SidebarData file.


// Include your navigation bar code here
const Navbar = () => {
  return (
    <div>
      {/* Include the Sidebar component and pass SidebarData as a prop */}
      <Sidebar sidebarData={SidebarData} />
    </div>
  );
};


function ViewCourse() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://learnsphere-backend-1-494r.onrender.com/courseRoute")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
          console.log(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  const handleRegister = (course) => {
    axios
      .post("https://learnsphere-backend-1-494r.onrender.com/cartRoute/add-to-cart", course)
      .then((res) => {
        if (res.status === 200) {
          alert("Course registered successfully!");
        } else {
          console.error("Failed to register course.");
        }
      })
      .catch((err) => {
        console.error("Error registering course:", err);
      });
  };


  return (
    <div>
      <Navbar /> {/* Include your navigation bar here */}
      <div className="card-container">
        {arr.map((course, index) => (
          <div
            key={course._id}
            className={`card ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <div className="image-container">
              {course.imageUrl ? (
                <img
                  src={course.imageUrl}
                  alt="Course"
                  className="card-img-top"
                  height={200}
                />
              ) : (
                <p>Error loading image</p>
              )}
            </div>
            <h2 className="course-name">
              <FaGraduationCap className="icon" /> {course.CourseName}
            </h2>
            <p
              className={`description ${index % 2 === 0 ? "light-bg" : "dark-bg"
                }`}
            >
              <FaInfoCircle className="icon" /> {course.CourseDescription}
            </p>
            <div className="price">
              <FaRupeeSign className="icon" /> Price: {course.Price}
            </div>
            <div className="button-container">
              <button
                className="btn btn-primary"
                onClick={() => handleRegister(course)}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewCourse;
