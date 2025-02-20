import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar.js'; // Replace with the actual path to your Sidebar component.
import { SidebarData } from './SidebarData';

const PaidCourse = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://learnsphere-backend-1-494r.onrender.com/paidRoute")
      .then((res) => {
        if (res.status === 200) {
          setCourses(res.data);
        } else {
          console.error("Failed to fetch courses.");
        }
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  }, []);

  const handleViewCourseClick = () => {
    navigate("/course-content");
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">My Courses</h1>
        {courses.length === 0 ? (
          <p>No courses registered.</p>
        ) : (
          <div className="row">
            {courses.map((course) => (
              <div key={course._id} className="col-lg-4 mb-4">
                <div className="card custom-card">
                  <div className="card-body">
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

                    <h2 className="card-title">{course.CourseName}</h2>
                    <p className="card-text">{course.CourseDescription}</p>

                    <button
                      className="btn btn-primary"
                      onClick={handleViewCourseClick}
                    >
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div>
      {/* Include the Sidebar component and pass SidebarData as a prop */}
      <Sidebar sidebarData={SidebarData} />
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <>
      <Navbar />
      <PaidCourse />
    </>
  );
};

export default CombinedComponent;