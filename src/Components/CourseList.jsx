import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGraduationCap, FaMoneyBillWave, FaEdit, FaTrash } from "react-icons/fa";

import "./CourseList.css";
import EditCourseForm from "./EditCourseForm";

function CourseList() {
  const [arr, setArr] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("https://learnsphere-backend-1-494r.onrender.com/courseRoute")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  const handleEditCourse = (courseId) => {
    setSelectedCourse(courseId);
    setIsEditFormVisible(true);
  };

  const handleUpdate = () => {
    setIsEditFormVisible(false);
    fetchData(); // Fetch updated course list after editing
  };

  const handleDeleteCourse = (courseId) => {
    axios.delete(`https://learnsphere-backend-1-494r.onrender.com/courseRoute/delete-course/${courseId}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Course deleted successfully!");
          fetchData();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  return (
    
    <div className="card-container">
      {arr.map((course, index) => (
        <div className={`card ${index % 2 === 0 ? "even" : "odd"}`} key={course._id}>
          <h2 className="course-name">
          <div className="image-container">
            {course.imageUrl ? (
              <img src={course.imageUrl} alt="Course" className="card-img-top" height={200} />
            ) : (
              <p>Error loading image</p>
            )}
          </div>
            <FaGraduationCap className="icon" /> {course.CourseName}
          </h2>
          

          <p className={`description ${index % 2 === 0 ? "light-bg" : "dark-bg"}`}>
            <FaMoneyBillWave className="icon" /> {course.CourseDescription}
          </p>
          <div className="price">
            Price: {course.Price}
          </div>

          <div className="button-container">
            <button className="edit-button" onClick={() => handleEditCourse(course._id)}>
              <FaEdit className="button-icon" /> Edit
            </button>
            <button className="delete-button" onClick={() => handleDeleteCourse(course._id)}>
              <FaTrash className="button-icon" /> Delete
            </button>
          </div>
        </div>
      ))}
      {isEditFormVisible && (
        <div className="edit-form-overlay">
          <EditCourseForm courseId={selectedCourse} onClose={() => setIsEditFormVisible(false)} onUpdate={handleUpdate} />
        </div>
      )}
    </div>
  );
}

export default CourseList;
