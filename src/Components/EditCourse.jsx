import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGraduationCap, FaMoneyBillWave, FaInfoCircle, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CourseList.css";

function CourseList() {
  const [arr, setArr] = useState([]);

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
            <FaGraduationCap className="icon" /> {course.CourseName}
          </h2>
          <p className={`description ${index % 2 === 0 ? "light-bg" : "dark-bg"}`}>
            <FaInfoCircle className="icon" /> {course.CourseDescription}
          </p>
          <div className="price">
            <FaMoneyBillWave className="icon" /> Price: {course.Price}
          </div>
          <div className="button-container">
            <Link to={`/edit-course/${course._id}`} className="edit-button">
              <FaEdit className="button-icon" /> Edit
            </Link>
            <button className="delete-button" onClick={() => handleDeleteCourse(course._id)}>
              <FaTrash className="button-icon" /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
